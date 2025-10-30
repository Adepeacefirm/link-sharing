import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MyLinks from "./MyLinks";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const Customize = () => {
  const {
    addLink,
    setAddLink,
    handleAddLink,
    handleSave,
    links,
    options,
    preview,
    firstName,
    lastName,
    email,
    setLinks,
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
      <section className="hidden lg:block lg:my-15 lg:relative">
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
                {...provided.draggableProps} ref={provided.innerRef}
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
        <div className="absolute top-35 left-15 bg-white px-7">
          <p className="text-grey900 font-bold">
            {firstName} {lastName}
          </p>
        </div>
        <div className="absolute top-41 left-10 bg-white px-7 text-sm">
          <p>{email}</p>
        </div>
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
      </section>
      <section className="lg:w-[60%]">
        <main className="w-[70%] mx-auto my-8 sm:my-15">
          <section className="">
            <h1 className="font-bold text-grey900 text-2xl">
              Customize your links
            </h1>
            <p className="text-sm my-1 text-grey500">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button
              onClick={() => {
                setAddLink(true);
                handleAddLink();
              }}
              className="text-purple600 block w-full border border-purple600 my-5 p-2 cursor-pointer rounded-md"
            >
              + Add new link
            </button>
          </section>
          {!addLink ? (
            <section className="my-10">
              <div>
                <img
                  className="mx-auto w-[clamp(7rem,50%,13rem)]"
                  src="/illustration-empty.svg"
                  alt="illustration"
                />
              </div>
              <h2 className="font-bold text-grey900 text-xl my-5 text-center">
                Let's get you started
              </h2>
              <p className="text-grey500 text-center">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </section>
          ) : (
            <MyLinks />
          )}
        </main>

        <button
          onClick={handleSave}
          className={`w-[85%] sm:w-[15%] block mx-auto sm:mx-0 sm:ml-auto sm:mr-20 p-3 text-white rounded-md cursor-pointer my-5 ${
            addLink ? "bg-purple600" : "bg-purple600/50"
          }`}
          type="button"
        >
          Save
        </button>
      </section>
    </div>
  );
};

export default Customize;
