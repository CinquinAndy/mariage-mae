import Link from 'next/link'
import React from 'react'

export function SignatureComponent() {
	const actualYear = new Date().getFullYear()
	return (
		<div
			className={
				'mx-auto flex w-full  max-w-xl flex-col px-4 py-20 md:px-6 xl:max-w-3xl xl:px-8'
			}
		>
			<div className={'flex w-full items-center justify-center'}>
				<div className={'w-2/3 border-t border-gray-200 pb-20 xl:w-1/3'}></div>
			</div>
			<p className={'mx-auto text-center text-sm text-gray-600'}>
				© {actualYear} Maeva Cinquin - Tous droits réservés - Developed with ❤️
				by{' '}
				<Link
					className={'text-sm text-gray-600 underline'}
					href={'https://andy-cinquin.fr'}
					target={'_blank'}
				>
					Andy Cinquin
				</Link>
			</p>
		</div>
	)
}
