import type {Item} from "../../../../data/transaction/transaction.type.ts";

interface Props {
  item: Item
}

export default function CheckoutTableRow({item}: Props) {
  return (
    <tr className="flex py-5 mr-5 border-gray-300 text-base">
      <td className="flex h-40 w-40 mr-5 object-contain max-w-50">
        {
          item.product.imageUrl.length === 0
            ? <img src="/no-image.png" className="h-40 w-30 object-cover"/>
            : (
              <img
                src={item.product.imageUrl.split(",")[0]}
                className="object-contain"
              />
            )
        }
      </td>
      <td className="flex-4 leading-relaxed mr-5">
        <div>
          <p className="uppercase text-xs mb-1.5 italic">{item.product.category}</p>
          <p>{item.product.name}</p>
        </div>
        <div className="mt-10">
          HKD ${item.product.price.toLocaleString()} each
        </div>
      </td>
      <td className="flex flex-2 flex-col space-y-6 items-center">
        <div>Qty: {item.quantity}</div>
      </td>
      <td className="flex-1 flex justify-end">
        <div>
          ${(item.product.price * item.quantity).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
        </div>

      </td>

    </tr>
  )
}