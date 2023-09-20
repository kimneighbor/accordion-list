import AccordionItem from "@/components/AccordionItem";
import React, { useState } from "react";

const Home: React.FC = () => {
  return (
    <div className="fixed left-0 w-full md:w-3/5">
      <AccordionItem title="Arccodion">
        <div className="flex" style={{ overflowX: "auto", maxWidth: "100%" }}>
          <img
            className="w-1/4"
            src="https://i.pinimg.com/474x/b3/89/0f/b3890f4f15b9cda3282bc5014434058a.jpg"
          />
          <img
            className="w-1/4"
            src="https://i.pinimg.com/474x/32/09/66/3209663245dd5a5f30839220a29c1403.jpg"
          />
          <img
            className="w-1/4"
            src="https://i.pinimg.com/474x/7e/91/cc/7e91cceafb309aab867828ce13ec5300.jpg"
          />
          <img
            className="w-1/4"
            src="https://i.pinimg.com/474x/91/7d/50/917d501bdf83742df301499421e673f9.jpg"
          />
          <img
            className="w-1/4"
            src="https://i.pinimg.com/474x/31/a8/a7/31a8a760fdc80e2c0260f4cd5fc34029.jpg"
          />
        </div>
        <div className="flex flex-col">hi misdf</div>
      </AccordionItem>
      <AccordionItem title="Item 2">Content for Item 2</AccordionItem>
      <AccordionItem title="Item 3">Content for Item 3</AccordionItem>
      <AccordionItem title="Item 3">Content for Item 3</AccordionItem>
      <AccordionItem title="Item 3">Content for Item 3</AccordionItem>
      <AccordionItem title="Item 3">Content for Item 3</AccordionItem>
      <AccordionItem title="Item 3">Content for Item 3</AccordionItem>
      <AccordionItem title="Item 3">Content for Item 3</AccordionItem>
    </div>
  );
};

export default Home;
