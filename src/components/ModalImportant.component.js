'use client'

import { useState } from 'react'
import { Modal, Button } from '@heroui/react'

function ModalImportantComponent() {
	const [isOpen, setIsOpen] = useState(true)

	return (
		<Modal isOpen={isOpen} onOpenChange={setIsOpen}>
			<Modal.Backdrop variant="blur">
				<Modal.Container placement="center" size="xl">
					<Modal.Dialog>
						<Modal.Header className="flex flex-col gap-1">
							<Modal.Heading>
								{`N'oubliez pas de nous confirmer votre présence !`}
							</Modal.Heading>
						</Modal.Header>
						<Modal.Body>
							<p>
								Vous voulez venir à notre mariage ? Partager ce moment
								fantastique avec nous ?
							</p>
							<p>
								{
									"N'oubliez pas de nous confirmer votre présence en cliquant sur le bouton ci-dessous !"
								}
							</p>
						</Modal.Body>
						<Modal.Footer>
							<Button color="default" variant="light" slot="close">
								Je visite le site
							</Button>
							<Button
								color="primary"
								onPress={() => {
									window.open(
										'https://docs.google.com/forms/d/e/1FAIpQLSerci9E0oDa1WfY7s6GyEM857JgdzlC7jFhuSqOwoFYPcTdBA/viewform',
										'_blank'
									)
									setIsOpen(false)
								}}
							>
								Je viens !
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	)
}

export default ModalImportantComponent
