import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function ProductDetail() {

    const params = useParams();

    useEffect(() => {
        axios.get('https://dummyjson.com/products/'+params.id)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            toast.error('Something went wrong !!');
        })
    },[]);

    console.log(params);

  return (
    <>
        <div className='container-fluid p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Product Details</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
