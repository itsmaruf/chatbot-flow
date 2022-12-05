import React from "react";
import "./Sidebar.css";

import { VscDebugStart } from "react-icons/vsc";
import { MdWavingHand, MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrCatalog, GrDrag } from "react-icons/gr";
import { FiPackage } from "react-icons/fi";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="floating-sidebar">
      <h2 className="text-lg font-bold">Nodes</h2>
      <div className="divider"></div>

      <div className="items">
        <div
          className="dndnode p-2 font-bold rounded-md border-gray flex items-center my-2 justify-between"
          onDragStart={(event) => onDragStart(event, "start")}
          draggable
        >
          <div className="flex justify-start items-center">
            <VscDebugStart className="mr-2" /> Start
          </div>{" "}
          <GrDrag />
        </div>
        <div
          className="dndnode p-2 font-bold rounded-md border-gray flex items-center justify-between my-2"
          onDragStart={(event) => onDragStart(event, "greeting")}
          draggable
        >
          <div className="flex justify-start items-center">
            <MdWavingHand className="mr-2" /> Greeting
          </div>
          <GrDrag />
        </div>
        <div
          className="dndnode p-2 font-bold rounded-md border-gray flex items-center my-2 justify-between"
          onDragStart={(event) => onDragStart(event, "catalog")}
          draggable
        >
          <div className="flex justify-start items-center">
            <GrCatalog className="mr-2" /> Catalogue
          </div>
          <GrDrag />
        </div>
        <div
          className="dndnode p-2 font-bold rounded-md border-gray flex items-center my-2 justify-between"
          onDragStart={(event) => onDragStart(event, "packageTracker")}
          draggable
        >
          <div className="flex justify-start items-center">
            <FiPackage className="mr-2" /> Packaging
          </div>
          <GrDrag />
        </div>
        <div
          className="dndnode p-2 font-bold rounded-md border-gray flex items-center my-2 justify-between"
          onDragStart={(event) => onDragStart(event, "contact")}
          draggable
        >
          <div className="flex justify-start items-center">
            <MdOutlineConnectWithoutContact className="mr-2" /> Contact
          </div>
          <GrDrag />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
