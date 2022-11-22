import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Email is not valid"),
        password : Yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(40, "Password must not exceed 40 characters"),
    });
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            navigate('/dashboard');
        },
    });
    
    return (
        <>
            <div className='hold-transition login-page'>
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" name="email" value={formik.values.email}  onChange={formik.handleChange} id="email"/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                              
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" value={formik.values.password}  onChange={formik.handleChange} name="password"/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <a href="#" className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                </a>
                                <a href="#" className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                </a>
                            </div>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                            <Link to={"/forgot-password"} >
                            I forgot my password
                            </Link>
                            </p>
                            <p className="mb-0">
                            <Link to={"/register"} className="text-center">
                            Register a new membership
                            </Link>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login