import axios from "axios";
import type {GetAllProductDto, ProductDto} from "../../data/product/product.type.ts";

const baseUrl = "http://localhost:8080"

export async function getAllProduct() {
  const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/products` );
  return response.data;
}

export async function getProductByPid(pid: string) {
  const response = await axios.get<ProductDto>(`${baseUrl}/public/products/${pid}`);
  return response.data;
}

export async function getProductByCategory(category: string) {
  const response = await axios.get<ProductDto[]>(`${baseUrl}/public/products/category?category=${category}`);
  return response.data;
}

export async function getProductByKeyword(keyword: string) {
  const response = await axios.get<ProductDto[]>(`${baseUrl}/public/products/search?keyword=${keyword}`);
  return response.data;
}
