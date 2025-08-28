import type {TransactionDto} from "../../../../data/transaction/transaction.type.ts";
import CheckoutTableRow from "./CheckoutTableRow.tsx";

interface Props {
  transactionDto: TransactionDto
}
//
// interface Item {
//   quantity: number;
// }
//
// interface TransactionDto {
//   items: Item[];
// }

export default function CheckoutTable({transactionDto}: Props) {

  const calItems = (transactionDto: TransactionDto): number => {
    if (transactionDto && transactionDto.items) {
      return transactionDto.items.reduce((prev, item) => {
        return prev + item.quantity;
      },0)
    }
    return 0;
  }

  return (
    <>
    <table className="table  border-gray-300 rounded-none mb-10">
      <thead>
      <tr>
        <th className="bg-[#122620] text-white p-3 px-6">Total of {calItems(transactionDto)} items</th>
      </tr>
      </thead>
      <tbody>
      {
        transactionDto.items.map((item) => (
          <CheckoutTableRow item={item} key={item.tpid}/>
        ))
      }
      </tbody>
    </table>
    </>
  )
}