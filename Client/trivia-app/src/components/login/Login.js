function Login() {
	return (
		<div id="Login">
			<h1 id="Login-Header">Login page</h1>
			<h3>Enter your username and password to login</h3>
			<form>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
                <input type="submit"/>
			</form>
		</div>
	);

}

export default Login;
