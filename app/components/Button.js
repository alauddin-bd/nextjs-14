"use client";
import React from "react";

const Button = () => {
  return (
    <div className="mt-4">
      <button
        className="bg-green-500 rounded-sm px-4 py-2"
        onClick={() => console.log("I have clicked ")}
      >
        Click Here
      </button>
    </div>
  );
};

export default Button;
