import {useState} from "react"
import { AuthSignUp , ReviewerSignUp } from "../components"
import { Link } from "react-router-dom"
import { images  } from "../imageDummy"
import Carousel from "../components/Carousel"
import Frame2 from "../assets/Frame 2.png" 
export default function SignUp() {
    const [signUp , setSignUp ] = useState(false)


 function openAuthSign(){
    setSignUp(true)
}

function openReviewerSign(){
     setSignUp(false)
}

  return (
    <>

          <div className="flex flex-col justify-center h-24 ml-12 items-start gap-2 w-[1240px] p-3 rounded-md  backdrop-blur-lg">
                <img src={Frame2} alt="logo"/>
                </div>
     <div className="flex items-center justify-center h-[760px] gap-24">
     <div className=" p-8 w-80  items-center gap-12 rounded-md bg-[#fdfcf8] relative">
     <p className="text-center"> I am a Reviewer</p>
      <div className="flex gap-3 border-b-2 border-[#D0BFBF]">
        <div className="whitespace-nowrap hover:border-b-2 border-red-500" onClick={openAuthSign}>I am an Author</div>
        <div className="whitespace-nowrap hover:border-b-2 border-red-500" onClick={openReviewerSign}> I am a Reviewer</div>
     </div>
     {signUp?(<AuthSignUp/>):(<ReviewerSignUp/>)}
 <p className="text-center"> <Link to="/SignIn">SignIn</Link> </p>
     </div>
     <div className="-mt-96">
    <Carousel images={images}/>
    </div>
    </div>
    
    </>
  )
}
