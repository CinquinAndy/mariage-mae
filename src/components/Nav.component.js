import Link from 'next/link'

export function NavComponent() {
	return (
		<nav
			className={
				'flex h-[100px] w-full items-center justify-center border-b border-gray-300 bg-white py-8'
			}
		>
			<div className={'mx-auto h-full w-full max-w-xl px-4 md:px-6 xl:px-8'}>
				<div className={'flex h-full w-full items-center justify-evenly'}>
					<Link href={'/'}>Page 1</Link>
					<Link href={'/'}>Page 2</Link>
					<Link href={'/'}>icon</Link>
					<Link href={'/'}>Page 4</Link>
					<Link href={'/'}>Page 5</Link>
				</div>
			</div>
		</nav>
	)
}
