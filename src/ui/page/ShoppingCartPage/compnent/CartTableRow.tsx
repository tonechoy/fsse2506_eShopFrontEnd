import QuantitySelector from "../../../component/QuantitySelector";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {CartItemDto} from "../../../../data/cartItem/cartItemDto.ts";
import {Link, useNavigate} from "@tanstack/react-router";
import {deleteCartItem, patchCartItem} from "../../../../api/cartItem/cartItemApi.ts";
import {type ChangeEvent, useState} from "react";
import LoadingDetail from "../../../component/LoadingDetail";

interface Props {
  dto: CartItemDto;
  handleSelectorQuantityChange: (pid: number, quantity: number) => void;
  handleDelete: (pid: number) => void;
}

export default function CartTableRow({dto, handleSelectorQuantityChange, handleDelete}: Props) {

  const navigate = useNavigate({from: "/shoppingcart"})

  const [isLoading, setIsLoading] = useState(false);
  // const [quantity, setQuantity] = useState(dto.cartQuantity);
  // const [isLoading, setIsLoading] = useState(false);

  const handleQuantitySelector = async (event: ChangeEvent<HTMLSelectElement>) => {
    // event.preventDefault();
    // setQuantity(parseInt(event.target.value));
    console.log("Quantity change from: ", event.target.value);
    setIsLoading(true);
    handleSelectorQuantityChange(dto.pid, parseInt(event.target.value));
    await patchCartItem(dto.pid, parseInt(event.target.value));
    // console.log("dto: ", dto);
    setIsLoading(false);
  }

  const handleDeleteBtn = async () => {
    try {
      setIsLoading(true);
      await deleteCartItem(dto.pid);
      handleDelete(dto.pid)
      setIsLoading(false);
    } catch {
      navigate({to: "/error"});
    }
  }
  if (isLoading) {
    return (
      // <LoadingBackdrop/>
      // <progress className="progress loading-spinner"></progress>
      // <div className="flex min-h-2">
      // </div>
        <div className="h-[7%] object-cover overflow-hidden">
          <hr className="text-gray-300 mt-5 mb-10"/>
          <div className="flex space-x-[5%]">
            {/*<div className="flex w-[10%] object-contain mr-5">*/}
              <div className="flex-1 skeleton w-[100%] min-h-[10%] max-h-[20%] bg-gray-100"></div>
            {/*</div>*/}
            <div className="flex-4">
              <div className="skeleton h-10 bg-gray-100 mb-7 w-[30%]"></div>
              <div className="skeleton h-10 bg-gray-100 mb-7"></div>
              <div className="skeleton h-10 bg-gray-100 mb-20 w-[20%]"></div>
              {/*<div className="skeleton h-10 bg-gray-100 mb-7 w-[70%]"></div>*/}
              {/*<div className="skeleton h-10 bg-gray-100 mb-7 w-50"></div>*/}
            </div>

          </div>
        </div>
    )
  }

  return (
    <>
      <hr className="text-gray-300 mt-5 mb-10"/>
      <div className="flex ">
        <div className="flex h-40 w-30 object-contain mr-5">
          <Link to={`/product/${dto.pid.toString()}`}>
            <img
              src={dto.imgageUrl.split(",")[0]}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex-4 leading-relaxed mr-5">
          <div>
            <p className="uppercase text-xs mb-1.5">{dto.category}</p>
            <Link to={`/product/${dto.pid.toString()}`}>
              <p>{dto.name}</p>
            </Link>

          </div>
          <div className="mt-10">
            HKD ${dto.price.toFixed(2).toLocaleString()} each
          </div>
        </div>
        <div className="flex flex-2 flex-col space-y-6 items-center">
          <div>
            <QuantitySelector quantity={dto.cartQuantity} handleQuantityChange={handleQuantitySelector}/>
          </div>
          <button className="btn bg-black rounded-none w-15" onClick={handleDeleteBtn}>
            <FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}}/>
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          {/*{*/}
          {/*  !isLoading*/}
          {/*  ? <>${(dto.price * dto.cartQuantity).toFixed(2).toLocaleString()}</>*/}
          {/*    : <span className="loading loading-spinner"></span>*/}
          {/*}*/}
          <div>

            ${(dto.price * dto.cartQuantity).toFixed(2).toLocaleString()}
          </div>

        </div>

      </div>
    </>
  )
}