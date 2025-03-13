import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";  
import Services from "./Services";
import BirthdayDecor from "./birthdaydecor"; 
import AnniversaryDecor from "./anniversary";
import EngagmentDecor from "./engagmentdecor";
import GraduationDecor from "./graduation";
import PartyDecor from "./party";
import HomeDecor from "./homedecor";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />  
        <Route path="/services" element={<Services />} /> 
        <Route path="/birthday-decor" element={<BirthdayDecor/>} />
        <Route path="/anniversary-decor" element={<AnniversaryDecor/>} />
        <Route path="/engagment-decor" element={<EngagmentDecor/>} />
        <Route path="/graduation-decor" element={<GraduationDecor/>} />
        <Route path="/party-decor" element={<PartyDecor/>} />
        <Route path="/home-decor" element={<HomeDecor/>} />
      </Routes>
    </Router>
  );
};

export default App;
