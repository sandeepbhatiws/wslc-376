import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import { useForm } from 'react-hook-form';

export default function Company_profile() {
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
    return (
        <div className='px-6 bg-[#F1F4F5] ' >
            <div className='py-5'>
                <h2 className='text-[18px]'>Company Profile</h2>
                <ul className='flex text-[14px] text-[#7693BE] '>
                    <li className='text-[blue]'>Dashboard / </li>
                    <li> Company Profile</li>
                </ul>
            </div>

            <div className='bg-white p-6 rounded-[6px]'>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="">
                    <div className="flex gap-5">
                        <div className="w-1/3">
                            <label

                                className="block  text-md font-medium text-gray-900"
                            >
                                Category Image
                            </label>
                            <input
                                type="file"
                                {...register("Image", { required: "Image is required" })}
                                id="Image"
                                className="dropify"
                                data-height="180"
                            />
                            {errors.Image && <p className="text-red-500">{errors.Image.message}</p>}
                        </div>
                        <div className="w-2/3">
                            <div className="">
                                <label
                                    htmlFor="Name"
                                    className="block  text-md font-medium text-gray-900"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    {...register("Name", { required: "Name is required" })}
                                    id="Name"
                                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                    placeholder="Name"
                                />
                                {errors.Name && <p className="text-red-500">{errors.Name.message}</p>}
                            </div>
                            <div className="">
                                <label
                                    htmlFor="Email"
                                    className="block  text-md font-medium text-gray-900"
                                >
                                    Email
                                </label>
                                <input
                                    type="number"
                                    {...register("Email", { required: "Email is required" })}
                                    id="Email"
                                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                    placeholder="Email"
                                />
                                {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
                            </div>

                            <div className="">
                                <label
                                    htmlFor="Mobile_Number"
                                    className="block  text-md font-medium text-gray-900"
                                >
                                    Mobile Number
                                </label>
                                <input
                                    type="number"
                                    {...register("Mobile_Number", { required: " Mobile Number is required" })}
                                    id="order"
                                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                    placeholder="Mobile Number"
                                />
                                {errors.Mobile_Number && <p className="text-red-500">{errors.Mobile_Number.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className='my-2'>
                        <label for="Address" class=" block  text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <textarea id="Address"  rows="4"
                        {...register("Address", { required: " Address is required" })}
                         class="block p-2.5 w-full text-sm resize-none  rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address"></textarea>
                          {errors.Address && <p className="text-red-500">{errors.Address.message}</p>}
                    </div>

                    <div className='my-2'>
                        <label for="Google Map URL"
                        {...register("Google", { required: " Google Map URL is required" })}
                         class=" block  text-sm font-medium text-gray-900 dark:text-white">Google Map URL</label>
                        <textarea id="Google Map URL" rows="4" class="resize-none block p-2.5 w-full text-sm   rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google Map URL"></textarea>
                        {errors.Google && <p className="text-red-500">{errors.Google.message}</p>}
                    </div>

                    <div className='my-4 p-2 border-2 border-gray rounded-[6px]'>
                    <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14310.50203363295!2d73.030606!3d26.273815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1741676183003!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <button
                        type="submit"
                        className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Update Company Profile
                    </button>
                </form>
            </div>
        </div>
    )
}
