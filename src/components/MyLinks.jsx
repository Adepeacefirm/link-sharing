import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyLinks = () => {
  const {
    links,
    handleUrlChange,
    handleRemove,
    openIndex,
    setOpenIndex,
    handleSelect,
    options,
  } = useContext(AppContext);

  return (
    <section className="flex flex-col gap-10">
      {links.map((link, index) => (
        <div key={index}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/icon-drag-and-drop.svg" alt="drag drop icon" />
              <p className="text-grey500 font-bold">Link #{index + 1}</p>
            </div>
            <button
              onClick={() => handleRemove(index)}
              className="text-grey500"
            >
              Remove
            </button>
          </div>

          <div className="mt-5">
            <p className="text-sm my-2">Platform</p>
            <section className="flex flex-col justify-center">
              <button
                className="w-full border border-grey200 p-3 flex justify-between items-center rounded-md bg-white"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className={`flex items-center gap-2 w-full`}>
                  <span>
                    {
                      options.find(
                        (opt) => opt.label === (link.platform || "Github")
                      )?.icon
                    }
                  </span>
                  <span>{link.platform || "Github"}</span>

                  <span className="ml-auto">
                    <svg
                      className={` transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="9"
                      fill="none"
                      viewBox="0 0 14 9"
                    >
                      <path stroke="#633CFF" strokeWidth="2" d="m1 1 6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </button>
              <div className="ml-3 my-2">
                {openIndex === index && (
                  <ul className="flex flex-col gap-1">
                    {options.map((opt) => (
                      <div key={opt.label} className="">
                        <li
                          onClick={() => handleSelect(index, opt.label)}
                          className={`flex items-center gap-3 ${
                            link.platform === opt.label
                              ? "text-purple600"
                              : "text-grey900"
                          }`}
                        >
                          {opt.icon}
                          <span>{opt.label}</span>
                        </li>
                        <div className="w-full h-px bg-grey200 block my-3"></div>
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </div>

          <div>
            <p className="text-sm my-2">Link</p>
            <div className=" relative border border-grey200 rounded-md">
              <div className="absolute top-3 left-3">
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#737373"
                    d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"
                  />
                </svg>
              </div>
              <input
                onChange={(e) => handleUrlChange(index, e.target.value)}
                value={link.url}
                className="w-full py-3 px-10 placeholder:pl-5"
                type="text"
                placeholder={`e.g. www.${
                  link.platform.toLowerCase() || "example"
                }.com`}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyLinks;
