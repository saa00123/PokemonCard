import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackgroundImage from "./components/ImageComponents/BackgroundImage";
import Header from "./components/BaseComponents/Header";

import Home from "./pages/main/Home";
import CardRegistration from "./pages/main/CardRegistration";
import Auction from "./pages/main/Auction";
import FinishAuction from "./pages/main/FinishAuction";
import FinishAuctionDetail from "./pages/main/FinishAuctionDetail";
import MyPage from "./pages/main/MyPage";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import SignUpComplete from "./pages/Login/SignUpComplete";
import EmailAuth from "./pages/Login/EmailAuth";
import FindIdPassword from "./pages/Login/FindIdPassword";
import AfterFindId from "./pages/Login/AfterFindId";
import ResetPassword from "./pages/Login/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <BackgroundImage />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        {/** Main */}
        <Route
          path="/CardRegistration"
          element={
            <>
              <Header />
              <CardRegistration />
            </>
          }
        />
        <Route
          path="/Auction"
          element={
            <>
              <Header />
              <Auction />
            </>
          }
        />
        <Route
          path="/FinishAuction"
          element={
            <>
              <Header />
              <FinishAuction />
            </>
          }
        />
        <Route
          path="/FinishAuctionDetail"
          element={
            <>
              <Header />
              <FinishAuctionDetail />
            </>
          }
        />
        <Route
          path="/MyPage"
          element={
            <>
              <Header />
              <MyPage />
            </>
          }
        />

        {/** Login */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpComplete" element={<SignUpComplete />} />
        <Route path="/EmailAuth" element={<EmailAuth />} />
        <Route path="/FindIdPassword" element={<FindIdPassword />} />
        <Route path="/AfterFindId" element={<AfterFindId />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
