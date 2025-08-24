// import TopNav from "../../component/TopNav";
import {Link} from "@tanstack/react-router";
import "../../../App.css"
import TopStatus from "../../component/TopNav/component/TopStatus.tsx";

// interface Props {
//   isLogin: boolean
// }

export default function ErrorPage() {
  // const navigate = useNavigate({from: "/"});

  return (
    <div className="max-h-screen overflow-hidden">
      <TopStatus/>
      <div
        className="hero min-h-screen bg-[url(/public/404_error.jpg)]"
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">404 Error</h1>
            <p className="mb-5">
              Sorry, this page is currently unavailable or unreachable. Please go back and try again.
            </p>
            <Link to={"/"}>
              <button className="btn btn-error">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}