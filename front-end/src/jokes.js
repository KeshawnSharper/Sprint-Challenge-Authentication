import React,{useState,useEffect} from "react"
import axios from "axios"
import styled from 'styled-components'

const Jokes = props => {
    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em
    `
    const P = styled.p`
width:45%;
font-family:Blackletter;
text-decoration:underline;
    `

const [jokes,setJokes] = useState([])
  useEffect(() => {
    axios
    .get('http://localhost:3300/api/jokes',{headers:{
      authorization:localStorage.getItem("token")}
    })
    .then(response => {
      setJokes(response.data)
      console.log(response.data)
    })
    .catch(err => {
    console.log(err)
    });
  },[])
  console.log(jokes)
  return (
      <div>
    {jokes.map(i => <P key={i.id}>{i.joke}</P>)}
    <Button onClick={e => {
      localStorage.removeItem("token")
      props.history.push("/")
    }}>Log out </Button>
    </div>

  )
}
export default Jokes