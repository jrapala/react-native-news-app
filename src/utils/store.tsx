import React, { useCallback, useState, createContext, ReactNode } from "react"

interface ProviderProps {
	children: ReactNode
}

interface ContextProps {
	favorites: string[]
	handleSelection: (articleTitle: string) => void
}

export const FavoritesContext = createContext({} as ContextProps)

export const FavoritesProvider: React.FC<ProviderProps> = ({ children }) => {
	const [favorites, setFavorites] = useState<string[]>([])

	const handleSelection = useCallback((articleTitle: string) => {
		setFavorites(favoriteArticleTitles => {
			const index = favoriteArticleTitles.indexOf(articleTitle)
			if (index === -1) {
				return [...favoriteArticleTitles, articleTitle]
			} else {
				return [
					...favoriteArticleTitles.slice(0, index),
					...favoriteArticleTitles.slice(index + 1),
				]
			}
		})
	}, [])

	return (
		<FavoritesContext.Provider value={{ favorites, handleSelection }}>
			{children}
		</FavoritesContext.Provider>
	)
}
