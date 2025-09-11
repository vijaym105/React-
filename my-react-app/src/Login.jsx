import PropTypes from "prop-types";
function Login({ isLogin = false, username = "Guest" }) {
  const welcome = <h2 className="welc">Welcome {username}</h2>;
  const log = <h2 className="lf">Please login sir</h2>;

  return (isLogin ? welcome : log);
}

Login.propTypes = {
    isLogin: PropTypes.bool,
    username: PropTypes.string,
}


export default Login 