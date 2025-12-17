"use client";

import Link from "next/link";
import Image from "next/image";
import { getAssetPath } from "@/utils/paths";

interface RelatedPost {
  id: string;
  title: string;
  image: string;
  slug: string;
}

interface NavigationPost {
  title: string;
  slug: string;
  image?: string;
}

interface BlogArticlePageProps {
  // Hero Section
  title: string;
  introText: string;
  heroImage: string;
  
  // Article Content
  articleContent: string;
  
  // Navigation
  previousPost?: NavigationPost;
  nextPost?: NavigationPost;
  
  // Related Posts
  relatedPosts: RelatedPost[];
  
  // Pagination
  currentPage: number;
  totalPages: number;
}

export default function BlogArticlePage({
  title,
  introText,
  heroImage,
  articleContent,
  previousPost,
  nextPost,
  relatedPosts,
  currentPage,
  totalPages,
}: BlogArticlePageProps) {
  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first 5 pages
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push("...");
      // Show last 3 pages
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  return (
    <div className="bg-light">
      {/* Hero Section - Dark Background */}
      <section className="relative bg-[#2f3237] pb-[150px] md:pb-[400px]">
        {/* Hero Content */}
        <div className="container mx-auto px-6 md:px-8 pt-[100px] md:pt-[274px]">
          <div className="max-w-[950px] mx-auto text-center">
            {/* Title */}
            <h1 className="font-bold text-[30px] leading-[40px] md:text-[40px] md:leading-[40px] text-primary mb-[40px] md:mb-[80px]">
              {title}
            </h1>
            
            {/* Intro Text */}
            <p className="text-[20px] leading-[30px] md:text-[30px] md:leading-[40px] font-light text-light max-w-[390px] md:max-w-none mx-auto">
              {introText}
            </p>
          </div>
        </div>
      </section>
      
      {/* Hero Image - Overflowing from dark section */}
      <div className="relative -mt-[100px] md:-mt-[350px] z-10">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1190px] mx-auto">
            <div className="relative w-full aspect-390/324 md:h-[664px]">
              <Image
                src={getAssetPath(heroImage)}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Article Content - After photo */}
      <section className="bg-light py-[40px] md:py-[80px]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[943px] mx-auto">
            {/* Article Text */}
            <div 
              className="text-[15px] leading-[20px] font-light text-[#2f3237] text-center whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: articleContent.replace(/\n\n/g, '<br/><br/>') }}
            />
            
            {/* Separator Line */}
            <div className="w-full h-px bg-primary mt-[40px] md:mt-[80px]" />
          </div>
        </div>
      </section>

      {/* Previous / Next Navigation */}
      <section className="bg-light pb-[40px] md:pb-[80px]">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-[1430px] mx-auto">
            {/* Mobile: Stacked */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
              {/* Previous Post */}
              {previousPost ? (
                <Link href={`/blog/${previousPost.slug}`} className="group w-full md:w-auto">
                  <span className="text-[10px] leading-[10px] font-light text-[#2f3237] block mb-[20px]">
                    ÖNCEKİ
                  </span>
                  <div className="flex items-start gap-4 md:gap-6">
                    {previousPost.image && (
                      <div className="relative w-[150px] md:w-[230px] aspect-150/84 md:h-[128px] shrink-0">
                        <Image
                          src={getAssetPath(previousPost.image)}
                          alt={previousPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#2f3237] max-w-[200px] md:max-w-[251px] text-left group-hover:text-primary transition-colors">
                      {previousPost.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              
              {/* Next Post */}
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="group w-full md:w-auto text-left md:text-right">
                  <span className="text-[10px] leading-[10px] font-light text-[#2f3237] block mb-[20px]">
                    SONRAKİ
                  </span>
                  <div className="flex items-start gap-4 md:gap-6 flex-row-reverse md:flex-row-reverse">
                    {nextPost.image && (
                      <div className="relative w-[150px] md:w-[230px] aspect-150/84 md:h-[128px] shrink-0">
                        <Image
                          src={getAssetPath(nextPost.image)}
                          alt={nextPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <h3 className="font-bold text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#2f3237] max-w-[200px] md:max-w-[254px] text-left md:text-right group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Posts Section */}
      <section className="bg-light pb-[60px] md:pb-[100px]">
        <div className="container mx-auto px-6 md:px-8">
          {/* Section Title with Lines */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-[40px] md:mb-[80px]">
            <div className="flex-1 md:w-[470px] h-px bg-primary" />
            <h2 className="text-[20px] leading-[30px] font-light text-[#2f3237] whitespace-nowrap">
              DİĞER YAZILAR
            </h2>
            <div className="flex-1 md:w-[470px] h-px bg-primary" />
          </div>
          
          {/* Posts Grid - Mobile: 1 column, Desktop: 2 columns with Offset */}
          <div className="max-w-[1430px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[10px]">
              {relatedPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={`${index % 2 === 1 ? 'md:mt-[80px]' : ''}`}
                >
                  {/* Post Image */}
                  <div className="relative w-full aspect-390/324 md:w-[710px] md:h-[396px] mb-[30px] md:mb-[40px]">
                    <Image
                      src={getAssetPath(post.image)}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Post Title */}
                  <h3 className="font-bold text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] text-[#2f3237] text-center mb-[20px] md:mb-[30px]">
                    {post.title}
                  </h3>
                  
                  {/* Read More Link */}
                  <div className="text-center">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-[15px] leading-[30px] font-light text-[#2f3237] link-underline inline-block"
                    >
                      devamını oku
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="bg-light pb-[60px] md:pb-[100px]">
        <div className="container mx-auto px-6 md:px-8">
          {/* Pagination with Lines */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="flex-1 md:w-[470px] h-px bg-primary" />
            
            <div className="flex items-center gap-2 md:gap-[18px] flex-wrap justify-center">
              {getPaginationNumbers().map((page, index) => (
                <span key={index}>
                  {typeof page === "number" ? (
                    <Link
                      href={`/blog?page=${page}`}
                      className={`text-[13px] leading-[13px] text-[#2f3237] hover:text-primary transition-colors ${
                        page === currentPage ? 'font-bold' : 'font-light'
                      }`}
                    >
                      {page}
                    </Link>
                  ) : (
                    <span className="text-[13px] leading-[13px] font-light text-[#2f3237]">
                      {page}
                    </span>
                  )}
                </span>
              ))}
            </div>
            
            <div className="flex-1 md:w-[470px] h-px bg-primary" />
          </div>
        </div>
      </section>
    </div>
  );
}
