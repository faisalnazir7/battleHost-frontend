import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SkeletalResult() {
  return (
    <div className="flex justify-center mt-5">
      <Skeleton className="w-[40rem] h-96" />
    </div>
  );
}

export default SkeletalResult;
