import "./../../../App.css"
import {useEffect, useState} from "react";
import type {GetAllProductDto, ProductDto} from "../../../data/product/product.type.ts";
import ProductContainer from "./component/ProductContainer.tsx";
import TopNav from "../../component/TopNav";
// import TitleCarousel from "./component/TitleCarousel.tsx";
// import CategorySelector from "./component/CategorySelector.tsx";
import {getAllProduct, getProductByCategory, getProductByKeyword} from "../../../api/product/productApi.ts";
import {useNavigate} from "@tanstack/react-router";
import CategoryTab from "../../component/CategoryTab";

export default function ProductListingPage() {
  const [getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto[] | ProductDto[] | undefined>(undefined);
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

  const handleCategory = (category:string)=> {
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
      navigate({to:"/error"})
    }
  }

  const fetchAllProductDto = async () => {
    const responseData = await getAllProduct();
    setIsLoading(false);
    setGetAllProductDto(responseData);
    setCategory("all");
  }

  const fetchProductDtoByCategory = async (category:string) => {
    try {
      setIsLoading(true);
      // console.log(category);
      setCategory(category);
      const responseData = await getProductByCategory(category);
      setGetAllProductDto(responseData);
      setIsLoading(false);
    } catch {
      navigate({to:"/error"});
    }
  }

  const fetchProductDtoByKeyword = async (word: string) => {
    try {
    const responseData = await getProductByKeyword(word);
    setGetAllProductDto(responseData);
    } catch {
      navigate({to:"/error"});
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
      <TopNav handleSearch={handleSearch}/>
      <CategoryTab category={category} handleCategory={handleCategory}/>
      {/*<CategorySelector/>*/}
      {/*<TitleCarousel/>*/}
      {
        getAllProductDto && !isError &&

      <ProductContainer getAllProductDto={getAllProductDto} isLoading={isLoading}/>
      }

    </div>
  )
}