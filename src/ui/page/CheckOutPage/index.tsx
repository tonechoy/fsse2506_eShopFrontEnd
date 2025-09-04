import CheckoutTable from "./component/CheckoutTable.tsx";
import {useContext, useEffect, useState} from "react";
import type {TransactionDto} from "../../../data/transaction/transaction.type.ts";
import CheckoutSummary from "./component/CheckoutSummary.tsx";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {useNavigate, useParams} from "@tanstack/react-router";
import {
  finishTransaction,
  getTransaction,
  processTransaction
} from "../../../api/transaction/transactionApi.ts";
import LoadingBackdrop from "../../component/LoadingBackdrop";

export default function CheckOutPage() {

  const navigate = useNavigate({from:"/checkout/$tid"});
  const {tid} = useParams({from:"/checkout/$tid"});

  const loginUser = useContext(LoginUserContext);

  const [transactionDto, setTransactionDto] = useState<TransactionDto | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const fetchTransaction = async () => {
    const responseData = await getTransaction(tid);
    setTransactionDto(responseData);
    setIsLoading(false);
  }

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    await processTransaction(tid);
    await finishTransaction(tid);
    navigate({to:"/thankyou"})
  }

  useEffect(() => {
    if (loginUser) {
    fetchTransaction();
    document.title = "Checkout - Comfort Craft"
    }
  }, [loginUser]);

  if (isLoading || isCheckingOut) {
    return (
      <LoadingBackdrop/>
    )
  }

  return (
    <div className="@xs:flex-col lg:flex mx-auto my-10 gap-5 lg:gap-15 mb-10 h-full bg-white w-md md:w-2xl lg:w-5xl xl:w-6xl">
      <div className="w-md md:w-2xl lg:w-4xl xl:w-6xl mx-auto my-10">
        <div className="text-3xl mb-7 font-semibold">Checking Out</div>
        <div className="@xs:flex-col lg:flex gap-10">
          {/*//left container*/}
          <div className="flex-7">
            {
              transactionDto && !isLoading
                ? <CheckoutTable transactionDto={transactionDto}/>
                : <div>IsLoading</div>
            }
          </div>

          {/*//right container*/}
          {
            transactionDto &&
              <CheckoutSummary transactionDto={transactionDto} handleCheckout={handleCheckout}/>
          }
        </div>
      </div>
    </div>
  )
}