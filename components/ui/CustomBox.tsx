import React from "react";

type DivProps = {
  content: React.ReactNode;
};

const CustomBox: React.FC<DivProps> = ({ content }) => {
  return (
    <div className="relative w-fit p-1">
      <div className="py-2 px-4 bg-primary/10 text-primary w-fit border-[0.1px] border-primary/50 text-center">
        {content}
      </div>
      <div className="absolute h-2 w-2 bg-primary top-0 left-0" />
      <div className="absolute h-2 w-2 bg-primary top-0 right-0" />
      <div className="absolute h-2 w-2 bg-primary bottom-0 left-0" />
      <div className="absolute h-2 w-2 bg-primary bottom-0 right-0" />
    </div>
  );
};

export default CustomBox;
