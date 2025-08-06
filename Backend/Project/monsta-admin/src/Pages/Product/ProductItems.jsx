import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import { Link } from 'react-router-dom';
import { MdFilterAltOff, MdModeEdit, MdModeEditOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaFilter } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { MdModeEditOutline } from "react-icons/md";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

export default function ViewProduct() {

  let [activeFilter, setactiveFilter] = useState(true);
  let [nameFilter, setNameFilter] = useState('');
  let [parentCategoryFilter, setParentCategoryFilter] = useState('');
  const [products, setProducts] = useState([]);

  let [checkedValue, setCheckedValue] = useState([]);
  let [apiStatus, setApiStatus] = useState(false);
  let [imagePath, setImagePath] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_PRODUCT_VIEW, {
      name: nameFilter,
      parent_category_id: parentCategoryFilter,
      page: currentPage
    })
      .then((response) => {
        if (response.data._status == true) {
          setImagePath(response.data._image_path);
          setProducts(response.data._data)
          setTotalPages(response.data._pagination.total_pages)
        } else {
          setProducts([]);
        }
      })
      .catch(() => {
        toast.error('Something went wrong !!');
      })
  }, [nameFilter, parentCategoryFilter, apiStatus, currentPage]);

  var singleChecked = (id) => {
    if(checkedValue.includes(id)){
      var data = checkedValue.filter((value) => {
        if(value != id){
          return value;
        }
      })
      data = [...data];
      setCheckedValue(data);
    } else {
      const data = [...checkedValue, id];
      setCheckedValue(data);
    }
  }

  var checkedAll  = () => {
    if(products.length != checkedValue.length){
      var data = [];
      products.forEach((value) => {
        data.push(value._id);
      })
      setCheckedValue([...data]);
    } else {
      setCheckedValue([]);
    }
  }

  const changeStatus = () => {
    if(checkedValue.length > 0){
      axios.put('http://localhost:8000/api/admin/products/change-status', {
        id : checkedValue
      })
      .then((response) => {
        if (response.data._status == true) {
          toast.success(response.data._message);
          setApiStatus(!apiStatus);
          setCheckedValue([]);
        } else {
          toast.error(response.data._message);
        }
      })
      .catch(() => {
        toast.error('Something went wrong !!');
      })
    } else {
      toast.error('Please select atlest 1 record to change status')
    }

    
  }

  const deleteRecords = () => {
    if(checkedValue.length > 0){
      if(confirm('Are you sure you want to delete ?')){
          axios.put('http://localhost:8000/api/admin/products/delete', {
            id : checkedValue
          })
          .then((response) => {
            if (response.data._status == true) {
              toast.success(response.data._message);
              setApiStatus(!apiStatus);
              setCheckedValue([]);
            } else {
              toast.error(response.data._message);
            }
          })
          .catch(() => {
            toast.error('Something went wrong !!');
          })
      }
    } else {
      toast.error('Please select atlest 1 record to delete')
    }
  }

  // Filter parent category
  const filterParentCategory = (value) => {
    setParentCategoryFilter(value.target.value);
  }

  const filterName = (value) => {
    setNameFilter(value.target.value);
  }

  return (
    <section className="w-full">

      <Breadcrumb path={"Product"} link={'/category/sub-category/view'} path2={"View"} slash={"/"} />

      <div className={`rounded-lg border border-gray-300 px-5 py-5 max-w-[1220px] mx-auto mt-10 ${activeFilter ? "hidden" : "block"}`}>

        <form className="grid grid-cols-[40%_35%_5%] gap-[1%] items-center ">
          <div className="">

            <select
              onChange={ filterParentCategory }
              name="parentCatSelectBox"
              className="border  border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-3"
            >
              <option value="">Select Parent Category</option>

              {
                categories.map((value) => {
                  return(
                    <option value={value._id}>{value.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="">
            <input
              onKeyUp={ filterName }
              type="text"
              id="simple-search"
              className="border  border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-3"
              placeholder="Search  name..."
              required
            />
          </div>
        </form>

      </div>
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <div className='flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
            <h3 className="text-[26px] font-semibold" >
              View Product
            </h3>
            <div className='flex justify-between '>
              <div onClick={() => setactiveFilter(!activeFilter)} className="cursor-pointer text-[white] mx-3 rounded-[50%] w-[40px] h-[40px]  mx-3 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center  text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {activeFilter ? <FaFilter className='text-[18px]' /> : <MdFilterAltOff className='text-[18px]' />}
              </div>

              <button
              onClick={ changeStatus }
              type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> Change Status</button>


              <button
              onClick={ deleteRecords }
              type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete </button>
            </div>
          </div>
          <div className="border border-t-0 rounded-b-md border-slate-400">

            {/* border-2 border-[red] */}
            <div className="relative overflow-x-auto">


              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="p-4">
                        <div class="flex items-center">
                          <input
                            onClick={ checkedAll }
                            checked={ products.length == checkedValue.length ? 'checked' : '' }
                          id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Parent Category Name
                      </th>
                      <th scope="col" class="px-0 py-3">
                        Product Name
                      </th>
                      <th scope="col" class="px-0 py-3">
                        Product Code
                      </th>
                      <th scope="col" class=" w-[12%] ">
                        Actual Price
                      </th>
                      <th scope="col" class=" w-[12%] ">
                        Sale Price
                      </th>
                      <th scope="col" class=" w-[10%] ">
                        Order
                      </th>
                      <th scope="col" class="w-[10%]  ">
                        Status
                      </th>
                      <th scope="col" class="w-[6%]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      products.length > 0
                        ?

                        products.map((v, i) => {
                          return (
                            <tr key={i} class="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td class="w-4 p-4">
                                <div class="flex items-center">
                                  <input
                                    onClick={() => singleChecked(v._id)}

                                    checked={checkedValue.includes(v._id) ? 'checked' : ''}

                                    id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                              </td>
                              <td class=" py-4">
                                {
                                  v.parent_category_ids != '' && v.parent_category_ids.length > 0

                                  ?
                                  v.parent_category_ids.map((cat, index) => {
                                    return (
                                      cat.name+', '
                                    )
                                  })

                                  :
                                  'No Parent Category Found'
                                }
                              </td>
                              <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

                                <div class="py-4">
                                  <div class="text-base font-semibold">{v.name}</div>
                                </div>
                              </th>
                              <td class=" py-4">
                                {v.product_code}
                              </td>
                              <td class=" py-4">
                                {v.actual_price}
                              </td>
                              <td class=" py-4">
                                {v.sale_price}
                              </td>
                              <td class=" py-4">
                                {v.order}
                              </td>
                              <td class=" py-4">
                                {
                                  v.status == 1
                                    ?
                                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Active</button>
                                    :
                                    <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2">Deactive</button>
                                }
                              </td>
                              <td class=" py-4">

                                <Link to={`/category/sub-category/update/${v._id}`} >
                                  <div className="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center text-white bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <MdModeEdit className='text-[18px]' />
                                  </div>
                                </Link>
                              </td>
                            </tr>
                          )
                        })


                        :
                        <tr class="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                          <td class=" py-4 text-center fw-bold" colSpan={6}>
                            <b>No Record Found !!</b>
                          </td>
                        </tr>
                    }
                  </tbody>
                </table>
              </div>
                
                <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />

            </div>

          </div>
        </div>
      </div>



    </section>
  )
}
