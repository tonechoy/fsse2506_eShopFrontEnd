import "./../../../App.css"
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/product.type.ts";
import ProductContainer from "./component/ProductContainer.tsx";
import TopNav from "../../component/TopNav";
// import TitleCarousel from "./component/TitleCarousel.tsx";
// import CategorySelector from "./component/CategorySelector.tsx";
import {getAllProduct, getProductByCategory, getProductByKeyword} from "../../../api/product/productApi.ts";
import {useNavigate} from "@tanstack/react-router";
import CategoryTab from "../../component/CategoryTab";
import SearchBar from "../../component/TopNav/component/SearchBar.tsx";
// import LoadingBackdrop from "../../component/LoadingBackdrop";
// import LoadingBackdrop from "../../component/LoadingBackdrop";

export default function ProductListingPage() {
  const [getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [category, setCategory] = useState("all");

  const navigate = useNavigate({from: "/"});

  const handleSearch = (keywordInput: string) => {
    // setKeyword(keywordInput);
    // console.log("index: ", keywordInput);
    setIsLoading(true);
    fetchProductDtoByKeyword(keywordInput);
    setIsLoading(false);
  }

  const handleCategory = (category: string) => {
    try {
      // console.log("tab: ", tab);
      // setCategory(tab);
      console.log(category);
      setCategory(category)
      if (category === "all") {
        fetchAllProductDto();
      } else {
        fetchProductDtoByCategory(category);
      }
    } catch (e) {
      console.log(e);
      navigate({to: "/error"})
    }
  }

  const fetchAllProductDto = async () => {
    try {
      setIsLoading(true);
      const responseData = await getAllProduct();
      setIsLoading(false);
      setGetAllProductDto(responseData);
      setCategory("all");
    } catch {
      navigate({to: "/error"})
    }
  }

  const fetchProductDtoByCategory = async (category: string) => {
    try {
      setIsLoading(true);
      // console.log(category);
      setCategory(category);
      const responseData = await getProductByCategory(category);
      // const transformedData: GetAllProductDto[] = responseData.map((product) => ({
      //   ...product,
      //   hasStock: {stock}
      // }))
      setGetAllProductDto(responseData);
      setIsLoading(false);
    } catch {
      navigate({to: "/error"});
    }
  }

  const fetchProductDtoByKeyword = async (word: string) => {
    try {
      const responseData = await getProductByKeyword(word);
      setGetAllProductDto(responseData);
    } catch {
      navigate({to: "/error"});
    }
  }

  useEffect(() => {
    try {
      fetchAllProductDto();
    } catch (e) {
      console.error(e);
      setIsError(true);
      navigate({to: "/error"});
      throw e;
    }
  }, []);

  if (isError) {
    navigate({to: "/error"})
  }

  return (
    <div className="">
      <TopNav/>
      {/*<div className="sticky left-0 top-0 z-20 w-screen h-15 backdrop-blur-lg bg-transparent bg-[90%]">*/}
      {/*  <div className="text-black z-30 text-center">Testing</div>*/}
      {/*</div>*/}
      <img
        src="/photo-1718220216044-006f43e3a9b1.avif"
        className="w-full h-90 object-cover mb-5"
      />
      <SearchBar handleSearchBar={handleSearch}/>
      <CategoryTab category={category} handleCategory={handleCategory}/>
      {/*<TitleCarousel/>*/}
      {
        getAllProductDto && !isError &&
        <ProductContainer getAllProductDto={getAllProductDto} isLoading={isLoading}/>
      }

    </div>
  )
}