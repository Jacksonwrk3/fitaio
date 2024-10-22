"use client";
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/app/context/Session/SessionContext";
import { Button, Modal, Toast } from "@/app/components";
import { useToast } from "@/app/hooks/useToast";
import { title } from "process";
import Link from "next/link";
const Routines = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const session = useContext(SessionContext);
  const router = useRouter();

  const { openToast } = useToast();
  const closeModal = (e: React.MouseEvent) => {
    setDisplayModal(false);
  };
  const openModal = () => {
    // openToast(<Toast status="error" title="Accounted Created" />, 5000);

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
    <div className="border px-5 pt-8 border-red-300 md:px-0 md:pt-0 h-screen">
      <div className="flex space-y-2 flex-col">
        <h1 className="text-xl font-bold">Routines</h1>
        <Link href="user/routines/new">
          <button className="w-40 px-4 bg-blue-600 rounded py-2 text-white">
            Create Routine
          </button>
        </Link>
      </div>
      <button
        className="w-40 px-4 bg-blue-600 rounded py-2 text-white"
        onClick={openModal}
      >
        Toggle Modal
      </button>
      <Modal isOpen={displayModal} onClose={closeModal} target="modal-root">
        <div>HELLO</div>
      </Modal>
      ;
    </div>
  );
};

export default Routines;
