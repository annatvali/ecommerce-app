const Skeleton: React.FC = () => (
  <div className="flex flex-col gap-2 p-2">
    {Array.from({ length: 5 }).map((_, index) => (
      <div
        key={index}
        className="flex justify-between items-center gap-2 animate-pulse h-13"
      >
        <div className="flex gap-2">
          <div className="flex items-center flex-start pl-2 h-8 w-60 bg-gray-200 rounded">
            <div className="h-5 w-40 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-300 font-bold py-2 px-2 rounded opacity-50 cursor-not-allowed">
            <div className="bg-gray-400 h-5 w-5 rounded"></div>
          </div>
          <div className="flex items-center gap-2 bg-gray-300 py-2 px-2 rounded opacity-50 cursor-not-allowed w-[90px]">
            <div className="bg-gray-400 h-5 w-12 mr-2 rounded"></div>
            <div className="bg-gray-400 h-5 w-5 rounded"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Skeleton;
