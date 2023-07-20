import { useState  } from "react"
import { AuthSignIn , ReviewSignIn} from "../components/index"
import { Link } from "react-router-dom"
import Carousel from "../components/Carousel"
import { images } from "../imageDummy"
import Frame2 from "../assets/Frame 2.png"

export default function SignIn() {
const [sign , setSign ] = useState(false)


 function openAuth(){
    setSign(true)
}

function openReviewer(){
     setSign(false)
}

  return (
    <>  
      
                 <div className="flex flex-col justify-center h-24 ml-12 items-start gap-2 w-[1240px] p-3 rounded-md  backdrop-blur-lg">
                <img src={Frame2} alt="logo"/>
                </div>
                <div className="flex items-center justify-center h-[560px] gap-24">
         <div className=" p-8 w-80  items-center gap-10 rounded-md bg-[#fdfcf8] relative">
  <p className="text-center">Welcome Back</p>
<div className="flex gap-3 border-b-2 border-[#D0BFBF] ">
  <div className="whitespace-nowrap  hover:border-b-2 border-red-500"  onClick={openAuth}>I am an Author</div>
  <div className="whitespace-nowrap  hover:border-b-2 border-red-500" onClick={openReviewer}>I am  a Reviewer</div>
</div>
    {sign ? (<AuthSignIn/>): (<ReviewSignIn/>)}
  <p className="text-center">New user ? <Link to="/SignUp" className="text-[#d3455b]">Create an account</Link></p>
  </div>
    <Carousel images={images}/>
</div>

    </>
  )
}
