import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

import { Circles } from "react-loader-spinner"
export const BooleanFlag = createContext();


function App() {

  const [page, setPage] = useState()
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 4000)
  }, [])



  return (
    <>
      <BooleanFlag.Provider value={{ page, setPage }}>
        {loader ?
          <div className="preloader">
            <Circles
              height="80"
              width="80"
              color="#fb4a36"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          : <Router>
            <Routes>
              <Route path="/" element={<><Header />
                <Home />
                <Service />
                <Menu />
                <Reservation />
                <AboutUs />
                <Footer />
              </>} />
              <Route path="/Signup" element={<Signup />} />

            </Routes>
          </Router>}

      </BooleanFlag.Provider>

    </>
  );
}

export default App;
