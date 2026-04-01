import { useEffect, useRef, useState } from "react";
// @ts-ignore
import Form from "react-bootstrap/Form";
import { Axios } from "../../Api/Axios";
import Loading from "../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../Api/Api";

export default function AddProduct(){
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);
const navigate = useNavigate()
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
      const res = await Axios.post(`${PRODUCTS}`, {
        title: title,
        description: description,
        price:price,
        image:image,
      });
      setloading(false);
      navigate("/products")
      // window.location.pathname = "/dashboard/products";
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }



  return (
    <>
      {loading && <Loading />}
      <Form className="w-100 mx-2 p-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            required
            onChange={(e) => settitle(e.target.value)}
            ref={focus}
            name="title"
            type="text"
            placeholder="title.."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            required
            onChange={(e) => setdescription(e.target.value)}
            name="description"
            type="text"
            placeholder="description.."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(e) => setprice(e.target.value)}
            required
            name="price"
            type="number"
            placeholder="price.."
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
          <Form.Label>Images</Form.Label>
          <Form.Control
            multiple

            onChange={(e) => setimage(e.target.value)}
            type="file"
            value={image}

          />
        </Form.Group>

        <button
          className="btn btn-primary"
          onClick={(e)=>handlesubmit(e)}
        >
          Save
        </button>
      </Form>

    </>
  );
}
