import React from 'react';
import {ErrorMessage, Formik, useFormik} from 'formik';

// Documentation
// https://formik.org/docs/overview

const FormikLib = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);

        }, 400);
      }}
    >
      {/*------------*/}
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          resetForm
          /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit}>
          {console.log('values', values)}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
         <p style={{color: "red"}}>{errors.email && touched.email && errors.email}</p>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          <p style={{color: "red"}}>{errors.password && touched.password && errors.password}</p>
          <button type="submit" disabled={!isValid && isSubmitting}>
            Submit
          </button>

          <ErrorMessage name="email"  />
        </form>
      )}

      {/*------------*/}
    </Formik>
  </div>
);

export default FormikLib;