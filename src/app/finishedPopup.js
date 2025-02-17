'use client'

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react'

export function FinishedPopup() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure({ defaultOpen: true })

	return (
		<Modal
			backdrop="blur"
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement="center"
			size="lg"
		>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className="flex flex-col gap-1 font-updock text-4xl text-mae-950">
							Un moment dans le temps...
						</ModalHeader>
						<ModalBody>
							<p>Chers visiteurs,</p>
							<p>
								Ce site représente un moment précieux figé dans le temps - le
								mariage de Mae et Romain qui s'est déroulé le 10 août 2024.
							</p>
							<p>
								Bien que l'événement soit passé, nous gardons ce site en ligne
								comme un souvenir digital de cette magnifique journée et de tous
								les préparatifs qui l'ont précédée.
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onPress={onClose} className="font-kanit">
								Je comprends
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
