import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Tournaments from "../../Components/Tournaments/Tournaments";
import { useNavigate } from "react-router-dom";

export default function Dasboard() {
  const navigator = useNavigate();
  useEffect(() => {
    if (!document.cookie.split("=")[1]) {
      navigator("/signin");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Tournaments />
    </>
  );
}
