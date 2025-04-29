import {
  BadgeCheck,
  LayoutDashboard,
  ShoppingBasket,
  Target,
} from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSideBarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <BadgeCheck />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSideBarMenuItems.map((menuItems) => (
        <div
          key={menuItems.id}
          onClick={() => {
            navigate(menuItems.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex text-xl cursor-pointer items-center gap-2 rounded-md py-2 px-3 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {menuItems.icon}
          <span>{menuItems.label}</span>
        </div>
      ))}
    </nav>
  );
}

const AdminSideBar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 ">
          <div className="flex flex-col h-full ">
            <SheetHeader className="border-b">
              <SheetTitle className="text-2xl font-extrabold flex gap-2 items-center mt-5 mb-5">
                <Target size={30} />
                Admin Panel
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6  lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <Target size={30} />
          <h1 className="text-2xl font-extrabold"> Admin panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};

export default AdminSideBar;
