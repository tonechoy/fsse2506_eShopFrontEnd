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
    // console.log("Quantity change from: ", event.target.value);
    // setIsLoading(true);
    handleSelectorQuantityChange(dto.pid, parseInt(event.target.value));
    await patchCartItem(dto.pid, parseInt(event.target.value));
    // setIsLoading(false);
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
      <div className="h-[15%] object-cover overflow-hidden">
        <hr className="text-gray-300"/>
        <div className="flex space-x-[5%] py-7">
          <div className="flex-1 skeleton w-[100%] h-40 min-h-[10%] max-h-[100%] bg-gray-100"></div>
          <div className="flex-4">
            <div className="skeleton h-[20%] bg-gray-100 mb-[2%] w-[30%]"></div>
            <div className="skeleton h-[20%] bg-gray-100 mb-[2%] w-[70%]"></div>
            <div className="skeleton h-[20%] bg-gray-100 mb-[2%] w-[50%]"></div>
            <div className="skeleton h-[20%] bg-gray-100 mb-[2%] w-[20%]"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <hr className="text-gray-300"/>
      <div className="flex py-7 mr-5">
        <div className="flex h-40 w-30 mr-5 object-cover">
          <Link to={`/product/${dto.pid.toString()}`}>
            <img
              src={dto.imgageUrl.split(",")[0]}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="flex-4 leading-relaxed mr-5 max-h-45">
          <div>
            <p className="uppercase text-xs mb-1.5 italic">{dto.category}</p>
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