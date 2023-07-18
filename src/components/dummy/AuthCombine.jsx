import { useState } from 'react'

export default function AuthCombine() {
    // const [form , setForm ] = useState(initialState)
    const [ isSignup , setIssignup] = useState(true)

    const switchMode = () => {
        setIssignup((prevIsSignup) => !prevIsSignup)
    }
  return (

    <div>

    <div>
        <p className='text-blue'>{ isSignup ? 'Create Account ' : 'Welcome Back'}</p>
        <form>
            {isSignup && (
                <><label htmlFor='fullName'> Full Name</label><input type='text' required /></>
)}
 <><label htmlFor='email'> Email</label><input type='email' required /></>
 
        <><label htmlFor='password'> department</label><input type='password' required /></>
       
       {isSignup &&(
        <><label htmlFor='department'> department</label><input type='text' required /></>
       )}
         {isSignup &&(
        <><label htmlFor='faculty'> department</label><input type='text' required /></>
       )}
         {isSignup &&(
        <><label htmlFor='field'> department</label><input type='text' required /></>
       )}
       <>
       <button>{isSignup? "Sign Up":"Sign In"}</button></>
        </form>
</div>
<div>
    <p>{isSignup? "Already Have an account":"New User"}</p>
    <span onClick={switchMode}>
        {isSignup ? "Sign In": "Sign Up"}
    </span>
</div>
    </div>
  )
}
