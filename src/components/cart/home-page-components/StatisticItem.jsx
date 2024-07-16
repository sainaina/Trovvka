import React from 'react';

const statisticsData = [
  { value: '5', label: 'Category', color: 'text-white' },
  { value: '36', label: 'Providers', color: 'text-[#4adeff]' },
  { value: '36', label: 'Customers', color: 'text-[#6ab33e]' }
];

function StatisticItem({ value, label, color }) {
  return (
    <div className="flex flex-col my-auto">
      <div className={`self-center text-6xl font-extrabold ${color} max-md:text-4xl`}>
        {value}
      </div>
      <div className="mt-9 text-2xl text-white">{label}</div>
    </div>
  );
}

function StatisticsSection() {
  return (
    <section className="flex flex-col ml-[500px] w-[900px] items-center px-16 pt-9 pb-20 bg-[#022278] rounded-[40px] max-md:px-5">
      <div className="flex flex-col w-full max-w-[878px] max-md:max-w-full] ">
        <header className="self-center text-xl font-semibold text-white max-md:max-w-full">
          <span className="font-bold flex justify-center">STATICS</span>
          <h2 className="text-md text-[#ffb600] mt-[5px]">
            Trusted by thousands of people all over the world
          </h2>
        </header>
        <div className="flex gap-5 justify-between mt-[35px] whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          {statisticsData.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <StatisticItem value={stat.value} label={stat.label} color={stat.color} />
              {index < statisticsData.length - 1 && (
                <div className="shrink-0 w-0.5 bg-white  border-white border-solid h-[119px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;