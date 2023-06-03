import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SharedLayout from "./components/SharedLayout"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SharedLayout/>}> */}
              <Route path="/" element={<Register />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/*" element={<Error />}></Route>
            {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
