import {useState} from "react";

interface Props {
  quantity: number;
  handleQuantityChange: (event) => void;
}

export default function QuantitySelector({
                                           quantity,
                                           handleQuantityChange
                                         }: Props) {
  return (
    <div className="dropdown" onChange={handleQuantityChange}>
      <select
        className="select w-20 self-center border h-13 border-info-content rounded-none"
        value={quantity}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  )
}