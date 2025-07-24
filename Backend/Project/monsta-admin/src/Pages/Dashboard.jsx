import React from "react";
import Sidebar from "../common/Sidebar";
import Header from "../common/Header";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";

export default function Dashboard() {
  return (
    <>
    <Breadcrumb path={"Dashboard"}/>
          <div className="w-full min-h-[610px]">
            <div className="max-w-[1220px] mx-auto py-5">
              <div className="grid grid-cols-3 gap-5">
                <DashboardItems
                  h3={"26K"}
                  span={"(-12.4% ↓)"}
                  text={"Users"}
                  bg={"#5956D3"}
                />
                <DashboardItems
                  h3={"$6,200"}
                  span={"(40.9% ↑)"}
                  text={"Product"}
                  bg={"#2998FE"}
                />
                <DashboardItems
                  h3={"2.49%"}
                  span={"(84.7% ↑)"}
                  text={"Category"}
                  bg={"#FCB01E"}
                />
                <DashboardItems
                  h3={"44K"}
                  span={"(-23.6% ↓"}
                  text={"Orders"}
                  bg={"#E95353"}
                />
              </div>
            </div>
          </div>
    </>

  );
}

function DashboardItems({ h3, span, text, bg }) {
  return (
    <div
      className="h-48 p-5 rounded-md shadow-lg"
      style={{ backgroundColor: bg }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[25px] text-white font-bold">
          {h3} <span className="text-[18px]">{span}</span>
        </h3>
        <span>
          <svg
            fill="white"
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
          </svg>
        </span>
      </div>
      <h3 className="text-[22px] font-semibold text-white">{text}</h3>
    </div>
  );
}