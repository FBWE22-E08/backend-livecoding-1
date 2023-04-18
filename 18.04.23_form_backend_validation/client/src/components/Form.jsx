import axios from "axios";
import React from "react";
import styles from "./Form.module.css";

export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      password: formData.get("password"),
    };

    try {
      await axios.post("http://localhost:4000/api/register", data);

      // await fetch("http://localhost:4000/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form className={styles.registrationForm} onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" required={true} />
        </label>
        <label>
          Name
          <input name="name" type="text" />
        </label>
        <label>
          Street Name
          <input name="street_name" type="text" required={true} />
        </label>
        <label>
          Street Number
          <input name="street_number" required={true} />
        </label>
        <label>
          Post code
          <input name="post_code" type="number" required={true} />
        </label>
        <label>
          Password
          <input name="password" type="password" required={true} />
        </label>
        <button>Register</button>
      </form>
    </>
  );
}
