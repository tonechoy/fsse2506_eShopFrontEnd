import TopNav from "../../component/TopNav";
import CartContainer from "./compnent/CartContainer.tsx";
import {useContext, useEffect, useState} from "react";
import type {CartItemDto} from "../../../data/cartItem/cartItemDto.ts";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {useNavigate} from "@tanstack/react-router";
import {getUserCart} from "../../../api/cartItem/cartItemApi.ts";
// import LoadingDetail from "../../component/LoadingDetail";
import LoadingBackdrop from "../../component/LoadingBackdrop";
import {postTransaction} from "../../../api/transaction/transactionApi.ts";

export default function Index() {

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate({from: "/shoppingcart"});

  const [dtoList, setDtoList] = useState<CartItemDto[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const fetchUserCart = async () => {
    try {
      setIsLoading(true);
      const responseData = await getUserCart();
      setDtoList(responseData);
      setIsLoading(false);
      document.title = "Shopping Cart - Comfort Craft"
    } catch {
      navigate({to:"/error"})
    }
  }

  const handleSelectorQuantityChange = (pid: number, quantity: number) => {
    setDtoList(
      dtoList?.map((dto) => {
        if (dto.pid === pid) {
          dto.cartQuantity = quantity
        }
        return dto;
      })
    )
  }

  const handleDelete = async (pid: number) => {
    setIsLoading(true);
    try {
      setDtoList(
        dtoList?.filter((dto) => (
          dto.pid !== pid
        ))
      )
      setIsLoading(false);
    } catch {
      navigate({to: "/error"});
    }
  }

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    const responseData = await postTransaction();
    navigate({
      to:`/checkout/$tid`,
      params: {tid: responseData.tid.toString()}
    })
  }

  useEffect(() => {
    if (loginUser) {
    fetchUserCart();
    setIsLoading(false);
    } else if (loginUser === null) {
      navigate({to: "/login"})
    }
  }, [loginUser]);

  if (isCheckingOut) {
    return (
      <LoadingBackdrop/>
    )
  }

  return (
    <div className="bg-white text-gray-700 min-h-screen">
      <TopNav/>
      {
        !isLoading && dtoList
          ? <CartContainer dtoList={dtoList} handleSelectorQuantityChange={handleSelectorQuantityChange} handleDelete={handleDelete} handleCheckout={handleCheckout}/>
          : <LoadingBackdrop/>
      }
    </div>
  )
}