import next from 'eslint-config-next'
import prettier from 'eslint-config-prettier'

const config = [
	...next,
	prettier,
	{
		ignores: ['.husky/**'],
	},
]

export default config
