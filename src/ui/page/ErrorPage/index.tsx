import TopNav from "../../component/TopNav";
import {useNavigate} from "@tanstack/react-router";
import "../../../App.css"

interface Props {
  isLogin: boolean
}

export default function ErrorPage({isLogin}: Props) {
  const navigate = useNavigate({from: "/"});

  return (
    <>
      <div className="h-screen">
        <TopNav isLogin={isLogin}/>
        <div className="flex-col justify-items-center">
          <img
            src="./../../../../public/404-page.jpg"
          />
          <button
            className="btn btn-accent"
            onClick={() => navigate({to: "/"})}
          >
            Go Back
          </button>
          {/*<div*/}
          {/*  className="mask-radial-at-top-right mask-radial-from-gray-10% bg-[url('./../../../../public/404_error.jpg')] h-screen bg-cover bg-center bg-no-repeat"*/}
          {/*>*/}
          {/*</div>*/}
          {/*<div className="bg-black opacity-45 z-10 w-screen h-screen absolute"></div>*/}

        </div>
        {/*<img*/}
        {/*  src="./../../../../public/404_error.jpg"*/}
        {/*/>*/}
      </div>
    </>
  )
}