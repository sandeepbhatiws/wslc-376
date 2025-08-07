import React, { useEffect, useState } from 'react'
import $ from "jquery";
import "dropify/dist/css/dropify.min.css";
import "dropify/dist/js/dropify.min.js";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ViewProducts() {

  let [colors, setColors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  const params = useParams();
  const updateIdState = params.id;
  const [productDetails, setProductDetails] = useState('');
  let [imagePath, setImagePath] = useState('');

  useEffect(() => {
    axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_COLOR_VIEW, {
      limit: 100
    })
      .then((response) => {
        if (response.data._status == true) {
          setColors(response.data._data)
        } else {
          setColors([]);
        }
      })
      .catch(() => {
        toast.error('Something went wrong !!');
      })
  }, []);

  useEffect(() => {
    axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CATEGORY_VIEW, {
      limit: 100
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

  const [value, setValue] = useState('');

  const getSubCategories = (e) => {
    let parentId = e.target.value;
    axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_SUB_CATEGORY_VIEW, {
      parent_category_id: parentId
    })
      .then((response) => {
        if (response.data._status == true) {
          setSubCategories(response.data._data);
        } else {
          setSubCategories([]);
          toast.error(response.data._message);
        }
      })
      .catch(() => {
        toast.error('Something went wrong while fetching sub-categories !!');
      });
  };


  useEffect(() => {
    const dropifyElement = $("#image");

    if (dropifyElement.data("dropify")) {
      dropifyElement.data("dropify").destroy();
      dropifyElement.removeData("dropify");
    }

    // **Force Update Dropify Input**
    dropifyElement.replaceWith(
      `<input type="file" accept="image/*" name="image" id="image" multiple="multiple"
          class="dropify" data-height="250" data-default-file="${imagePath}"/>`
    );

    // **Reinitialize Dropify**
    $("#image").dropify();
  }, [imagePath]);

  useEffect(() => {
    const dropifyElement = $("#images");

    if (dropifyElement.data("dropify")) {
      dropifyElement.data("dropify").destroy();
      dropifyElement.removeData("dropify");
    }

    // **Force Update Dropify Input**
    dropifyElement.replaceWith(
      `<input type="file" accept="image/*" name="images" id="images" multiple="multiple"
          class="dropify" data-height="250" data-default-file=""/>`
    );

    // **Reinitialize Dropify**
    $("#images").dropify();
  }, []);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (updateIdState) {
      axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_DETAILS, {
        id: updateIdState
      })
        .then((response) => {
          if (response.data._status == true) {
            setImagePath(response.data._image_path+response.data._data.image);

            console.log(response.data._data);
            setProductDetails(response.data._data)
            setValue(response.data._data.long_description);
            console.log(productDetails);
          } else {
            setProductDetails('');
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
      var url = `http://localhost:8000/api/admin/products/update/${updateIdState}`

      axios.put(url, data)
        .then((success) => {
          if (success.data._status == true) {
            toast.success(success.data._message);
            navigate('/product/view');
          } else {
            toast.error(success.data._message);
          }
        })
        .catch((error) => {
          toast.error(error.data._message);
        })
    } else {
      var url = 'http://localhost:8000/api/admin/products/create';

      axios.post(url, data)
        .then((success) => {
          if (success.data._status == true) {
            toast.success(success.data._message);
            navigate('/product/view');
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

      <nav className="flex border-b-2" aria-label="Breadcrumb">
        <ol className="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center ">
            <Link to={"/home"} className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link to={"/product/view"} className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Product</Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              /
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2">{updateIdState ? "Update" : "Add"}</span>
            </div>
          </li>
        </ol>
      </nav>



      <div className='w-full px-6 py-6  '>

        <form onSubmit={formHandler}>
          <div className="grid grid-cols-3 gap-[10px] ">
            {/* for left */}
            <div className="for-images ">

              <div className="">
                <label
                  htmlFor="ProductImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  id="image"
                  name='image'
                  className="dropify"
                  data-height="160"
                  multiple="multiple"
                />


              </div>

              <div className="">
                <label
                  htmlFor="GalleryImage"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Gallery Image
                </label>
                <input
                  type="file"
                  id="images"
                  name='images'
                  className="dropify"
                  multiple="multiple"
                  data-height="160"
                />
              </div>
            </div>

            {/* for midd */}
            <div className="middle">

              <div className="mb-5">
                <label
                  htmlFor="Prodct_Name"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Prodct Name
                </label>
                <input
                  type="text"
                  name='name'
                  defaultValue={productDetails.name}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Prodct Name'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Meterial
                </label>
                <select
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="">Neem</option>
                  <option value="">Babbul</option>
                  <option value="">Neem</option>
                  <option value="">Babbul</option>
                  <option value="">Neem</option>
                  <option value="">Babbul</option>
                  <option value="">Neem</option>
                  <option value="">Babbul</option>

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Parent Category
                </label>
                <select
                  onChange={getSubCategories}
                  name='parent_category_ids'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  {categories.map((category, index) => (
                    <option key={index} value={category._id}  

                    selected={productDetails.parent_category_ids.includes(category._id) ? 'selected' : ''}
                    
                    
                    >{category.name}</option>
                  ))}

                </select>
              </div>



              {/* <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Prodcut Type
                </label>
                <select
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>
                  <option value="">Featured</option>
                  <option value="">New Arrivals</option>
                  <option value="">Onsale</option>
                </select>
              </div> */}

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Featured
                </label>
                <select
                  name='is_featured'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="1" selected={productDetails.is_featured == 1 ? 'selected' : ''  } >Yes</option>
                  <option value="0" selected={productDetails.is_featured == 0 ? 'selected' : ''  }>No</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Actual Price
                </label>
                <input
                  type="text"
                  name='actual_price'
                  defaultValue={productDetails.actual_price}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Actual Price'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Total In Stocks
                </label>
                <input
                  type="text"
                  name='stocks'
                  defaultValue={productDetails.stocks}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Total In Stocks'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Product Dimension
                </label>
                <input
                  type="text"
                  defaultValue={productDetails.product_dimension}
                  name='product_dimension'
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Product Dimension'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Estimate Delivery Days
                </label>
                <input
                  type="text"
                  name='estimate_delivery_days'
                  defaultValue={productDetails.estimate_delivery_days}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Estimate Delivery Days'
                />
              </div>



            </div>

            {/* for right */}
            <div className="right-items">
              <div className="mb-5">
                <label
                  htmlFor="Prodct_Code"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Product Code
                </label>
                <input
                  type="text"
                  name='product_code'
                  defaultValue={productDetails.product_code}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Product Code'
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Color
                </label>
                <select
                  name='color_ids'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  {colors.map((color, index) => (
                    <option key={index} value={color._id}

                    selected={productDetails.color_ids.includes(color._id) ? 'selected' : ''}
                    
                    >{color.name}</option>
                  ))}

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Category
                </label>
                <select
                  name='sub_category_ids[]'
                  multiple="multiple"
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Select Category</option>

                  {subCategories.map((subCategory, index) => (
                    <option key={index} value={subCategory._id}
                    
                    selected={productDetails.sub_category_ids.includes(subCategory._id) ? 'selected' : ''}
                    
                    >{subCategory.name}</option>
                  ))}
                </select>

              </div>


              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Select Sub Sub Category
                </label>
                <select
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="">Nothing Selected</option>

                  <option value="mobile">Mobile Phones</option>
                  <option value="laptop">Laptops</option>

                  <option value="men">Men's Wear</option>
                  <option value="women">Women's Wear</option>

                </select>
              </div>



              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Best Selling
                </label>
                <select
                  name='is_best_selling'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="1" selected={productDetails.is_best_selling == 1 ? 'selected' : ''  }>Yes</option>
                  <option value="0" selected={productDetails.is_best_selling == 1 ? 'selected' : ''  }>No</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Is Upsell
                </label>
                <select
                  name='is_up_sell'
                  className="text-[19px] text-[#76838f] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg block w-full py-2.5 px-3">
                  <option value="1">Yes</option>
                  <option value="0">No</option>

                </select>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Sale Price
                </label>
                <input
                  type="text"
                  name='sale_price'
                  defaultValue={productDetails.sale_price}
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder=' Sale Price'
                />
              </div>


              <div className="mb-5">
                <label
                  htmlFor="categoryName"
                  className="block  text-md font-medium text-gray-900 text-[#76838f]"
                >
                  Order
                </label>
                <input
                  type="text"
                  defaultValue={productDetails.order}
                  name='order'
                  className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                  placeholder='Order'
                />
              </div>


            </div>
          </div>

          <div className='py-[40px]'>
            <label
              htmlFor="categoryImage"
              className="block  text-md font-medium text-gray-900 text-[#76838f]"
            >
              Short Description
            </label>
            <textarea
              name='short_description'
              defaultValue={productDetails.short_description}
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
              placeholder='Description'
            ></textarea>

          </div>

          <div className='py-[40px]'>
            <label
              htmlFor="categoryImage"
              className="block  text-md font-medium text-gray-900 text-[#76838f]"
            >
              Long Description
            </label>
            <ReactQuill theme="snow" defaultValue={value} onChange={setValue} className='h-[200px]'   />
          </div>
          <input type='hidden' defaultValue={productDetails.long_description} name='long_description'  />

          <button class=" mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">
            {updateIdState ? "Update Product " : "Add Product"}
          </button>

        </form>

      </div>
    </section>
  )
}

