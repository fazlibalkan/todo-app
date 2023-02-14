import "./TodoAdd.css"
import React from "react";

function TodoAdd({addTodo}) {
    const [add, setAdd] = React.useState(false);
    const [todoText, setTodoText] = React.useState("")
    const [todoDate, setTodoDate] = React.useState("");
    const toggleAdd = () => {
        setAdd(!add);
    }

    const addToTodos = () => {
        let timeStamp = Date.parse(todoDate);

        var date = new Date(timeStamp);
        console.log(date.getTime(), date.getDay());

        addTodo({
            todoText: todoText,
            date: date,
            isPassed: false,
            done: false
        });
        toggleAdd();
    };

    const showDate = (e) => {
        setTodoDate(e.target.value);
    }


    return (
        <div>
            {add &&
            <div className="todo-add">
                <label className="label-normal">
                    TODO:
                    <input
                        className="add-input"
                        value={todoText}
                        onChange={e => setTodoText(e.target.value)}
                    />
                    <input className="date-time-picker" type="datetime-local" id="Test_DatetimeLocal" onChange={e=>showDate(e)}/>
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg"
                     viewBox="0 0 16 16" onClick={addToTodos} >
                    <path fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x icon icon-delete"
                     viewBox="0 0 16 16" onClick={toggleAdd}>
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            }

            {!add &&
            <div className="todo-add" onClick={toggleAdd}>
                <div className="text-normal">TODO EKLE</div>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg"
                     viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
            </div>
            }
        </div>
    );
}

export default TodoAdd;
