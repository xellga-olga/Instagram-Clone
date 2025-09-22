import './App.css'
import LeftSide from "./components/LeftSide/LeftSide.jsx";
import MiddleSide from "./components/MiddleSide/MiddleSide.jsx";
import RightSide from "./components/RightSide/RightSide.jsx";
import Login from "./components/Login/Login.jsx";

function App() {


  return (
    <>
      <Login />

      <div className='App'>
        {/*/!*Left side*!/*/}
        {/*<div className='left-side-home'>*/}
        {/*  <LeftSide />*/}
        {/*</div>*/}

        {/*/!*Middle side*!/*/}
        {/*<div className='middle-side-home'>*/}
        {/*  <MiddleSide />*/}
        {/*</div>*/}

        {/*/!*Right side*!/*/}
        {/*<div className='right-side-home'>*/}
        {/*  <RightSide />*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export default App
