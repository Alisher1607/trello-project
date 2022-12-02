import React, { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { BoxSubtaskItem, BtnModal, Title } from "./StyleSubtaskList";
import { deleteSub } from "../../../store/todoSlice";
import Modal from "./Modal";

const SubtaskItem = ({ value, id, mainId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const deleteHandlerSub = () => {
    dispatch(
      deleteSub({
        id,
        mainId,
      })
    );
  };

  return (
    <>
      <BoxSubtaskItem>
        <BtnModal onClick={() => setIsOpen(true)}>Open Modal</BtnModal>
        <Title>{value}</Title>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {value}
        </Modal>
        <RiDeleteBin2Line onClick={deleteHandlerSub} className="deleteIcon" />
      </BoxSubtaskItem>
    </>
  );
};

export default SubtaskItem;
