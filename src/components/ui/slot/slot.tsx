import React from "react";

const Slot = ({ children, ...props }: SlotProps) => {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, props);
  }

  return children;
};

export default Slot;
