"use client";

import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

interface CategoryPageProps {
  category: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroSubDescription: string;
  heroImage1: string;
  heroImage2: string;
  sectionTitle: string;
  sectionDescription: string;
  sectionSubDescription: string;
  sectionImage1: string;
  sectionImage2: string;
}

export default function CategoryPage({
  category,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroSubDescription,
  heroImage1,
  heroImage2,
  sectionTitle,
  sectionDescription,
  sectionSubDescription,
  sectionImage1,
  sectionImage2,
}: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Extended to cover part of images */}
      <section className="pt-[100px] md:pt-[280px] pb-0 bg-primary">
        <div className="container mx-auto px-6 md:px-8">
          {/* Titles */}
          <div className="max-w-[800px] mx-auto mb-[20px]">
            <h1 className="text-[40px] leading-[50px] md:text-[80px] md:leading-[90px] font-bold text-[#2f3237] mb-0 text-left">
              {heroTitle}
            </h1>
            <h2 className="text-[50px] leading-[60px] md:text-[120px] md:leading-[110px] font-light text-[#2f3237] text-right md:text-right">
              {heroSubtitle}
            </h2>
          </div>

          {/* Description */}
          <div className="text-center max-w-[950px] mx-auto mb-[40px] md:mb-[160px]">
            <p className="text-[20px] leading-[30px] md:text-[30px] md:leading-[40px] font-light text-[#2f3237] mb-[10px] max-w-[390px] md:max-w-none mx-auto">
              {heroDescription}
            </p>
            <p className="text-[15px] leading-[20px] font-light text-[#2f3237] max-w-[388px] md:max-w-[710px] mx-auto">
              {heroSubDescription}
            </p>
          </div>

          {/* Images - Mobile: stacked, Desktop: side by side */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[130px] -mb-[200px] md:-mb-[600px]">
            {/* Left Image */}
            <div className="w-full md:w-[590px] aspect-390/403 md:h-[609px] relative">
              <Image
                src={getAssetPath(heroImage1)}
                alt={heroTitle}
                fill
                className="object-cover"
              />
            </div>
            {/* Right Image - Mobile: normal, Desktop: 80px higher */}
            <div className="w-full md:w-[590px] aspect-390/582 md:h-[865px] relative md:-mt-[80px]">
              <Image
                src={getAssetPath(heroImage2)}
                alt={heroTitle}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="pt-[300px] md:pt-[700px] pb-[60px] md:pb-[100px] bg-white">
        <div className="container mx-auto px-6 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-[30px] md:mb-[40px]">
            <h3 className="text-[40px] leading-[80px] font-display text-[#2f3237]">
              {sectionTitle}
            </h3>
          </div>

          {/* Section Description */}
          <div className="text-center max-w-[950px] mx-auto mb-[40px] md:mb-[80px]">
            <p className="text-[20px] leading-[30px] md:text-[30px] md:leading-[40px] font-light text-[#2f3237] mb-[20px] max-w-[390px] md:max-w-none mx-auto">
              {sectionDescription}
            </p>
            <p className="text-[15px] leading-[20px] font-light text-[#2f3237] max-w-[388px] md:max-w-[710px] mx-auto">
              {sectionSubDescription}
            </p>
          </div>

          {/* Section Images - Mobile: stacked, Desktop: side by side */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[130px]">
            {/* Left Image - square */}
            <div className="w-full md:w-[590px] aspect-square md:h-[590px] relative">
              <Image
                src={getAssetPath(sectionImage1)}
                alt={sectionTitle}
                fill
                className="object-cover"
              />
            </div>
            {/* Right Image - portrait */}
            <div className="w-full md:w-[470px] aspect-390/498 md:h-[600px] relative md:mt-[70px]">
              <Image
                src={getAssetPath(sectionImage2)}
                alt={sectionTitle}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
