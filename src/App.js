import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import WebpackLoadersScreen from "./components/WebpackLoadersScreen";
import CssStyleLoaderScreen from "./components/CssStyleLoaderScreen";
import ImageLoaderScreen from "./components/ImageLoaderScreen";
import ImportCssImagesScreen from "./components/ImportCssImagesScreen";
import RandomHashScreen from "./components/RandomHashScreen";
import EndScreen from "./components/EndScreen";

// Pls add wooosh sound to clicks on button

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/webpackloaders" element={<WebpackLoadersScreen />} />
        <Route path="/cssstyleloader" element={<CssStyleLoaderScreen />} />
        <Route path="/imageloader" element={<ImageLoaderScreen />} />
        <Route path="/import" element={<ImportCssImagesScreen />} />
        <Route path="/randomhash" element={<RandomHashScreen />} />
        <Route path="/end" element={<EndScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
