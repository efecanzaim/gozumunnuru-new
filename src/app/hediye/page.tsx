import CategoryPage from "@/components/CategoryPage";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export default function HediyePage() {
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
      <CategoryPage
        category="hediye"
        heroTitle="ÖZEL"
        heroSubtitle="HEDİYELER"
        heroDescription="Sevdiklerinize en güzel armağanı sunun. Her özel an, unutulmaz bir hediyeyi hak eder. Aşkı, minneti ve sevgiyi ifade eden seçenekler."
        heroSubDescription="Doğum günlerinden yıldönümlerine, anneler gününden yeni doğan kutlamalarına kadar her özel gün için mükemmel hediye seçenekleri sunuyoruz."
        heroImage1="/images/trend-left.jpg"
        heroImage2="/images/trend-right.jpg"
        sectionTitle="hediye"
        sectionDescription="Her bütçeye ve her zevke uygun hediye alternatifleri. Şık ambalajlarıyla sunulan mücevherlerimiz, sevdiklerinizi mutlu edecek."
        sectionSubDescription="Hediye danışmanlarımız, en uygun seçimi yapmanızda size yardımcı olur. Kişiselleştirilmiş gravür seçenekleriyle hediyenizi daha da özel kılın."
        sectionImage1="/images/hero-bg.jpg"
        sectionImage2="/images/parallax-bg.jpg"
      />
      <Footer
        logo={content.footer.logo}
        slogan={content.footer.slogan}
        nav={content.footer.nav}
        copyright={content.footer.copyright}
      />
    </>
  );
}
