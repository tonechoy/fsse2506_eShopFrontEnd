import TopNav from "../../component/TopNav";
import CartContainer from "./compnent/CartContainer.tsx";
import mockData from "./response.json"
import {useContext, useEffect, useState} from "react";
import type {CartItemDto} from "../../../data/cartItem/cartItemDto.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {useNavigate} from "@tanstack/react-router";
import {getUserCart} from "../../../api/cartItem/cartItemApi.ts";
import LoadingDetail from "../../component/LoadingDetail";

export default function ShoppingCartPage() {

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate({from: "/shoppingcart"});

  const [dtoList, setDtoList] = useState<CartItemDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserCart = async () => {
    try {
      const responseData = await getUserCart();
      setDtoList(responseData);
    } catch {
      navigate({to:"/error"})
    }
  }

  useEffect(() => {
    if (loginUser) {
    fetchUserCart();
    setIsLoading(false);
    } else if (loginUser === null) {
      navigate({to: "/login"})
    }
  }, [loginUser]);


  return (
    <>
      <TopNav/>
      {
        !isLoading && dtoList
          ? <CartContainer dtoList={dtoList}/>
          : <LoadingDetail/>
      }

    </>
  )
}