import React from "react";

function Button({ text }) {
  return (
    <button className="px-8 py-3 mt-8 text-xl font-bold text-white bg-orange-400 rounded-full hover:bg-orange-500 transition duration-300">
      {text}
    </button>
  );
}

export default Button;
