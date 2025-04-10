'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '../../lib/authService';

export const loginPage = () => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    try {
        const user = await signInWithGoogle();
        router.push("/dashboard");    
      } catch (error: any) {
        alert(error.message);
    }
  }

  return (
    <div className='bg-white h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col max-w-[384px] w-full'>
        <div className="flex justify-center mb-8">
          <img src="/financial-logo.svg" alt="Financial Assistant Logo" className="h-16 w-auto" />
        </div>
        <p className='text-black font-bold text-2xl mb-8 text-center'>
            Sign in to your account
        </p>
        <label className='text-black mb-2 text-sm'>
            Email address
        </label>
        <input type="password" className='border border-gray-400 rounded-md h-8 mb-6' />
        <label className='text-black mb-2 text-sm'>
            Password
        </label>
        <input type="text" className='border border-gray-400 rounded-md h-8' />
        <div className='flex justify-between mt-4 items-center'>
            <div className='flex items-center'>
                <input type="checkbox" />
                <p className='text-black ml-2 text-sm'>Remember me</p>
            </div>
            <p className='text-violet-500 text-sm font-semibold'>Forgot password?</p>
        </div>
        <button className='text-white bg-violet-500 rounded-md py-1 mt-4'>
            Sign in
        </button>
        <div className="flex items-center justify-between w-full my-8">
            <div className="h-0.25 flex-grow bg-gray-400" /> 
            <p className="text-black text-sm font-medium mx-4"> 
                Or continue with
            </p>
            <div className="h-0.25 flex-grow bg-gray-400" /> 
        </div>

        <div className="flex space-x-4 justify-between">
            <button
                onClick={loginWithGoogle}
                className="flex w-full items-center justify-center bg-white text-black border border-gray-400 font-semibold px-6 py-2 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
                <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
                Google
            </button>

            <button
                className="flex w-full items-center justify-center bg-white text-black border border-gray-400 font-semibold px-6 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
            >
                <img src="/github-mark.svg" alt="GitHub" className="w-5 h-5 mr-2" />
                GitHub
            </button>
        </div>

      </div>
    </div>
  )
}

export default loginPage