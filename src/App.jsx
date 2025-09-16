import './App.css'
import LeftSide from "./components/LeftSide/LeftSide.jsx";

function App() {


  return (
    <div className='App'>

      {/*Left side*/}
      <div className='left-side-home'>
        <LeftSide />
      </div>

      {/*Middle side*/}
      <div className='middle-side-home'>
        Middle side
      </div>

      {/*Right side*/}
      <div className='right-side-home'>
        Right side
      </div>

    </div>
  )
}

export default App
