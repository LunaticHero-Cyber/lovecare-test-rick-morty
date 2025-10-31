const CharacterItemSkeleton = () => (
  <div className="relative flex flex-col gap-2.5">
    <div className="flex flex-col h-full py-1 px-2 gap-1 bg-amber-100 shadow-2xl z-20">
      <div className="h-3.5 bg-gray-200 rounded animate-pulse" />
      <div className="h-32 bg-gray-200 rounded animate-pulse mb-4" />
      <div className="h-3.5 bg-gray-200 rounded animate-pulse mb-4" />
      <div className="h-3.5 bg-gray-200 rounded animate-pulse mb-4" />
    </div>
  </div>
);

export default CharacterItemSkeleton;
