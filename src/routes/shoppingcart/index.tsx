import { createFileRoute } from '@tanstack/react-router'
import ShoppingCartPage from "../../ui/page/ShoppingCartPage.tsx";

export const Route = createFileRoute('/shoppingcart/')({
  component: ShoppingCartPage,
})

