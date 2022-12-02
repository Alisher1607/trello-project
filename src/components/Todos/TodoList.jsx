import { useSelector } from "react-redux";
import { ListContainer } from "./StyleTodoList";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <ListContainer>
        {todos.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ListContainer>
    </>
  );
};

export default TodoList;
