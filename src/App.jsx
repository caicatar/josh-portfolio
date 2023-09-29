import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// Components
import Loader from "./pages/loader/loader";
import Landing from "./pages/landing/Landing";

function App() {
  // State to manage loader visibility
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader ? (
        // Show loader until initial route is loaded
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <div
          style={{minWidth:'900px'}}
        >
          {/* Header */}
          {/* <Header /> */}
          {/* Define routes */}
          <Landing/>
          {/* Footer */}
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}

export default App;
