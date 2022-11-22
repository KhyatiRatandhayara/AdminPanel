import { Link,useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup';

const Register = () => {
    const navigate = useNavigate();
    const initialValues = {
        fullname : "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    }
    const validationSchema = Yup.object({
        fullname: Yup.string().required("Fullname is required").min(3, "Fullname must be at least 3 characters"),
        email: Yup.string().required("Email is required").email("Email is not valid"),
        password : Yup.string().required("Password is required").min(6, "Password must be at least 6 characters").max(40, "Password must not exceed 40 characters"),
        confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
       acceptTerms: Yup.bool().oneOf([true], "Please accept terms and conditions."),
    });
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            navigate('/');
        },
    });
    return (
        <div className='hold-transition register-page'>
            <div className="register-box">
                <div className="register-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className={'form-control' +
                        (formik.errors.fullname && formik.touched.fullname
                            ? ' is-invalid'
                            : '')
                        } placeholder="Full name" name="fullname" value={formik.values.fullname}  onChange={formik.handleChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            {formik.errors.fullname ? <div className="error">{formik.errors.fullname}</div> : null}
                            <div className="input-group mb-3">
                                <input type="email" name="email" className={
                                'form-control' +
                                (formik.errors.email && formik.touched.email ? ' is-invalid' : '')
                                } placeholder="Email" value={formik.values.email}  onChange={formik.handleChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
                            <div className="input-group mb-3">
                                <input type="password"  className={
                                    'form-control' +
                                    (formik.errors.password && formik.touched.password
                                        ? ' is-invalid'
                                        : '')
                                    } placeholder="Password" name="password" value={formik.values.password}  onChange={formik.handleChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
                            <div className="input-group mb-3">
                                <input type="password"   className={
                                        'form-control' +
                                        (formik.errors.confirmPassword && formik.touched.confirmPassword
                                            ? ' is-invalid'
                                            : '')
                                        } placeholder="Retype password" name="confirmPassword" value={formik.values.confirmPassword}  onChange={formik.handleChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="agreeTerms" className={
                                            'form-check-input' +
                                            (formik.errors.acceptTerms && formik.touched.acceptTerms
                                                ? ' is-invalid'
                                                : '')
                                            } name="acceptTerms" onChange={formik.handleChange} value={formik.values.acceptTerms}/>
                                        <label htmlFor="agreeTerms">
                                            I agree to the <a href="#">terms</a>
                                        </label>
                                        <div className="invalid-feedback">
                                                {formik.errors.acceptTerms && formik.touched.acceptTerms
                                                ? formik.errors.acceptTerms
                                                : null}
                                            </div>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" />
                                Sign up using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" />
                                Sign up using Google+
                            </a>
                        </div>
                        <Link to={"/"} className="text-center">I already have a membership</Link>
                    </div>
                    {/* /.form-box */}
                </div>{/* /.card */}
            </div>

        </div>
    )
}

export default Register