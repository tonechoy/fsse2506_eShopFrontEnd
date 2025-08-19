import "./../../../App.css"
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/product.type.ts";
import ProductContainer from "./component/ProductContainer.tsx";
import TopNav from "../../component/TopNav";
// import TitleCarousel from "./component/TitleCarousel.tsx";
// import CategorySelector from "./component/CategorySelector.tsx";
import {getAllProduct} from "../../../api/product/productDto.ts";
import {useNavigate} from "@tanstack/react-router";

export default function ProductListingPage() {
  const [getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate({from: "/"});

  const fetchAllProductDto = async () => {
    const response = await getAllProduct();
    setGetAllProductDto(response);
    setIsLoading(false);
    setIsLogin(false);
    // console.log("mockData: ", mockData)
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

  return (
    <div className="">
      <TopNav isLogin={isLogin}/>
      {/*<CategorySelector/>*/}
      {/*<TitleCarousel/>*/}
      {
        getAllProductDto && !isLoading && !isError &&
          <ProductContainer getAllProductDto={getAllProductDto} isLoading={isLoading}/>
      }


    </div>
  )
}