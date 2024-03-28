import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export const Todo = () => {
  const inputRef = useRef(null);
  const numOfItems = useRef(0);
  const [todos, setTodos] = useState([]);

  const addItem = (id, text) => {
    setTodos((curr) => {
      return [...curr, { isChecked: false, id, text }];
    });
  };

  const deleteItem = (text) => {
    setTodos((curr) => {
      let temp = curr.filter((obj) => obj.text !== text);
      localStorage.setItem("todoItems", JSON.stringify(temp));
      return temp;
    });
    console.log(todos);
  };

  const isCheckedUpdate = (now, text) => {
    setTodos((curr) => {
      let temp = curr.map((i) => {
        if (i.text === text) {
          return { isChecked: !now, id: "todoItems", text };
        } else {
          return i;
        }
      });
      return temp;
    });
  };

  const TodoList = ({ todos }) => {
    return (
      <ul className="TodoList">
        {todos.map((todo) => {
          return (
            <li key={todo.text}>
              <input
                type="checkbox"
                checked={todo.isChecked}
                onClick={() => {
                  isCheckedUpdate(todo.isChecked, todo.text);
                }}
              ></input>
              {todo.text}{" "}
              <button onClick={() => deleteItem(todo.text)} className="delete">
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  useEffect(() => {
    if (localStorage.getItem("todoItems") !== null) {
      setTodos(JSON.parse(localStorage.getItem("todoItems")));
    }
  }, []);

  useEffect(() => {
    if (todos.length !== 0) localStorage.setItem("todoItems", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <span className="title">TODO List</span>
      <p>You have to clear all of them...</p>

      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          if (inputRef.current.value) {
            addItem("todoItems", inputRef.current.value);
            console.log(`${inputRef.current.value}가 추가됨`);
            inputRef.current.value = "";
            console.log(todos);
            console.log(localStorage.getItem("todoItems"));
            numOfItems.current += 1;
          }
        }}
      >
        Add It!
      </button>

      <button
        onClick={() => {
          console.log(todos);
          console.log(localStorage.getItem("todoItems"));
        }}
      >
        dumb
      </button>

      <button
        onClick={() => {
          localStorage.clear();
          setTodos([]);
          console.log("초기화됨");
          numOfItems.current = 0;
        }}
      >
        I did Everything!!!
      </button>

      <TodoList todos={todos} />
    </>
  );
};
