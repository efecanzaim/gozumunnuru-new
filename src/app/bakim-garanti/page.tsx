import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export default function BakimGarantiPage() {
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
        <section className="pt-[120px] md:pt-[180px] pb-[40px] md:pb-[60px] bg-primary">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-[900px] mx-auto text-center">
              <h1 className="font-display text-[40px] md:text-[60px] text-[#2f3237]">
                Bakım ve Garanti
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-[60px] md:py-[100px] bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-[900px] mx-auto">

              {/* Değerli Taş ve İnci */}
              <div className="mb-[80px] md:mb-[120px]">
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#2f3237] mb-2 text-center">
                  DEĞERLİ TAŞ VE İNCİ MÜCEVHER
                </h2>
                <h3 className="text-[18px] md:text-[24px] font-light text-[#2f3237] mb-[40px] md:mb-[60px] text-center">
                  BAKIM VE GARANTİ KOŞULLARI
                </h3>

                {/* 1. Günlük Kullanım */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    1. Günlük Kullanım ve Bakım Uyarıları
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Elmas, değerli taş ve inci içeren mücevherler; doğal yapıları ve montaj hassasiyetleri nedeniyle özenli kullanım gerektirir. Ürününüzün estetik görünümünü ve teknik bütünlüğünü korumak amacıyla aşağıdaki hususlara dikkat edilmesi önerilir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Ani ve değişken sıcaklık koşullarına maruz bırakılmamalıdır.</li>
                    <li>Kozmetik ürünler (parfüm, krem, saç spreyi vb.) ile doğrudan temasından kaçınılmalıdır.</li>
                    <li>Ultrasonik temizlik cihazları kullanılmamalıdır.</li>
                    <li>Spor, ağır fiziksel faaliyetler, deniz ve havuz kullanımı sırasında mücevherlerin çıkarılması tavsiye edilir.</li>
                    <li>Mücevherler, çizilmeyi ve darbe riskini önlemek amacıyla orijinal kutusu veya kesesi içinde, ayrı ayrı muhafaza edilmelidir.</li>
                  </ul>
                  <p className="text-[14px] leading-[24px] font-light text-[#666] mt-4 italic">
                    Bu bilgilendirme, 6502 sayılı Kanun kapsamında tüketicinin doğru ve açık şekilde bilgilendirilmesi amacıyla sunulmaktadır.
                  </p>
                </div>

                {/* 2. Temizlik Talimatları */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    2. Temizlik Talimatları
                  </h4>

                  <h5 className="text-[16px] md:text-[17px] font-semibold text-[#2f3237] mb-3">
                    2.1. Değerli Taşlı Mücevherler
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4 mb-4">
                    <li>Temizlik işlemi, yalnızca ürüne uygun bakım kitleri ve yumuşak kıllı fırçalar kullanılarak yapılmalıdır.</li>
                    <li>Taş yuvalarının arkası ve girintili bölgeler, nazik hareketlerle temizlenmelidir.</li>
                    <li>Temizlik sonrası mücevher durulanmalı ve uygun bir parlatma bezi ile kurulanmalıdır.</li>
                  </ul>
                  <p className="text-[14px] leading-[24px] font-medium text-[#2f3237] mb-6 bg-[#f5f5f5] p-4 rounded">
                    <strong>Önemli Not:</strong> Hassas nitelikteki değerli taşlar, yalnızca hafif sabunlu su ve yumuşak bir fırça kullanılarak temizlenmelidir.
                  </p>

                  <h5 className="text-[16px] md:text-[17px] font-semibold text-[#2f3237] mb-3">
                    2.2. İnci Mücevherler
                  </h5>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237]">
                    İnciler organik ve hassas yapıya sahip olup, kimyasallara karşı son derece duyarlıdır. Sık kullanılan inci mücevherlerin yılda en az bir kez, tercihen yetkili servis tarafından temizlenmesi önerilir.
                  </p>
                </div>

                {/* 3. Garanti Kapsamı */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    3. Garanti Kapsamı
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Mücevherler, teslim tarihinden itibaren, aşağıda belirtilen şartlar dâhilinde garanti kapsamındadır:
                  </p>
                  <p className="text-[16px] font-semibold text-[#2f3237] mb-2">Garanti Kapsamına Giren Durumlar</p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Üretimden kaynaklanan işçilik hataları</li>
                    <li>Taş yuvası montajında üretim kaynaklı kusurlar</li>
                    <li>Normal kullanım koşulları altında ortaya çıkan yapısal ayıplar</li>
                  </ul>
                </div>

                {/* 4. Garanti Dışı */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    4. Garanti Kapsamı Dışında Kalan Haller
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Aşağıda belirtilen durumlar garanti kapsamı dışında değerlendirilir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Kullanıcı hatası, darbe, düşme, çarpma veya ezilme sonucu oluşan hasarlar</li>
                    <li>Kozmetik ürünler, kimyasal maddeler veya ultrasonik temizlik nedeniyle meydana gelen hasarlar</li>
                    <li>Yetkisiz kişilerce yapılan onarım, bakım veya ölçü değişiklikleri</li>
                    <li>Normal kullanım sonucu oluşan çizikler, aşınmalar ve doğal yüzey değişimleri</li>
                    <li>Üretim hatasına dayanmayan taş düşmesi veya inci hasarları</li>
                  </ul>
                  <p className="text-[14px] leading-[24px] font-light text-[#666] mt-4 italic">
                    Bu durumlarda yapılacak işlemler, ücretli servis kapsamında değerlendirilir.
                  </p>
                </div>

                {/* 5. Tüketici Hakları */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    5. Tüketici Hakları
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    6502 sayılı Tüketicinin Korunması Hakkında Kanun uyarınca, garanti kapsamına giren bir ayıp hâlinde tüketici;
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Ürünün ücretsiz onarılmasını,</li>
                    <li>Ayıp oranında bedel indirimi yapılmasını,</li>
                    <li>Ürünün ayıpsız misli ile değiştirilmesini,</li>
                    <li>Sözleşmeden dönerek bedel iadesini</li>
                  </ul>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mt-2">
                    talep etme haklarına sahiptir.
                  </p>
                </div>

                {/* 6. Başvuru */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    6. Başvuru ve Servis Süreci
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237]">
                    Garanti, bakım veya onarım taleplerinin değerlendirilebilmesi için ürünün; satın alma belgesi, garanti belgesi ve varsa sertifikası ile birlikte yetkili satış noktasına veya müşteri hizmetlerine ibraz edilmesi gerekmektedir.
                  </p>
                </div>

                {/* Hukuki Uyarı */}
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <p className="text-[14px] leading-[24px] font-medium text-[#2f3237]">
                    <strong>Önemli Hukuki Uyarı:</strong> Bu metin, ürünün bakım ve garanti koşullarına ilişkin bilgilendirme amacıyla hazırlanmıştır. Tüketicinin kanundan doğan zorunlu haklarını sınırlamaz veya ortadan kaldırmaz.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#ddd] my-[60px] md:my-[80px]"></div>

              {/* Altın ve Platin */}
              <div>
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#2f3237] mb-2 text-center">
                  ALTIN VE PLATİN MÜCEVHER
                </h2>
                <h3 className="text-[18px] md:text-[24px] font-light text-[#2f3237] mb-[40px] md:mb-[60px] text-center">
                  BAKIM VE GARANTİ KOŞULLARI
                </h3>

                {/* 1. Ürün Bakımı */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    1. Ürün Bakımına İlişkin Bilgilendirme
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Altın ve platin mücevherler; doğal özellikleri, el işçiliği ve değerli taş içermeleri sebebiyle hassas ürünlerdir. Ürününüzün ilk günkü parlaklığını ve formunu koruyabilmesi için aşağıdaki hususlara dikkat edilmesi önerilir:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Ev tipi temizlik ürünleri, çamaşır suyu, kimyasal çözücüler ve parfüm gibi maddelerle doğrudan temasından kaçınılmalıdır.</li>
                    <li>Spor yaparken, ağır fiziksel faaliyetlerde, deniz ve havuz kullanımında mücevherlerin çıkarılması tavsiye edilir.</li>
                    <li>Mücevherlerin çizilmesini ve deformasyonunu önlemek amacıyla, orijinal mücevher kesesi veya kutusu içerisinde, ayrı ayrı saklanması önerilir.</li>
                  </ul>
                  <p className="text-[14px] leading-[24px] font-light text-[#666] mt-4 italic">
                    Bu bilgilendirme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında tüketicinin doğru bilgilendirilmesi amacıyla sunulmaktadır.
                  </p>
                </div>

                {/* 2. Temizlik */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    2. Temizlik ve Periyodik Bakım
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Altın ve platin mücevherlerin temizliği, yalnızca ürüne uygun parlatma ürünleri ve yumuşak kıllı fırçalar kullanılarak yapılmalıdır.
                  </p>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Yetkisiz kişiler veya uygun olmayan yöntemlerle yapılan temizlik işlemleri, ürünün yüzeyinde aşınmaya, taş yuvalarında gevşemeye ve kalıcı hasara neden olabilir.
                  </p>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237]">
                    Şirketimiz, talep edilmesi hâlinde mücevherleriniz için profesyonel temizlik ve bakım hizmeti sunmaktadır.
                  </p>
                </div>

                {/* 3. Garanti Kapsamı */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    3. Garanti Kapsamı
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Satın alınan altın ve platin mücevherler, teslim tarihinden itibaren aşağıda belirtilen şartlar çerçevesinde garanti kapsamındadır:
                  </p>
                  <p className="text-[16px] font-semibold text-[#2f3237] mb-2">Garanti Kapsamına Giren Durumlar</p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Üretimden kaynaklanan işçilik hataları</li>
                    <li>Taş yuvası montajında üretim kaynaklı sorunlar</li>
                    <li>Normal kullanım koşulları altında ortaya çıkan yapısal kusurlar</li>
                  </ul>
                </div>

                {/* 4. Garanti Dışı */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    4. Garanti Kapsamı Dışında Kalan Durumlar
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    Aşağıda belirtilen durumlar garanti kapsamı dışındadır:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Kullanıcı hatası, darbe, düşme, ezilme veya çarpma sonucu oluşan hasarlar</li>
                    <li>Kimyasal maddelere maruz kalma sonucu meydana gelen renk değişimleri veya yüzey aşınmaları</li>
                    <li>Yetkisiz üçüncü kişiler tarafından yapılan onarım, bakım veya ölçü değişiklikleri</li>
                    <li>Normal kullanım sonucu oluşan çizikler, aşınmalar ve doğal deformasyonlar</li>
                    <li>Taş düşmesi veya hasarının, üretim hatası dışında bir nedene dayanması</li>
                  </ul>
                  <p className="text-[14px] leading-[24px] font-light text-[#666] mt-4 italic">
                    Bu hallerde yapılacak işlemler, ücretli servis kapsamında değerlendirilir.
                  </p>
                </div>

                {/* 5. Tüketici Hakları */}
                <div className="mb-[40px]">
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    5. Tüketici Hakları
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mb-4">
                    6502 sayılı Kanun uyarınca, garanti kapsamındaki bir ayıp durumunda tüketici;
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] ml-4">
                    <li>Ürünün ücretsiz onarılmasını,</li>
                    <li>Ayıp oranında bedel indirimi,</li>
                    <li>Ürünün ayıpsız misli ile değiştirilmesini,</li>
                    <li>Sözleşmeden dönerek bedel iadesini</li>
                  </ul>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237] mt-2">
                    talep etme haklarına sahiptir.
                  </p>
                </div>

                {/* 6. Başvuru */}
                <div>
                  <h4 className="text-[18px] md:text-[20px] font-bold text-[#2f3237] mb-4">
                    6. Başvuru ve İletişim
                  </h4>
                  <p className="text-[15px] md:text-[16px] leading-[26px] font-light text-[#2f3237]">
                    Garanti, bakım veya onarım talepleriniz için, ürünü satın alma belgesi ve varsa sertifikası ile birlikte yetkili satış noktamıza veya müşteri hizmetlerimize başvurmanız gerekmektedir.
                  </p>
                </div>
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
