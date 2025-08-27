import axios from "axios";
import type {CartItemDto} from "../../data/cartItem/cartItemDto.ts";
import {getAuthConfig} from "../../authService/FirebaseAuthService.ts";

const baseUrl = "http://localhost:8080"

export async function getUserCart() {
  const response = await axios.get<CartItemDto[]>(
    `${baseUrl}/cart/items`,
    await getAuthConfig()
  )
  return response.data;
}

export async function putCartItem(pid: number, quantity: number) {
  try {
    const response = await axios.put(
      `${baseUrl}/cart/items/${pid}/${quantity}`,
      undefined,
      await getAuthConfig()
    )
    return response.data;
  } catch (e) {
    console.log("error in putCartItem")
  }
}

export async function patchCartItem(pid: number, quantity: number) {
  await axios.patch(
    `${baseUrl}/cart/items/${pid}/${quantity}`,
    undefined,
    await getAuthConfig()
  )
}

export async function deleteCartItem(pid: number) {
  const response = await axios.delete(
    `${baseUrl}/cart/items/${pid}`,
    await getAuthConfig()
  )
  return response.data;
}