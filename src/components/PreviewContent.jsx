import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PreviewContent = () => {
  const { preview, firstName, lastName, links, email, options } =
    useContext(AppContext);
  return (
    <main className="sm:-mt-35 z-10 mb-15">
      <section className="hidden sm:block w-full h-72 bg-purple600 rounded-b-2xl"></section>
      <section className="text-center sm:-mt-20 bg-white sm:w-[45%] lg:w-[25%] sm:mx-auto sm:py-3 sm:rounded-2xl sm:shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        <section className="mt-5">
          <div>
            <img
              className="w-[20%] sm:w-[30%] mx-auto outline-2 outline-purple600 aspect-square rounded-full"
              src={preview}
              alt=""
            />
          </div>
          <p className="mt-3 mb-1 font-bold text-grey900 sm:text-2xl">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-grey500">{email}</p>
        </section>
        <section className="my-8">
          <div className="w-[60%] sm:w-[80%] mx-auto flex flex-col gap-3">
            {links.map((link, index) => {
              const opt = options.find((o) => o.label === link.platform);
              return (
                <div
                  className={`w-full p-2 ${opt.color} text-white rounded-lg flex items-cente justify-between`}
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white">{opt.icon}</span>
                    <span>{link.platform}</span>
                  </div>
                  <span className="text-white">
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
                      />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
};

export default PreviewContent;
