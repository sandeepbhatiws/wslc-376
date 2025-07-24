import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";

export default function Orders() {
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
          <div className="fixed w-full h-screen " style={{backgroundColor: "rgba(0,0,0,0.8)"}}></div>
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
              <div className="grid grid-cols-[58%_27%] gap-10 justify-between">
                <div className="space-y-8">
                  <div className="flex gap-8 items-center">
                    <img className="w-28 " src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19796322/2022/9/15/e17ac111-a42a-48be-b5ef-c627ae91db811663233930653-Roadster-Mens--Printed-Navy-Blue-Round-Neck-Short-Sleeves-T--1.jpg" alt="" />
                    <div>
                      <h3 className="text-red-600 font-semibold">Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt</h3>
                      <ul className="space-y-2 mt-3">
                    <li className="font-semibold text-[17px]">Price : <span className="font-normal text-[16px] ">&nbsp; ₹ 1500</span> </li>
                    <li className="font-semibold text-[17px]">Quantity :  <span className="font-normal text-[16px] ">&nbsp; 1 </span> </li>
                    <li className="font-semibold text-[17px]">Size : <span className="font-normal text-[16px] ">&nbsp; Xl </span> </li>
                    <li className="font-semibold text-[17px]">Color : <span className="font-normal text-[16px] ">&nbsp; Red </span> </li>
                  </ul>
                    </div>

                  </div>
                  <div className="flex gap-8 items-center">
                    <img className="w-28 " src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23644364/2023/10/6/2e563247-3f1e-4822-adf9-fa233c62e8fd1696582792046-Mast--Harbour-Men-Sweaters-8961696582791747-2.jpg" alt="" />
                    <div>
                      <h3 className="text-red-600 font-semibold">Men Navy Blue & Off White Typography Printed Pure Cotton T-shirt</h3>
                      <ul className="space-y-2 mt-3">
                    <li className="font-semibold text-[17px]">Price : <span className="font-normal text-[16px] ">&nbsp; ₹ 1500</span> </li>
                    <li className="font-semibold text-[17px]">Quantity :  <span className="font-normal text-[16px] ">&nbsp; 1 </span> </li>
                    <li className="font-semibold text-[17px]">Size : <span className="font-normal text-[16px] ">&nbsp; Xl </span> </li>
                    <li className="font-semibold text-[17px]">Color : <span className="font-normal text-[16px] ">&nbsp; Red </span> </li>
                  </ul>
                    </div>

                  </div>
                </div>
                
                <div className="border-2 rounded-md shadow-md p-3">
                  <h3 className=" font-semibold text-[20px]">Product Details</h3>
                  <p className="mt-1">Roshan Chaurasia, First Floor , Laxmi  Tower, Bhaskar Circle, Ratanada, PRAYAGRAJ, UTTAR PRADESH 211003 India</p>
                  <h3 className=" font-semibold text-[20px] mt-8">Order Summary</h3>
                  <ul className="space-y-4 mt-4">
                    <li className="font-semibold text-[17px]">Item(s) Subtotal : <span className="font-normal text-[16px] ">&nbsp; ₹ 3500</span> </li>
                    <li className="font-semibold text-[17px]">Cash / Pay on Delivery :  <span className="font-normal text-[16px] ">&nbsp; ₹ 0</span> </li>
                    <li className="font-semibold text-[17px]">Shipping : <span className="font-normal text-[16px] ">&nbsp; ₹ 0</span> </li>
                    <li className="font-semibold text-[17px]">Grand Total: <span className="font-normal text-[16px] ">&nbsp; ₹ 3500 </span> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order Modal End */}
          <Breadcrumb path={"Orders"} />
          <div className="w-full min-h-[610px]">
            <div className="max-w-[1220px] mx-auto py-5">
              <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                Order's List
              </h3>
              <div className="border border-t-0 rounded-b-md border-slate-400">
                <div className="relative overflow-x-auto">
                  <table className="w-full  text-left rtl:text-right text-gray-500 ">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          <button
                            type="button"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          >
                            Delete
                          </button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          S. No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Order ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>

                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          View
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
                        <td className="px-6 py-4 font-bold">1</td>
                        <td className="px-6 py-4">Frank01</td>
                        <td className="px-6 py-4 font-semibold">
                          Roshan Chaurasia
                        </td>
                        <td className="px-6 py-4 text-center">2</td>
                        <td className="px-6 py-4">₹ 3500</td>
                        <td className="px-6 py-4">10/06/2024</td>
                        <td className="px-6 py-4">Processing...</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setOrderModal(true)}
                            data-modal-target="order-modal"
                            data-modal-toggle="order-modal"
                            type="button"
                            className=" mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                          >
                            View
                          </button>
                        </td>
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
