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
		<Modal isOpen={isOpen} placement={'auto'} onOpenChange={onOpenChange}>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							Modal Title
						</ModalHeader>
						<ModalBody>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								pulvinar risus non risus hendrerit venenatis. Pellentesque sit
								amet hendrerit risus, sed porttitor quam.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
								pulvinar risus non risus hendrerit venenatis. Pellentesque sit
								amet hendrerit risus, sed porttitor quam.
							</p>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Close
							</Button>
							<Button color="primary" onPress={onClose}>
								Action
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default ModalImportantComponent
