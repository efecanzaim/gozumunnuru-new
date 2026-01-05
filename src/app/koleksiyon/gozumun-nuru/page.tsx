import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export default function GozumunNuruPage() {
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
                gözümün nuru
              </h1>

              {/* Opening */}
              <div className="mb-[40px] md:mb-[60px]">
                <p className="text-[20px] md:text-[28px] leading-[32px] md:leading-[42px] font-light text-[#2f3237] italic">
                  Adı konamayan, ölçülmeyen, anlat deyince anlatılamayan…
                </p>
                <p className="text-[20px] md:text-[28px] leading-[32px] md:leading-[42px] font-light text-[#2f3237] italic mt-2">
                  Sadece hissedilen
                </p>
              </div>

              {/* Main Text */}
              <div className="space-y-[30px] md:space-y-[40px] text-left md:text-center">
                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Gözümün Nuru,<br />
                  hayatında yerine koyamadığın o tek şeydir.<br />
                  Bakarken içini ısıtan,<br />
                  yokluğu kalbinde iz bırakan…
                </p>

                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Bir annenin evladına baktığı gibi,<br />
                  bir insanın en kıymetlisine baktığı yerden doğdu bu koleksiyon.
                </p>

                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Her parça;<br />
                  korumayı, sahip çıkmayı, ama emanet görmeyi<br />
                  sessiz ama derin bir bağlılığı anlatır.<br />
                  Göstermez kendini, hissettirir.
                </p>

                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Çünkü bazı şeyler süs değildir.<br />
                  Onlar, kalbinin en aydınlık yeridir.
                </p>

                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Gözümün Nuru,<br />
                  takılan bir mücevher değil;<br />
                  gözünden sakındığın bir değerdir.
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
