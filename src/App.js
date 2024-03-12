import React, { Fragment } from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./component/home/home.js";
import Detail from "./component/detail/detail.js";
import Login from "./component/login/login.js";
import Explore from "./component/explore/explore.js";
import Reels from "./component/reels/reels.js";
import Message from "./component/message/message.js";
import { useState, useEffect } from "react";
import { publicRoutes, privateRoutes } from "./route/index.js";
import Layout from "./layout/index.js";
function App() {
  const [change, setChange] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setChange(true);
    }
  }, []);
  console.log("aaa" + localStorage.getItem("name"));
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            {change ? (
              <>
                {[...privateRoutes].map((routes, index) => {
                  const Page = routes.component;
                  return (
                    <Route
                      key={index}
                      path={routes.path}
                      element={
                        <>
                          <Layout>
                            <Page />
                          </Layout>
                        </>
                      }
                    />
                  );
                })}
              </>
            ) : (
              <>
                {[...publicRoutes].map((routes, index) => {
                  const Page = routes.component;
                  return (
                    <Route
                      key={index}
                      path={routes.path}
                      element={
                        <>
                          <Page />
                        </>
                      }
                    />
                  );
                })}
              </>
            )}
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
