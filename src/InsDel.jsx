import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const InsertDelete = () => {
  const [data, setData] = useState([]);
  const txtname = useRef();
  const txtemail = useRef();
  const txtpassword = useRef();

  // Fetch data when component loads
  useEffect(() => {
    fetchdata();
  }, []);

  function fetchdata() {
    axios
      .get("https://geton.skmbpk1z.a2hosted.com/get-data.php")
      .then(function (abc) {
        setData(abc.data);
      });
  }

  const handledelete = (e) => {
    const id = e.target.getAttribute("data");
    const a = new FormData();
    a.set("id", id);

    axios
      .post("https://geton.skmbpk1z.a2hosted.com/delete-data.php", a)
      .then(function (abc) {
        if (abc.data.status === "true") {
          fetchdata();
          
        }
      });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const name = txtname.current.value;
    const email = txtemail.current.value;
    const password = txtpassword.current.value;

    const a = new FormData();
    a.set("name", name);
    a.set("email", email);
    a.set("password", password);

    axios
      .post("https://geton.skmbpk1z.a2hosted.com/insert-data.php", a)
      .then(function () {
        // Clear input fields
        txtname.current.value = "";
        txtemail.current.value = "";
        txtpassword.current.value = "";

        // Refresh table
        fetchdata();
      });
  };

  return (
    <>
      <form method="post" onSubmit={handlesubmit}>
        <table border={1} cellPadding={7} cellSpacing={0.1}>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" ref={txtname} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="text" ref={txtemail} /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="text" ref={txtpassword} /></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br />

      <table border={1} cellPadding={3} cellSpacing={0}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.password}</td>
              <td>
                <button onClick={handledelete} data={e.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InsertDelete;
