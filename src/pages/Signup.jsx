import React from 'react'

const Signup = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-6'>Sign Up</h1>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Full Name</label>
            <input 
              type='text' 
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              placeholder='Enter your full name'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2'>Email</label>
            <input 
              type='email' 
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 mb-2'>Password</label>
            <input 
              type='password' 
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              placeholder='Enter your password'
            />
          </div>
            <div className='mb-6'>
            <label className='block text-gray-700 mb-2'>Confirm Password</label>
            <input 
              type='password' 
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              placeholder='Confirm your password'
            />
          </div>
          <button 
            type='submit'
            className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition'
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
