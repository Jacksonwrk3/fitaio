/**
 * @description Fallback component for when aysnchronous text is loading
 */
const TextSkeleton = () => {
  return <div className="w-full animate-pulse p-2 bg-loadinGray "></div>;
};

export default TextSkeleton;
