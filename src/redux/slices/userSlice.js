import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosV1 } from '../../config/api'

export const signupUser = createAsyncThunk(
  'user / signupUser',
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosV1.post('/api/auth/register', values)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token', JSON.stringify(data.accessToken))
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

export const signinUser = createAsyncThunk(
  'user / signinUser',
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosV1.post('/api/auth/login', values)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token', data.accessToken)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)
export const getProfile = createAsyncThunk(
  'user / profile',
  async (values, thunkAPI) => {
    try {
      const { data } = await axiosV1.get('/api/users/profile', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      })

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  },
)

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  profile: {},
  token: localStorage.getItem('token') || {},
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkUserAuth: (state) => {
      state.isSuccess = state.user && state.token
    },
    logout: (state) => {
      state.user = {}
      state.isSuccess = false
      state.token = ''
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.accessToken
      state.isFetching = false
      state.isSuccess = true
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false
      state.isError = true
      state.errorMessage = payload.message
    },
    [signinUser.fulfilled]: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.accessToken
      state.isFetching = false
      state.isSuccess = true
    },
    [signinUser.pending]: (state) => {
      state.isFetching = true
    },
    [signinUser.rejected]: (state, { payload }) => {
      state.isFetching = false
      state.isError = true
      state.errorMessage = payload.message
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profile = action.payload
    },
  },
})
export const { logout, checkUserAuth } = userSlice.actions
export default userSlice.reducer
