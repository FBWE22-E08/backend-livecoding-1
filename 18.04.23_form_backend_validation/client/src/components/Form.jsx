import React from "react";

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
      await fetch("", {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" required={true} />
        </label>
        <label>
          Name
          <input name="name" type="text" />
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
