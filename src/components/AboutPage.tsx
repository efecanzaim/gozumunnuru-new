"use client";

import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

interface AboutPageProps {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: string;
  storyTitle: string;
  storyText: string;
  storyImage: string;
  valuesTitle: string;
  values: Array<{
    title: string;
    description: string;
  }>;
  missionTitle: string;
  missionText: string;
  missionImage: string;
}

export default function AboutPage({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  storyTitle,
  storyText,
  storyImage,
  valuesTitle,
  values,
  missionTitle,
  missionText,
  missionImage,
}: AboutPageProps) {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="pt-[100px] md:pt-[280px] pb-[60px] md:pb-[100px] bg-primary">
        <div className="container mx-auto px-6 md:px-8">
          {/* Titles */}
          <div className="max-w-[800px] mx-auto mb-[20px] md:mb-[40px]">
            <h1 className="text-[40px] leading-[50px] md:text-[80px] md:leading-[90px] font-bold text-[#2f3237] mb-0 text-left">
              {heroTitle}
            </h1>
            <h2 className="text-[50px] leading-[60px] md:text-[120px] md:leading-[110px] font-light text-[#2f3237] text-right">
              {heroSubtitle}
            </h2>
          </div>

          {/* Description */}
          <div className="text-center max-w-[950px] mx-auto mb-[40px] md:mb-[80px]">
            <p className="text-[20px] leading-[30px] md:text-[30px] md:leading-[40px] font-light text-[#2f3237] max-w-[390px] md:max-w-none mx-auto">
              {heroDescription}
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-[1190px] mx-auto">
            <div className="w-full aspect-390/324 md:h-[664px] relative">
              <Image
                src={getAssetPath(heroImage)}
                alt={heroTitle}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-[60px] md:py-[100px] bg-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1430px] mx-auto">
            {/* Section Title */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-[30px] md:mb-[60px]">
              <div className="flex-1 md:w-[470px] h-px bg-primary" />
              <h3 className="text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] font-light text-[#2f3237] whitespace-nowrap">
                {storyTitle}
              </h3>
              <div className="flex-1 md:w-[470px] h-px bg-primary" />
            </div>

            {/* Content Layout - Mobile: stacked, Desktop: side by side */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-[130px] items-center">
              {/* Text */}
              <div className="w-full md:w-[590px]">
                <p className="text-[15px] leading-[20px] md:text-[20px] md:leading-[30px] font-light text-[#2f3237] text-center md:text-left whitespace-pre-line">
                  {storyText}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-[590px] aspect-390/403 md:h-[609px] relative">
                <Image
                  src={getAssetPath(storyImage)}
                  alt={storyTitle}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-[60px] md:py-[100px] bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1430px] mx-auto">
            {/* Section Title */}
            <div className="text-center mb-[40px] md:mb-[80px]">
              <h3 className="text-[40px] leading-[50px] md:text-[80px] md:leading-[90px] font-display text-[#2f3237]">
                {valuesTitle}
              </h3>
            </div>

            {/* Values Grid - Mobile: 1 column, Desktop: 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[130px]">
              {values.map((value, index) => (
                <div key={index} className="text-center md:text-left">
                  <h4 className="text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] font-bold text-[#2f3237] mb-[20px]">
                    {value.title}
                  </h4>
                  <p className="text-[15px] leading-[20px] md:text-[20px] md:leading-[30px] font-light text-[#2f3237]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-[60px] md:py-[100px] bg-light">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1430px] mx-auto">
            {/* Section Title */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-[30px] md:mb-[60px]">
              <div className="flex-1 md:w-[470px] h-px bg-primary" />
              <h3 className="text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] font-light text-[#2f3237] whitespace-nowrap">
                {missionTitle}
              </h3>
              <div className="flex-1 md:w-[470px] h-px bg-primary" />
            </div>

            {/* Content Layout - Mobile: stacked, Desktop: side by side */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-[130px] items-center">
              {/* Image */}
              <div className="w-full md:w-[590px] aspect-390/403 md:h-[609px] relative order-2 md:order-1">
                <Image
                  src={getAssetPath(missionImage)}
                  alt={missionTitle}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-[590px] order-1 md:order-2">
                <p className="text-[15px] leading-[20px] md:text-[20px] md:leading-[30px] font-light text-[#2f3237] text-center md:text-left whitespace-pre-line">
                  {missionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
