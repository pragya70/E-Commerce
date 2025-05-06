import React from "react";
import { Button } from "../ui/button";
import { LogOut, MenuIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";

const AdminHeader = ({ setOpen }) => {
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logoutUser());
  }
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="block lg:hidden">
        <MenuIcon />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogOut}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
        >
          <LogOut />
          LogOut
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
