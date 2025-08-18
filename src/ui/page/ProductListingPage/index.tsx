import tailwindcss from "@tailwindcss/vite";

// import {useLocation} from "@tanstack/react-router";
import "./../../../App.css"
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/getAllProductDto.type.ts";
import mockData from "./../../response.json"
import TopNav from "../../component/TopNav.tsx";
import ProductContainer from "./component/ProductContainer.tsx";

export default function ProductListingPage() {
  // const location = useLocation();
  const [getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const fetchAllProductDto = () => {
    setGetAllProductDto(mockData);
    setIsLoading(false);
    setIsLogin(true);
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
      <ProductContainer getAllProductDto={getAllProductDto}/>


    </div>
  )
}