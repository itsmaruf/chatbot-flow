import React from "react";

import { FaArrowLeft, FaCaretRight } from "react-icons/fa";

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
            <span className="breadcrumb-separator inline-block mx-2">/</span>
            <a href="/about">Store Assistant</a>
          </div>
        </div>

        <div className="flex justify-end items-center">
          <button className="btn btn-outline  text-white btn-sm border border-gray-400">
            <FaCaretRight className="mr-2" />
            Preview Demo
          </button>
          <button className="btn btn-primary  text-white btn-sm ml-3">
            <FaCaretRight className="mr-2" />
            Publish Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
