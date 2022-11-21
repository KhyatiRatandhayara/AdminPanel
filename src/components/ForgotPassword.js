import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <div className="hold-transition login-page">
    <div className="login-box">
    <div className="login-logo">
        <a href=""><b>Admin</b>LTE</a>
    </div>
    </div>
    <div className="card">
  <div className="card-body login-card-body">
    <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
    <form>
      <div className="input-group mb-3">
        <input type="email" className="form-control" placeholder="Email" />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <Link to={"/"} className="text-center">
          <button type="submit" className="btn btn-primary btn-block">Request new password</button></Link>
        </div>
        {/* /.col */}
      </div>
    </form>
    <p className="mt-3 mb-1">
    <Link to={"/"} className="text-center">Login</Link>
    </p>
    <p className="mb-0">
      <a href="/register" className="text-center">Register a new membership</a>
    </p>
  </div>
  {/* /.login-card-body */}
</div>

    </div>
  )
}

