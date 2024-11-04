/**
 * @description A gray div that pulses. Used as fallback component when async text is loading
 */
const TextSkeleton = () => {
  return <div className="w-full animate-pulse p-3 bg-loadingGray "></div>;
};

export default TextSkeleton;
