import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../common/Breadcrumb";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import { useParams } from "react-router-dom";

export default function TestimonialAdd() {
    useEffect(() => {
        $(".dropify").dropify({
            messages: {
                default: "Drag and drop ",
                replace: "Drag and drop ",
                remove: "Remove",
                error: "Oops, something went wrong"
            }
        });
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    // update work
    const [updateIdState, setUpdateIdState] = useState(false)
    let updateId = useParams().id
    useEffect(() => {
        if (updateId == undefined) {
            setUpdateIdState(false)
        }
        else {
            setUpdateIdState(true)
        }
    }, [updateId])
    return (
        <section className="w-full">
            <Breadcrumb path={"Category"} path2={updateIdState ? "Update" : "Add"} slash={"/"} />
            <div className="w-full min-h-[610px]">
                <div className="max-w-[1220px] mx-auto py-5">
                    <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                        {updateIdState ? "Update Silder" : "Add Slider"}
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
                        <div className="flex gap-5">
                            <div className="w-1/3">
                                <label

                                    className="block  text-md font-medium text-gray-900"
                                >
                                    Choose Image
                                </label>
                                <input
                                    type="file"
                                    {...register("Image", { required: "Image is required" })}
                                    id="Image"
                                    className="dropify"
                                    data-height="250"
                                />
                                {errors.Image && <p className="text-red-500">{errors.Image.message}</p>}
                            </div>
                            <div className="w-2/3">
                                <div className="mb-5">
                                    <label
                                        htmlFor="Title"
                                        className="block mb-1 text-md font-medium text-gray-900"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        {...register("Name", { required: "Nameis required" })}
                                        id="Name"
                                        className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Name"
                                    />
                                    {errors.Name && <p className="text-red-500">{errors.Name.message}</p>}
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="Designation"
                                        className="block mb-1 text-md font-medium text-gray-900"
                                    >
                                        Designation
                                    </label>
                                    <input
                                        type="number"
                                        {...register("Designation", { required: "Designation is required" })}
                                        id="Designation"
                                        className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Designation"
                                    />
                                    {errors.Designation && <p className="text-red-500">{errors.Designation.message}</p>}
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="Rating"
                                        className="block mb-1 text-md font-medium text-gray-900"
                                    >
                                        Rating
                                    </label>
                                    <input
                                        type="number"
                                        {...register("Rating", { required: "Rating is required" })}
                                        id="Rating"
                                        className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Rating"
                                    />
                                    {errors.Rating && <p className="text-red-500">{errors.Rating.message}</p>}
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="Order"
                                        className="block mb-1 text-md font-medium text-gray-900"
                                    >
                                        Order
                                    </label>
                                    <input
                                        type="number"
                                        {...register("Order", { required: "Order is required" })}
                                        id="Order"
                                        className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Order"
                                    />
                                    {errors.Order && <p className="text-red-500">{errors.Order.message}</p>}
                                </div>

                                <div className="mb-5">
                                    <label
                                        htmlFor="Message"
                                        className="block mb-1 text-md font-medium text-gray-900"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        {...register("Message", { required: "Message is required" })}
                                        id="Message"
                                        className="text-[19px] resize-none h-[100px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Message"
                                    > </textarea>
                                    {errors.Message && <p className="text-red-500">{errors.Message.message}</p>}
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            {updateIdState ? "Update Testimonial" : "Add Testimonial"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
