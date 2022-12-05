import React from "react";
import { Handle, Position } from "reactflow";

import "./Nodes.css";

const StartNode = () => {
  return (
    <div className="start-node">
      <button className="btn btn-primary text-white rounded-full">
        {" "}
        Start Flow
      </button>

      <Handle id="a" type="source" position={Position.Right}></Handle>
    </div>
  );
};

export default StartNode;
