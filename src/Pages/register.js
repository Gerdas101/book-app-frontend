import React ,{useState} from 'react'
import {useHistory} from 'react-router-dom'
function Register()
{

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [email, setEmail]=useState("")
    const history = useHistory();

   async function signUp(){
        let item={username, password, email}
        console.warn(item)

     let result = await fetch("http://localhost:8080/book-app/users", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept": 'application/json'
            }
        })
        result =await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/my-books")
    }

    return (
        <div className="col-sm-6 offset-sm-3">

            <h1> Hello World</h1>
            <p>Enter your username: </p>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="name" />
            <p>Enter your password: </p>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
            <p>Enter your email: </p>
            <input type="text" value={email }onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>

        </div>
   
    )
}

export default Register
