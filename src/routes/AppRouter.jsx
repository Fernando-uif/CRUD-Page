import { Routes, Route } from "react-router-dom";
import { DashBoardScreen } from "../components/Dashboard/DashBoardScreen";

export const AppRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<DashBoardScreen />} />
      </Routes>
    </div>
  );
};
