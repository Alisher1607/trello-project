import React from "react";
import { BoxSubtask } from "./StyleSubtaskList";
import SubtaskItem from "./SubtaskItem";

const SubtaskList = ({ subtask }) => {
  return (
    <>
      <BoxSubtask>
        {subtask.map((item) => (
          <SubtaskItem key={item.id} {...item} />
        ))}
      </BoxSubtask>
    </>
  );
};

export default SubtaskList;
