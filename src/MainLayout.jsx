import { Outlet } from 'react-router-dom';
import LeftSide from "./components/Home/LeftSide/LeftSide.jsx";
import Footer from "./components/Footer/Footer.jsx";

const MainLayout = ({ setSearchOpen, setCreateOpen, setNotificationsOpen }) => {
  return (
    <div className="App">
      <div className="left-side-home">
        <LeftSide
          setSearchOpen={setSearchOpen}
          setCreateOpen={setCreateOpen}
          setNotificationsOpen={setNotificationsOpen}
        />
      </div>

      <div className="middle-side-home">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;