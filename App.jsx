import React, { useState } from "react";
import "./App.css";

function App() {
  
  const users = [
    { username: "abcd", password: "Admin@123" },
    { username: "xyz", password: "Admin@123" },
    { username: "admin", password: "Admin@123" },
    { username: "java", password: "java@123" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setMessage("Login Successful ");
    } else {
      setMessage("Login Failed ");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
    setCount(0);
    setTasks([]); 
  };

  const increaseCounter = () => setCount(count + 1);
  const decreaseCounter = () => setCount(count - 1);
  const toggleCounter = () => setShowCounter(!showCounter);

  
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task === "") return;
    setTasks([...tasks, { name: task, done: false }]);
    setTask("");
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  
  return (
    <div className="container">
      <h1>React Login + Counter + ToDo App 🚀</h1>

      {!isLoggedIn ? (
        <>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />

          <button className="login" onClick={handleLogin}>
            🔐 Login
          </button>

          <h3>{message}</h3>
        </>
      ) : (
        <>
          <h2>Welcome {username} 😀</h2>

          <button className="logout" onClick={handleLogout}>
            🚪 Logout
          </button>

          <br /><br />

          
          <button className="toggle" onClick={toggleCounter}>
            {showCounter ? "Hide Counter" : "Show Counter"}
          </button>

          {showCounter && (
            <>
              <h2>Counter Value: {count}</h2>
              <div className="buttons">
                <button className="increase" onClick={increaseCounter}>
                  ➕ Increase
                </button>
                <button className="decrease" onClick={decreaseCounter}>
                  ➖ Decrease
                </button>
              </div>
            </>
          )}

          <br /><br />

          
          <h1>To Do App 📝</h1>
          <label htmlFor="task">Task</label>
          <br />
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
          <br /><br />

          <button onClick={addTask}>Add</button>

          <div className="list">
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Done</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((t, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        textDecoration: t.done ? "line-through" : "none",
                      }}
                    >
                      {t.name}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={t.done}
                        onChange={() => toggleDone(index)}
                      />
                    </td>
                    <td>
                      <button onClick={() => deleteTask(index)}>❌</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default App;