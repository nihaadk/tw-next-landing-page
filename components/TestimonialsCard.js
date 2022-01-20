import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import avatar from "../public/img/avatar.png";

const TestimonialsCard = (props) => {
  return (
    <div className="bg-white mx-auto  h-72 flex flex-col justify-around shadow-lg rounded-xl p-4">
      <p className="text-gray-600 mb-5">
        <span className="text-blue-500 font-bold text-xl">"</span>
        {props.description}
        <span className="text-blue-500 font-bold text-xl">"</span>
      </p>
      <div className="flex bg-blue-100 items-center rounded-full">
        <a href="#" alt="link">
          <div className="rounded-full pt-2">
            <Image src={avatar} alt="avatar" width={100} height={100} />
          </div>
        </a>
        <div className="flex flex-col justify-center p-2">
          <span className="text-blue-500 text-xl">{props.name}</span>
          <span className="text-black text-sm font-bold">{props.title}</span>
        </div>
      </div>
    </div>
  );
};

TestimonialsCard.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default TestimonialsCard;
