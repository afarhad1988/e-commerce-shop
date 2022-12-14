import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import * as Yup from 'yup'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ButtonTemplate } from '../../mixin'
import { signinUser } from '../../redux/slices/userSlice'
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
  border: none;
  border-radius: 8px;
  ${ButtonTemplate}
`
const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const { isError, isSuccess, errorMessage } = useSelector((s) => s.user)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Your password is too short')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      delete values.passwordConfirmation
      dispatch(signinUser(values))
    },
  })
  useEffect(() => {
    if (isError) {
      toast.error(errorMessage)
    }
    if (isSuccess) {
      navigation('/')
    }
  }, [isSuccess, isError, errorMessage, dispatch, navigation])

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
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

            <Button type="submit">Sign In</Button>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Login
