import ProductItem from "./ProductItem.tsx";
import type {GetAllProductDto} from "../../../../data/product/product.type.ts";

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
          {/*{ getAllProductDto && !isLoading &&*/}
          {/*  getAllProductDto.map(() => (*/}
          {/*  <ProductItem/>*/}
          {/*))}*/}

          {
            getAllProductDto && !isLoading &&
            getAllProductDto.map((item) => (
              <ProductItem itemDto={item} key={item.pid}/>
            ))
          }

        </div>
      </div>
    </div>
  )
}