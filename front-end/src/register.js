import styled from 'styled-components';
import React,{useState,useEffect} from 'react';
import axios from "axios"
const Register = props => {
  const Input = styled.input`
  display: block;
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
  <form onSubmit={register}>
  <Input value={user.username} onChange={e =>  setUser({...user,username:e.target.value})} placeholder="username" />
  <Input value={user.password} onChange={e =>  setUser({...user,password:e.target.value})} placeholder="password" />
  <Button>Register</Button>
        </form>
        </div>
  )
}

export default Register