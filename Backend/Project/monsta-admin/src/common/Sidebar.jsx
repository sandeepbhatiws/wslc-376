import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "./NavList";

export default function Sidebar() {
  let [sidebar, setSidebar] = useState(null);

  let toggleMenu = (index) => {
    setSidebar(sidebar === index ? null : index);
  };
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0   "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 scrollbar-hide">
          <Link to={"/home"}>
            <div className="flex items-center ps-2.5 mb-5 border-b border-slate-400 pb-7">
              <img
                src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
                className="img-fluid"
                alt="Flowbite Logo"
              />
             
            </div>
          </Link>
          <ul className="space-y-2 font-medium">
            <Link to={"/dashboard"}>
              <li className="pb-3">
                <div
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </div>
              </li>
            </Link>
           
            {/* ! MY LI Drop Down We have To make it like accordian START */}

            {navList.map((items, index) => {
              const { navName, icon, id, subMenu } = items;
              return (
                <li key={index} className="cursor-pointer">
                  <div
                    onClick={() => toggleMenu(id)}
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    {icon}
                    <span className="flex-1 ms-3 whitespace-nowrap">{navName}</span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 font-medium ">
                      {sidebar === id ? (
                        <svg
                          fill="currentColor"
                          className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
                        </svg>
                      ) : (
                        <svg
                          fill="currentColor"
                          className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <ul className={sidebar === id ? "block" : "hidden"}>
                    {subMenu.map((subItems, index) => {
                      return (
                        <Link to={subItems.link} key={index}>
                          <li>
                            <button className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg
                                fill="currentColor"
                                className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                              </svg>
                              <span className="font-semibold ms-4 text-[14px] whitespace-nowrap">
                                {subItems.navName}
                              </span>
                            </button>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
            {/* ! MY LI Drop Down We have To make it like accordian END */}
          </ul>
        </div>
      </aside>
    </>
  );
}