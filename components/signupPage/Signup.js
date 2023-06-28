import React from 'react'

const Signup = () => {
return (
<div className='flex flex-col items-center justify-center h-screen gap-3'>
{/* first name */}

<div className='flex gap-2'>
<input type="text" placeholder="First Name" className="input input-bordered input-primary w-[12rem]" />
<input type="text" placeholder="Last Name" className="input input-bordered input-primary w-[12rem]" />
</div>
{/* 2 */}
<div className='flex gap-2'>   
<input type="text" placeholder="User Name" className="input input-bordered input-primary w-[12rem]" />
<input type="text" placeholder="Phone Number" className="input input-bordered input-primary w-[12rem]" /></div>
{/* 3 */}


<input type="email" placeholder="Email Address" className="input input-bordered input-primary w-[25rem]" />
<input type="text" placeholder="Country" className="input input-bordered input-primary w-[25rem]" />      
<input type="password" placeholder="Password" className="input input-bordered input-primary w-[25rem]" />
<input type="password" placeholder="Comfirm Password" className="input input-bordered input-primary w-[25rem]" />





{/* submit button */}
<div>
<button className="btn btn-active btn-ghost">Submit</button>
</div>
</div>


)
}

export default Signup
