import {Link} from "@tanstack/react-router";
import UserUI from "./UserUI.tsx";

export default function TopStatus() {

  return (
    <div className="flex justify-between px-10 bg-green-950 text-white align-middle h-10 items-center">
      <button className="flex-1 text-start hover:cursor-pointer">
        <Link to={"/"}>
          Logo
        </Link>
      </button>
      <h1 className="text-2xl self-center font-serif flex-1 text-center">ComfortCraft</h1>
      <UserUI/>

      {/*<button*/}
      {/*  className="underline self-center hover:cursor-pointer"*/}
      {/*  onClick={() => navigate({to: "/login"})}*/}
      {/*>*/}
      {/*  LOGIN*/}
      {/*</button>*/}

      {/*{*/}
      {/*  !isLogin*/}
      {/*    ? (*/}
      {/*      <button*/}
      {/*        className="underline self-center hover:cursor-pointer"*/}
      {/*      >*/}
      {/*        LOGIN*/}
      {/*      </button>*/}

      {/*    ) : (*/}

      {/*      <div className="flex gap-3.5 align-middle self-center">*/}
      {/*        <div>*/}
      {/*          Hi, <a href="" className="underline font-bold">username</a>!*/}
      {/*        </div>*/}
      {/*        <div className="flex gap-1 self-center">*/}
      {/*          <span>Cart</span>*/}
      {/*          <button>*/}
      {/*            <img*/}
      {/*              src="/public/shopping-cart-light.png"*/}
      {/*              width={20}*/}
      {/*              // height={10}*/}
      {/*            />*/}
      {/*          </button>*/}
      {/*        </div>*/}
      {/*        /!*<div className="flex gap-1 align-middle">*!/*/}
      {/*        /!*  <div>Favorite</div>*!/*/}
      {/*        /!*  <button>*!/*/}
      {/*        /!*    <img*!/*/}
      {/*        /!*      src="./../../../public/favorite-list-light.png"*!/*/}
      {/*        /!*      width={20}*!/*/}
      {/*        /!*    />*!/*/}
      {/*        /!*  </button>*!/*/}
      {/*        /!*</div>*!/*/}
      {/*      </div>*/}
      {/*    )*/}
      {/*}*/}
      {/*<CategoryTab/>*/}

    </div>
  )
}