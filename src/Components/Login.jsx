import React from 'react'
import { Link } from 'react-router-dom';
import Signup from './Signup';
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4'>
              <div>
                <label className="label">
                  <span className="label-text">Email ID</span>
                </label>
                <input type="text" placeholder='Email' className='input input-bordered input-primary w-full max-w-xs'
                  {...register("email", { required: "Email is required" })} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder='Password' className='input input-bordered input-primary w-full max-w-xs'
                  {...register("password", { required: "Password is required" })} />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>
              <div className='flex justify-around mt-4'>
                <button type="submit" className='bg-[#A51313] text-white px-3 py-1 rounded-md hover:bg-[#A51313]/80 duration-200 hover:text-white hover:cursor-pointer'>Login</button>
                <p>Not registered? <Link to="/signup" className='text-blue-500 cursor-pointer'>Signup</Link></p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
