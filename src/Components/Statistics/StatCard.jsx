import React from 'react';

function StatCard({ title, value }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl lg:text-2xl font-bold">{title}</h3> {/* Adjusted font size */}
      <p className="mt-2.5 text-3xl lg:text-4xl font-extrabold max-md:text-3xl">{value}</p> {/* Adjusted value size */}
    </div>
  );
}

export default StatCard;
