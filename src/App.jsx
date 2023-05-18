import { Outlet } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div>
       <Main></Main>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;