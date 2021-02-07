import * as React from "react";

interface ILoadingProps {}

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex justify-center place-items-center">
      <h1 className="font-bold text-xl">Loading...</h1>
    </div>
  );
};
export default Loading;
