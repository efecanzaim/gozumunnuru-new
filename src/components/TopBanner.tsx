"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Instagram } from "lucide-react";

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
    <div className="hidden lg:block bg-primary py-3">
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

          {/* Right - Instagram Icon and Language Dropdown */}
          <div className="hidden lg:flex items-center gap-4 relative z-200">
            {/* Instagram Icon */}
            <Link
              href="https://www.instagram.com/gozumunnuruantalya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2f3237] hover:opacity-70 transition-opacity"
            >
              <Instagram 
                size={18} 
                strokeWidth={1.5}
              />
            </Link>
            
            {/* Language Dropdown */}
            <div ref={dropdownRef} className="relative">
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
        </div>
      </div>
    </div>
  );
}
