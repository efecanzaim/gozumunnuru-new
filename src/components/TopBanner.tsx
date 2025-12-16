"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface TopBannerProps {
  text: string;
  visible: boolean;
  topLinks: { text: string; href: string }[];
}

export default function TopBanner({ text, visible, topLinks }: TopBannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("TR");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "tr", name: "Türkçe", short: "TR" },
    { code: "en", name: "English", short: "EN" },
    { code: "ru", name: "Русский", short: "RU" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className="bg-primary py-3">
      <div className="container mx-auto px-8 relative">
        <div className="flex items-center justify-between">
          {/* Left - Links */}
          <div className="hidden lg:flex items-center gap-6">
            {topLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[11px] font-medium text-[#2f3237] hover:opacity-70 transition-opacity"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Right - Language Dropdown */}
          <div className="hidden lg:flex items-center gap-4 relative z-200" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-[11px] font-medium text-[#2f3237] hover:opacity-70 transition-opacity flex items-center gap-1 cursor-pointer"
            >
              {selectedLang}
              <svg
                className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-light shadow-lg min-w-[120px] z-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedLang(lang.short);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[11px] font-medium text-[#2f3237] hover:bg-light transition-colors cursor-pointer relative z-200 ${
                      selectedLang === lang.short ? "bg-light" : ""
                    }`}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#efece9";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = selectedLang === lang.short ? "#efece9" : "transparent";
                    }}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center - Announcement Text - Absolutely centered */}
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[13px] font-medium text-[#2f3237] tracking-wide pointer-events-none z-0">
          {text}
        </p>
      </div>
    </div>
  );
}
