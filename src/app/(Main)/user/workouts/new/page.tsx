"use client";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/app/util/supabase/client";
import { Button, TextInput, Modal, TextSkeleton } from "@/app/components";
import ExerciseSearchBar from "./feature/ExerciseSearchBar";
import { useState } from "react";
const WorkoutsNew = () => {
  const [workoutName, setWorkoutName] = useState("");

  // Initialize supabase client
  const supabase = createClient();

  //Workout Text Input's onChange function
  const workoutNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let workoutValue = e.target.value;
    setWorkoutName(workoutValue);
  };

  /**
   * @TODO Make real fetching function
   */
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
                value={workoutName}
                onChange={workoutNameOnChange}
              />
            </div>
            <div>
              <label className="text-sm font-bold" htmlFor="exercise">
                Add Exercises
              </label>
              <ExerciseSearchBar />
            </div>
            <Button
              onClick={() => {
                console.log("place holder function");
              }}
              width="full"
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsNew;
