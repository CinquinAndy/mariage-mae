import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	return (
		<div
			className={
				'relative z-10 flex min-h-[calc(100vh-200px)] w-screen flex-col items-center justify-center xl:h-screen'
			}
		>
			<Image
				src={'/willumarryme.jpg'}
				fill={true}
				className={'-z-10 hidden object-cover opacity-50 xl:block'}
				alt={'will u marry me'}
				quality={90}
			/>
			<Image
				src={'/willumarryme_tablet.jpg'}
				fill={true}
				className={'-z-10 hidden object-cover opacity-50 md:block xl:hidden'}
				alt={'will u marry me'}
				quality={90}
			/>
			<Image
				src={'/willumarryme_phone.jpg'}
				fill={true}
				className={'-z-10 block object-cover opacity-50 md:hidden'}
				alt={'will u marry me'}
				quality={90}
			/>
			<div
				className={
					'z-20 mx-auto grid h-full w-full grid-cols-12 overflow-visible px-4 md:px-8 xl:mt-0 xl:px-32'
				}
			>
				<div className="z-10 col-span-12 flex transform items-center justify-evenly pt-0 xl:col-span-12">
					<div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-xl">
						<h2 className="mb-4 text-5xl font-semibold">Photos</h2>
						<p className="mb-4">
							Nous serions ravis que vous partagiez vos photos de notre mariage
							! Voici comment procéder :
						</p>
						<ol className="mb-4 list-decimal pl-5">
							<div>
								Visitez{' '}
								<Link
									href="https://photos-wedding.cinquin-maeva.com"
									className="z-50 cursor-pointer text-mae-950 underline"
								>
									photos-wedding.cinquin-maeva.com
								</Link>
							</div>
							<li>
								Utilisez les identifiants suivants :
								<ul className="mt-2 list-disc pl-5">
									<li>
										{"Nom d'utilisateur :"} <strong>mariage</strong>
									</li>
									<li>
										Mot de passe : <strong>mariage</strong>
									</li>
								</ul>
							</li>
							<div className={'pt-4'}>
								{
									"Ensuite, allez dans 'Albums collaboratif', vous pouvez maintenant mettre vos photos ici !"
								}
							</div>
							<Link
								className={'z-50 cursor-pointer pb-4 text-mae-950 underline'}
								href={
									'https://photos-wedding.cinquin-maeva.com/apps/photos/sharedalbums/Mariage%20Mae%20&%20Romain%20(mariage)'
								}
							>
								{"Lien vers l'album"}
							</Link>
							<br />
							<br />
							<li>Envoyez vos photos préférées de notre journée spéciale !</li>
						</ol>
						<p>
							Nous avons hâte de voir tous ces beaux souvenirs à travers vos
							yeux. Merci !
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
