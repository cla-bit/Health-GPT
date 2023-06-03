import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SharedLayout from "./components/SharedLayout";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Disease from "./pages/Disease";
import IsabiGPT from "./components/IsabiGPT";
import { useState, useEffect } from "react";

const App = () => {
  const [showIsabiGPT, setShowIsabiGPT] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIsabiGPT(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {showIsabiGPT ? (
            <Route path="/" element={<IsabiGPT />} />
          ) : (
            <>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/disease" element={<Disease />} />
                <Route path="/*" element={<Error />} />
              </Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
