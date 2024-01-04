"use client";
import Link from "next/link";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathName = usePathname();
  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href="/admin">
            <AdminNavItem
              label="Summary"
              icon={MdDashboard}
              selected={pathName === "/admin"}
            />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavItem
              label="Add products"
              icon={MdLibraryAdd}
              selected={pathName === "/admin/add-products"}
            />
          </Link>
          <Link href="/admin/mange-products">
            <AdminNavItem
              label="Mange products"
              icon={MdDns}
              selected={pathName === "/admin/mange-products"}
            />
          </Link>
          <Link href="/admin/mange-orders">
            <AdminNavItem
              label="Orders"
              icon={MdFormatListBulleted}
              selected={pathName === "/admin/mange-orders"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default AdminNav;
