import { create } from 'zustand'

// Pages visitées : false = visitée, l'indicateur reste ; true = indicateur retiré.
type VisitedPagesState = {
	visitedPages: Record<string, boolean>
	addVisitedPage: (page: string) => void
	removeVisitedPageIndicator: (page: string) => void
}

const useVisitedPagesStore = create<VisitedPagesState>(set => ({
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
