import "./TodoItem.css"
import React from 'react';


function TodoItem({todo, done, date, isPassed, doneToggle, deleteTodo, editTodoTextAndDate}) {
    const [optionsOpen, setOptionsOpen] = React.useState(false);
    const [editingOpen, setEditingOpen] = React.useState(false);
    const [newTodo, setNewTodo] = React.useState("");
    const [newDate, setNewDate] = React.useState(date);

    const [dateObj, setDateObj] = React.useState({day: "", month: "", year: "", hour: "", minute: ""});


    const displayOptions = () => {
        setOptionsOpen(!optionsOpen);
    };


    const editTodo = () => {
        setEditingOpen(true);
        setNewTodo(todo);
        setNewDate(date)
        console.log("Edit Button Clicked");
    };

    const closeEdit = () => {
        editTodoTextAndDate(todo, newTodo, newDate);
        setEditingOpen(false);
    };

    React.useEffect(() => {
        let timeStamp = Date.parse(date);
        var tododate = new Date(timeStamp);

        console.log(dateObj);

        setDateObj(
            {
                day: tododate.getDate(),
                month: tododate.getMonth(),
                year: tododate.getFullYear(),
                hour: tododate.getHours(),
                minute: tododate.getMinutes()
            }

        );

    }, [date]);

    React.useEffect(() => {
        let timeStamp = Date.parse(date);
        var tododate = new Date(timeStamp);

        console.log(tododate, "AA", tododate.getDate());

        setDateObj(
            {
                day: tododate.getDate(),
                month: tododate.getMonth(),
                year: tododate.getFullYear(),
                hour: tododate.getHours(),
                minute: tododate.getMinutes()
            }

        );

    }, []);

    const showDate = (e) => {
        setNewDate(e.target.value);
    }




    return (

        <div>
            {editingOpen &&
                <div className={done ? "todo-item todo-item-done" : "todo-item todo-item-not-done"}>
                    <label className="label-normal">
                        <input
                            className="add-input"
                            value={newTodo}
                            onChange={e => setNewTodo(e.target.value)}
                        />
                        <input className="date-time-picker" type="datetime-local" id="Test_DatetimeLocal" value={newDate} onChange={e=>showDate(e)}/>
                    </label>

                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-pencil-square icon icon-edit" viewBox="0 0 16 16" onClick={ closeEdit }>
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </div>

                </div>
            }
            {!editingOpen &&
            <div className={done ? "todo-item todo-item-done" : "todo-item todo-item-not-done"}>
                {isPassed && !done &&
                <div className="icon icon-alarm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-alarm-fill " viewBox="0 0 16 16">
                        <path
                            d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z"/>
                    </svg>
                </div>
                }
                <div className={done ? "text-crossed" : "text-normal"} onClick={() => doneToggle({todoText: todo, done: done})}>
                    {todo} <div className="date-time-text">{dateObj.day}.{dateObj.month}.{dateObj.year} {dateObj.hour}:{dateObj.minute}</div>
                </div>

                {optionsOpen &&
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-check2-square" viewBox="0 0 16 16" onClick={() => doneToggle({todoText: todo, done: done})}>
                            <path
                                d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                            <path
                                d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-pencil-square icon icon-edit" viewBox="0 0 16 16" onClick={ editTodo}>
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x icon icon-delete"
                             viewBox="0 0 16 16" onClick={() => deleteTodo(todo)}>
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                }

                <div className="icon" onClick={displayOptions}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </div>



            </div>
            }
        </div>
    );
}

export default TodoItem;
