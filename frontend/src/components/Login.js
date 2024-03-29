import { Formik } from 'formik';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = ()=> {

  const navigate = useNavigate();
  const loginSubmit = async (formdata, { resetForm }) =>{
    
    console.log(formdata);
    const response = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
    })

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Logedin'
      });
      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));
      navigate('/editor')
    }else if((response.status === 401)){
      Swal.fire({
        icon : 'success',
        title : 'Login Failed'
      })
    }else{
      console.log('unknown error ocuured');
    }
    resetForm();
}
return (
<section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/edit-social-media-profile-5295893-4412910.png"
                alt="login form"
                className="d-block m-auto"
                style={{ borderRadius: "1rem 0 0 1rem" }}
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <Formik initialValues={{
                  email:"",
                  password:"",             
                 }} onSubmit={loginSubmit}>
                  {({values,handleSubmit,handleChange})=>(
                <form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">Image Editor</span>
                  </div>
                  <h5
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Sign into your account
                  </h5>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <NavLink to="/signup" style={{ color: "#393f81" }}>
                      Register here
                    </NavLink>
                  </p>
                </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}
export default Login;