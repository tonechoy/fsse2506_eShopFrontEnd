import ProductItem from "./ProductItem.tsx";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";
import LoadingItem from "../../../component/LoadingItem";

interface Props {
  getAllProductDto: GetAllProductDto[] | undefined;
  isLoading: boolean;
}

export default function ProductContainer({getAllProductDto, isLoading}: Props) {
  return (
    <div>
      <div className="w-6xl mx-auto bg-white">
        {/*ProductTableContainer*/}
        <div
          className="grid grid-cols-4 bg-white gap-3.5 mt-3"
        >
          {
            isLoading && Array.from({length:10}).map(() => (
              <LoadingItem/>
            ))
          }

          {
            getAllProductDto &&
            getAllProductDto.map((item) => (
              <ProductItem itemDto={item} isLoading={isLoading} key={item.pid}/>
            ))
          }

        </div>
      </div>
    </div>
  )
}