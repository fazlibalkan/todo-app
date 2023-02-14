import "./Todos.css"
import TodoItem from "../TodoItem/TodoItem";
import React from "react";
import TodoAdd from "../TodoAdd/TodoAdd";

function Todos() {
    const [todos, setTodos] = React.useState( ()=> JSON.parse(window.localStorage.getItem('todos')) || [],);
    const [time, setTime] = React.useState(Date.now());

    const doneToggle = (item) =>  {
        setTodos(
            todos.map((todo) =>
                todo.todoText === item.todoText
                    ? {...todo, done : !todo.done}
                    : todo
                )
        );
    };

    const deleteTodo = (item) => {
        setTodos(
            todos.filter(todo => todo.todoText !== item)
        );
    };

    const addTodo = (item) => {
        setTodos([...todos, item]);
    }

    const editTodoTextAndDate = (oldText, text, newDate) =>  {
        setTodos(
            todos.map((todo) =>

                todo.todoText === oldText
                    ? {...todo, todoText : text, date: newDate}
                    : todo
            )
        );
    };

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        const temptodos = JSON.parse(localStorage.getItem('todos'));
        console.log("first useEffect", temptodos);
        console.log("set")
    }, [todos]);

    React.useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    React.useEffect(() => {
        console.log(time);
        setTodos(
            todos.map((todo) =>
                Date.parse(todo.date) - time < 0
                    ? {...todo, isPassed : true}
                    : todo
            )
        );
    }, [time]);



    return (
        <div className="todos">
            <TodoAdd addTodo={addTodo}/>
            {todos.map((todo) => <TodoItem key={todo.todoText} todo={todo.todoText} done={todo.done} date={todo.date} isPassed={todo.isPassed} doneToggle={doneToggle} deleteTodo={deleteTodo} editTodoTextAndDate={editTodoTextAndDate} />)}
        </div>
    );
}

export default Todos;
