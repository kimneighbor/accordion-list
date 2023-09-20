import React, { useState } from "react";

type AccordionItemProps = {
  title: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-white">
      <button
        className={`w-full py-3 px-2 text-left text-white `}
        onClick={toggleAccordion}
      >
        {title}
      </button>
      <div
        className={`bg-gray-100 overflow-hidden
        transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
