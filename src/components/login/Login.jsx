import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const handleSubmit = (e) => {
      e.preventDefault()
    console.log(login);
  };
  return (
    <div className="login">
      <Paper sx={{ width: { xl: "45%", xs: "100%" }, margin: "auto" }}>
        <form >
          <h3 className="text-center">webskitters login</h3>
        
            <TextField
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              fullWidth
              label="Email"
              sx={{
            width: "80%",
            margin: "40px 0",
          }}
          variant="standard" 
            />
        
        
            <TextField
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              fullWidth
              sx={{width:"80%"}}
              label="Password"
              variant="standard" 
            />
    <br/>
          <Button onClick={handleSubmit} variant="contained" color="primary" sx={{margin:"10px"}}>
            Login
          </Button>
        </form>
        <Link to="signup" className="link">new in webskitters</Link>
      </Paper>
    </div>
  );
}
