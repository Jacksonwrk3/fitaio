"use client";
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/app/context/Session/SessionContext";
import { Button, Modal } from "@/app/components";

const Routines = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const session = useContext(SessionContext);
  const router = useRouter();

  const closeModal = () => {
    setDisplayModal(false);
  };
  const toggleModal = () => {
    setDisplayModal((prevState) => !prevState);
  };
  useEffect(() => {
    //If there is an active session, do nothing
    if (session) {
    }
    //If session is null, redirect to home page ("/")
    else {
      router.replace("/");
    }
  }, [session, router]);
  return (
    <div id="modal-root">
      <div>Create a Routines</div>
      <Button>Create a Routine</Button>
      <Button onClick={toggleModal}>Toggle Modal</Button>
      <Modal isOpen={displayModal} onClose={closeModal} target="modal-root">
        Hello Hello Hello Hello Hello Hello Hello
      </Modal>
    </div>
  );
};

export default Routines;
