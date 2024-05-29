import React from "react";

const Card = ({
  text,
  animation,
  delay,
}: {
  text: string;
  animation: string;
  delay: string;
}) => {
  return (
    <div
      className="bg-white text-black font-medium p-6 rounded-xl shadow-lg my-3 flex items-center justify-center"
      data-aos={animation}
      data-aos-delay={delay}
    >
      <p className="text-2xl leading-10">{text}</p>
    </div>
  );
};

export default Card;
