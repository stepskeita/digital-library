import React from "react";

const ButtonTooltip = ({ target, title }) => {
  return (
    <div
      id={target}
      role="tooltip"
      class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    >
      {title}
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default ButtonTooltip;
