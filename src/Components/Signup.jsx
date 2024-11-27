import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleLoginClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('my_modal_3').showModal();
    }, 100);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
      <div className="modal-box max-w-md mx-auto relative">
        <button 
          onClick={() => navigate('/')}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-2xl mb-6 text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-4'>
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" placeholder='Enter your full name' className='input input-bordered input-primary w-full'
                {...register("fullName", { required: "Full name is required" })} />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email ID</span>
              </label>
              <input type="email" placeholder='Enter your email' className='input input-bordered input-primary w-full'
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder='Create password' className='input input-bordered input-primary w-full'
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })} />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder='Confirm password' className='input input-bordered input-primary w-full'
                {...register("confirmPassword", { 
                  required: "Please confirm your password",
                  validate: value => value === watch('password') || "Passwords do not match"
                })} />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-[#A51313] text-white px-6 py-2 rounded-md hover:bg-[#A51313]/80 duration-200 hover:text-white hover:cursor-pointer'>Sign Up</button>
              <p>Already registered? <span onClick={handleLoginClick} className='text-blue-500 cursor-pointer'>Login</span></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
