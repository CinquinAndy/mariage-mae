'use client'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'

function ModalImportantComponent(props) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<Modal
			backdrop={'blur'}
			isOpen={!isOpen}
			placement={'auto'}
			onOpenChange={onOpenChange}
			size={'xl'}
		>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							{`N'oubliez pas de nous confirmer votre présence !`}
						</ModalHeader>
						<ModalBody>
							<p>
								Vous voulez venir à notre mariage ? Partager ce moment
								fantastique avec nous ?
							</p>
							<p>
								{
									"N'oubliez pas de nous confirmer votre présence en cliquant sur le bouton ci-dessous !"
								}
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="default" variant="light" onPress={onClose}>
								Je visite le site
							</Button>
							<Button color="primary" onPress={onClose}>
								Je viens !
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default ModalImportantComponent
