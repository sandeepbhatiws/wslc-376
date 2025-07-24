import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddColor() {
  const params = useParams();
  const updateIdState = params.id;
  const [colorDetails, setColorDetails] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (updateIdState) {
      axios.post('http://localhost:8000/api/admin/color/details', {
        id : updateIdState
      })
        .then((response) => {
          if (response.data._status == true) {
            setColorDetails(response.data._data)
          } else {
            setColorDetails('');
          }
        })
        .catch(() => {
          toast.error('Something went wrong !!');
        })
    }
  }, [updateIdState]);


  const formHandler = (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      code: event.target.code.value,
      order: event.target.order.value,
    }

    if(updateIdState){
      var url = `http://localhost:8000/api/admin/color/update/${updateIdState}`

      axios.put(url, data)
      .then((success) => {
        if (success.data._status == true) {
          toast.success(success.data._message);
          navigate('/color/view');
        } else {
          toast.error(success.data._message);
        }
      })
      .catch((error) => {
        toast.error(error.data._message);
      })
    } else {
      var url = 'http://localhost:8000/api/admin/color/create';

      axios.post(url, data)
      .then((success) => {
        if (success.data._status == true) {
          toast.success(success.data._message);
          navigate('/color/view');
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
    <div className="w-full">
      <div className="max-w-[1220px] mx-auto py-5">
        <h3 className="text-[20px] font-semibold bg-slate-100 py-2 px-3 rounded-t-md border border-slate-400">
          {updateIdState ? "Update Color" : "Add Color"}
        </h3>

        <form onSubmit={formHandler} autoComplete="off"
          className="p-3 border border-t-0 rounded-b-md border-slate-400"
        >
          {/* Color Name */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">Color Name</label>
            <input
              type="text" name="name"
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" 
              defaultValue={ colorDetails.name }
              placeholder="Enter Color Name"
            />
          </div>

          {/* Color Picker */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">Color Picker</label>
            <input
              type="color" name="code"
              defaultValue={ colorDetails.code }
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
              placeholder="Enter Color Code"
            />
          </div>

          {/* Color Order */}
          <div className="mb-5">
            <label className="block text-md font-medium text-gray-900">Order</label>
            <input
              type="number" name="order"
              defaultValue={ colorDetails.order }
              className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
              placeholder="Enter Order"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            {updateIdState ? "Update Color" : "Add Color"}
          </button>
        </form>
      </div>
    </div>
  );
}
