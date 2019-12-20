import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Link,Redirect } from 'react-router-dom'
import axios from "axios"
import styled from 'styled-components';

const Login = (props) => {
    const Input = styled.input`
    display:block;
  `
  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  display:block;
  width: 100px;
  `
console.log(props)
    const [user,setUser] = useState({
        username:"",
        password:"",
      })
      const login = e => {
      axios.post("http://localhost:3300/api/auth/login",user)
      .then(i => {
        
        localStorage.setItem("token",i.data.token)
        props.history.push(`/jokes`)
        console.log(i.data)})
      .catch(err => console.log(err))
      e.preventDefault()
      }
      
        return (
          <div>
            <form onSubmit={login}>
      <Input value={user.username} onChange={e =>  setUser({...user,username:e.target.value})} placeholder="username" />
      <Input value={user.password} onChange={e =>  setUser({...user,password:e.target.value})} placeholder="password" />
      <Button>Log In</Button>
            </form>
            </div>
            
        );
}

export default Login