import React from "react";

const EventCard = (props) => {
  return (
    <div
      className="event w-fit h-fit my-20 text-center m-10"
      style={{
        backgroundImage: "url(/assets/event_list_bg.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img className="w-60 h-full p-2" src={props.image} alt="" />
      <h3 className="bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 font-extrabold block text-transparent bg-clip-text mb-2">
        {props.title}
      </h3>
      <button
        className="mb-6 bg-[#f4d470] py-1 px-4 rounded-lg font-bold "
        type="button"
      >
        {props.button}
      </button>
    </div>
  );
};

export default EventCard;
