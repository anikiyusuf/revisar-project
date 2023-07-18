 import Dashboard from "./landpage/Dashboard"
 import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import SignIn from "./sign/SignIn"
import SignUp from "./sign/SignUp";
import { AuthorDash ,  ReviewerDash} from "./components/index"

function App() {


  return (
    <>
    <div className="bg-[#F5EEE0]">
    <Router>
      <Routes>
     <Route path="/" element={<Dashboard/>}/>
     <Route path="/SignIn" element={<SignIn/>}/>
     <Route path="/SignUp" element={<SignUp/>}/>
     <Route path="/AuthorDash" element={<AuthorDash/>}/>
     <Route path="/ReviewerDash" element={<ReviewerDash/>}/>
    </Routes>
    </Router>
    </div>
       
    </>
  )
}

export default App
