import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";
import Link from "next/link";

export default function ErkeklereOzelPage() {
  return (
    <>
      <TopBanner
        text={content.topBanner.text}
        visible={content.topBanner.visible}
        topLinks={content.header.topLinks}
      />
      <Header
        logo={content.header.logo}
        logoAlt={content.header.logoAlt}
        mainNav={content.header.mainNav}
        isHero={false}
      />

      {/* Main Content */}
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-[120px] md:pt-[200px] pb-[80px] md:pb-[120px] bg-primary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-[900px] mx-auto text-center">
              {/* Title */}
              <h1 className="font-display text-[50px] md:text-[80px] text-[#2f3237] mb-[40px] md:mb-[60px]">
                erkeklere özel
              </h1>

              {/* Description */}
              <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237] mb-[50px] md:mb-[80px]">
                Sessiz ama var olan. Gösterişsiz ama hissedilen.<br />
                Her parça, günün içinde eşlik eden bir ritim gibi.
              </p>

              {/* Category Links */}
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                <Link
                  href="/erkeklere-ozel/tesbih"
                  className="text-[24px] md:text-[32px] font-light text-[#2f3237] hover:opacity-70 transition-opacity"
                >
                  Tesbih
                </Link>
                <Link
                  href="/erkeklere-ozel/bileklik"
                  className="text-[24px] md:text-[32px] font-light text-[#2f3237] hover:opacity-70 transition-opacity"
                >
                  Bileklik
                </Link>
                <Link
                  href="/erkeklere-ozel/yuzuk"
                  className="text-[24px] md:text-[32px] font-light text-[#2f3237] hover:opacity-70 transition-opacity"
                >
                  Yüzük
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Image Placeholder Section */}
        <section className="py-[60px] md:py-[100px] bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-[60px]">
              {/* Placeholder for future images */}
              <div className="w-full md:w-[400px] aspect-square bg-[#f5f5f5] flex items-center justify-center">
                <span className="text-[#999] text-[14px]">Görsel eklenecek</span>
              </div>
              <div className="w-full md:w-[400px] aspect-[3/4] bg-[#f5f5f5] flex items-center justify-center">
                <span className="text-[#999] text-[14px]">Görsel eklenecek</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        logo={content.footer.logo}
        slogan={content.footer.slogan}
        sections={content.footer.sections}
        copyright={content.footer.copyright}
      />
    </>
  );
}
