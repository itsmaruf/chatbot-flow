import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="floating-sidebar">
      <h2 className="text-lg font-bold">Steps</h2>
      <div className="divider"></div>

      <div className="items">
        <div
          className="dndnode p-2 rounded-md border-gray flex items-center my-2"
          onDragStart={(event) => onDragStart(event, "start")}
          draggable
        >
          Start Node
        </div>
        <div
          className="dndnode p-2 rounded-md border-gray flex items-center my-2"
          onDragStart={(event) => onDragStart(event, "greeting")}
          draggable
        >
          Greeting Node
        </div>
        <div
          className="dndnode p-2 rounded-md border-gray flex items-center my-2"
          onDragStart={(event) => onDragStart(event, "catalog")}
          draggable
        >
          Catalogue Node
        </div>
        <div
          className="dndnode p-2 rounded-md border-gray flex items-center my-2"
          onDragStart={(event) => onDragStart(event, "packageTracker")}
          draggable
        >
          Package Tracker Node
        </div>
        <div
          className="dndnode p-2 rounded-md border-gray flex items-center my-2"
          onDragStart={(event) => onDragStart(event, "contact")}
          draggable
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
