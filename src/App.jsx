import { Outlet } from "react-router-dom";
import Main from "./components/Main";



const App = () => {
  return (
    <div>
       <Main></Main>
      <Outlet></Outlet>
    </div>
  );
};

export default App;