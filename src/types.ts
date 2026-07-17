export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconType: 'web' | 'uiux' | 'product' | 'brand';
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  iconColor: string;
}

export interface WechatArticle {
  id: string;
  title: string;
  link: string;
  image: string;
}

export interface XiaohongshuItem {
  id: string;
  title: string;
  link: string;
  image: string;
  type: 'article' | 'video';
}

export interface BrandPromotionItem {
  id: string;
  title: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  companyName: string;
  category: string;
  description: string;
  accentColor: string;
  bgColor: string;
  caseStudyContent: string;
}

export interface WebsiteItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  accentColor: string;
  likes: number;
  views: number;
  comments: Array<{
    author: string;
    text: string;
    date: string;
  }>;
}
