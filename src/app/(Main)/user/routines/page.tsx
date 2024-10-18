"use client";
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/app/context/Session/SessionContext";
import { Button, Modal, Toast } from "@/app/components";
import { useToast } from "@/app/hooks/useToast";
import { title } from "process";
const Routines = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const session = useContext(SessionContext);
  const router = useRouter();

  const { openToast } = useToast();
  const closeModal = () => {
    setDisplayModal(false);
  };
  const openModal = () => {
    openToast(<Toast status="error" title="Accounted Created" />, 5000);
    setDisplayModal(true);
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
    <div className="">
      <div>Create a Routines</div>
      <Button>Create a Routine</Button>
      <Button onClick={openModal}>Toggle Modal</Button>
      <Modal isOpen={displayModal} onClose={closeModal} target="modal-root">
        Child
      </Modal>
    </div>
  );
};

export default Routines;
