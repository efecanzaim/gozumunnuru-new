import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export default function SanaOzelPage() {
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
            <div className="max-w-[900px] mx-auto text-center">
              {/* Title */}
              <h1 className="font-display text-[40px] md:text-[70px] text-[#2f3237] mb-[40px] md:mb-[60px]">
                Sana Özel Tasarım
              </h1>

              {/* Opening Text */}
              <div className="space-y-[20px] md:space-y-[30px] text-left md:text-center">
                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Bazı mücevherler vitrinlerde başlar.<br />
                  Bazıları ise bir düşüncede, bir histe, bazen de sadece içten gelen bir istekte.
                </p>

                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Bu bölüm, hazır olanı seçmekten çok,<br />
                  henüz var olmayanı birlikte ortaya çıkarmak için var.<br />
                  Net bir tasarım fikriyle gelmen gerekmez.<br />
                  Bazen bir hatıra, bazen bir bağ,<br />
                  bazen de yalnızca "bana ait olsun" duygusu yeterlidir.
                </p>

                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Burada süreç acele etmez.<br />
                  Şekiller, oranlar ve detaylar<br />
                  zamana yayılarak, sindirilerek oluşur.<br />
                  Ortaya çıkan her parça,<br />
                  başkasına benzememek üzere tasarlanır<br />
                  ve yalnızca tek bir hikâyeye ait kalır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-[60px] md:py-[100px] bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-[900px] mx-auto">
              {/* Section Title */}
              <h2 className="font-display text-[32px] md:text-[48px] text-[#2f3237] mb-[20px] text-center">
                Süreç Nasıl İlerler?
              </h2>
              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] font-light text-[#2f3237] text-center mb-[50px] md:mb-[80px]">
                Her tasarım, bir karşılaşmayla başlar.<br />
                Bir sohbet, bir eskiz, bazen birkaç kelime…
              </p>

              {/* Steps */}
              <div className="space-y-[50px] md:space-y-[70px]">
                {/* Step 1 */}
                <div className="text-center md:text-left">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#2f3237] mb-4">
                    İlk Adım – Anlamak
                  </h3>
                  <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-light text-[#2f3237]">
                    Hayalini, niyetini, anlatmak istediğin duyguyu dinleriz.<br />
                    Söylenen kadar, söylenmeyeni de önemseriz.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center md:text-left">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#2f3237] mb-4">
                    İkinci Adım – Şekillendirmek
                  </h3>
                  <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-light text-[#2f3237]">
                    Oranlar, dokular ve detaylar yavaş yavaş belirir.<br />
                    Bu aşama bir karar değil, bir keşiftir.<br />
                    Parça kendini bulana kadar çalışılır.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center md:text-left">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#2f3237] mb-4">
                    Üçüncü Adım – Üretmek
                  </h3>
                  <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-light text-[#2f3237]">
                    Tasarım netleştiğinde,<br />
                    usta ellerde, tek parça olarak hayata geçer.<br />
                    Bu üretim tekrar edilmez;<br />
                    başından sonuna sana özeldir.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="text-center md:text-left">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#2f3237] mb-4">
                    Son Adım – Tamamlanmak
                  </h3>
                  <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] font-light text-[#2f3237]">
                    Ortaya çıkan mücevher,<br />
                    artık yalnızca bir tasarım değil,<br />
                    sana ait bir iz hâline gelir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-[60px] md:py-[100px] bg-primary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="font-display text-[32px] md:text-[48px] text-[#2f3237] mb-[30px] md:mb-[50px]">
                Neden Sana Özel?
              </h2>

              <div className="space-y-[30px] md:space-y-[40px]">
                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Çünkü bazı parçalar taşınmak için değil,<br />
                  aidiyet duygusu yaratmak için vardır.<br />
                  Bu mücevherler,<br />
                  bir trendin değil,<br />
                  bir insanın hikâyesine aittir.
                </p>

                <p className="text-[18px] md:text-[24px] leading-[30px] md:leading-[38px] font-light text-[#2f3237]">
                  Bir fikri değil,<br />
                  bir hissi mücevhere dönüştürüyoruz.<br />
                  Tek parça.<br />
                  Sana ait.
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
