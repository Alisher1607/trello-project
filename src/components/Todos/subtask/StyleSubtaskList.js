import styled from "styled-components";

export const BoxSubtask = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const BoxSubtaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: green;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
  gap: 5px;
  background: rgb(76, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(76, 58, 180, 1) 0%,
    rgba(29, 237, 253, 1) 50%,
    rgba(69, 252, 170, 1) 100%
  );
  -webkit-box-shadow: -1px 1px 57px 0px rgba(0, 232, 255, 0.75);
  -moz-box-shadow: -1px 1px 57px 0px rgba(0, 232, 255, 0.75);
  box-shadow: -1px 1px 57px 0px rgba(0, 232, 255, 0.75);
`;

export const BtnModal = styled.button`
  background-color: rgb(192, 7, 127);
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 10px;
  width: 40px;
  &:hover {
    background-color: rgb(103, 7, 192);
  }
`;

export const Title = styled.p`
  color: black;
  font-size: smaller;
  font-weight: 600;
  border: 1.5px solid rgba(5, 5, 251, 0.746);
  border-radius: 5px;
  padding: 3px;
`;
