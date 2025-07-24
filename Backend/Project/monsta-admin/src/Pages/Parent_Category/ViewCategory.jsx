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

export default function ViewCategory() {
  // let [orderModal, setOrderModal] = useState(false);

  let [activeFilter, setactiveFilter] = useState(true);
  let [nameFilter, setNameFilter] = useState('');
  const [categories, setCategories] = useState([]);

  let [checkedValue, setCheckedValue] = useState([]);
  let [apiStatus, setApiStatus] = useState(false);
  let [imagePath, setImagePath] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.post(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CATEGORY_VIEW, {
      name : nameFilter,
      page : currentPage
    })
      .then((response) => {
        if (response.data._status == true) {
          setImagePath(response.data._image_path);
          setCategories(response.data._data)
          setTotalPages(response.data._pagination.total_pages)
        } else {
          setCategories([]);
        }
      })
      .catch(() => {
        toast.error('Something went wrong !!');
      })
  }, [nameFilter, apiStatus, currentPage]);

  var checkedAll  = () => {
    if(categories.length != checkedValue.length){
      var data = [];
      categories.forEach((value) => {
        data.push(value._id);
      })
      setCheckedValue([...data]);
    } else {
      setCheckedValue([]);
    }
  }

  var singleChecked = (id) => {
    if(checkedValue.includes(id)){
      var data = checkedValue.filter((value) => {
        if(value != id){
          return value;
        }
      })
      data = [...data];
      setCheckedValue(data);
      console.log(data);

    } else {
      const data = [...checkedValue, id];
      setCheckedValue(data);
      console.log(data);
    }
  }

  const searchRecord = (event) => {
    event.preventDefault();
    setNameFilter(event.target.search.value)
  }

  const changeStatus = () => {

    if(checkedValue.length > 0){
      axios.put('http://localhost:8000/api/admin/categories/change-status', {
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
          axios.put('http://localhost:8000/api/admin/categories/delete', {
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

  return (
    <section className="w-full">

      <Breadcrumb path={"Categories"} link={"/category/view"} path2={"View"} slash={"/"} />

      <div className={`bg-gray-50 px-2 py-5 max-w-[1220px] duration-[1s] mx-auto mt-10 ${activeFilter ? "hidden" : "block"}`}>

        <form className="flex max-w-sm" onSubmit={searchRecord}>
          <div className="relative w-full">
            <input
              type="text"
              name='search'
              id="simple-search" autoComplete='off'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search  name..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>


      </div>
      <div className="w-full min-h-[610px]">
        <div className="max-w-[1220px] mx-auto py-5">
          <div className='flex item-center justify-between bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400'>
            <h3 className="text-[26px] font-semibold" >
              View Categories
            </h3>
            <div className='flex justify-between '>
              <div onClick={() => setactiveFilter(!activeFilter)} className="cursor-pointer text-white mx-3 rounded-[50%] w-[40px] h-[40px] flex items-center justify-center bg-blue-700  border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                            checked={ categories.length == checkedValue.length ? 'checked' : '' }
                          id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Category Name
                      </th>
                      <th scope="col" class=" w-[10%] ">
                        Image
                      </th>
                      <th scope="col" class=" w-[8%] ">
                        Order
                      </th>
                      <th scope="col" class="w-[11%]">
                        Status
                      </th>
                      <th scope="col" class="w-[6%]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      categories.length > 0
                        ?

                        categories.map((v, i) => {
                          return (
                            <tr key={i} class="bg-white  dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                              <td class="w-4 p-4">
                                <div class="flex items-center">
                                  <input 
                                    onClick={ () => singleChecked(v._id) }

                                    checked={ checkedValue.includes(v._id) ? 'checked' : '' }

                                  id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                </div>
                              </td>
                              <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

                                <div class="py-4">
                                  <div class="text-base font-semibold">{ v.name }</div>
                                </div>
                              </th>
                              <td class=" py-4">
                                {
                                  v.image != ''
                                  ?
                                  <img class="w-10 h-10 rounded-full" src={imagePath + v.image} alt="Jese image" />
                                  :
                                  'N/A'
                                }
                                
                              </td>
                              <td class=" py-4">
                                { v.order }
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

                                <Link to={`/category/update/${ v._id }`} >
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
