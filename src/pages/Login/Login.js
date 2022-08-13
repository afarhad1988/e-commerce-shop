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
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Container = styled.div`
  background: #fbf0f4;
  padding: 50px 0;
`;
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
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
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

            <Button type="submit">Sign In</Button>
          </Form>
        </Wrapper>
      </Container>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
