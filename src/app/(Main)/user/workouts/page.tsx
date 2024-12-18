"use client";
import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { SessionContext } from "@/app/context/Session/SessionContext";
import { Button, Modal, Toast, Text } from "@/app/components";
import { useToast } from "@/app/hooks/useToast";
import Link from "next/link";
const Workouts = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const { openToast } = useToast();
  const closeModal = (e: React.MouseEvent) => {
    setDisplayModal(false);
  };
  const openModal = () => {
    // openToast(<Toast status="error" title="Accounted Created" />, 5000);

    setDisplayModal(true);
  };

  return (
    <div className="pt-8">
      <div className="flex justify-between ">
        <h1 className="text-xl font-bold">Workouts</h1>
        <Link href="workouts/new">
          <button className="w-40 px-4 bg-violet-500 rounded py-2 text-white">
            Create Workout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Workouts;
