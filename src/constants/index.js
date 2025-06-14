import { ClipboardPenLine, Edit, FileIcon, HandCoins, House, NotebookPen, PlusIcon, ShoppingBasketIcon, User, User2 } from "lucide-react";

export default {
  NAVLINKS: [
    {
      name: "Overview",
      path: "/dashboard",
      icon: House,
    },
    {
      name: "Add Product",
      path: "/dashboard/addproduct",
      icon: PlusIcon,
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: NotebookPen,
    },
    {
      name: "Products",
      path: "/dashboard/products",
      icon: ShoppingBasketIcon,
    },
    {
      name: "Customers",
      path: "/dashboard/customers",
      icon: User,
    },
    {
      name: "Inventory",
      path: "/dashboard/inventory",
      icon: ClipboardPenLine,
    },
    {
      name: "CashFlow",
      path: "/dashboard/cashflow",
      icon: HandCoins,
    },
  ],
};
