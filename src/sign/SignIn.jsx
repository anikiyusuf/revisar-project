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
        <div>
                 <div className="flex flex-col justify-center h-24 ml-12 items-start gap-2 w-[1240px] p-3 rounded-md  backdrop-blur-lg">
                <img src={Frame2} alt="logo"/>
                </div>
                <div className="flex items-center justify-center h-[560px] gap-24">
           <div className=" p-8 w-80 flex-col items-center gap-10 rounded-md bg-[#fdfcf8]">
         <p>Welcome Back</p>
       <div className="flex gap-4">
        <div onClick={openAuth} className=""> <p className="whitespace-nowrap hover:border-b-2 border-red-500">I am  an Author </p>
        <br/>
        <>{sign ? (<AuthSignIn />) :""}</>
        </div>
       <div onClick={openReviewer} className="">
       <p className="whitespace-nowrap hover:border-b-2 border-red-500">I am a Reviewer</p> 
       <br/>
       <div className="-ml-24">{sign?"":(<ReviewSignIn/>)}</div>
      </div>
    </div>
   
    <p className="">New user ? <Link to="/SignUp">Create an account</Link></p>
 
  </div>
    <Carousel images={images}/>
</div>
  </div>
    </>
  )
}
