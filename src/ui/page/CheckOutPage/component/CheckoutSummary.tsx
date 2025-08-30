import type {TransactionDto} from "../../../../data/transaction/transaction.type.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShieldHalved} from "@fortawesome/free-solid-svg-icons";

interface Props {
  transactionDto: TransactionDto;
  handleCheckout: () => void
}

export default function CheckoutSummary({transactionDto, handleCheckout}: Props) {

  // const calTotal = (transactionDto: TransactionDto) => {
  //   return transactionDto.reduce((previousValue, transactionDto) => {
  //     return previousValue + transactionDto.subtotal
  //   }, 0)
  // };

  return (
    <>
      <div className="flex-3">
        <div className="flex-col bg-gray-100 p-10 space-y-7 h-110">
          <div className="text-3xl">Cart Summary</div>
          <hr className="text-gray-300"/>
          <div className="flex justify-between">
            <p>Total</p>
            <p>$ {transactionDto.total.toFixed(2).toLocaleString()}</p>
          </div>
          {/*<p className="font-light text-sm -mt-5">(Excluding delivery)</p>*/}
          <div
            className="bg-gray-200 h-15 text-center flex px-7 gap-7 text-sm py-2 mt-15 overflow-hidden">
            <img
              src="/van-dark.png"
            />
            <p className="self-center">Free standard delivery</p>
          </div>
          <button
            className="btn btn-neutral text-white w-full rounded-none py-6 hover:bg-gray-600"
            onClick={handleCheckout}
          >
            <FontAwesomeIcon icon={faShieldHalved}/>
            Checkout securely
          </button>
        </div>
      </div>
    </>
  )
}