import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import BottomNav from "../BottomNav/BottomNav";
import './Layout.css'
export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="Content ml-[5rem] w-full">{children}</div>
      </div>
      <BottomNav/>
    </>
  );
}
