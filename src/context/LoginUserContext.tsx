import {createContext} from "react";
import type {UserData} from "../data/user/user.type.ts";
// import type {CartItemDto} from "../data/cartItem/cartItemDto.ts";

export const LoginUserContext = createContext<UserData | null | undefined>(undefined);

// export const UserCartContext = createContext<CartItemDto[] | undefined>(undefined);