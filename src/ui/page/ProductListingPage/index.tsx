import "./../../../App.css"
import {useEffect, useState} from "react";
import type {GetAllProductDto} from "../../../data/product/product.type.ts";
import ProductContainer from "./component/ProductContainer.tsx";
import TopNav from "../../component/TopNav";
// import TitleCarousel from "./component/TitleCarousel.tsx";
// import CategorySelector from "./component/CategorySelector.tsx";
import {getAllProduct} from "../../../api/product/productApi.ts";
import {useNavigate} from "@tanstack/react-router";

export default function ProductListingPage() {
  const [getAllProductDto, setGetAllProductDto] = useState<GetAllProductDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate({from: "/"});

  const fetchAllProductDto = async () => {
    const response = await getAllProduct();
    setIsLoading(false);
    // setIsLogin(false);
    setGetAllProductDto(response);
    // console.log("mockData: ", mockData)
  }

  useEffect(() => {
    try {
      fetchAllProductDto();
    } catch (e) {
      console.error(e);
      setIsError(true);
      // navigate({to: "/error"});
      throw e;
    }
  }, []);

  if (isError) {
    navigate({to: "/error"})
  }
  return (
    <div className="">
      <TopNav/>
      {/*<CategorySelector/>*/}
      {/*<TitleCarousel/>*/}
      {/*{*/}
      {/*  getAllProductDto && !isError &&*/}
          <ProductContainer getAllProductDto={getAllProductDto} isLoading={isLoading}/>
      {/*}*/}

    </div>
  )
}