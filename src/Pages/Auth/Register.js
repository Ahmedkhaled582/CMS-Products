import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { REGISTER, baseURL } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    const [form , setform] = useState({
        username:"",
        phone:"",
        email:"",
        password:"",
    })


    const [err , seterr] = useState("")

    const navigate = useNavigate()

    const [loading , setloading] = useState(false)

    const focus = useRef("")


    useEffect(() => {
      focus.current.focus()
    },[])

    function handlechange(e){
        setform({...form ,[e.target.name] : e.target.value})
    }

   async function handlesubmit(e){
        e.preventDefault()
        setloading(true)
        try {
          await axios.post(`https://movie-app-l0g2.onrender.com/register`,form)
          navigate("/login")
        } catch (err) {
            setloading(false)
            if(err.response.status === 422){
              seterr("Email is already been taken")
            } else {
              seterr("Internal Server ERR")
            }
        }
    }
  return (

    <>
    {loading && <Loading/> }
    <div className="container">
    <div style={{height:"100vh"}}  className="ahmed row align-items-center justify-content-center">
      <Form className="form " onSubmit={handlesubmit}>
      <div className="custom-form"> 
      <h1>Register Now</h1>
        <Form.Group
        className="form-c mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          value={form.username}
          onChange={handlechange}
          name="username"
          ref={focus}
          required
          type="text"
          placeholder="Enter Your Name.."
        />
        <Form.Label>Username</Form.Label>
      </Form.Group>
        <Form.Group
        className="form-c mb-3"
        controlId="exampleForm.ControlInput2"
      >
        <Form.Control
          value={form.email}
          onChange={handlechange}
          name="email"
          required
          type="email"
          placeholder="Enter Your Email.."
        />
        <Form.Label>Email</Form.Label>
      </Form.Group>

      <Form.Group
        className="form-c mb-3"
        controlId="exampleForm.ControlInput3"
      >
        <Form.Control
          value={form.password}
          onChange={handlechange}
          minLength={6}
          required
          type="password"
          name="password"
          placeholder="Enter Your Password.."
        />
        <Form.Label>Password</Form.Label>
      </Form.Group>

      <Form.Group
        className="form-c mb-3"
        controlId="exampleForm.ControlInput4"
      >
        <Form.Control
          value={form.phone}
          onChange={handlechange}
          minLength={11}
          required
          type="tel"
          name="phone"
          placeholder="Enter Your Phone.."
        />
        <Form.Label>Phone</Form.Label>
      </Form.Group>
   <button type="submit" className="btn btn1 btn-primary mb-3">Register</button>
  

              <p id="mo">Already have an account? <Link id="am" to="/login">Login here</Link></p>

   {err!="" && <span className="error">{err}</span>}
   
   </div> 
      </Form>
      </div>
    </div>
    </>

  );
}
