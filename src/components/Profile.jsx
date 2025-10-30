import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const Profile = () => {
  const {
    links,
    setLinks,
    options,
    preview,
    handleFileChange,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    handleProfileSave,
  } = useContext(AppContext);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(links);
    const [movedItem] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedItem);

    setLinks(reordered);
    localStorage.setItem("myLinks", JSON.stringify(reordered));
  };

  return (
    <div className="lg:flex lg:justify-center">
      <section className="hidden lg:block lg:my-15 lg:ml-20 lg:relative">
        <div>
          <img
            className="w-[80%]"
            src="/illustration-phone-mockup.svg"
            alt=""
          />
        </div>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="links">
            {(provided) => (
              <div
                {...provided.draggableProps}
                ref={provided.innerRef}
                className="absolute top-55 left-7 w-[62%] flex flex-col gap-3"
              >
                {links.map((link, index) => {
                  const opt = options.find((o) => o.label === link.platform);
                  return (
                    <Draggable
                      key={index}
                      draggableId={`${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`w-full p-2 ${opt?.color} text-white rounded-lg flex items-cente justify-between`}
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
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="absolute top-13 left-22">
          {preview && (
            <div>
              <img
                className="w-[32%] aspect-square rounded-full"
                src={preview}
                alt={preview}
              />
            </div>
          )}
        </div>
        <div className="absolute top-35 left-15 bg-white px-7">
          <p className="text-grey900 font-bold">
            {firstName} {lastName}
          </p>
        </div>
        <div className="absolute top-41 left-10 bg-white px-7 text-sm">
          <p>{email}</p>
        </div>
      </section>
      <section className="w-[70%] lg:w-[50%] mx-auto my-8 sm:my-15">
        <div>
          <h1 className="font-bold text-grey900 text-2xl">Profile Details</h1>
          <p className="text-sm my-1 text-grey500">
            Add your details to create a personal touch to your profile.
          </p>
        </div>

        <div className="my-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500 sm:w-[50%]">Profile picture</p>
          <div className="flex flex-col sm:flex-row sm:gap-3 sm:items-center sm:w-[80%]">
            <input
              onChange={handleFileChange}
              type="file"
              id="fileInput"
              accept="image/*"
              className="border p-2 rounded w-full hidden"
            />

            <div className="bg-grey100 py-8 w-[60%] rounded-2xl my-5 sm:w-[50%] sm:ml-auto">
              <label htmlFor="fileInput">
                {preview ? (
                  <img
                    className="w-32 aspect-square block rounded-full object-cover mx-auto"
                    src={preview}
                    alt={preview}
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center gap-2">
                    <img
                      className="w-[15%] "
                      src="/image-preview.png"
                      alt="preview"
                    />
                    <p className="text-sm text-purple600">* Upload Image</p>
                  </div>
                )}
              </label>
            </div>
            <p className="text-xs text-grey500 font-medium sm:w-[50%]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
        </div>
        <section className="w-full mx-auto">
          <form className="flex flex-col gap-4 text-grey500">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-sm sm:w-[50%]" htmlFor="first-name">
                First name*
              </label>
              <input
                className="block border w-full py-2 px-3 rounded-md"
                type="text"
                name="first-name"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-sm sm:w-[50%]" htmlFor="last-name">
                Last name*
              </label>
              <input
                className="block border w-full py-2 px-3 rounded-md"
                type="text"
                name="last-name"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <label className="text-sm sm:w-[50%]" htmlFor="email">
                Email
              </label>
              <input
                className="block border w-full py-2 px-3 rounded-md"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
          <div className="w-full border-t border-grey200 mt-15 mb-5 py-3">
            <button
              onClick={handleProfileSave}
              className={`w-full sm:w-[15%] block mx-auto sm:mx-0 sm:ml-auto p-3 text-white rounded-md bg-purple600
          }`}
              type="button"
            >
              Save
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Profile;
