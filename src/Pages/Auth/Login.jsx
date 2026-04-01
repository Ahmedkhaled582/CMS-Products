import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import Cookie from "cookie-universal";
// @ts-ignore
import { Form } from "react-bootstrap";
import { useNavigate , Link } from "react-router-dom";
import { Axios } from "../../Api/Axios";
import { baseURL } from "../../Api/Api";

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
    // @ts-ignore
    focus.current.focus()
  },[])


  function handlechange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  async function handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    try {
      const res = await Axios.post(`${baseURL}/login`, form);
      setloading(false);
      console.log(res)
      const token = res.data.accessToken;
      cookie.set("e-commerce", token);
      navigate("/")

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
              <h3 className="mb-3">Login</h3>
              <Form.Group
                className="form-c mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  value={form.email}
                  onChange={handlechange}
                  name="email"
                  // @ts-ignore
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
