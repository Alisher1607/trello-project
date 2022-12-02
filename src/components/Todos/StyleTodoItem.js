import styled from "styled-components";

export const BoxText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: blue;
  color: white;
  border-radius: 5px;
  font-size: smaller;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: rgb(98, 9, 199);
  background: linear-gradient(
    90deg,
    rgba(98, 9, 199, 1) 0%,
    rgba(0, 168, 255, 1) 100%
  );
`;

export const BoxForm = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px;
`;

export const Input = styled.input`
  width: 250px;
  height: 26px;
  outline: none;
  border: 1.5px solid #00569c;
  border-radius: 30px;
  text-align: center;
  background-color: white;
  color: #8e0fc0b1;
  &:hover {
    border: 1.5px solid #9cd3ff;
  }
  &:active {
    border: 1px solid #062cb524;
  }
`;
export const Button = styled.button`
  border: none;
  color: #ffff;
  width: 5em;
  height: 1.9em;
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

export const BoxItem = styled.div`
  border: 1px solid #00e7df;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background: rgb(211, 0, 238);
  background: linear-gradient(
    0deg,
    rgba(211, 0, 238, 1) 0%,
    rgba(122, 87, 210, 1) 100%
  );
  overflow-y: scroll;
  max-height: 500px;
  min-height: 200px;
  -webkit-box-shadow: -1px 1px 57px 0px rgba(122, 42, 189, 0.75);
  -moz-box-shadow: -1px 1px 57px 0px rgba(122, 42, 189, 0.75);
  box-shadow: -1px 1px 57px 0px rgba(122, 42, 189, 0.75);
  animation: card 1s ease-in-out 0.5s 1 alternate;

  @keyframes card {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
