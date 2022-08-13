import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { ButtonTemplate } from "../../mixin";
import { signupUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const Wrapper = styled.div`
  width: 40%;
  background-color: #2fab84;
  padding: 20px;
  margin: 0 auto;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
`;
const Form = styled.form``;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
`;
const InputGroup = styled.div`
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  ${ButtonTemplate}
`;
const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isError, isSuccess, errorMessage } = useSelector((s) => s.user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Your password is too short")
        .required("Password is required"),
      passwordConfirmation: Yup.string()
        .min(6, "Your password is too short")
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Confirmation Password is required"),
    }),
    onSubmit: (values) => {
      delete values.passwordConfirmation;
      dispatch(signupUser(values));
    },
  });
  useEffect(() => {
    if (isSuccess) {
      navigation("/");
    }
    if (isError) {
      toast.error(errorMessage);
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigation]);
  return (
    <Layout>
      <Wrapper>
        <Title>Create an account</Title>
        <Form onSubmit={formik.handleSubmit}>
          <InputGroup>
            <Input
              placeholder="Email"
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="Password"
              type="text"
              id="password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="Confirm password"
              type="text"
              id="passwordConfirmation"
              {...formik.getFieldProps("passwordConfirmation")}
            />
            {formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation ? (
              <div>{formik.errors.passwordConfirmation}</div>
            ) : null}
          </InputGroup>
          <Button type="submit">Register</Button>
        </Form>
      </Wrapper>

      <ToastContainer />
    </Layout>
  );
};

export default Register;
