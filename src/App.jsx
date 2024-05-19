import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

function App() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "" });
  };

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todolist</Typography>
        </Toolbar>
      </AppBar>
      <TextField
        style={{ marginRight: 10 }}
        variant="standard"
        label="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <TextField
        style={{ marginRight: 10 }}
        variant="standard"
        label="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <Button
        style={{ margin: 10 }}
        color="primary"
        variant="outlined"
        onClick={addTodo}
      >
        Add
      </Button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <Tooltip title="Delete todo">
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => deleteTodo(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
