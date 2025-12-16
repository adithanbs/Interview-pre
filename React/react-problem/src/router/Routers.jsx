import { Routes, Route } from "react-router";
import Home from "../pages/home/home";
import ListPage from "../pages/list-page/list-page";
import DynamicFromUpdate from "../pages/dynamic-from-update/DynamicFromUpdate";

export default function Routers() {
  return (
    <Routes>
    <Route index element={<Home />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/dynamic-form-update" element={<DynamicFromUpdate />} />
    </Routes>
  );
}