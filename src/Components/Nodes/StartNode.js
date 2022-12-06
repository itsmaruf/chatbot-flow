import React from "react";
import { Handle, Position } from "reactflow";
import { BsArrowReturnRight } from "react-icons/bs";

import "./Nodes.css";

const StartNode = () => {
  return (
    <div className="start-node">
      <button className="btn btn-primary text-white rounded-full">
        <BsArrowReturnRight className="mr-2" />
        Start Flow
      </button>

      <Handle id="a"  type="source" position={Position.Right}></Handle>
    </div>
  );
};

export default StartNode;
