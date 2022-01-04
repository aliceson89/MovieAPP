import styles from './Login.module.css';
function Login() {
  return (
    <div className="{styles.container}">
      <h1>Login</h1>
      <form id="addUser">
        <p>
          Username
          <input
            type="text"
            name="username"
            placeholder="Please enter username"
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
          <input type="submit" value="Sign In"></input>
        </p>
      </form>
    </div>
  );
}

export default Login;
