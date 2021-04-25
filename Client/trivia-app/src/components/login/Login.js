function Login() {
  return (
    <div id="Login">
      <h1 id="Login-Header">Login page</h1>
      <h3>Enter your username to login</h3>
      <form>
        <input type="text" placeholder="Username" name="name" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
