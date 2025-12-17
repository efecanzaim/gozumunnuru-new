import BlogArticlePage from "@/components/BlogArticlePage";
import TopBanner from "@/components/TopBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

// Example data - replace with actual data from your CMS or API
const articleData = {
  title: "Anturaj Pırlanta Nedir? Zamansız Işıltının Sırrı",
  introText: "Pırlanta dünyasında bazı tasarımlar vardır ki modadan bağımsız olarak her dönemde zarafetini korur. Anturaj pırlanta modeller de bu zamansız tasarımların başında gelir. Merkez taşı çevreleyen daha küçük pırlantalarla oluşturulan bu özel stil, güçlü bir ışıltı ve dengeli bir estetik sunar.",
  heroImage: "/images/products/featured-large-1.jpg",
  articleContent: `Anturaj tasarımların en dikkat çekici özelliği, merkez taşın ihtişamını daha büyük ve etkileyici göstermesidir. Çevresini saran pırlantalar, ışığı her açıdan yakalayarak taşın parlaklığını artırır ve mücevhere derinlik kazandırır. Bu sayede anturaj modeller, ilk bakışta fark edilen güçlü bir şıklık yaratır.

Anturaj pırlantalar yalnızca estetik açıdan değil, kullanım açısından da avantaj sağlar. Dengeli tasarımı sayesinde hem günlük kombinlerde hem de özel davetlerde rahatlıkla tercih edilebilir. Klasik çizgileri modern detaylarla buluşturan bu modeller, zamansız bir stil arayanlar için ideal bir seçimdir.

Ayrıca anturaj tasarımlar, nişan ve evlilik yüzüklerinden kolye ve küpelere kadar geniş bir ürün yelpazesinde sunulabilir. Bu da onları hem romantik anlamlar taşıyan hediyeler hem de uzun vadeli, değerli bir tercih haline getirir.`,
  previousPost: {
    title: "Aşkınıza Özel Unutulmaz\nSürprizler: Evlilik Teklifi\nFikirleri",
    slug: "evlilik-teklifi-fikirleri",
    image: "/images/products/product-1.jpg",
  },
  nextPost: {
    title: "Söz ve Nişan Törenlerinin\nEn Çok Tercih Edilen\nMücevherleri",
    slug: "soz-nisan-mucevherleri",
    image: "/images/products/product-2.jpg",
  },
  relatedPosts: [
    {
      id: "1",
      title: "Tamtur Yüzük Sonsuzluk Sembolünün Kökenleri",
      image: "/images/products/product-1.jpg",
      slug: "tamtur-yuzuk-sonsuzluk",
    },
    {
      id: "2",
      title: "İtalyan Zincir Kolye Şıklığın Yeni Stili",
      image: "/images/products/product-2.jpg",
      slug: "italyan-zincir-kolye",
    },
    {
      id: "3",
      title: "Pırlanta Gerçekten Bu Kadar Değerli Mi?",
      image: "/images/products/product-3.jpg",
      slug: "pirlanta-degerli-mi",
    },
    {
      id: "4",
      title: "Pırlanta Kolye Almak Artık Neden Bir Trend?",
      image: "/images/products/product-4.jpg",
      slug: "pirlanta-kolye-trend",
    },
    {
      id: "5",
      title: "Lotus Yüzük Yeniden Doğuşun ve Saflığın",
      image: "/images/products/featured-large-1.jpg",
      slug: "lotus-yuzuk",
    },
    {
      id: "6",
      title: "Yaz Stilinizi Altın Şahmaran ile Yenileyin",
      image: "/images/products/featured-large-2.jpg",
      slug: "altin-sahmaran",
    },
  ],
  currentPage: 3,
  totalPages: 13,
};

export default function BlogPage() {
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
      />
      <main>
        <BlogArticlePage {...articleData} />
      </main>
      <Footer
        logo={content.footer.logo}
        slogan={content.footer.slogan}
        nav={content.footer.nav}
        copyright={content.footer.copyright}
      />
    </>
  );
}
