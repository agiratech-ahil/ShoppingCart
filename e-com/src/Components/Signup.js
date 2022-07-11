import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "*Required";
  } else if (values.firstname.length > 8) {
    errors.firstname = "Must be 8 characters or less";
  }

  if (!values.lastname) {
    errors.lastname = "*Required";
  } else if (values.lastname.length > 8) {
    errors.lastname = "Must be 8 characters or less";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }
  if (!values.password) {
    errors.password = "*Required";
  } else if (values.password.length > 8) {
    errors.password = "*Maximum 8 characters";
  } else if (values.password.length < 3) {
    errors.password = "*Minimum 5 characters";
  }

  if (!values.confirmpassword) {
    errors.confirmpassword = "*Required";
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = "*Password must match";
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },

    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="Signup-Form">
      <h2 className="form-title">Signup Here!</h2>
      <form>
        <input
          type="text"
          placeholder="FirstName.."
          name="firstname"
          id="firstname"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.firstname && formik.errors.firstname ? (
          <span className="error">{formik.errors.firstname}</span>
        ) : null}
        <input
          type="text"
          placeholder="LastName.."
          name="lastname"
          id="lastname"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.lastname && formik.errors.lastname ? (
          <span className="error">{formik.errors.lastname}</span>
        ) : null}
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          autoComplete="off"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.password && formik.errors.password ? (
          <span className="error">{formik.errors.password}</span>
        ) : null}
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          id="confirmpassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <span className="error">{formik.errors.confirmpassword}</span>
        ) : null}
        <button className="but">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
