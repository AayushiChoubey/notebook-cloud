// import React, { useContext } from 'react'
// import { useState } from 'react'
// import { Card, Container, Form, Button } from 'react-bootstrap'
// import {Link, useHistory } from 'react-router-dom'


// function Signup() {

//     let history = useHistory();
//     const [credentials, setCredentials] = useState({ name:"", email: "", password: "", cpassword: ""})
//     const { name, email, password, cpassword } = credentials;

//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value })
//     }

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         if(password!==cpassword) {
//             alert("Password Do Not Match!", "danger")
//         }
//         else {
//             const response = await fetch('http://localhost:5000/api/auth/createUser', {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ name, email, password })
//             })
//             const json =  await response.json();
//             console.log(json);
//             if(json.success) {
//                 localStorage.setItem('token', json.authToken);
//                 alert("User Registered Successfully!","success")
//                 history.push("/")
//             }
//             else {
//                 alert(json.error, "danger")
//             }
//         }
//     }

//     return (
//         <Container className='mt-5 d-flex justify-content-center align-items-center' >
//             <Card style={{ width: "20rem" }}>
//                 <Form onSubmit={handleLogin}>
//                     <Card.Body>
//                         <Card.Title className='text-center mt-2'><i className="fa-solid fa-user-plus"></i></Card.Title>
//                         <Card.Title className='text-center'>Sign Up!</Card.Title>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control
//                                 type="name"
//                                 value={name}
//                                 onChange={onChange}
//                                 name="name"
//                                 required
//                                 autoFocus
//                             />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Email Id</Form.Label>
//                             <Form.Control
//                                 type="email"
//                                 value={email}
//                                 onChange={onChange}
//                                 name="email"
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 value={password}
//                                 onChange={onChange}
//                                 name="password"
//                                 minLength={5}
//                                 required
//                             />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Confirm Password</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 value={cpassword}
//                                 onChange={onChange}
//                                 name="cpassword"
//                                 minLength={5}
//                                 required
//                             />
//                         </Form.Group>
//                         <div className="text-center">
//                             <Link to="/login" style={{ textDecoration: "none" }}>Already Registered? Log In!</Link>
//                         </div>
//                     </Card.Body>
//                     <Card.Footer className="text-center my-1">
//                         <Button type="submit" variant="primary">
//                             Register
//                         </Button>
//                     </Card.Footer>
//                 </Form>
//             </Card>
//         </Container>
//     )
// }

// export default Signup





import React, {useState} from 'react'
import {useHistory } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "",email: "", password: "",cpassword: ""}) 
    const { name, email, password, cpassword } = credentials;
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
       const {name,email, password}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/")

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
 
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={onChange}  id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={onChange}  id="password" name="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={cpassword}  onChange={onChange} id="cpassword" name="cpassword" minLength={5}  required/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Signup