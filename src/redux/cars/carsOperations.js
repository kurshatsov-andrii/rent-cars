import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://65ba7939b4d53c06655301c5.mockapi.io'

export const getAllCars = createAsyncThunk(
	'cars/getAll',
	async (page, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`/adverts?p=${page}&l=12`)
			return data
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)

export const getAllCarsWithoutPage = createAsyncThunk(
	'cars/getAllCars',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(`/adverts`)
			return data
		} catch (e) {
			return rejectWithValue(e.message)
		}
	}
)
