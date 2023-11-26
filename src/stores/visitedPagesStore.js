// stores/visitedPagesStore.js
import create from 'zustand'

const useVisitedPagesStore = create(set => ({
	visitedPages: {},
	addVisitedPage: page =>
		set(state => ({
			visitedPages: { ...state.visitedPages, [page]: true },
		})),
	removeVisitedPageIndicator: page =>
		set(state => {
			const newVisitedPages = { ...state.visitedPages }
			delete newVisitedPages[page]
			return { visitedPages: newVisitedPages }
		}),
}))

export default useVisitedPagesStore
