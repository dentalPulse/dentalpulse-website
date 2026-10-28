import React from 'react';

export function IntegrationsHowItWorks() {
  const steps = [
    {
      step: 'STEP 1',
      title: 'Kick-off call',
      description: 'We map the systems you use and the metrics that matter most.',
    },
    {
      step: 'STEP 2',
      title: 'Secure connection',
      description: 'Our team connects your data sources and imports your history.',
    },
    {
      step: 'STEP 3',
      title: 'Automatic sync',
      description: 'Data refreshes continuously in real time — dashboards and alerts stay current.',
    },
    {
      step: 'STEP 4',
      title: 'Team onboarding',
      description: 'Role-based training for owners, managers, reps and marketing.',
    },
  ];

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 md:py-28 px-6">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="m-0 text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white max-w-[680px]">
          Connected and running without IT headaches.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-14">
          {steps.map((item) => (
            <div
              key={item.step}
              className="border-t-2 border-[#12F095] pt-5 flex flex-col"
            >
              <span className="font-mono text-[13px] font-semibold text-[#12F095] tracking-wider uppercase">
                {item.step}
              </span>
              <h3 className="m-0 text-[19px] sm:text-[20px] font-extrabold text-white mt-2.5">
                {item.title}
              </h3>
              <p className="m-0 text-[15px] sm:text-[16px] leading-[1.6] text-[#BDBDBD] mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
