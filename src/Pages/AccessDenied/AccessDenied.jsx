import React from "react";
import AccessDeniedLogo from "../../assets/restrictions.png";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
function AccessDenied() {
  const navigator = useNavigate();
  return (
    <div className="Access_Denied grid place-items-center mt-60">
      <img src={AccessDeniedLogo} alt="no preview" width={200} height={200} />
      <h1 className="text-3xl mt-5 font-extrabold">Access Denied</h1>
      <p
        className="text-m text-sky-500 flex cursor-pointer mt-5 font-bold"
        onClick={() => navigator(-1)}
      >
        Go back &nbsp; <MoveRight />
      </p>
    </div>
  );
}

export default AccessDenied;
