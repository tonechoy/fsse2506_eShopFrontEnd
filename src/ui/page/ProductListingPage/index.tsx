import tailwindcss from "@tailwindcss/vite";

// import {useLocation} from "@tanstack/react-router";
import "./../../../App.css"
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/getAllProductDto.type.ts";
import mockData from "./../../response.json"
import ProductContainer from "./component/ProductContainer.tsx";
import TopNav from "../../component/TopNav";
import TitleCarousel from "./component/TitleCarousel.tsx";
import CategorySelector from "./component/CategorySelector.tsx";

export default function ProductListingPage() {
  // const location = useLocation();
  const [getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const fetchAllProductDto = async () => {
    setGetAllProductDto(mockData);
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
      throw e;
    }
  }, []);

  return (
    <div className="">
      <TopNav isLogin={isLogin}/>
      {/*<CategorySelector/>*/}
      {/*<TitleCarousel/>*/}
      <ProductContainer getAllProductDto={getAllProductDto}/>


    </div>
  )
}