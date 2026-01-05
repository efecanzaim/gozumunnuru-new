import CategoryPage from "@/components/CategoryPage";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export default function OzelTasarimPage() {
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
        category="özel tasarım"
        heroTitle="BİRLİKTE"
        heroSubtitle="YARATALIM"
        heroDescription="Size özel tasarımlarımızla hayalinizdeki mücevheri birlikte yaratıyoruz. Her detay, sizin hikayenizi anlatmak için özenle şekillenir."
        heroSubDescription="Deneyimli ustalarımız, vizyonunuzu benzersiz bir sanat eserine dönüştürür. İster nişan yüzüğü, ister aile yadigarı olsun, her parça sizin için özel olarak tasarlanır."
        heroImage1="/images/trend-left.jpg"
        heroImage2="/images/trend-right.jpg"
        sectionTitle="özel tasarım"
        sectionDescription="Kişiye özel tasarımlarımız, benzersiz hikayenizi yansıtan eşsiz parçalar yaratır. Hayalinizdeki mücevher, ustalarımızın elinde hayat bulur."
        sectionSubDescription="Tasarım sürecinin her aşamasında sizinle birlikte çalışıyoruz. Taş seçiminden final cilasına kadar, her detay sizin onayınızla şekillenir."
        sectionImage1="/images/hero-bg.jpg"
        sectionImage2="/images/parallax-bg.jpg"
      />
      <Footer
        logo={content.footer.logo}
        slogan={content.footer.slogan}
        sections={content.footer.sections}
        copyright={content.footer.copyright}
      />
    </>
  );
}
