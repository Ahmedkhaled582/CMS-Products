import { useEffect, useState } from "react";
import { USERS } from "../../Api/Api";
import { Axios } from "../../Api/Axios";
import { Link } from "react-router-dom";
import Tableshow from "../../Components/Dashboard/Table";

export default function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    Axios.get(`/${USERS}`)
      .then((data) => setusers(data.data))
      .catch((err) => console.log(err));
  }, []);

  const header = [
    {
      key: "username",
      name: "Username",
    },
    {
      key: "email",
      name: "Email",
    },

  ];

  async function handledelete(id) {
    try {
      const res = await Axios.delete(`${USERS}/${id}`);
      setusers((prev) => prev.filter((item) => item.id !==id))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" w-100 p-2">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Users Page</h1>
        <Link className="btn btn-primary" to="/user/add">
          Add User
        </Link>
      </div>

      <Tableshow
        header={header}
        data={users}
        delete={handledelete}
      />
    </div>
  );
}
