"use client";

import Link from "next/link";
import { getAssetPath } from "@/utils/paths";

interface StorySectionProps {
  title: string;
  mainText: string;
  subText: string;
  linkText: string;
  linkHref: string;
}

export default function StorySection({ title, mainText, subText, linkText, linkHref }: StorySectionProps) {
  return (
    <>
    <section className="relative bg-light overflow-x-hidden">
      {/* Diamond Pattern Background - Perspective Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-[430px]"
          viewBox="0 0 1728 430"
          preserveAspectRatio="xMidYMin slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Row 1 - Size 53px */}
          {[...Array(12)].map((_, i) => (
            <path
              key={`r1-${i}`}
              d="M26.5 0L53 26.5L26.5 53L0 26.5L26.5 0Z"
              transform={`translate(${i * 150}, 37)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 2 - Size 48px, offset */}
          {[...Array(12)].map((_, i) => (
            <path
              key={`r2-${i}`}
              d="M24 0L48 24L24 48L0 24L24 0Z"
              transform={`translate(${78 + i * 150}, 109)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 3 - Size 42px */}
          {[...Array(12)].map((_, i) => (
            <path
              key={`r3-${i}`}
              d="M21 0L42 21L21 42L0 21L21 0Z"
              transform={`translate(${7 + i * 150}, 172)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 4 - Size 37px, offset */}
          {[...Array(11)].map((_, i) => (
            <path
              key={`r4-${i}`}
              d="M18.5 0L37 18.5L18.5 37L0 18.5L18.5 0Z"
              transform={`translate(${86 + i * 150}, 233)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 5 - Size 32px */}
          {[...Array(12)].map((_, i) => (
            <path
              key={`r5-${i}`}
              d="M16 0L32 16L16 32L0 16L16 0Z"
              transform={`translate(${15 + i * 150}, 281)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 6 - Size 27px, offset */}
          {[...Array(11)].map((_, i) => (
            <path
              key={`r6-${i}`}
              d="M13.5 0L27 13.5L13.5 27L0 13.5L13.5 0Z"
              transform={`translate(${94 + i * 150}, 323)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 7 - Size 21px */}
          {[...Array(12)].map((_, i) => (
            <path
              key={`r7-${i}`}
              d="M10.5 0L21 10.5L10.5 21L0 10.5L10.5 0Z"
              transform={`translate(${22 + i * 150}, 356)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 8 - Size 16px, offset */}
          {[...Array(11)].map((_, i) => (
            <path
              key={`r8-${i}`}
              d="M8 0L16 8L8 16L0 8L8 0Z"
              transform={`translate(${101 + i * 150}, 386)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 9 - Size 11px */}
          {[...Array(12)].map((_, i) => (
            <path
              key={`r9-${i}`}
              d="M5.5 0L11 5.5L5.5 11L0 5.5L5.5 0Z"
              transform={`translate(${30 + i * 150}, 405)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
          {/* Row 10 - Size 5px, offset */}
          {[...Array(11)].map((_, i) => (
            <path
              key={`r10-${i}`}
              d="M2.5 0L5 2.5L2.5 5L0 2.5L2.5 0Z"
              transform={`translate(${109 + i * 150}, 426)`}
              fill="#DCCDBF40"
              stroke="#DCCDBF40"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Main content area - responsive padding */}
      <div className="relative z-10 pt-[36px] pb-0 md:pt-[145px] md:pb-[185px]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center">
            {/* Decorative title - Buljirya 40px */}
            <h2 className="font-display text-[40px] leading-[80px] text-[#2f3237] whitespace-pre-line">
              {title}
            </h2>
            
            {/* Main paragraph - 20px mobile, 30px desktop */}
            <p className="text-[20px] leading-[30px] md:text-[30px] md:leading-[40px] font-light text-[#2f3237] max-w-[390px] md:max-w-[950px] mx-auto mt-[10px]">
              {mainText}
            </p>
            
            {/* Sub paragraph - Bw Modelica Light 15px */}
            <p className="text-[15px] leading-[20px] font-light text-[#2f3237] max-w-[388px] md:max-w-[710px] mx-auto mt-[30px] md:mt-[50px]">
              {subText}
            </p>
            
            {/* Link - Bw Modelica Bold 15px */}
            <div className="mt-[30px] md:mt-[40px] mb-[60px] md:mb-0">
              <Link
                href={linkHref}
                className="text-[15px] leading-[30px] font-bold text-[#2f3237] link-underline inline-block"
              >
                {linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Wave Separator - Mobile: outside section, overflowing down */}
    <div className="md:hidden relative mt-[-50px] flex justify-center pointer-events-none z-50">
      <img
        src={getAssetPath("/images/dalga.svg")}
        alt=""
        width="440"
        height="267"
        className="w-full max-w-[440px]"
      />
    </div>
    {/* Wave Separator at bottom - Desktop only, outside section */}
    <div className="hidden md:flex relative -mt-[133px] justify-center pointer-events-none z-50">
      <img
        src={getAssetPath("/images/dalga.svg")}
        alt=""
        width="950"
        height="267"
      />
    </div>
    </>
  );
}
