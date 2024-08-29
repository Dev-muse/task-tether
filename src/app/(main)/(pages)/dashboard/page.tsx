import React from "react";

type Props = {};

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1
        className="text-4xl top-0 z-[10] sticky backdrop-blur-lg bg-background/50 p-6 
      flex items-center border-b "
      >
        Dashboard
      </h1>
    </div>
  );
};

export default DashboardPage;
