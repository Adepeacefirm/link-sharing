import React from "react";
import { useNavigate } from "react-router-dom";

const PreviewNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[80%] sm:w-[90%] mx-auto sm:my-5 sm:rounded-lg p-1 bg-white z-50 relative">
      <header className="flex items-center justify-between py-5 sm:py-2 sm:px-2 mx-auto">
        <button
          onClick={() => navigate("/")}
          className="px-2 py-2 border cursor-pointer border-purple600 text-purple600 font-medium rounded-lg"
        >
          Back to Editor
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              "www.link-sharing-bouncy.vercel.app/preview"
            );
            alert("Link copied successfully");
          }}
          className="bg-purple600 cursor-pointer text-white px-5 py-2 font-medium rounded-lg"
        >
          Share Link
        </button>
      </header>
    </div>
  );
};

export default PreviewNavbar;
