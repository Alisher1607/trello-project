import styled from "styled-components";

export const FormField = styled.form`
  & {
    background-color: #ffffff;
    width: 350px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 18px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 2px 10px 2px rgba(186, 172, 172, 0.78);
    -moz-box-shadow: 0px 2px 10px 2px rgba(186, 172, 172, 0.78);
    box-shadow: 0px 2px 10px 2px rgba(186, 172, 172, 0.78);
  }
`;

export const Input = styled.input`
  width: 270px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  padding: 5px 0 5px 10px;
  border: 1px solid black;
  &:hover {
    border: 1.5px solid darkblue;
  }
  &:active {
    border: 1.5px solid darkcyan;
  }
`;

export const Button = styled.a`
  width: 270px;
  background-color: #5aac44;
  outline: none;
  border: 1px solid #5aac44;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  padding: 5px 20px;
  text-align:center;
  text-decoration: none;
  &:hover {
    background-color: #4dff50;
  }
  &:active {
    background-color: #006d02;
  }
`;

export const H2 = styled.h2`
  color: black;
  font-size: 20px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
`;
