import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrendSection from "@/components/TrendSection";
import ParallaxSection from "@/components/ParallaxSection";
import StorySection from "@/components/StorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryCards from "@/components/CategoryCards";
import PromoSections from "@/components/PromoSections";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export default function Home() {
  return (
    <main>
      {/* Top Banner */}
      <TopBanner
        text={content.topBanner.text}
        visible={content.topBanner.visible}
        topLinks={content.header.topLinks}
      />

      {/* Header */}
      <Header
        logo={content.header.logo}
        logoAlt={content.header.logoAlt}
        mainNav={content.header.mainNav}
        isHero={true}
      />

      {/* Hero Section */}
      <Hero slides={content.hero.slides} />

      {/* Trend Section */}
      <TrendSection
        leftImage={content.trendSection.leftImage}
        rightImage={content.trendSection.rightImage}
        leftTitle={content.trendSection.leftTitle}
        rightTitle={content.trendSection.rightTitle}
        leftCategory={content.trendSection.leftCategory}
        rightCategory={content.trendSection.rightCategory}
        leftLink={content.trendSection.leftLink}
        rightLink={content.trendSection.rightLink}
      />

      {/* Parallax Section */}
      <ParallaxSection backgroundImage={content.parallaxSection.backgroundImage} />

      {/* Story Section */}
      <StorySection
        title={content.storySection.title}
        mainText={content.storySection.mainText}
        subText={content.storySection.subText}
        linkText={content.storySection.linkText}
        linkHref={content.storySection.linkHref}
      />

      {/* Featured Products */}
      <FeaturedProducts products={content.featuredProducts} />

      {/* Category Cards */}
      <CategoryCards categories={content.categoryCards} />

      {/* Promo Sections */}
      <PromoSections sections={content.promoSections} />

      {/* Footer */}
      <Footer
        logo={content.footer.logo}
        slogan={content.footer.slogan}
        nav={content.footer.nav}
        copyright={content.footer.copyright}
      />
    </main>
  );
}
