import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import firebase from "firebase/compat/app";
import firestore from "./Firebase/firestore";

import BackgroundImage from "./components/ImageComponents/BackgroundImage";
import Header from "./components/BaseComponents/Header";

import Home from "./pages/main/Home";
import CardRegistration from "./pages/main/CardRegistration";
import Auction from "./pages/main/Auction";
import FinishAuction from "./pages/main/FinishAuction";
import FinishAuctionDetail from "./pages/main/FinishAuctionDetail";
import FinishAuctionDetailGeneral from "./pages/main/FinishAuctionDetailGeneral";
import MyPage from "./pages/main/MyPage";

import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import SignUpComplete from "./pages/Login/SignUpComplete";
import EmailAuth from "./pages/Login/EmailAuth";
import FindIdPassword from "./pages/Login/FindIdPassword";
import AfterFindId from "./pages/Login/AfterFindId";
import ResetPassword from "./pages/Login/ResetPassword";

function App() {
  useEffect(() => {
    const test = firestore.collection("test");

    test.doc("L9mWBMx8ksYKvtKn6OFH").delete();

    // firestore test
    // test
    //   .doc("test_item")
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       console.log(doc.data());

    //       console.log(doc.id);
    //     }
    //   });
  });

  return (
    <BrowserRouter>
      <BackgroundImage />
      <Routes>
        <Route path="/" element={<Home />} />
        {/** Main */}
        <Route path="/CardRegistration" element={<CardRegistration />} />
        <Route path="/Auction" element={<Auction />} />
        <Route path="/FinishAuction" element={<FinishAuction />} />
        <Route path="/FinishAuctionDetail" element={<FinishAuctionDetail />} />
        <Route path="/FinishAuctionDetailGeneral" element={<FinishAuctionDetailGeneral />} />
        <Route path="/MyPage" element={<MyPage />} />

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
