import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Login from "./login"
import Jokes from "./jokes"
import { Route,Link,Redirect } from 'react-router-dom'
import ProtectedRoute from "./ProtectedRoute"
import styled from 'styled-components';
import Register from "./register"

function App() {
  
const Input = styled.input`
  width: 400px;
  height: 34px;
  background-color: white;
  display: inline-block;
  outline: none;
  `
  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  display:block;
  width: 400px;
  `
  const [user,setUser] = useState({
    username:"",
    password:""
  })
  const register = e => {
  axios.post("http://localhost:3300/api/auth/register",user)
  .then(i => console.log(i))
  .catch(err => console.log(err))
  e.preventDefault()
  }
  return (
    <div>
    <Link to="/register">Register</Link> 
    <Link to="/login">Login</Link> 
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <ProtectedRoute exact path="/jokes" component={Jokes} />
    </div>
  )
}

export default App;
