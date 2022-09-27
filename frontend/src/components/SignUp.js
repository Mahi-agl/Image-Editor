import React from "react"
const SignUp = () => {
  return (
    <>
      <section className="text-center text-lg-start">
        {/* Jumbotron */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}>
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <Formik initialValues={{
                    name:"",
                    email:"",
                    password:"",
                  }} onSubmit={userSubmit}>
                    {({values,handleChange,handleSubmit})=>(
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">
                            First name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" defaultValue="" id="form2Example33" defaultChecked="" />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter" />
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                    )}
                    </Formik>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default SignUp
