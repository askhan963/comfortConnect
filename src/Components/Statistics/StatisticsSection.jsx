import React from 'react';
import StatCard from './StatCard';

const stats = [
  { title: "Experienced", value: "8 +" },
  { title: "Teams", value: "122 +" },
  { title: "Clients", value: "563 +" },
  { title: "Project Done", value: "232 +" }
];

function StatisticsSection() {
  return (
    <section className="container mx-auto rounded-lg py-8 bg-[linear-gradient(270deg,#007D6E_0%,#5EB47C_100%)] text-white">
      <div className="container mx-auto flex flex-wrap justify-center lg:justify-between gap-12 px-6 lg:px-16">
        {stats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </section>
  );
}

export default StatisticsSection;
