import { createSlice } from '@reduxjs/toolkit'
import { statsData, weeklyActivity, languageData, recentActivity } from '../../data/mockData'

const initialState = {
  stats: statsData,
  weeklyActivity: weeklyActivity,
  languages: languageData,
  activity: recentActivity,
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 4,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
      state.currentPage = 1
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { setSearchQuery, setCurrentPage } = dashboardSlice.actions
export default dashboardSlice.reducer