import styled from "styled-components";

export const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  color: red;
  transform: translate(-50%, -50%);
  background-color: rgb(218, 255, 8);
  padding: 50px;
  z-index: 1000;
  border: 5px double rgb(255, 8, 8);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  -webkit-box-shadow: -1px 1px 57px 0px rgba(240, 255, 0, 0.75);
  -moz-box-shadow: -1px 1px 57px 0px rgba(240, 255, 0, 0.75);
  box-shadow: -1px 1px 57px 0px rgba(240, 255, 0, 0.75);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Button = styled.button`
  border: none;
  color: #ffff;
  width: 9em;
  height: 2em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1;

  &:hover {
    animation: animation 8s linear infinite;
    border: none;
  }

  &:before {
    content: "";
    background: linear-gradient(#03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }
  &:hover::before {
    filter: blur(20px);
  }

  @keyframes animation {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`;
