import React, { useState, Suspense, useEffect } from "react";
import { TextSkeleton, TextInput } from "@/app/components";
import Loading from "./loading";
import { useDebounce } from "@/app/hooks";
// import { fetchExercises } from "@/app/actions/exercises";
/**
 * @interface ExerciseSearchBarProps
 * @property {string} id - ID for TextInput
 * @property {string[]} items - Auto-complete items
 * @property {value} value - Value of the inputs entered into the text box
 * @property {(e: React.MouseEvent) => void} onItemClick - The function to be called when the button is clicked

 */
interface ExerciseSearchBarProps {
  id?: string;
}

/**
 * @interface exercise
 * @property {string} difficulty_level - How hard the exercise is
 * @property {string} exercise - Name of exercise
 * @property {id} number - Id of the workout in database
 * @property {string | null} long_yt_vid - Link of the LONG form youtube tutorial if provided, NULL if none
 * @property {string | null} secondary_muscle - The second muscle the exercise targets
 * @property {string | null} short_yt_vid - Link of the SHORT form youtube tutorial if provided, NULL if none
 * @property {string} target_muscle - Main muscle the exercise targets
 * @property {string | null} tertiary_muscle - Third muscle target, if any
 */
interface Exercise {
  difficulty_level: string;
  exercise: string;
  id: number;
  long_yt_vid: string | null;
  secondary_muscle: string | null;
  short_yt_vid: string | null;
  target_muscle: string;
  tertiary_muscle: string | null;
}

/**
 * @description Search Bar that gives suggestions as you type
 * @param {string} id - ID for TextInput
 * @param {(val: string) => void | Promise<void>} onSearch - Query Function that runs when TextInput changes
 * @param {(e: React.MouseEvent) => void} onClick - click event
 */
const ExerciseSearchBar: React.FC<ExerciseSearchBarProps> = ({ id }) => {
  const [error, setError] = useState<null | string>(null);
  const [searchValue, setSearchValue] = useState("");
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedValue = useDebounce(searchValue, 200);

  useEffect(() => {
    (async () => {
      //If debounce value's length is greater than 0 fetch exercises and display
      if (debouncedValue.length > 0) {
        //sets loading to true
        setIsLoading(true);
        //Fetches the exercise from api
        const exercises = await fetchExercises(debouncedValue);
        //If returned exercises array is greater than 1, display exercises
        if (exercises.length > 0) {
          setExercises(exercises);
        }
        //If exercises is equal to 0 display error message
        else {
          setError("No exercises found...");
        }
        //After all logic is done, set loading to false
        setIsLoading(false);
      } else {
        //If there is no value being searched, don't hit api, just don't display any exercises
        setExercises([]);
      }
    })();
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchValue(val);
  };
  return (
    <div className="flex flex-col space-y-1">
      <TextInput onChange={handleChange} value={searchValue} />
      {/*If loading state is true, display the loading component*/}
      {isLoading ? (
        <Loading />
      ) : // If it is not loading and exercises state array is greater than 0, display the exercises
      // If error then display error
      exercises.length > 0 || error ? (
        <ul className="border flex flex-col space-y-1 p-3 border-loadingGray w-full rounded">
          {error ? (
            <p className="border-b border-loadingGray last:border-b-0 p-1">
              {error}
            </p>
          ) : (
            // Map through the exercises array and display each exercise
            exercises.map((exercise) => (
              <li
                key={exercise.id}
                className="border-b border-loadingGray last:border-b-0 p-1"
              >
                {exercise.exercise}
              </li>
            ))
          )}
        </ul>
      ) : // If not loading and no exercises are available, render nothing
      null}
    </div>
  );
};

// Fetches exercise from api
const fetchExercises = async (searchValue: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN}/exercise?name=${searchValue}`
  );

  const res = await response.json();
  return res.exercises;
};

export default ExerciseSearchBar;
