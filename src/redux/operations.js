import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'https://65ba7939b4d53c06655301c5.mockapi.io'

export const fetchAdverts = createAsyncThunk(
	'adverts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/adverts')
			return response.data
		} catch (e) {
			toast.error('Oops... Something went wrong! Try again!')
			return thunkAPI.rejectWithValue(e.message)
		}
	}
)
