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
//lưu input ng dùng nhập 
    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in!"); //chỉ hiện ở console 
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }


  const Logout = details => {
    console.log("Logout");
//chuyển về trạng thái mặc định
    setUser({name: "", email: ""});
  }
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginPage Login={Login} error={error}/>
      )
      }
    </div>
  );
}

export default App;
