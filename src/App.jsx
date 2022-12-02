import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import TodoForm from "./components/Todos/TodoForm";

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="todoform" element={<TodoForm />} />
          <Route path="*" element={<Form />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
