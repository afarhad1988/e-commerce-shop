import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ButtonTemplate } from "../../mixin";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbf0f4;
  padding: 50px 0;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: #2fab84;
  padding: 20px;
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
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
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
      <Footer />
    </>
  );
};

export default Login;
