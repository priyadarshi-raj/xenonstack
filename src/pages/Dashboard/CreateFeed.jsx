import { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
const CreateFeed = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const createFeed = async () => {
    axios.post("https://nasabackend.onrender.com/api/v1/project/createfeed",{
      title,summary
    })
    .then(res => {
      alert(res.data.message);
      navigate("/dashboard")
    }).catch(() => {
      alert("Invalid")
    })
  } 
  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Add Feed
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                New Feed
              </ModalHeader>
              <ModalBody>
                <input
                  className="border rounded p-5"
                  type="text"
                  placeholder="Project Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  className="border rounded p-5"
                  type="text"
                  placeholder="Project Summary"
                  name="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={createFeed} onPress={onClose}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateFeed;
