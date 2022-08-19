import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ButtonTemplate } from '../../mixin'
import { signupUser } from '../../redux/slices/userSlice'
import Input from '../../components/Input'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbf0f4;
  padding: 50px 0;
`
const Wrapper = styled.div`
  width: 40%;
  background-color: #2fab84;
  padding: 20px;
`
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
`
const Form = styled.form``

const Button = styled.button`
  width: 100%;
  border-radius: 8px;
  border: none;
  ${ButtonTemplate}
`
const Register = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const { isError, isSuccess, errorMessage } = useSelector((s) => s.user)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Your password is too short')
        .required('Password is required'),
      passwordConfirmation: Yup.string()
        .min(6, 'Your password is too short')
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirmation Password is required'),
    }),
    onSubmit: (values) => {
      delete values.passwordConfirmation
      dispatch(signupUser(values))
    },
  })
  useEffect(() => {
    if (isSuccess) {
      navigation('/')
    }
    if (isError) {
      toast.error(errorMessage)
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigation])

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Create an account</Title>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              formik={formik}
              placeholder="Email"
              type="email"
              id="email"
            />
            <Input
              formik={formik}
              placeholder="Password"
              type="password"
              id="password"
            />
            <Input
              formik={formik}
              placeholder="Confirm password"
              type="password"
              id="passwordConfirmation"
            />

            <Button type="submit">Register</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Register
