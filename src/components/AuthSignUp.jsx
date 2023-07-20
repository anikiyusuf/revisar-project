import { Link} from "react-router-dom"
export default function AuthSignUp() {
  return (
    <>
    <div className="">
        <form onSubmit="submit">
        <label htmlFor="name">Full Name</label><br/>
            <input type="text" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" required/><br/>
          <label htmlFor="email">Email</label><br/>
          <input  className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" type="email" required/><br/>
        <label htmlFor="password">Password</label><br/>
        <input  className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" type="password" required/><br/>
        <label htmlFor="department">Department</label><br/>
        <input className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" type="text"  required/><br/> 
        <label htmlFor="faculty">Faculty</label><br/>
        <input className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" type="text"  required/><br/>
        <label htmlFor="research">Field of Research</label><br/>
        <input className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" type="text" required/><br/>
        {/* <button type="submit" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-center gap-2 text-white rounded-sm bg-[#d3455b]"></button> */}
      <Link to="/SignIn"  className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-center gap-2 text-white rounded-sm bg-[#d3455b]">Sign Up</Link>
        </form>
    </div>
    </>
  )
}
