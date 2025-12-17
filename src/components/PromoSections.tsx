"use client";

import Link from "next/link";
import { getAssetPath } from "@/utils/paths";

interface PromoSection {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  link: string;
}

interface PromoSectionsProps {
  sections: PromoSection[];
}

export default function PromoSections({ sections }: PromoSectionsProps) {
  return (
    <section className="pt-[40px] md:pt-[80px] pb-10 md:pb-30 bg-white">
      <div className="max-w-[1430px] mx-auto px-6 md:px-4">
        {/* Mobile: Stacked vertically */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-[10px] justify-center">
          {sections.map((section, index) => {
            return (
              <div 
                key={section.id} 
                className={`flex flex-col ${index === 1 ? 'md:-mt-[100px]' : ''}`}
              >
                {/* Mobile: 390x390, Desktop: 590x590 */}
                <div className="w-full md:w-[590px] aspect-square md:aspect-auto md:h-[590px] relative bg-gray-100 overflow-hidden mb-[30px] md:mb-[50px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${getAssetPath(section.image)})` }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-[20px] leading-[30px] font-bold text-[#2f3237] mb-[20px] md:mb-[30px]">
                    {section.title}
                  </h3>
                  <p className="text-[25px] leading-[30px] font-light text-[#2f3237] mb-[30px] md:mb-[50px] whitespace-pre-line max-w-[325px] md:max-w-none mx-auto">
                    {section.description}
                  </p>
                  <div className="flex justify-center">
                    <Link
                      href={section.link}
                      className="block w-[250px] h-[50px] bg-[#2f3237] text-light text-[13px] leading-[50px] font-light text-center"
                    >
                      {section.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
