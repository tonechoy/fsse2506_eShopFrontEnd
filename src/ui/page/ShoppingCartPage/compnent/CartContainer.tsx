import CartTable from "./CartTable.tsx";
import type {CartItemDto} from "../../../../data/cartItem/cartItemDto.ts";
import CartSummary from "./CartSummary.tsx";
import {useRouter} from "@tanstack/react-router";

// import LoadingDetail from "../../../component/LoadingDetail";

interface Props {
  dtoList: CartItemDto[];
  handleSelectorQuantityChange: (pid: number, quantity: number) => void;
  handleDelete: (pid: number) => void;
  handleCheckout: () => void;
}

export default function CartContainer({dtoList, handleSelectorQuantityChange, handleDelete, handleCheckout}: Props) {

  const router = useRouter();

  const handleBackBtn = () => {
    router.history.back();
  }

  if (dtoList.length === 0) {
    return (
      <div className="mx-auto my-15 text-center text-3xl bg-white">
        Your cart is empty <br/>
        <button className="btn btn-neutral rounded-none shadow-none mt-7 hover:bg-gray-600" onClick={handleBackBtn}>Go
          Back
        </button>
      </div>
    )
  } else {

    return (
      <>
        <div className="@xs:flex-col lg:flex mx-auto my-10 gap-5 lg:gap-15 mb-10 h-full bg-white w-2xl lg:w-5xl xl:w-6xl">
            <div className="flex-6 flex-col space-y-4 bg-white">
              <div className="text-3xl mb-4">Your secure bag</div>
              <div>Items available to buy now</div>
              <CartTable dtoList={dtoList} handleSelectorQuantityChange={handleSelectorQuantityChange}
                         handleDelete={handleDelete}/>
            </div>
            <CartSummary dtoList={dtoList} handleCheckout={handleCheckout}/>
        </div>
      </>
    )
  }
}
