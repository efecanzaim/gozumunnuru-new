import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export default function KolyePage() {
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
        <section className="pt-[120px] md:pt-[200px] pb-[60px] md:pb-[100px] bg-primary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-[800px] mx-auto text-center">
              {/* Title */}
              <h1 className="font-display text-[40px] md:text-[60px] text-[#2f3237] mb-[30px] md:mb-[50px]">
                Gözümün Nuru – Kolye
              </h1>

              {/* Poetic Text */}
              <div className="space-y-[20px] md:space-y-[30px]">
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-light text-[#2f3237]">
                  Bu kolye, bir bakışla başlayan şeyler için.
                </p>
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-light text-[#2f3237]">
                  Yaklaştıkça hissedilen, adı konmadan kalan…
                </p>
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-light text-[#2f3237]">
                  Gösterişten uzak, kalbe yakın.
                </p>
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-light text-[#2f3237]">
                  Korunmak istenen bir şeye benzer.
                </p>
                <p className="text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] font-light text-[#2f3237]">
                  Her an biraz daha…
                </p>
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
