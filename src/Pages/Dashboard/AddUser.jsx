import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { Axios } from "../../Api/Axios";
import { USERS } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router";

export default function AddUser() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
const navigate = useNavigate();
  const focus = useRef("")

  useEffect(() => {
      // @ts-ignore
      focus.current.focus()
  },[])


  /**
   * @param {import("react").SubmitEvent<HTMLFormElement>} e
   */
  async function handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    try {
      const res = await Axios.post(`${USERS}`, {
        username: name,
        email: email,
        password:password,
      });
      setloading(false);
      navigate("/users")
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }
  return (
    <>
      {loading && <Loading />}
      <Form className=" w-100 mx-2 p-3" onSubmit={(e)=> handlesubmit(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            value={name}
            required
            // @ts-ignore
            ref={focus}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="name....."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="email......"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            required
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="password......"
          />
        </Form.Group>
       
        <button disabled={name.length > 1 && email.length > 1 && password.length > 6 ? false : true} className="btn btn-primary">
          Save
        </button>
      </Form>
    </>
  );
}
