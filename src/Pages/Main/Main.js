import React from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TestFlow from "../../Components/TestFlow/TestFlow";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <TestFlow></TestFlow>
    </div>
  );
};

export default Main;
