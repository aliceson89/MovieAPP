import React from 'react';

function Register() {
  return (
    <div>
      <form id="addUser">
        <h2>Register User</h2>
        <p>
          Username
          <input
            type="text"
            name="username"
            placeholder="Please enter username"
          ></input>
        </p>
        <p>
          E-mail
          <input
            type="text"
            name="email"
            placeholder="Please enter email address"
          ></input>
        </p>
        <p>
          Password
          <input
            type="password"
            name="password"
            placeholder="Please enter password"
          ></input>
        </p>
        <p>
          <input type="submit" value="Register"></input>
        </p>
      </form>
    </div>
  );
}

export default Register;
