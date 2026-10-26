import React from 'react';

export function MarketingQuestionsSection() {
  const questions = [
    {
      question: 'Who is ready for our new product line?',
      description: 'Segments built from what dentists actually buy — and don’t.',
    },
    {
      question: 'Did that campaign bring in cases?',
      description: 'Tie opens and clicks to real orders and revenue.',
    },
    {
      question: 'Which practices are visiting our website?',
      description: 'Website tracking turns anonymous visits into warm leads.',
    },
    {
      question: 'Who should we prospect next?',
      description: 'Profile your best accounts and find practices that look like them.',
    },
  ];

  return (
    <section className="w-full bg-white pb-20 sm:pb-28 px-6">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="m-0 text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0A0A0A] max-w-[720px]">
          Marketing that shows up in case volume.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 sm:mt-12">
          {questions.map((item) => (
            <div
              key={item.question}
              className="bg-white border border-[#E6E6E6] hover:border-[#D1D5DB] hover:shadow-[0_12px_30px_-15px_rgba(0,0,0,0.1)] transition-all rounded-[20px] p-7 flex flex-col justify-between"
            >
              <div>
                <div
                  className="text-[36px] font-extrabold text-[#067A47] leading-none mb-3 select-none"
                  aria-hidden="true"
                >
                  “
                </div>
                <h3 className="m-0 text-[17px] sm:text-[18px] font-extrabold leading-[1.4] text-[#0A0A0A]">
                  {item.question}
                </h3>
              </div>
              <p className="m-0 mt-3.5 text-[14px] sm:text-[15px] leading-[1.6] text-[#5C5C5C]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
