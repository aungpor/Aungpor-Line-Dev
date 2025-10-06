import React from "react";
import { Result } from "antd";
import Link from "next/link";


interface Props {}

const DotLoading = ({ active = true }) => {
  return (
    <div>
      {active && (
        <div
          className="h-screen w-screen fixed top-0 flex justify-center items-center zIndex-[200] dot-loading-warpper"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <div className="flex">
            <span
              className=" w-2 loading loading-ring loading-xs"
              style={{ width: "1rem" }}
            ></span>
            <span
              className=" w-4 loading loading-ring loading-xs"
              style={{ width: "1.25rem" }}
            ></span>
            <span
              className=" w-6 loading loading-ring loading-xs"
              style={{ width: "1.5rem" }}
            ></span>
            <span
              className=" w-8 loading loading-ring loading-xs"
              style={{ width: "2.5rem" }}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DotLoading;
