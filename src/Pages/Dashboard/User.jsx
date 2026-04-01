import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Axios } from "../../Api/Axios";
import { USERS } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";

export default function User() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [disable, setdesable] = useState(true);
  const [loading, setloading] = useState(false);

  const {id} = useParams()
  const nav = useNavigate()

  useEffect(() => {
    setloading(true)
    Axios.get(`${USERS}/${id}`)
      .then((data) => {
        setname(data.data.username);
        setemail(data.data.email);
        setloading(false)
      })
      .then(() => setdesable(false)
      ).catch(
        () => nav("/dashboard/users/page/404" , {replace: true})
      )
      
  }, []);

  async function handlesubmit(e) {
        e.preventDefault();
    setloading(true);
    try {
      const res = await Axios.put(`${USERS}/${id}`, {
        username: name,
        email: email,
      });
      setloading(false);
      nav("/users")
      // window.location.pathname = "/users";
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }
  return (
    <>
      {loading && <Loading />}
      <Form className=" w-100 mx-2 p-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            value={name}
            required
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

        <button onClick={(e)=>handlesubmit(e)} disabled={disable} className="btn btn-primary">
          Save
        </button>
      </Form>
    </>
  );
}
