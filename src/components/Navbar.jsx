import { Link } from "react-router-dom"
import Frame2 from "../assets/Frame 2.png"

export default function Navbar() {
  return (
         <>
         <header className="flex mb-20">
            <div className=" flex mt-4  bg-white p-6  rounded-xl  justify-between  gap-8 m-auto w-[1200px]">
            <div className="logo mr-4">
                <img src={Frame2} alt="logo"/>
            </div>
            <div className="list">
               <ul className="flex gap-8">
                <li>About</li>
                <li>Journals</li>
                <li>Conferences</li>
                <li>Manuscripts</li>
                </ul> 
           </div>
          
            <Link to="/SignIn" className="bg-[#D3455B] text-[#FFF] p-1 rounded">Sign In</Link>
           </div>
         </header>
         </>
  )
}
