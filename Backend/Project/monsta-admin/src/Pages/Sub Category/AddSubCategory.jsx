import React, { useEffect, useState } from "react";
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import Breadcrumb from "../../common/Breadcrumb";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddSubCategory() {
  const params = useParams();
  const updateIdState = params.id;
  const [subCategroyDetails, setSubCategoryDetails] = useState('');
  let [imagePath, setImagePath] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const dropifyElement = $("#image");

    if (dropifyElement.data("dropify")) {
      dropifyElement.data("dropify").destroy();
      dropifyElement.removeData("dropify");
    }

    // **Force Update Dropify Input**
    dropifyElement.replaceWith(
      `<input type="file" accept="image/*" name="image" id="image"
          class="dropify" data-height="250" data-default-file="${imagePath}"/>`
    );

    // **Reinitialize Dropify**
    $("#image").dropify();
  }, [imagePath]); // ✅ Runs when `defaultImage` updates

  useEffect(() => {
    axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CATEGORY_VIEW, {
      limit : 100
    })
      .then((response) => {
        if (response.data._status == true) {
          setCategories(response.data._data)
        } else {
          setCategories([]);
        }
      })
      .catch(() => {
        toast.error('Something went wrong !!');
      })
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (updateIdState) {
      axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_CATEGORY_DETAILS, {
        id: updateIdState
      })
        .then((response) => {
          if (response.data._status == true) {
            setImagePath(response.data._image_path+response.data._data.image);
            setSubCategoryDetails(response.data._data)
          } else {
            setSubCategoryDetails('');
          }
        })
        .catch(() => {
          toast.error('Something went wrong !!');
        })
    }
  }, [updateIdState]);


  const formHandler = (event) => {
    event.preventDefault();

    const data = event.target

    if (updateIdState) {
      var url = `http://localhost:8000/api/admin/sub-categories/update/${updateIdState}`

      axios.put(url, data)
        .then((success) => {
          if (success.data._status == true) {
            toast.success(success.data._message);
            navigate('/category/sub-category/view');
          } else {
            toast.error(success.data._message);
          }
        })
        .catch((error) => {
          toast.error(error.data._message);
        })
    } else {
      var url = 'http://localhost:8000/api/admin/sub-categories/create';

      axios.post(url, data)
        .then((success) => {
          if (success.data._status == true) {
            toast.success(success.data._message);
            navigate('/category/sub-category/view');
          } else {
            toast.error(success.data._message);
          }
        })
        .catch((error) => {
          toast.error(error.data._message);
        })
    }
  }

  return (
    <section className="w-full">
      <Breadcrumb path={"Sub Category"} link={'/category/sub-category/view'} path2={"Add"} slash={"/"} />
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
            Add Sub Category
          </h3>
          <form onSubmit={formHandler} autoComplete="off" className="border border-t-0 p-3 rounded-b-md border-slate-400">
            <div className="flex gap-5">
              <div className="w-1/3">
                <label
                  htmlFor="categoryImage"
                  className="block  text-md font-medium text-gray-900"
                >
                  Category Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="image"
                  className="dropify"
                  data-height="230"
                />
              </div>

              <div className="w-2/3">
                {/* Parent Category Dropdown */}
                <div className="mb-5">
                  <label className="block  text-md font-medium text-gray-900">
                    Parent Category Name
                  </label>
                  <select
                    name="parent_category_id"
                    className="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                  >
                    <option value="">Select Category</option>
                    {
                      categories.map((value) => {
                        return(
                          <option value={value._id} selected={ value._id == subCategroyDetails.parent_category_id ? 'selected' : '' }       >{value.name}</option>
                        )
                      })
                    }
                  </select>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="categoryName"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    defaultValue={subCategroyDetails.name}
                    name="name"
                    id="categoryName"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Category Name"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="categoryName"
                    className="block  text-md font-medium text-gray-900"
                  >
                    Order
                  </label>
                  <input
                    type="text"
                    defaultValue={subCategroyDetails.order}
                    name="order"
                    id="order"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                    placeholder="Category Order"
                  />
                </div>

              </div>


            </div>
            <button
              type="submit"
              className="focus:outline-none my-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {updateIdState ? "Update Sub Category" : "Add Sub Category"}
            </button>
          </form>


        </div>
      </div>
    </section>
  );
}
