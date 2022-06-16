import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateScreen } from "../Create/CreateScreen";
import { DeleteScreen } from "../Delete/DeleteScreen";
import { ReadScreen } from "../Read/ReadScreen";
import { NavBar } from "../ui/nav/NavBar";
import { UpdateScreen } from "../Update/UpdateScreen";

export const DashBoardScreen = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/read" element={<ReadScreen />} />
        <Route path="/delete" element={<DeleteScreen />} />
        <Route path="/update" element={<UpdateScreen />} />
      </Routes>
    </>
  );
};
