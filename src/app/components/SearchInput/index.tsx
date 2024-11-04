import React, { useState, Suspense } from "react";
import TextInput from "../TextInput";
import TextSkeleton from "../TextSkeleton";
import Loading from "./loading";
/**
 * @interface SearchInputProps
 * @property {string} id - ID for TextInput
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>} - Function that runs when TextInput changes
 * @property {string[]} items - Auto-complete items
 * @property {value} value - Value of the inputs entered into the text box
 */
interface SearchInputProps {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>;
  items: string[];
  value: string;
}

/**
 * @description Search Bar that gives suggestions as you type
 * @param {string} id - ID for TextInput
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>} onChange - Function that runs when TextInput changes
 * @param {string[]} items - Auto-complete items
 * @param {value} value - Value of the inputs entered into the text box
 */
const SearchInput: React.FC<SearchInputProps> = ({
  id,
  onChange,
  items,
  value,
}) => {
  const [error, setError] = useState(null);
  return (
    <div className="flex flex-col space-y-1">
      <TextInput id={id} onChange={onChange} value={value} />
      {items ? (
        <div className="border flex flex-col space-y-1 p-3 border-loadingGray w-full  rounded">
          {/* List items. If items aren't done fetching load fallback UI */}
          <Suspense fallback={<Loading />}>
            <div>Push up</div>
            <div>Sit up</div>
            <div>Back row</div>
            <div>Tricip pull down</div>
            <div>Curls</div>
          </Suspense>
        </div>
      ) : null}
    </div>
  );
};

export default SearchInput;
