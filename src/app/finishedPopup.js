'use client'

import { useState } from 'react'
import { Modal, Button } from '@heroui/react'

export function FinishedPopup() {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Modal isOpen={isOpen} onOpenChange={setIsOpen}>
			<Modal.Backdrop variant="blur">
				<Modal.Container placement="center" size="lg">
					<Modal.Dialog>
						<Modal.Header className="font-updock text-mae-950 flex flex-col gap-1 text-4xl">
							<Modal.Heading>Un moment dans le temps...</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p>Chers visiteurs,</p>
							<p>
								Ce site représente un moment précieux figé dans le temps - le
								mariage de Mae et Romain qui &lsquo;est déroulé le 10 août 2024.
							</p>
							<p>
								Bien que l&apos;événement soit passé, nous gardons ce site en
								ligne comme un souvenir digital de cette magnifique journée et
								de tous les préparatifs qui l&apos;ont précédée.
							</p>
						</Modal.Body>
						<Modal.Footer>
							<Button color="primary" slot="close" className="font-kanit">
								Je comprends
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	)
}
