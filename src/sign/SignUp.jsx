import {useState} from "react"
import { AuthSignUp , ReviewerSignUp } from "../components"
import { Link } from "react-router-dom"
import { images  } from "../imageDummy"
import Carousel from "../components/Carousel"
import Frame2 from "../assets/Frame 2.png" 
export default function SignUp() {
    const [sign , setSign ] = useState(false)


 function openAuthSign(){
    setSign(true)
}

function openReviewerSign(){
     setSign(false)
}

  return (
    <>

          <div className="flex flex-col justify-center items-start gap-2 flex-shrink-0 w-[1240px] h-90 p-3">
                <img src={Frame2} alt="logo"/>
                </div>
     <div className="flex items-center justify-center h-[760px] gap-24">
        <div className="p-8 flex-col items-center gap-10 rounded-lg bg-[#fdfcf8] block">
           <p>Create an Account</p>
           <div className="flex gap-4">
           <div onClick={openAuthSign}>
          <p className="whitespace-nowrap hover:border-b-2 border-red-500">I am  an Author</p> 
         <div>{sign ? (<AuthSignUp />) :""}
         </div>
        </div>
      <div onClick={openReviewerSign}>
        <p className="whitespace-nowrap hover:border-b-2 border-red-500"> I am a Reviewer</p>
       <div>  {sign?"":(<ReviewerSignUp/>)}
       </div>
       </div>
       </div>
       <Link to="/SignIn" style={{ textDecoration:"none" , paddingRight:"1rem" , color:"black" , fontSize:"1rem", }}>SignIn</Link>
     </div>
<Carousel images={images}/>
    </div>
    
    </>
  )
}
