import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
export default function Tableshow(props) {

  const headershow = props.header.map((item , key) => <th key={key}>{item.name}</th>);
  const datashow = props.data.map((item, key) => (
    <tr key={key}>
      <td>{key + 1}</td>
      {props.header.map((item2, key2) => (
        <td key={key2}>
        {item2.key === "image" ? ( <img width="50px" src={item[item2.key]}/>)
        : item[item2.key]
}        </td>
      ))}


      <td>
        <div className="d-flex justify-content-center">
          <Link to={`${item.id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
        </div>
      </td>
      <td>
        <div className="d-flex justify-content-center">
          <FontAwesomeIcon
            color="red"
            cursor={"pointer"}
            onClick={()=> props.delete(item.id)}
            fontSize={"19px"}
            icon={faTrash}
          />
        </div>
      </td>
    </tr>
  ));
  return (
    <Table striped bordered hover style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th>Id</th>
          {headershow}
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {props.data.length === 0 && (
        <tr className="text-center">
        <td colSpan={12}>Loading...</td>
        </tr>
      )}
      {datashow}
      </tbody>
    </Table>
  );
}
