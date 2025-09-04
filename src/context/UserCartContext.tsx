import {createContext} from "react";
import type {CartItemDto} from "../data/cartItem/cartItemDto.ts";

export const UserCartContext = createContext<CartItemDto[] | undefined>(undefined);