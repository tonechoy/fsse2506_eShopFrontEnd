import {useState} from "react";

interface Props {
  handleQuantityChange: (event) => void
}

export default function QuantitySelector({handleQuantityChange}: Props) {
  // const [quantity, setQuantity] = useState(1);


  // const handleAddCart = (event) => {
  //   event.preventDefault();
  //   console.log("Add bag:", quantity);
  //   event.target.innerText = "Added"
  //   event.target.style.backgroundColor = "darkGreen"
  //   setTimeout(() => {
  //     event.target.innerText = "Add to cart";
  //     event.target.style.backgroundColor = "black";
  //   }, 4000);
  // }

  return (
    <div className="dropdown" onClick={handleQuantityChange}>
      {/*<legend>Quantity</legend>*/}
      <select
        className="select w-30 self-center border h-13 border-info-content rounded-none"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>

      </select>
    </div>
  )
}