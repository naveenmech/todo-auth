import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-3'>
        <div className='w-[25rem]'>

  <label className="input-group">
    <span className='w-[6.6rem]'>Email</span>
    <input type="text" placeholder="info@site.com" className="input input-bordered border-blue-400" />
  </label>
  </div>
  {/* password */}
  <div  className='w-[25rem]'>
  
  <label className="input-group">
    <span>Password</span>
    <input type="password" placeholder="xxxx" className="input input-bordered border-blue-400" />
  </label>
  </div>
  <div>

  <button className="btn btn-active btn-ghost">Submit</button>
  </div>
    </div>
  )
}

export default Login
