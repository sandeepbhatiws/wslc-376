import React, { useEffect, useState } from "react";
import Breadcrumb from "../common/Breadcrumb";
import { IoPhonePortrait } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";

export default function Profile() {

  const [activeTab, setActiveTab] = useState("editProfile");


  useEffect(() => {
    $(".dropify").dropify({
      messages: {
        default: "Profile ",
        replace: "Drag and drop ",
        remove: "Remove",
        error: "Oops, something went wrong"
      }
    });
  }, [activeTab]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#F1F4F5]">
      <Breadcrumb path={"Profile"} />
      
      <div className="w-full px-6 grid grid-cols-[30%_auto] gap-[10px] py-[20px]">
        <div className="bg-white  self-start  rounded-lg shadow-md">
          <div className="py-[40px] text-center">
            <img
              className="w-[80px] h-[80px] mx-auto rounded-full"
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/users/59c32aee-61e4-4868-b27c-e9339ab54e9a-1670132624.jpg"
              alt="Profile"
            />
            <h5 className="pt-[6px]">Admin</h5>
          </div>
          <div className="bg-[#F6F9FD] p-[20px]  rounded-lg shadow-md">
            <h4 className="py-[8px] font-bold">Contact Information</h4>
            <p className="flex items-center gap-[8px] py-[6px]">
              <IoPhonePortrait /> 1234567890
            </p>
            <p className="flex items-center gap-[8px] py-[6px]">
              <MdEmail /> xyz@gmail.com
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex border-b border-gray-300 mb-4">
            <button
              className={`px-6 py-2 text-lg font-medium ${activeTab === "editProfile"
                ? "border-b-4 border-purple-700 text-purple-700"
                : "text-gray-600"
                }`}
              onClick={() => setActiveTab("editProfile")}
            >
              Edit Profile
            </button>
            <button
              className={`px-6 py-2 text-lg font-medium ${activeTab === "changePassword"
                ? "border-b-4 border-purple-700 text-purple-700"
                : "text-gray-600"
                }`}
              onClick={() => setActiveTab("changePassword")}
            >
              Change Password
            </button>
          </div>

          {/* Edit Profile Form */}
          {activeTab === "editProfile" && (
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <div className="flex gap-5">
                <div className="w-1/3">
                  <label className="block  text-md font-medium text-gray-900">
                    Choose Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image", { required: "Image is required" })}
                    className="dropify"
                    data-height="236"
                  />
                  {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                </div>
                <div className="w-2/3">
                  <div className="mb-5">
                    <label className="block  text-md font-medium text-gray-900">Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="border-2 shadow-sm border-gray-300 text-gray-900 rounded-lg w-full py-2.5 px-3"
                      placeholder="Name"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                  </div>

                  <div className="mb-5">
                    <label className="block  text-md font-medium text-gray-900">Email</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="border-2 shadow-sm border-gray-300 text-gray-900 rounded-lg w-full py-2.5 px-3"
                      placeholder="Email"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="mb-5">
                    <label className="block  text-md font-medium text-gray-900">Mobile Number</label>
                    <input
                      type="tel"
                      {...register("number", { required: "Mobile Number is required" })}
                      className="border-2 shadow-sm border-gray-300 text-gray-900 rounded-lg w-full py-2.5 px-3"
                      placeholder="Number"
                    />
                    {errors.number && <p className="text-red-500">{errors.number.message}</p>}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="my-5 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg px-5 py-2.5"
              >
                Update Profile
              </button>
            </form>
          )}

          {/* Change Password Form */}
          {activeTab === "changePassword" && (
            <form onSubmit={handleSubmit(onSubmit)} className="p-3">
              <div className="mb-5">
                <label className="block  text-md font-medium text-gray-900">Current Password</label>
                <input
                  type="password"
                  {...register("currentPassword", { required: "Current Password is required" })}
                  className="border-2 shadow-sm border-gray-300 text-gray-900 rounded-lg w-full py-2.5 px-3"
                  placeholder="Current Password"
                />
                {errors.currentPassword && <p className="text-red-500">{errors.currentPassword.message}</p>}
              </div>

              <div className="mb-5">
                <label className="block  text-md font-medium text-gray-900">New Password</label>
                <input
                  type="password"
                  {...register("newPassword", { required: "New Password is required" })}
                  className="border-2 shadow-sm border-gray-300 text-gray-900 rounded-lg w-full py-2.5 px-3"
                  placeholder="New Password"
                />
                {errors.newPassword && <p className="text-red-500">{errors.newPassword.message}</p>}
              </div>

              <div className="mb-5">
                <label className="block  text-md font-medium text-gray-900">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword", { required: "Confirm Password is required" })}
                  className="border-2 shadow-sm border-gray-300 text-gray-900 rounded-lg w-full py-2.5 px-3"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
              </div>

              <button
                type="submit"
                className="my-5 text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg px-5 py-2.5"
              >
                Change Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
