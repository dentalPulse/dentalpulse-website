import Image from 'next/image';

const features = [
  {
    title: 'Automated\nWorkflows',
    description: 'Spot risks and\nopportunities early',
    icon: '/automated_workflows.png',
  },
  {
    title: 'Actionable\nrecommendations',
    description: 'Know exactly\nwhat to do next',
    icon: '/actionable.png',
  },
  {
    title: 'Complete\ncustomer intelligence',
    description: '360-degree view\nof every account',
    icon: '/complete_customer_intelligence.png',
  },
  {
    title: 'Predictive insights',
    description: 'Spot risks and\nopportunities early',
    icon: '/predictive_insights.png',
  }
];

export function Features() {
  return (
    <section className="w-full bg-brand-dark pb-16 pt-16 md:pb-32 md:pt-26 px-6 flex flex-col items-center text-white overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        <div className="mb-24 max-w-[800px]">
          <h3 className="text-[40px] md:text-[56px] font-medium leading-tight mb-6">
            See clearly,<br />act decisively
          </h3>
          <p className="text-brand-neutral-4 text-[16px] md:text-[18px] leading-relaxed">
            Transform your customer data into a powerful growth engine. <span className="font-bold text-white">dental pulse</span> provides complete visibility into customer relationships, automatically identifies risks and opportunities, and enables sales, marketing and customer success teams to take the right actions at the right time.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-items-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center border border-brand-primary rounded-[140px] p-2 pb-16 w-full max-w-[280px]">
              {/* Circular Icon Container */}
              <div className="w-full aspect-square rounded-full bg-brand-primary flex items-center justify-center shrink-0 mb-10">
                <Image src={feature.icon} alt={feature.title.replace('\n', ' ')} width={96} height={96} className="w-24 h-24 object-contain brightness-0" />
              </div>
              <h4 className="text-[18px] font-bold mb-4 px-4 whitespace-pre-line leading-tight text-white">{feature.title}</h4>
              <div className="w-6 h-[2px] bg-brand-primary mx-auto mb-4"></div>
              <p className="text-brand-neutral-4 text-[14px] px-6 whitespace-pre-line leading-snug">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
