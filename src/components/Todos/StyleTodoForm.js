import styled from "styled-components";

export const ContainerTodo = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
  max-width: 1424px;
  margin-top: 30px;
  width: 100%;
  height: 1000px;
  text-align: center;
`;

export const ContainerForm = styled.form`
  background: rgb(69, 61, 192);
  background: linear-gradient(
    90deg,
    rgba(69, 61, 192, 0.9363095580028886) 0%,
    rgba(0, 91, 255, 1) 100%
  );
  width: 370px;
  height: 100px;
  display: flex;
  justify-content: center;
  border: 1.5px solid white;
  border-radius: 0.5rem;
  box-shadow: 2px 0px 84px -9px rgba(101, 9, 247, 1);
  -webkit-box-shadow: 2px 0px 84px -9px rgba(101, 9, 247, 1);
  -moz-box-shadow: 2px 0px 84px -9px rgba(101, 9, 247, 1);
`;

export const BoxToTodo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 150px;
  height: 30px;
  outline: none;
  border: 1.5px solid #00569c;
  border-radius: 30px;
  text-align: center;
  background-color: white;
  color: #00569c;
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
  width: 6em;
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
