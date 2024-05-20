import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { LOGIN , baseURL } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import Cookie from "cookie-universal";
import { Form } from "react-bootstrap";
import { useNavigate , Navigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  

  const [err, seterr] = useState("");
  const navigate = useNavigate()

  const cookie = Cookie();

  const [loading, setloading] = useState(false);


  const focus = useRef("")


  useEffect(() => {
    focus.current.focus()
  },[])


  function handlechange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post(`https://movie-app-l0g2.onrender.com/login`, form);
      setloading(false);
      const token = res.data.token;
      cookie.set("e-commerce", token);
      navigate("/")

      // const role = res.data.user.role
      // const go = role === "1995" ? "users" : "writer"
      // window.location.pathname=`/dashboard/${go}`
      
      // window.location.pathname = '/'


    } catch (error) {
      console.log(error);
      setloading(false);
      if (error.response.status === 401) {
        seterr("Wrong Email Or Password");
      } else {
        seterr("Internal Server ERR");
      }
    }
  }
  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <div
          style={{ height: "100vh" }}
          className="ahmed row align-items-center justify-content-center"
        >
          <Form className="form " onSubmit={handlesubmit}>
            <div className="custom-form">
              <h1>Login</h1>
              <Form.Group
                className="form-c mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  value={form.email}
                  onChange={handlechange}
                  name="email"
                  ref={focus}
                  required
                  type="email"
                  placeholder="Enter Your Email.."
                />
                <Form.Label>Email</Form.Label>
              </Form.Group>

              <Form.Group
                className="form-c mb-3"
                controlId="exampleForm.ControlInput2"
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
              <button type="submit" className="btn btn1 btn-primary mb-3">
                Login
              </button>
             

              <p id="mo">Don't have an account? <Link id="am" to="/register">SignUp here</Link></p>

              {err != "" && <span className="error">{err}</span>}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
