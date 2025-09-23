import './App.css'
import LeftSide from "./components/LeftSide/LeftSide.jsx";
import MiddleSide from "./components/MiddleSide/MiddleSide.jsx";
import RightSide from "./components/RightSide/RightSide.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import {Route, Routes} from "react-router-dom";



function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      <div className='App'>
        {/*Left side*/}
        <div className='left-side-home'>
          <LeftSide />
        </div>

        {/*Middle side*/}
        <div className='middle-side-home'>
          <MiddleSide />
        </div>

        {/*Right side*/}
        <div className='right-side-home'>
          <RightSide />
        </div>
      </div>
    </>
  )
}

export default App
