import React from "react";

import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <a href="/" className="btn btn-ghost mr-3">
            <FaArrowLeft />
          </a>
          <div className="breadcrumb">
            <a href="/" className="text-gray-600">
              Flows
            </a>
            <span className="breadcrumb-separator">/</span>
            <a href="/about">About</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
