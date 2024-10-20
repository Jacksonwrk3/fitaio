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
    <div className="border px-5 pt-8 border-red-300">
      <div className="flex space-y-2 flex-col">
        <h1 className="text-xl font-bold">Routines</h1>
        <div className="w-3/5 border-2">
          {/* Button is taking width of its parent link container, which is taking parent div width */}
          <Link href="user/routines/new">
            <Button width="full">Create Routine</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Routines;
