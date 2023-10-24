import React, { useEffect, useState } from "react";
import dateFormatter from "../../util/dateFormatter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function SkeletalCardLayout() {
  return [...Array(12)].map((items) => (
    <div className="w-80 rounded-2xl border  md:ml-12 mt-10">
      <Skeleton className="h-[200px] w-full rounded-t-md object-cover" />
      <div className="p-4">
        <Skeleton
          className="text-center text-lg font-semibold my-2"
          count={4}
        />
      </div>
    </div>
  ));
}
