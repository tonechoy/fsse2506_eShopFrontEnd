import CartTable from "./CartTable.tsx";
import type {CartItemDto} from "../../../../data/cartItem/cartItemDto.ts";
import CartSummary from "./CartSummary.tsx";
import LoadingDetail from "../../../component/LoadingDetail";

interface Props {
  dtoList: CartItemDto[]
}

export default function CartContainer({dtoList}: Props) {
  if (dtoList.length === 0) {
    return (
      <LoadingDetail/>
    )
  } else {

    return (
      <>
        <div className="flex bg-gray-50 w-6xl mx-auto my-10 gap-20">
          <div className="flex-6 flex-col space-y-4">
            <div className="text-3xl mb-4">Your secure bag</div>
            <div>Items available to buy now</div>
            <CartTable dtoList={dtoList}/>
          </div>
          <CartSummary dtoList={dtoList}/>
        </div>
      </>
    )
  }
}
