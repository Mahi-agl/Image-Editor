import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";
const SignUp = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    // 1. url
    // 2. request method
    // 3. data
    // 4. data format

    // asynchronous function - returns promise
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);

    if (response.status === 200) {
      console.log("user data added!");
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "Registered Successfully",
      });
    }

    console.log("request sent");
  };

  return (
    <>
      <section className="text-center text-lg-start" style={{minHeight: '100vh' ,backgroundImage: `url('https://ckstudio.in/wp-content/uploads/2020/04/Images-editing-service.jpg')`}}>
        {/* Jumbotron */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 ">
                  <h2 className="fw-bold mb-5 text-center">Sign up now</h2>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      password: "",
                    }}
                    onSubmit={userSubmit}
                  >
                    {({ values, handleChange, handleSubmit }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="">
                              <label
                                className="form-label"
                                htmlFor="form3Example1"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                id="form3Example1"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Email input */}
                        <div className=" mb-4">
                          <label className="form-label" htmlFor="form3Example3">
                            Email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        {/* Password input */}
                        <div className=" mb-4">
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example33"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example33"
                          >
                            Subscribe to our newsletter
                          </label>
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>
                        {/* Register buttons */}
                        <div className="text-center">
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-google" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-twitter" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
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
              <img
                src="https://wp-modula.com/wp-content/uploads/2020/10/17835298-1024x1024.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
