import TopNav from "../../component/TopNav";
import {useNavigate} from "@tanstack/react-router";
import {useEffect, useState} from "react";

export default function ThankyouPage() {

  const navigate = useNavigate({from: "/thankyou"});
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    document.title = "Thank you - Comfort Craft"
    if (countdown === 0) {
      navigate({to: "/"});
    } else {
      setTimeout(() => {
        setCountdown((prev) => (prev - 1));
      }, 1000)
    }
  }, [countdown]);

  return (
    <>
      <TopNav/>
      <div className="flex-col flex w-screen items-center text-gray-700 h-[calc(100vh-5rem)] justify-center">
        <div className="text-center text-xl -mt-5">Your order is placed successfully.<br/> Thank you very much</div>
        <img
          src="https://t4.ftcdn.net/jpg/03/29/44/25/360_F_329442520_bs9DE1vhchdtXtbsJXcwGQTpjZd5NzDo.jpg"
          width="1000px"
          // className="w-screen"
        />
        <div className="">You will be redirect back to home page in {countdown} seconds</div>
      </div>
    </>
  )
}