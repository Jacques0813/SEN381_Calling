import React from "react";

interface IRedButton {
  buttonText: string;
  onClickFunction: () => void; // Change the function type according to your needs
}

const RedButton: React.FC<IRedButton> = ({ buttonText, onClickFunction }) => {
  return (
    <button
      className="group relative h-10 sm:h-12 w-40 sm:w-48 overflow-hidden rounded-2xl bg-red-500 text-lg font-bold text-white"
      onClick={onClickFunction}
    >
      {buttonText}
      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30 z-40"></div>
    </button>
  );
};

export default RedButton;