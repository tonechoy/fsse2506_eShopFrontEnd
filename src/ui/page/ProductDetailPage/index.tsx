import TopNav from "../../component/TopNav.tsx";
import mockData from "../../response.json"
import {useLocation, useParams} from "@tanstack/react-router";

// interface Props {
//
// }

export default function ProductDetailPage() {
  const {productId} = useParams({from: "/products/$productId"});
  const location = useLocation();

  return (
    <div className="product-detail-container">
      <h1>Product ID: {productId}</h1>
      <h2>Location: {location.href}</h2>
      <h2>Pathname: {location.pathname}</h2>
    </div>
  )
}