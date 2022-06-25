import React, {useState} from 'react'
import LoginPage from './components/LoginPage';

function App() {
  const adminUser = {
    email: "abc@admin.com",
    password: "abc123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = details => {
    console.log("Logout");
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginPage />
      )
      }
    </div>
  );
}

export default App;
