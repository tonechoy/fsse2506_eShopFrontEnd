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
      <div className="mx-auto bg-white xl:w-6xl lg:w-4xl md:w-2xl sm:w-xl">
        {/*ProductTableContainer*/}
        <div
          className="grid grid-cols-1 bg-white gap-3.5 mt-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 @xs:grid-col-1"
        >
          {
            isLoading && Array.from({length:10}).map((_, index) => (
              <LoadingItem key={index}/>
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