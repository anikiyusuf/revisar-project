import { Link } from "react-router-dom"

export default function ReviewSignIn() {
  return (
    
    <>
     <div className="alsolute block">
     <form onSubmit="hhdid">
      <label htmlFor="email">Email</label><br/>
      <input type="email"   className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300"/><br/>
      <label htmlFor="password" >Password</label><br/>
      <input type="password" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300"  required/> <br/>
      <Link to="/ReviewerDash" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-center gap-2 text-white rounded-sm bg-[#d3455b]">Sign In</Link>
     </form>
    </div>
    </>
    )
}
