import React, { useEffect, useState } from "react";

const Crud = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [arr, setArr] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [handleUpdate, sethandleUpdate] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('data');
  //   if (storedData) {
  //     setArr(JSON.parse(storedData));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  const handleForm = (e) => {
    e.preventDefault();
    if (input.name && input.password) {
      if (handleUpdate) {
        const updatedArr = arr.map((item, index) =>
          index === editIndex
            ? {
                ...item,
                name: input.name,
                password: input.password,
                email: input.email,
              }
            : item
        );
        setArr(updatedArr);
        sethandleUpdate(false);
        setEditIndex(null);
      } else {
        setArr([...arr, input]);
      }

      setInput({
        name: "",
        password: "",
        email: "",
      });
    } else {
      alert("Please fill both fields");
    }
  };

  const handleEdit = (index) => {
    const record = arr[index];
    setInput({
      name: record.name,
      password: record.password,
      email: record.email,
    });
    sethandleUpdate(true);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    const updatedArr = arr.filter((_, i) => i !== index);
    setArr(updatedArr);
  };

  return (
    <div className="main">
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br /> <br />
        <button type="submit">{handleUpdate ? "Update" : "Submit"}</button>
      </form>
      <br />
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.password}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
