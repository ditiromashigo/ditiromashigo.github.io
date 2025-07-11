import { useState } from "react";
import BlobScene from "./BlobScene";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import "./App.css";

function App() {
  return (
    <>
    <TopMenu />
    <BlobScene />
    <BottomMenu />
    </>
  );
}

export default App;
