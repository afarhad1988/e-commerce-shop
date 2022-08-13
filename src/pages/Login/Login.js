import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { ButtonTemplate } from "../../mixin";
import { signinUser } from "../../redux/slices/userSlice";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

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

const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  ${ButtonTemplate}
`;
const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isError, isSuccess, errorMessage } = useSelector((s) => s.user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Your password is too short")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      delete values.passwordConfirmation;
      dispatch(signinUser(values));
    },
  });
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
    }
    if (isSuccess) {
      navigation("/");
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigation]);

  return (
    <Layout>
      <Wrapper>
        <Title>Sign In</Title>
        <Form onSubmit={formik.handleSubmit}>
          <Input placeholder={"Email"} id={"email"} formik={formik} />
          <Input placeholder={"Password"} id={"password"} formik={formik} />

          <Button type="submit">Sign In</Button>
        </Form>
      </Wrapper>

      <ToastContainer />
    </Layout>
  );
};

export default Login;
