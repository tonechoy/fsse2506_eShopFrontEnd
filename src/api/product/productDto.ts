import axios from "axios";
import type {GetAllProductDto, ProductDto} from "../../data/product/product.type.ts";

const pathUrl = "http://localhost:8080"

export async function getAllProduct() {
  const response = await axios.get<GetAllProductDto[]>(`${pathUrl}/public/products` );
  return response.data;
}

export async function productDetail() {
  const response = await axios.get<ProductDto>(`${pathUrl}/public/products/${pid}`)
}