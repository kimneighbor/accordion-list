import AccordionItem from "@/components/AccordionItem";
import React, { useState } from "react";

const Home: React.FC = () => {
  return (
    <div className="fixed left-0 w-full md:w-3/5">
      <AccordionItem title="Arccodion">
        <div>
          <img src="https://t1.daumcdn.net/keditor/emoticon/friends1/large/002.gif" />
          hi mi
        </div>
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
