import { Edit, FileIcon, House, NotebookPen, PlusIcon, ShoppingBasketIcon, User } from "lucide-react";

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
    // {
    //   name: "Update Ad",
    //   path: "/dashboard/edit-ad/:id",
    //   icon: Edit,
    // },
  ],
};
