import React, { useState } from "react";
import Layout from "../../router/Layout";
import NameAndLogo from "./NameAndLogo";
import { Button, FormField, H2, Input } from "./StyleForm";

const USER_DATA = {
  email: "vakanda",
  password: "naveki",
};

const Form = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    setValue({
      ...value,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <NameAndLogo />
      <FormField onSubmit={onSubmit}>
        <H2>Вход в Trello</H2>
        <Input
          type="text"
          placeholder="Укажите адресс электронной почты"
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Введите пароль"
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />
        {value.email === USER_DATA.email &&
        value.password === USER_DATA.password ? (
          <Button onClick={onSubmit}>
            <Layout />
          </Button>
        ) : (
          <p>Укажите правильные данные !</p>
        )}
      </FormField>
    </>
  );
};

export default Form;
