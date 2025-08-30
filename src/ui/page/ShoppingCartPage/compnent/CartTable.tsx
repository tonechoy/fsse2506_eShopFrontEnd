// import QuantitySelector from "../../../component/QuantitySelector";
import CartTableRow from "./CartTableRow.tsx";
import type {CartItemDto} from "../../../../data/cartItem/cartItemDto.ts";

interface Props {
  dtoList: CartItemDto[];
  handleSelectorQuantityChange: (pid: number, quantity: number) => void;
  handleDelete: (pid: number) => void;
}

export default function CartTable({dtoList, handleSelectorQuantityChange, handleDelete}: Props) {

  const calItems = (dtoList: CartItemDto[]) => {
    return dtoList.reduce((previousValue, cartItemDto) => {
      return previousValue + cartItemDto.cartQuantity
    }, 0)
  }

  return (
    <div className="w-full h-full">
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
      <table className="table  border-gray-300 rounded-none w-full">
        <thead>
          <tr>
            <th className="bg-[#122620] text-white p-3 px-6 w-full">Total of {calItems(dtoList)} items</th>
          </tr>
        </thead>
        <tbody>

        {/*<tr>*/}

        {
          dtoList.map((dto) => (
            <CartTableRow key={dto.pid} dto={dto} handleSelectorQuantityChange={handleSelectorQuantityChange}
                          handleDelete={handleDelete}/>
          ))
        }
        {/*</tr>*/}
        </tbody>
      </table>
    </div>
  )
}