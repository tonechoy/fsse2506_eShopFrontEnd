import {Link, useNavigate} from "@tanstack/react-router";
import {useContext} from "react";
import {LoginUserContext} from "../../../../context/LoginUserContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "../../../../authService/FirebaseAuthService.ts";
import toast, {Toaster} from "react-hot-toast";

export default function UserUI() {
  const navigate = useNavigate({from: "/"})
  const loginUser = useContext(LoginUserContext);

  // const openModal = () => {
  //   const modal = document.getElementById("logoutModalMsg") as HTMLDialogElement;
  //   if (modal) {
  //     modal.showModal();
  //   }
  // };

  const handleLogoutBtn = async () => {
    await signOut();
    // openModal();
    notify();
  }

  const notify =() => {toast.success("Logout Successful!")}

  if (loginUser) {
    return (
      <>
        <div className="flex flex-1 align-middle justify-end gap-x-3">
          <p className="self-center">Welcome, {loginUser.email.split("@")[0]}!</p>
          <Link to={"/shoppingcart"}>
            <button className="btn btn-sm p-2 bg-gray-300"><FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}}/>
            </button>
          </Link>
          <button
            className="btn btn-sm p-1 bg-gray-300 text-gray-700"
            onClick={() => handleLogoutBtn()}
          >
            Logout
          </button>
          <dialog id="logoutModalMsg" className="modal">
            <div className="modal-box rounded-none w-md">
              <p className="text-center text-black">Logout successful!</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>

        </div>
      </>
    )
  } else if (loginUser === null) {
    return (
      <div className="flex-1 text-end">
        <button
          className="underline self-center hover:cursor-pointer"
          onClick={() => navigate({to: "/login"})}
        >
          LOGIN
        </button>
        {/*<span className="absolute z-10 bg-white text-black rounded-2xl border border-gray-500 w-40 h-6 right-25 top-12 text-wrap text-sm text-center ">*/}
        {/*  Logout successful!*/}
        {/*  */}
        {/*</span>*/}
        <Toaster/>
      </div>
    )
  } else {
    return (
      <div className="flex-1 text-end">
        {/*<progress className="progress w-50 text-white"/>*/}
        <span className="loading loading-spinner loading-sm text-white"></span>
      </div>
    )
  }
}
