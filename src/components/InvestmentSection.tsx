"use client";

import Link from "next/link";
import { getAssetPath } from "@/utils/paths";

interface InvestmentSectionProps {
  title: string;
  image: string;
  description: string;
  ctaText: string;
  link: string;
}

export default function InvestmentSection({ title, image, description, ctaText, link }: InvestmentSectionProps) {
  return (
    <section className="py-10 pb-10 md:py-50 md:pb-40 bg-white">
      <div className="max-w-[1430px] mx-auto px-6 md:px-4 relative">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Title - Mobile: 35px, 3 lines */}
          <div className="text-center mb-6">
            <h2 className="font-display text-[35px] leading-[70px] text-primary whitespace-pre-line">
              {title}
            </h2>
          </div>
          
          {/* Image 1 - Full width */}
          <div className="w-full aspect-390/498 relative bg-gray-100 overflow-hidden mb-4">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${getAssetPath(image)})` }}
            />
          </div>
          
          {/* Image 2 - Full width */}
          <div className="w-full aspect-390/498 relative bg-gray-100 overflow-hidden mb-8">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${getAssetPath('/images/investment-product.jpg')})` }}
            />
          </div>
          
          {/* Description */}
          <p className="text-[15px] leading-[25px] font-light text-[#2f3237] text-center max-w-[350px] mx-auto mb-8">
            {description}
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href={link}
              className="block w-[250px] h-[50px] bg-primary text-[#2f3237] text-[13px] leading-[50px] font-light text-center"
            >
              {ctaText}
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-[130px] justify-center items-end relative">
          {/* Title - centered, overlapping images */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center z-10" style={{ top: '-186px' }}>
            <h2 className="font-display text-[60px] leading-[120px] text-primary whitespace-pre-line">
              {title}
            </h2>
          </div>
          {/* Left - Large Image (590x753) */}
          <div className="w-[590px] h-[753px] relative bg-gray-100 overflow-hidden shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${getAssetPath(image)})` }}
            />
          </div>

          {/* Right - Small Image, Description and CTA - 50px yukarıda */}
          <div className="flex flex-col items-center" style={{ marginTop: '-50px' }}>
            {/* Small Product Image (470x600) */}
            <div className="w-[470px] h-[600px] relative bg-gray-100 overflow-hidden mb-[50px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${getAssetPath('/images/investment-product.jpg')})` }}
              />
            </div>
            
            {/* Description */}
            <p className="text-[15px] leading-[25px] font-light text-[#2f3237] text-center max-w-[350px] mb-[50px]">
              {description}
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href={link}
                className="block w-[250px] h-[50px] bg-primary text-[#2f3237] text-[13px] leading-[50px] font-light text-center"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
