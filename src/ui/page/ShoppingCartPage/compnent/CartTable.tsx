import QuantitySelector from "../../../component/QuantitySelector";
import CartTableRow from "./CartTableRow.tsx";
import type {CartItemDto} from "../../../../data/cartItem/cartItemDto.ts";

interface Props {
  dtoList: CartItemDto[]
}

export default function CartTable({dtoList}: Props) {
  return (
    <div className="overflow-x-auto w-full">
      {/*<table className="table">*/}
      {/*  <tbody>*/}
      {/*  /!* row 1 *!/*/}
      {/*  <tr>*/}
      {/*    <th>*/}
      {/*      /!*<label>*!/*/}
      {/*      /!*  <input type="checkbox" className="checkbox" />*!/*/}
      {/*      /!*</label>*!/*/}
      {/*    </th>*/}
      {/*    <td>*/}
      {/*      <div className="flex items-center gap-3">*/}
      {/*        <div className="avatar">*/}
      {/*          <div className="mask h-12 w-12">*/}
      {/*            <img*/}
      {/*              src="https://img.daisyui.com/images/profile/demo/2@94.webp"*/}
      {/*              alt="Avatar Tailwind CSS Component" />*/}
      {/*          </div>*/}
      {/*        </div>*/}

      {/*      </div>*/}
      {/*    </td>*/}
      {/*    <td>*/}
      {/*      <p>CELLPHONE</p>*/}
      {/*      <p>Xiaomi 小米 紅米 Redmi 14C (8+256GB)</p>*/}
      {/*    </td>*/}
      {/*    <td>Purple</td>*/}
      {/*    <th>*/}
      {/*      <button className="btn btn-ghost btn-xs">details</button>*/}
      {/*    </th>*/}
      {/*  </tr>*/}
      {/*  </tbody>*/}
      {/*</table>*/}

      {
        dtoList.map((dto) => (
          <CartTableRow dto={dto}/>
        ))
      }
    </div>
  )
}