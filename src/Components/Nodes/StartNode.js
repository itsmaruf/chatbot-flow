import React from "react";
import { Handle, Position } from "reactflow";
import { BsArrowReturnRight } from "react-icons/bs";

import "./Nodes.css";

const StartNode = ({ isValidConnection }) => {
  return (
    <div className="start-node">
      <button className="btn btn-primary text-white rounded-full">
        <BsArrowReturnRight className="mr-2" />
        Start Flow
      </button>

      <Handle
        id="start-source"
        type="source"
        position={Position.Right}
        isValidConnection={isValidConnection}
      ></Handle>
    </div>
  );
};

export default StartNode;
