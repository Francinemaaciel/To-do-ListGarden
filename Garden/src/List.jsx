import React, { useState } from "react";
import "./List.css"

const List = () => {
    const [lists, setLists] = useState([]);

    const handleAddTask = (e) => {
        setLists([...lists, inputValue])
        setInputValue("");
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClearList = (e) => {
        setLists([]);
    }

    const [inputValue, setInputValue] = useState("");


    return (
        <>
            <div className="container">
                <img src="/flor.png" alt="icone lista" />
                <h1>To-do List</h1>
                <input type="text" placeholder="Adicione sua tarefa..." value={inputValue} onChange={handleChange} />
                <div className="buttons">
                    <button onClick={handleAddTask}>Adicionar Tarefa</button>
                    <button onClick={handleClearList}>Limpar Lista</button>
                </div>  

                <p>Tarefas</p>
                <ul>
                    {lists.map((list, index) => (
                        <li key={index}>{list}</li>
                    ))}
                </ul>
            </div>
            <footer></footer>

        </>
    );
};

export default List;