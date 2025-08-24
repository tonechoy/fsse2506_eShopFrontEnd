import {faShieldHalved} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {CartItemDto} from "../../../../data/cartItem/cartItemDto.ts";

interface Props {
  dtoList: CartItemDto[]
}

export default function CartSummary({dtoList}: Props) {
  // const totalPrice = dtoList.map((dto) => {
  //   let total += dto.price * dto.cartQuantity;
  //   return total;
  // })

  const calTotal = (dtoList: CartItemDto[]) => {
    return dtoList.reduce((previousValue, cartItemDto) => {
      return previousValue + cartItemDto.cartQuantity * cartItemDto.price
    }, 0)
  };

  return (
    <>
      <div className="flex-3">
        <div className="flex-col border border-gray-400 p-10 space-y-7 h-110">
          <div className="text-3xl">Cart Summary</div>
          <hr className="text-gray-300"/>
          <div className="flex justify-between">
            <p>Total</p>
            <p>$ {calTotal(dtoList).toLocaleString()}</p>
          </div>
          <button className="btn btn-neutral text-white w-full py-6 hover:bg-gray-600">
            <FontAwesomeIcon icon={faShieldHalved} />
            Checkout securely
          </button>
        </div>
      </div>
    </>
  )
}