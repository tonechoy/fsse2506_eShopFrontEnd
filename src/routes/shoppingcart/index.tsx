import { createFileRoute } from '@tanstack/react-router'
import ShoppingCartPage from "../../ui/page/ShoppingCartPage/shoppingCartPage.tsx";

export const Route = createFileRoute('/shoppingcart/')({
  component: ShoppingCartPage,
})

