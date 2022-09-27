import { Formik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const SignUp = () => {

  const userSubmit = async (formdata) => {
    console.log(formdata);
    const response = await fetch( 'http://localhost:5000/user/add', {
        method : 'POST',
        body : JSON.stringify(formdata),
        headers : {
            'Content-Type' : 'application/json'
        }
    })       
    console.log(response.status);
    
    if(response.status === 200){
        console.log('user data added!');
        Swal.fire({
            icon : 'success',
            title : 'Well Done',
            text : 'Registered Successfully'
        })
      }else{
      Swal.fire({
        icon:'error',
        title:'Opps!!',
        text:'SomeThing Went Wrong'
      })}

    console.log('request sent');
}

    

  return (
    <>
      <section className="text-center text-lg-start">
        
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
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <Formik initialValues={{
                    name:"",
                    email:"",
                    password:"",
                  }} onSubmit={userSubmit}>
                    {({values,handleChange,handleSubmit})=>(
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className=" mb-4">
                        <div className="">
                          <label className="form-label" htmlFor="name">
                           Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={values.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" mb-4">
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={values.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className=" mb-4">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>
                  </form>
                    )}
                    </Formik>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
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
