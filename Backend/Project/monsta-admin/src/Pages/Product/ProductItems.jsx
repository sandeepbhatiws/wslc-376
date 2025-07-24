import React, { useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";

export default function ProductItems() {
  let [orderModal, setOrderModal] = useState(false);
  return (
    <section className="w-full">
      {/* Order Modal Start */}
      <div
        id="order-modal"
        className={`${
          orderModal === true ? `block` : `hidden`
        }  block overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div
          className="fixed w-full h-screen "
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          <div className="relative p-4 px-20 w-full max-w-full max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900">
                  Product Image's & Price
                </h3>
                <button
                  onClick={() => setOrderModal(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="order-modal"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <div className="grid grid-cols-[22%_45%_27%] gap-10">
                  <div className="border-2 rounded-md shadow-md p-4">
                    <img
                      src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/902af913-69be-4024-b22c-cd573b7dd13b1613028902744-Roadster-Men-Tshirts-9521613028900435-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex items-start flex-wrap gap-5 border-2 rounded-md shadow-md p-3">
                    <img
                      className="w-36"
                      src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/7f8383cc-07f5-4714-b451-fba7d49776921613028902727-Roadster-Men-Tshirts-9521613028900435-2.jpg"
                      alt=""
                    />
                    <img
                      className="w-36"
                      src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/5d8249b2-cbfa-42a3-9b8a-9406fcb8af0c1613028902710-Roadster-Men-Tshirts-9521613028900435-3.jpg"
                      alt=""
                    />
                    <img
                      className="w-36"
                      src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/bf9e30b3-5b8e-4cf1-811b-81ea64d45ed81613028902692-Roadster-Men-Tshirts-9521613028900435-4.jpg"
                      alt=""
                    />
                    <img
                      className="w-36"
                      src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13278488/2021/2/11/77451543-64cb-4294-8f82-24ac1d78dcf01613028902666-Roadster-Men-Tshirts-9521613028900435-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="border-2 rounded-md shadow-md p-3">
                    <h3 className="text-center font-semibold text-[20px]">
                      Product Details
                    </h3>
                    <ul className="space-y-4 mt-8">
                      <li className="font-semibold text-[17px]">
                        Price :{" "}
                        <span className="font-normal text-[16px] ">
                          &nbsp; ₹ 1500
                        </span>{" "}
                      </li>
                      <li className="font-semibold text-[17px]">
                        MRP :{" "}
                        <span className="font-normal text-[16px] ">
                          &nbsp; ₹ 3000
                        </span>{" "}
                      </li>
                      <li className="font-semibold text-[17px]">
                        Manage Stock :{" "}
                        <span className="font-normal text-[16px] ">
                          &nbsp; In Stock
                        </span>{" "}
                      </li>
                      <li className="font-semibold text-[17px]">
                        Brand Name:{" "}
                        <span className="font-normal text-[16px] ">
                          &nbsp; Lev's
                        </span>{" "}
                      </li>
                      <li className="font-semibold text-[17px]">
                        Size :{" "}
                        <span className="font-normal text-[16px] ">
                          &nbsp; Xl{" "}
                        </span>{" "}
                      </li>
                      <li className="font-semibold text-[17px]">
                        Color :{" "}
                        <span className="font-normal text-[16px] ">
                          &nbsp; Red{" "}
                        </span>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order Modal End */}
      
          <Breadcrumb path={"Product"} path2={"Product Items"} slash={"/"} />
          <div className="w-full min-h-[610px]">
            <div className="max-w-[1220px] mx-auto py-5">
              <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                Product Items
              </h3>
              <div className="border border-t-0 rounded-b-md border-slate-400">
                <div className="relative overflow-x-auto">
                  <table className="w-full  text-left rtl:text-right text-gray-500 ">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Delete
                        </th>
                        <th scope="col" className="px-6 py-3">
                          S. No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Short Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Thumbnails
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap "
                        >
                          <input
                            id="purple-checkbox"
                            name="deleteCheck"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 "
                          />
                        </th>
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">Men's</td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button
                            onClick={() => setOrderModal(true)}
                            className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold"
                          >
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button
                            onClick={() => setOrderModal(true)}
                            className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold"
                          >
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <img
                            className="w-16 h-16 rounded-md object-cover"
                            src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png"
                            alt=""
                          />
                        </td>
                        <td className="px-6 py-4 flex gap-3 mt-6">
                          <svg
                            fill="red"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                          </svg>
                          |
                          <svg
                            fill="gold"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                          </svg>
                        </td>
                        <td className="px-6 py-4">Active</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap "
                        >
                          <input
                            id="purple-checkbox"
                            name="deleteCheck"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 "
                          />
                        </th>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">Men's</td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <img
                            className="w-16 h-16 rounded-md object-cover"
                            src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png"
                            alt=""
                          />
                        </td>
                        <td className="px-6 py-4 flex gap-3 mt-6">
                          <svg
                            fill="red"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                          </svg>
                          |
                          <svg
                            fill="gold"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                          </svg>
                        </td>
                        <td className="px-6 py-4">Active</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap "
                        >
                          <input
                            id="purple-checkbox"
                            name="deleteCheck"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 "
                          />
                        </th>
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">Men's</td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <img
                            className="w-16 h-16 rounded-md object-cover"
                            src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png"
                            alt=""
                          />
                        </td>
                        <td className="px-6 py-4 flex gap-3 mt-6">
                          <svg
                            fill="red"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                          </svg>
                          |
                          <svg
                            fill="gold"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                          </svg>
                        </td>
                        <td className="px-6 py-4">Active</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap "
                        >
                          <input
                            id="purple-checkbox"
                            name="deleteCheck"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 "
                          />
                        </th>
                        <td className="px-6 py-4">4</td>
                        <td className="px-6 py-4">Men's</td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <p className="line-clamp-1 w-[180px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum ipsa consequatur animi rerum at eveniet
                            praesentium explicabo expedita assumenda voluptas
                            maiores nobis,
                          </p>
                          <button className="text-[14px] text-blue-500 font-semibold hover:text-blue-700 hover:font-semibold">
                            Read More
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <img
                            className="w-16 h-16 rounded-md object-cover"
                            src="https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png"
                            alt=""
                          />
                        </td>
                        <td className="px-6 py-4 flex gap-3 mt-6">
                          <svg
                            fill="red"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                          </svg>
                          |
                          <svg
                            fill="gold"
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                          </svg>
                        </td>
                        <td className="px-6 py-4">Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}
