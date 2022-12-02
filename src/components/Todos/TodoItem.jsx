import React, { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addSubtask, deleteCard } from "../../store/todoSlice";
import { BoxForm, BoxItem, BoxText, Button, Input } from "./StyleTodoItem";
import SubtaskList from "./subtask/SubtaskList";

const TodoItem = ({ text, id, subtask }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const subtasks = {
    mainId: id,
    value: value,
    id: Math.random().toString(),
  };

  const onClickHandler = (e) => {
    e.preventDefault();

    if (value.trim().length) {
      dispatch(addSubtask(subtasks));
    }
    setValue("");
  };

  const deleteHandler = () => {
    dispatch(deleteCard(id));
  };

  return (
    <>
      <BoxItem>
        <BoxText>
          <li>{text}</li>
          <RiDeleteBin2Line onClick={deleteHandler} className="deleteIcon" />
        </BoxText>
        <BoxForm>
          <Input
            type="text"
            placeholder="Добавить задачу"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="submit" onClick={onClickHandler}>
            ADD TASK
          </Button>
        </BoxForm>
        <SubtaskList subtask={subtask} />
      </BoxItem>
    </>
  );
};

export default TodoItem;
