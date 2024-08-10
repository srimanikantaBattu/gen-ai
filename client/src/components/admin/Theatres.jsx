import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import './Theatres.css'
import axios from 'axios'

function Theatres() {

  const {register, handleSubmit, formState: {errors}} = useForm()


  const [screenCount, setScreenCount] = useState(0)
  const [screen3d, setScreen3d] = useState(false)
  const [screen2d, setScreen2d] = useState(false)
  const [screen4dx, setScreen4dx] = useState(false)
  const [screenimax, setScreenImax] = useState(false)


  const theatreSubmit = (data) => {
    console.log(data) 
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black'>
      <div className='w-4/6 border  rounded-lg m-auto'>
        <form className='w-full' onSubmit={handleSubmit(theatreSubmit)}>
          <input className='block w-5/6 border ms-10 p-1 mt-9 rounded-md' placeholder="Theatre Name" type="text" {...register("theatrename", {required: true})} />
          <input className='block w-5/6 border ms-10 p-1 mt-5 rounded-md' placeholder="city" type="text" {...register("city",{required: true})} />
          <input className='block w-5/6 border ms-10 p-1 mt-5 rounded-md' placeholder="address" type="text" {...register("address",{ required: true})} />
          <div className=''>
            <input className='  border ms-10 p-1 mt-5 rounded-md' placeholder='no of screens' type="text" {...register("screens",{ required: true})} />
            <input className='  border ms-10 p-1 mt-5 rounded-md' placeholder='Ticket Price' onChange={(e) => setScreenCount(e.target.value)} type="text" {...register("ticketprice",{required: true})} />
          </div>
              <div  className='flex items-center rounded-lg ms-10 mt-5'>
                <button className={`px-2 py-1 w-2/12 border text-white rounded-md ${screen4dx ? 'bg-green-950 border-green-950' : 'border-gray-300'}`} type='button' onClick={() => setScreen4dx(!screen4dx)}>
                  <div className='flex items-center'>
                    {
                      screen4dx ? <CiCircleCheck size={20}/> : <MdOutlineRadioButtonUnchecked size={20}/>
                    }
                    <h1 className='ms-4'>4dx screen</h1>
                  </div>
                </button>
                <div>
                  <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screen4dx} placeholder='no.of 4dx screens' type="number" {...register("screen4dx",{ required: true})} />
                </div>
                <div>
                <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screen4dx} placeholder='Ticket price' type="number" {...register("screen4dxticketprice",{ required: true})} />
                </div>
              </div>
              <div  className='flex items-center rounded-lg ms-10 mt-5'>
                <button className={`px-2 py-1 w-2/12 border text-white rounded-md ${screenimax ? 'bg-green-950 border-green-950' : 'border-gray-300'}`} type='button' onClick={() => setScreenImax(!screenimax)}>
                  <div className='flex items-center'>
                    {
                      screenimax ? <CiCircleCheck size={20}/> : <MdOutlineRadioButtonUnchecked size={20}/>
                    }
                    <h1 className='ms-4'>Imax screen</h1>
                  </div>
                </button>
                <div>
                  <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screenimax} placeholder='no.of imax screens' type="number" {...register("screenimax",{ required: true})} />
                </div>
                <div>
                <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screenimax} placeholder='Ticket price' type="number" {...register("screenimaxticketprice",{ required: true})} />
                </div>
              </div>
              <div className=' flex items-center rounded-lg ms-10 mt-5'>
                <button className={`px-2 py-1 w-2/12 border text-white rounded-md ${screen3d ? 'bg-green-950 border-green-950' : 'border-gray-300'}`} type='button' onClick={() => setScreen3d(!screen3d)}>
                  <div className='flex items-center'>
                    {
                      screen3d ? <CiCircleCheck size={20}/> : <MdOutlineRadioButtonUnchecked size={20}/>
                    }
                    <h1 className='ms-4'>3d screen</h1>
                  </div>
                </button>
                <div>
                  <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screen3d} placeholder='no.of 3d screens' type="number" {...register("screen3d",{ required: true})} />
                </div>
                <div>
                <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screen3d} placeholder='Ticket price' type="number" {...register("screen3dticketprice",{ required: true})} />
                </div>
              </div>
              <div  className='flex items-center rounded-lg ms-10 mt-5'>
                <button className={`px-2 py-1 w-2/12 border text-white rounded-md ${screen2d ? 'bg-green-950 border-green-950' : 'border-gray-300'}`} type='button' onClick={() => setScreen2d(!screen2d)}>
                  <div className='flex items-center'>
                    {
                      screen2d ? <CiCircleCheck size={20}/> : <MdOutlineRadioButtonUnchecked size={20}/>
                    }
                    <h1 className='ms-4'>2d screen</h1>
                  </div>
                </button>
                <div>
                  <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screen2d} placeholder='no.of 2d screens' type="number" {...register("screen2d",{ required: true})} />
                </div>
                <div>
                <input className='w-5/6 ms-5 border rounded-md ps-2 p-1' disabled={!screen2d} placeholder='Ticket price' type="number" {...register("screen2dticketprice",{ required: true})} />
                </div>
              </div>
              
          {/* <div className=' ms-10 mt-5 w-4/12 flex justify-between'>
            <div className=''>
              <input className='w-5/6 border p-1 rounded-md' placeholder='3d' type="number" {...register("screen3d",{ required: true})} />
            </div>
            <div className=''>
              <input className='w-5/6 border p-1 rounded-md' placeholder='2d' type="number" {...register("screen2d",{ required: true})} />
            </div>
          </div> */}
          <button className='ms-10 my-5 px-2 py-1 text-white border rounded-lg'>Add theatre</button>
        </form>
      </div>
    </div>
  )
}

export default Theatres