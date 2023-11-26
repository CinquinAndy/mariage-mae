// stores/visitedPagesStore.js
import create from 'zustand'

const useVisitedPagesStore = create((set, get) => {
	// Function to save state to localStorage
	const saveStateToLocalStorage = newState => {
		try {
			const serializedState = JSON.stringify(newState)
			localStorage.setItem('visitedPages', serializedState)
		} catch (e) {
			// Handle errors or ignore
			console.error('Could not save state to localStorage:', e)
		}
	}

	// Load initial state from localStorage or use an empty object
	const initialState = JSON.parse(localStorage.getItem('visitedPages')) || {}

	return {
		visitedPages: initialState,
		addVisitedPage: page => {
			const newState = { ...get().visitedPages, [page]: false }
			saveStateToLocalStorage(newState)
			set({ visitedPages: newState })
		},
		removeVisitedPageIndicator: page => {
			const newState = { ...get().visitedPages, [page]: true }
			saveStateToLocalStorage(newState)
			set({ visitedPages: newState })
		},
	}
})

export default useVisitedPagesStore
