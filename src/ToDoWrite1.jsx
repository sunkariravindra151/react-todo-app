import React from "react";
import Item from "./Item";
import Date1 from "./Date1";
import Button from "./Button";
import Row from "./Row";
import { useState } from "react";
function ToDoWrite1({ work, setWork }) {
  let functionClick = (task) => {
    setWork(work.filter((item) => item.task !== task));
  };

  return (
    <>
      {work.length === 0 ? (
        <p>Work array is empty</p>
      ) : (
        work.map((item, index) => (
          <Row key={index}>
            <Item item1={item.task} />
            <Date1 item2={item.date} />
            <Button item1={item.task} functionClick={functionClick} />
          </Row>
        ))
      )}
    </>
  );
}

export default ToDoWrite1;
