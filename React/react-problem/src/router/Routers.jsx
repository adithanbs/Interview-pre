import { Routes, Route } from "react-router";
import Home from "../pages/home/home";
import ListPage from "../pages/list-page/list-page";
import { Lift } from "../pages/lift/lift";
import DynamicFromUpdate from "../pages/dynamic-from-update/DynamicFromUpdate";
import ComponentA from "../pages/handle-child-event/componentA";
import NavigationBar from "../components/nav-bar";
import MemoryLeak from "../pages/memory-leak.tsx";
import TestContext from "../pages/test-context/test-context.tsx";

export default function Routers() {
  return (
    <>
    <NavigationBar />
    <Routes>
    <Route index element={<Home />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/dynamic-form-update" element={<DynamicFromUpdate />} />
        <Route path="/lift" element={<Lift />} />
        <Route path="/ref" element={<ComponentA />} />
        <Route path="/memory-leak" element={<MemoryLeak />} />
        <Route path="/test-context" element={<TestContext />} />

    </Routes>
    </>
  );
}