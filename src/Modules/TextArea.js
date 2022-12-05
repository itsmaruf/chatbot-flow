import React from "react";

const TextArea = ({ onChange, rows, placeHolder, value }) => {
  return (
    <div>
      <textarea
        className="textarea border border-gray block w-full"
        rows={rows}
        onChange={onChange}
        placeholder={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
