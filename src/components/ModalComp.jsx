import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ModalComp({ isOpen, onOpen, onClose, id, text, removeItem }) {
    const navigate = useNavigate();
    
    const handleClick = () => {
        removeItem(id)
        onClose()
        navigate("/order")
    }
    
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent className="pt-5">
                {/* <ModalHeader>Modal Title</ModalHeader> */}
                <ModalCloseButton />
                <ModalBody>{text}</ModalBody>

                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                        Tidak
                    </Button>
                    <Button colorScheme="red" onClick={handleClick}>Hapus</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalComp;
