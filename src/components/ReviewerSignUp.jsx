

export default function ReviewerSignUp() {
  return (
    <>
    <div className="absolute block">
           <form onSubmit="hhj" className="">
            <label htmlFor="name">Full Name</label><br/>
            <input type="text" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300"required/><br/>
          <label htmlFor="email">Email</label><br/>
          <input type="email"className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" required/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password"className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" required/><br/>
        <label htmlFor="department">Department</label><br/>
        <input type="text" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" required/><br/> 
        <label htmlFor="faculty">Faculty</label><br/>
        <input type="text" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" required/><br/>
        <label htmlFor="research">Field of Research</label><br/>
        <input type="text" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-start gap-2 rounded-sm border border-gray-300" required/><br/>
        <button type="submit" className="flex w-[230px] h-10 p-3.5 flex-col justify-center items-center gap-2 text-white rounded-sm bg-[#d3455b]">Sign Up</button>
        </form>
    </div>
    </>
  )
}
