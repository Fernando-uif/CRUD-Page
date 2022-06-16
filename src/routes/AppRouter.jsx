import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashBoardScreen } from "../components/Dashboard/DashBoardScreen";
import { LoginScreen } from "../components/Login/LoginScreen";

export const AppRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<DashBoardScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
};
