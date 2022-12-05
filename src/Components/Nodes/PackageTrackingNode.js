import React, { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { AiFillMessage, AiOutlineMore, AiOutlineClose } from "react-icons/ai";

import "./Nodes.css";
const PackageTrackingNode = ({ data }) => {
  const [btnVisibility, setBtnVisibility] = useState(false);

  const leftTop = {
    top: 40,
  };

  const visibilityHandler = () => {
    setBtnVisibility(!btnVisibility);
    console.log(btnVisibility);
  };

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="greeting-node relative shadow">
      <div>
        <Handle type="target" position={Position.Left} style={leftTop}></Handle>

        <div className="node-header flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="text-primary border rounded p-1 mr-4 h-auto">
              <AiFillMessage />
            </div>
            <p className="text-lg font-bold">Package Tracking</p>
          </div>
          <button
            onClick={visibilityHandler}
            className="btn bg-transparent border-0 text-black text-lg p-0 hover:bg-transparent"
          >
            {!btnVisibility ? <AiOutlineMore /> : <AiOutlineClose />}
          </button>
        </div>
        <div className="node-body">
          <div className="node-module">
            <input
              type="text"
              className="input border-gray w-full"
              name=""
              id=""
              placeholder="Please input the ID of your package"
              onChange={onChange}
            />
          </div>
          <div className="node-module">
            <input
              type="text"
              className="input border-gray w-full"
              name=""
              id=""
              placeholder="input reply to package_id"
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      {btnVisibility && (
        <div className="node-menu absolute top-14 right-5">
          <button className="btn btn-sm text-black hover:text-white text-xsm bg-white inline-block w-auto">
            Option
          </button>
        </div>
      )}
    </div>
  );
};

export default PackageTrackingNode;