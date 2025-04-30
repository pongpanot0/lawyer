import { PlusCircleIcon } from "lucide-react";
import React from "react";

const Events = () => {
  const data = [
    {
      name: "Negotitions Call with ...",
      time: "10:00 am - 11:30 am",
    },
    {
      name: "Negotitions Call with ...",
      time: "10:00 am - 11:30 am",
    },
    {
      name: "Negotitions Call with ...",
      time: "10:00 am - 11:30 am",
    },
    {
      name: "Negotitions Call with ...",
      time: "10:00 am - 11:30 am",
    },
    {
      name: "Negotitions Call with ...",
      time: "10:00 am - 11:30 am",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-xl font-bold">Events</p>
        <p className="text-xl font-bold">
          <PlusCircleIcon
            color="white"
            fill="black"
            enableBackground={"true"}
            className=""
          />
        </p>
      </div>
      <div>
        {data.map((res,index) => {
          return (
            <div className="flex items-center w-full justify-between mt-3 bg-gray-200 px-2 py-1 rounded-lg" key={index}>
              <div className=" ">
                <div className="bg-amber-600 rounded-lg px-2 py-1 mr-2 text-white text-center">
                  R{" "}
                </div>
              </div>

              <div className="flex-1 overflow-hidden">
                <p className="truncate font-extralight text-sm w-full">
                  {res.name}
                </p>
                <p className="truncate font-extralight text-sm w-full">
                {res.time}
                </p>
              </div>

              <div className=" flex justify-center ml-2">
                <img
                  className="rounded-full h-8 w-8 object-cover"
                  src="https://loremflickr.com/g/600/600/boy"
                  alt="profile"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
