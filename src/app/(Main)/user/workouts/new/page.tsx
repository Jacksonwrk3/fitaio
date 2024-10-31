"use client";
import Link from "next/link";
import Image from "next/image";
import { Button, TextInput, Modal } from "@/app/components";
import { useState } from "react";
const WorkoutsNew = () => {
  const [searchedValue, setsearchedValue] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const searchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchedValue = e.target.value;
    setsearchedValue(searchedValue);
  };

  const onClick = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/exercise`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="mb-4 mt-2 ">
        <Link href="/user/workouts">
          <div className="flex flex-row items-center  space-x-3">
            <div>
              <Image
                src="/arrow-left-primary-400.png "
                width={14}
                height={14}
                alt="left-arrow icon"
              />
            </div>
            <span className="text-primary-400 hover:underline text-sm">
              Back to workouts
            </span>
          </div>
        </Link>
      </div>
      <div className="  border-containerGray">
        <h1 className="bg-primary-300 px-4 text-lg   py-3 rounded-t text-cont font-bold">
          Create new workout
        </h1>
        <div className="px-4 pt-3 border-x-2 border-b-2 border-containerGray pb-16 rounded-b">
          <div className="flex flex-col space-y-4">
            <div>
              <label className="text-sm font-bold" htmlFor="workout-name">
                Workout name
              </label>
              <TextInput
                placeholder="Enter a name"
                id="workout-name"
                value={searchedValue}
                onChange={searchOnChange}
              />
            </div>
            <div>
              <label className="text-sm font-bold" htmlFor="workout-name">
                Add Exercises
              </label>
              <TextInput
                placeholder="Enter a name"
                id="workout-name"
                value={searchedValue}
                onChange={searchOnChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Button onClick={onClick}>Test</Button>
    </div>
  );
};

export default WorkoutsNew;
