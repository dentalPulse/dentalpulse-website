import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    quote: "Since using dental pulse, we've reduced our time on tracking metrics by 50%. It's easy and intuitive. It's been a game changer for my busy lifestyle.",
    author: "Kelly M.",
    image: "/user_pic.png"
  },
  {
    quote: "It helps team leaders bring out the best in people by identifying the blind spots and discovering strengths. Highly recommend for any lab.",
    author: "Mark T.",
    image: "/user_pic2.png"
  },
  {
    quote: "The efficiency savings have been incredible. Plus, every time I have reached out for help the support team was fast and helpful. Highly recommend!",
    author: "Sarah L.",
    image: "/user_pic3.png"
  },
  {
    quote: "I never knew managing a lab could be this simple and satisfying. Thanks to dental pulse, my team enjoys diverse, automated tasks every day.",
    author: "Emily R.",
    image: "/user_pic4.png"
  }
];

export function Testimonials() {
  return (
    <section className="relative w-full bg-brand-primary py-16 md:py-32 pl-6 flex flex-col items-center overflow-hidden">

      {/* Floating Smile Icons */}
      <div className="absolute left-[5%] lg:left-[10%] top-[20%] w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
        <Image src="/smile_lg.png" alt="Smile" fill sizes="(max-width: 768px) 60px, 80px" className="object-contain" />
      </div>
      <div className="absolute right-[10%] lg:right-[15%] md:top-[10%] top-[0%] w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
        <Image src="/smile.png" alt="Smile" fill sizes="(max-width: 768px) 40px, 50px" className="object-contain" />
      </div>

      <div className="w-full flex flex-col items-center text-center relative z-10">
        <h2 className="text-[24px] md:text-[36px] !font-normal mb-20 text-black">
          Customers love growing with<br />
          <span className="font-bold text-[36px] md:text-[50px]">dental pulse</span>
        </h2>

        {/* Testimonial Cards */}
        <div className="w-full overflow-hidden">
          <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-4">
            {testimonials.map((testimonial, idx) => {
              const isBlackCard = idx % 2 === 1;

              return (
                <div
                  key={idx}
                  className={`mx-3 w-[215px] md:w-[395px] shrink-0 rounded-[16px] p-7 flex flex-col justify-between shadow-lg min-h-[240px] ${isBlackCard
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                    }`}
                >
                  <div>
                    <p
                      className={`text-[13px] leading-[1.35] ${isBlackCard ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex justify-end mb-4">
                      <span
                        className="text-[#11f294] font-bold text-3xl italic leading-none"
                        style={{ fontFamily: 'sans-serif' }}
                      >
                //
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>

                      <span className="font-medium text-[13px]">
                        {testimonial.author}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
