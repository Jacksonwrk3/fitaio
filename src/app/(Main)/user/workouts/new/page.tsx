import Link from "next/link";
import Image from "next/image";
const WorkoutsNew = () => {
  return (
    <div>
      <div className="my-4">
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
            <span className="text-primary-400 underline text-sm">
              Back to workouts
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutsNew;
