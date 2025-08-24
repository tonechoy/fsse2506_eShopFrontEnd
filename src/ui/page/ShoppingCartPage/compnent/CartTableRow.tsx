import QuantitySelector from "../../../component/QuantitySelector";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {CartItemDto} from "../../../../data/cartItem/cartItemDto.ts";
import {Link} from "@tanstack/react-router";

interface Props {
  dto: CartItemDto
}

export default function CartTableRow({dto}: Props) {
  return (
    <>
      {/*<tr>*/}
      {/*  <td>CELLPHONE</td>*/}
      {/*  <td>Xiaomi 小米 紅米 Redmi 14C (8+256GB)</td>*/}
      {/*</tr>*/}
      <hr className="text-gray-300 mt-5 mb-10"/>
      <div className="flex justify-between">
        <div className="h-40 w-30 object-contain mr-5">
          <Link to={`/product/${dto.pid}`}>
            <img
              src={dto.imgageUrl.split(",")[0]}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="leading-relaxed w-60 mr-5">
          <div>
            <p className="uppercase text-xs mb-1.5">{dto.category}</p>
            <Link to={`/product/${dto.pid}`}>
              <p>{dto.name}</p>
            </Link>

          </div>
          <div className="mt-10">
            HKD ${dto.price.toLocaleString()}
          </div>
        </div>
        <div className="flex flex-col space-y-6 items-center mx-auto">
          <div>
            <QuantitySelector/>
          </div>
          <button className="btn bg-black rounded-none w-15">
            <FontAwesomeIcon icon={faTrash} style={{color: "#ffffff",}}/>
          </button>
        </div>
        <div>
          ${(dto.price * dto.cartQuantity).toLocaleString()}
        </div>

      </div>
    </>
  )
}