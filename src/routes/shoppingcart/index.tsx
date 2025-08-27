import { createFileRoute } from '@tanstack/react-router'
import Index from "../../ui/page/ShoppingCartPage";

export const Route = createFileRoute('/shoppingcart/')({
  component: Index,
})

