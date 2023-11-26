// stores/visitedPagesStore.js
import create from 'zustand'

const useVisitedPagesStore = create((set, get) => ({
	visitedPages: {},
	addVisitedPage: page =>
		set(state => ({
			visitedPages: { ...state.visitedPages, [page]: false },
		})),
	removeVisitedPageIndicator: page =>
		set(state => ({
			visitedPages: { ...state.visitedPages, [page]: true },
		})),
}))

export default useVisitedPagesStore
