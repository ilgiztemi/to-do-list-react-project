import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputTask: "",
      todos: [],
    };
  }

  addTask = () => {
    const { inputTask, todos: newTodos } = this.state;

    const task = {
      name: inputTask,
      done: false,
    };
    //add task into state
    if (inputTask !== "") {
        newTodos.push(task);
    } 
    if (inputTask === "") {
        alert("Enter a task")
    }
    //clear inputTask
    this.setState({ todos: newTodos, inputTask: "" });
  };

  onKeyUp = (event) => {
    const { value: inputTask } = event.target;
    // store value inside state;
    this.setState({ inputTask });
  };

  delete = (ind) => {
    const { todos } = this.state;
    todos.splice(ind, 1);
    this.setState({ todos });
    console.log("index", ind);
  };

  done = (ind) => {
    const { todos } = this.state;
    todos[ind].done = !todos[ind].done;
    this.setState({ todos });
  };

  clearAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    console.log("state", this.state);
    return (
      <div className="container">
        <h1>TODO LIST</h1>
        <div className="new-task">
          <input
            value={this.state.inputTask}
            onChange={this.onKeyUp}
            id="addTask"
            placeholder="Add a task"
          />
          <button onClick={this.addTask} className="btn add">
            Add
          </button>
        </div>
        <div className="content">
          <ul>
            {this.state.todos.map((todo, ind) => {
              const cross = todo.done ? "cross" : "";
              return (
                <li key={ind} className={cross}>
                  <input onClick={() => this.done(ind)} type="checkbox" />
                  {todo.name}
                  <span onClick={() => this.delete(ind)} className="delete">
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={this.clearAll} className="clear btn">
          Clear
        </button>
      </div>
    );
  }
}

export default TodoForm;
