import { ServiceItem, PortfolioItem, ExperienceItem, Article, WechatArticle, XiaohongshuItem, BrandPromotionItem, WebsiteItem } from './types';

const portfolioImages = import.meta.glob('./assets/portfolio/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const articleImages = import.meta.glob('./assets/articles/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const getPortfolioImage = (fileName: string) => portfolioImages[`./assets/portfolio/${fileName}`] ?? '';
const getArticleImage = (fileName: string) => articleImages[`./assets/articles/${fileName}`] ?? '';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-1',
    title: '内容策划',
    description: '具有扎实的文案功底，能够迅速捕捉热点话题，策划相关选题，搜集整合相关资料，输出爆款内容。',
    iconType: 'web',
    accentColor: 'blue'
  },
  {
    id: 'srv-2',
    title: '新媒体运营',
    description: '熟悉各平台运营规则，通过输出精准内容、内容分发，提高获客数量及质量，提升转化率。',
    iconType: 'uiux',
    accentColor: 'pink'
  },
  {
    id: 'srv-3',
    title: '品牌推广',
    description: '策划品牌传播计划，通过线上新媒体和电商平台、线下行业展会等渠道，提高品牌整体曝光。',
    iconType: 'brand',
    accentColor: 'green'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: "2024/04-2026/03",
    role: '品牌运营',
    company: '广州蒸汽波文化发展有限公司',
    description: "1. 品牌内容策划与全域推广：锚定文创产品受众圈层，策划公司旗下原创品牌‘发条屋’文创产品的内容种草方案与全域传播计划（小红书图文、私域、线下展会），提升品牌整体曝光量。并跟进相关促销活动，提高销售转化，所负责渠道2年累计贡献成交额2100万+，位居部门第一。\n2. 电商平台精细化运营与转化：独立负责拼多多及阿里国际站店铺日常运维（含产品上架、订单及数据复盘等核心工作）。通过精细化运营调整，持续提升平台自然曝光与转化效果。\n3. 私域运营与转化：建立“内容曝光-用户留存-成交转化”全链路数据看板。累计常态化维护私域用户数千人，通过内容种草+私域精细化触达，按用户标签分层推送新品预告、促销活动与专属福利，提升品牌曝光度与用户活跃度，私域用户复购率提升12%。\n4. 竞品调研与新品上市策略：定期开展行业竞品常态化调研工作，搜集整理主流竞品的产品定价、卖点、评价等核心数据。基于用户差评痛点（如毛绒质感差、缺乏功能性等），累计输出功能迭代与卖点升级10+产品优化建议，超60%方案被落地采纳，有效提升新品市场适配度与核心竞争力，降低新品试错成本。",
    iconColor: 'bg-neo-blue'
  },
  {
    id: 'exp-2',
    period: "2021/03-2024/03",
    role: "内容运营",
    company: "北京有路前行科技发展有限公司",
    description: "1. 内容策划与运营：负责公众号平台原创内容的产出，小红书、头条、网易、百家号等多平台的内容分发。追踪国际热点与经济动态，从海外报告中提炼高价值信息，并进行内容输出。公众号推文阅读量创历史新高，多篇推文阅读量达80万+，其他平台多次产出10万+爆款。\n2. 用户留存与转化驱动：构建内容矩阵，吸引精准用户，增加粉丝粘性，提高内容转化。基于阅读完成率、分享率等数据，调整推送时段与内容长度，增设互动话题引导评论，同步嵌入产品跳转链接。用户留存率与转化率持续提升，个人绩效多次位列部门第一。\n3. 跨部门协作与项目推进：联动设计、产品、销售团队，统一内容调性与活动节奏，协调资源确保选题从策划到发布无缝衔接。项目执行效率提高，内容上线准时率保持100%。",
    iconColor: 'bg-neo-yellow'
  },
  {
    id: 'exp-3',
    period: "2020/07-2021/02",
    role: "新媒体运营",
    company: "广州市启风网络科技有限公司",
    description: "1. 粉丝增长与净增突破：负责公众号的日常运营与内容产出。根据用户画像和分析公众号后台的各项数据复盘分析，锁定潜在关注群体，采用话题借势、关键词回复优化等组合打法，快速拉升粉丝量。累计运营粉丝约140万，粉丝净增率 1.2%（目标值 0.8%），协助团队获得月度项目单粉产出以及粉丝净增第一。\n2. 数据复盘与模型迭代：每日追踪打开率、取关率、单粉产出等指标，对比竞品账号运营策略，持续调整内容选题与发布时间。持续对运营模型进行更新迭代，输出优化方案，完成增长目标。单粉产出 0.18（目标值 0.15），获得月度项目个人净增第二。",
    iconColor: 'bg-neo-pink'
  },
  {
    id: 'exp-4',
    period: "2022/11-2023/08",
    role: "兼职作者",
    company: "《日本华侨报》",
    description: "1. 独立负责报纸专栏文稿撰写、内容选题、文案创作与稿件校对全流程工作，深耕大众内容创作与文字输出，具备扎实的文字功底、内容策划能力及文案打磨能力。\n2. 自主筛选优质选题、搭建文章框架、原创撰写文稿，严格遵循媒体内容调性、排版规范及发布标准，精准把控文字细节、内容逻辑与语句质感。\n3. 期间累计独立完成30+篇原创专栏文稿，稿件通过率高达100%，多篇内容被报纸版面刊登发布。长期深耕原创文字创作，熟练掌握内容选题策划、文案撰写、内容润色、逻辑优化技巧，具备极强的文字表达、内容输出及创意策划能力。",
    iconColor: 'bg-neo-green'
  }
];

export const wechatArticlesData: WechatArticle[] = [
  {
    id: 'wc-1',
    title: '日本目前有多少中国人？数据终于曝光了，太过触目惊心…',
    link: 'https://mp.weixin.qq.com/s/R9J3TtCs8baevg6uHo5MHA',
    image: getPortfolioImage('公众号1.png')
  },
  {
    id: 'wc-2',
    title: '完了！移民的至暗时刻还是来了…',
    link: 'https://mp.weixin.qq.com/s/AUOH7j8jFye5TQDon5Hr3w',
    image: getPortfolioImage('公众号2.png')
  },
  {
    id: 'wc-3',
    title: '这5个国家，中国人正在疯狂移民！也在疯狂买房...',
    link: 'https://mp.weixin.qq.com/s/5Ut_M49Fg-qXWzUnwqCMFw',
    image: getPortfolioImage('公众号3.png')
  },
  {
    id: 'wc-4',
    title: '中国这一新规落地，日本成为“最大赢家”？海外人士也乐疯了…',
    link: 'https://mp.weixin.qq.com/s/ziANZ3FdSHIH77uZHuQmUQ',
    image: getPortfolioImage('公众号4.png')
  },
  {
    id: 'wc-5',
    title: '最后的疯狂！大量中国人正在抢着移这个国家！',
    link: 'https://mp.weixin.qq.com/s/7HR5HruQdswd56pgaD408Q',
    image: getPortfolioImage('公众号5.png')
  }
];

export const xiaohongshuData: XiaohongshuItem[] = [
  {
    id: 'xhs-a1',
    title: '家人们!!!省钱啦',
    link: 'https://www.xiaohongshu.com/explore/656ff820000000003403fcec?app_platform=android&ignoreEngage=true&app_version=9.36.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBHuHqZDz7Jcwfih-9gctzFIVCmRI8IT4VRESxH5v6DVc=&author_share=1&xhsshare=WeixinSession&shareRedId=N0g4ODo8R0I8STo6Sz80SjlFOUo0SDZC&apptime=1783623659&share_id=f6575823953f41a68d9d3ba4a4eabbf3&share_channel=wechat&code=9P3YoQAbWW2&wechatWid=84ef4a39c1d06df8271d68167789fabf&wechatOrigin=menu',
    image: getPortfolioImage('小红书文章1.png'),
    type: 'article'
  },
  {
    id: 'xhs-a2',
    title: '60岁在海外养老的我，经历了什么?',
    link: 'https://www.xiaohongshu.com/explore/619496ba0000000001024567?app_platform=android&ignoreEngage=true&app_version=9.36.2&share_from_user_hidden=true&xsec_source=app_share&type=normal&xsec_token=CBIb9s_nskVUIx8t5ElbgDCu5jk1a3f9BvYJ3RPt-Y5Ww=&author_share=1&xhsshare=WeixinSession&shareRedId=N0g4ODo8R0I8STo6Sz80SjlFOUo0SDZC&apptime=1783623913&share_id=b4d5ab92030d49a2b38f3daf6fab4c15&share_channel=wechat&code=82fqKkz6mzN&wechatWid=84ef4a39c1d06df8271d68167789fabf&wechatOrigin=menu',
    image: getPortfolioImage('小红书文章2.png'),
    type: 'article'
  },
  {
    id: 'xhs-v1',
    title: '为什么有钱人都喜欢隐居日本?',
    link: 'https://www.xiaohongshu.com/explore/649aa0ad0000000027002eb1?app_platform=android&ignoreEngage=true&app_version=9.36.2&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CB2iGr2wCmBeGqRIZHgJRXIwUdcV3_Necdd6gdx7R9r7s=&author_share=1&xhsshare=WeixinSession&shareRedId=N0g4ODo8R0I8STo6Sz80SjlFOUo0SDZC&apptime=1783623704&share_id=096aef72d06a48ed95f0f303a3818d9d&share_channel=wechat&code=4z26skBiGJD&wechatWid=84ef4a39c1d06df8271d68167789fabf&wechatOrigin=menu',
    image: getPortfolioImage('小红书视频1.png'),
    type: 'video'
  },
  {
    id: 'xhs-v2',
    title: '定居日本是一种怎样的体验',
    link: 'https://www.xiaohongshu.com/explore/634e8184000000000601d877?app_platform=android&ignoreEngage=true&app_version=9.36.2&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CBVUX82Ul6NzawngPuM6xCJOKFQPJzdv100vY70qJ9tsg=&author_share=1&xhsshare=WeixinSession&shareRedId=N0g4ODo8R0I8STo6Sz80SjlFOUo0SDZC&apptime=1783623732&share_id=caa37b97c8fd46ccb1641f8529106ca7&share_channel=wechat&code=A0xaBZOxKIN&wechatWid=84ef4a39c1d06df8271d68167789fabf&wechatOrigin=menu',
    image: getPortfolioImage('小红书视频2.png'),
    type: 'video'
  },
  {
    id: 'xhs-v3',
    title: '为什么日本留学生住得离学校越远越好',
    link: 'https://www.xiaohongshu.com/explore/622f0c7a000000002103e6f5?app_platform=android&ignoreEngage=true&app_version=9.36.2&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CBKSx1OfvdPy1ksaryleMmK_PCJuUzHMs2zHD1mP5_xz8=&author_share=1&xhsshare=WeixinSession&shareRedId=N0g4ODo8R0I8STo6Sz80SjlFOUo0SDZC&apptime=1783623805&share_id=783f9c347bcf43a99acbc9b8c6156198&share_channel=wechat&code=vh194w1Qd5&wechatWid=84ef4a39c1d06df8271d68167789fabf&wechatOrigin=menu',
    image: getPortfolioImage('小红书视频3.png'),
    type: 'video'
  }
];

export const brandPromotionsData: BrandPromotionItem[] = [
  {
    id: 'bp-1',
    title: '2025 IBTE 印尼国际玩具及婴童用品展',
    image: getPortfolioImage('2025 IBTE 印尼国际玩具及婴童用品展.jpg')
  },
  {
    id: 'bp-2',
    title: '2025 中国（越南）出口品牌联合展',
    image: getPortfolioImage('2025 中国（越南）出口品牌联合展.jpg')
  },
  {
    id: 'bp-3',
    title: '2024 越南玩具及婴童用品展览会',
    image: getPortfolioImage('2024越南玩具及婴童用品展览会.jpg')
  },
  {
    id: 'bp-4',
    title: '2024 泰国收藏品展ACF',
    image: getPortfolioImage('2024泰国收藏品展ACF.jpg')
  },
  {
    id: 'bp-5',
    title: '2024 印尼婴童玩具展',
    image: getPortfolioImage('2024 印尼婴童玩具展.jpg')
  }
];

export const websitesData: WebsiteItem[] = [
  { id: 'web-1', title: '买了1日元房产的人，最后都是什么下场?', image: getArticleImage('网站1.png'), link: 'http://www.jnocnews.co.jp/n101354.html' },
  { id: 'web-2', title: '那个一抱成名的中国男孩，为什么在日本难以复制?', image: getArticleImage('网站2.png'), link: 'http://www.jnocnews.co.jp/n100466.html' },
  { id: 'web-3', title: '看日本如何把塑料变资源!', image: getArticleImage('网站3.png'), link: 'http://www.jnocnews.co.jp/n100403.html' },
  { id: 'web-4', title: '日本00后玩的都是80后玩剩下的?', image: getArticleImage('网站4.png'), link: 'http://www.jnocnews.co.jp/n100340.html' },
  { id: 'web-5', title: '小岛国日本，竟然是隐形资源富豪?', image: getArticleImage('网站5.png'), link: 'http://www.jnocnews.co.jp/n100044.html' },
  { id: 'web-6', title: '进击吧!日本的“妈妈团”', image: getArticleImage('网站6.png'), link: 'http://www.jnocnews.co.jp/n99916.html' },
  { id: 'web-7', title: '在日本打个“飞的”也不难', image: getArticleImage('网站7.png'), link: 'http://www.jnocnews.co.jp/n99763.html' },
  { id: 'web-8', title: '奇葩日本人，竟然吃起了“乌鸦刺身”?', image: getArticleImage('网站8.png'), link: 'http://www.jnocnews.co.jp/n99702.html' },
  { id: 'web-9', title: '担忧!日本赌场其实是一颗“隐藏炸弹”?', image: getArticleImage('网站9.png'), link: 'http://www.jnocnews.co.jp/n99566.html' },
  { id: 'web-10', title: '酸!日本又出了个体坛亚洲之光!', image: getArticleImage('网站10.png'), link: 'http://www.jnocnews.co.jp/n99470.html' },
  { id: 'web-11', title: '科技与狠活，日本年轻人挤进元宇宙里相亲', image: getArticleImage('网站11.png'), link: 'http://www.jnocnews.co.jp/n99295.html' },
  { id: 'web-12', title: '中国人，你还敢在日本买房不住吗?', image: getArticleImage('网站12.png'), link: 'http://www.jnocnews.co.jp/n99222.html' },
  { id: 'web-13', title: '日本公寓，越老越香?', image: getArticleImage('网站13.png'), link: 'http://www.jnocnews.co.jp/n98937.html' },
  { id: 'web-14', title: '日本女性正在“求救”', image: getArticleImage('网站14.png'), link: 'http://www.jnocnews.co.jp/n98812.html' },
  { id: 'web-15', title: '揭晓!日本人最喜欢住在哪个街区?', image: getArticleImage('网站15.png'), link: 'http://www.jnocnews.co.jp/n98750.html' }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'studio-user-research',
    title: 'Studio user research and analysis',
    companyName: 'studio',
    category: 'UI/UX Design',
    description: 'In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.',
    accentColor: '#7047EB', // Purple
    bgColor: 'bg-neo-purple',
    caseStudyContent: `### The Challenge
How might we build an immersive analytics dashboard for independent creators that does not rely on complex multi-level grids, while still providing maximum density and high-contrast diagnostic readability?

### Research Phase
We interviewed 40+ digital musicians, video creators, and web designers. The primary complaint with current statistics software was "visual exhaustion" caused by washed-out gray text, tiny charts, and hidden menus. 

We formulated a design system based on:
1. **Zero-opacity hidden states**: Every action button has a solid, 3.5px black border.
2. **Strict font sizing hierarchy**: Bold display headings paired with high-legibility monospaced data grids.
3. **Intentional bright neon cues**: Important alerts stand out instantly without relying on small notifications.

### The Solution
We constructed a modular tablet-first widget grid. The user can view video playback retention rates, audience demographics, and transaction counters within a unified viewport.

- **Outcome**: A 45% reduction in time-to-diagnostic report generation.
- **Client review**: "This is the first analytics platform where I can read my metrics from five feet away without squinting. It feels exciting to look at our data!"`
  },
  {
    id: 'mobile-fintech',
    title: 'Apex wallet secure crypto checkout',
    companyName: 'apex',
    category: 'Product Design',
    description: 'Vibrant card-swapping flow for multi-currency micro-transactions with durable local secure signatures and instant neobrutalist action feedback.',
    accentColor: '#FF6B7A', // Pink
    bgColor: 'bg-neo-pink',
    caseStudyContent: `### The Challenge
Cryptocurrency and micro-token swaps feel intimidating to non-technical users. Standard wallet designs use cold, clinical tech-corporate interfaces that alienate average customers.

### Research Phase
We explored cartoon-style layouts (Neobrutalism / Brutalism) to bring warmth, human agency, and fun back into transactions. We realized that heavy borders and physical 3D button-down actions make clicking "Send" feel solid, deliberate, and satisfying.

### The Solution
We built Apex Wallet with high-contrast card overlays:
- Swap currencies using sliding neobrutalist cards.
- Add physical tactile feed animations to the numerical keypad.
- Visual confirmations utilize hand-drawn green checkmark vectors.

- **Outcome**: User confidence ratings during transfer rose by 60% in testing cohorts. Security complaints fell near zero.`
  },
  {
    id: 'smartwatch-vitals',
    title: 'Vitals interactive wearable tracker',
    companyName: 'vitals',
    category: 'UI/UX Design',
    description: 'A physical grid-aligned watch interface that presents cardiovascular stress indexes using bright solid color gradients and zero-clutter tick markers.',
    accentColor: '#37D67A', // Green
    bgColor: 'bg-neo-green',
    caseStudyContent: `### The Challenge
Designing for tiny 40mm displays typically leads to crammed layouts, micro-text, and poor contrast under direct outdoor sunlight.

### Research & Idea
By using thick borders (2px) on wearable menus, we created sharp tactile divisions. The circular progress indicator was swapped with a high-contrast horizontal bar styled like a physical measuring tool.

### Visual Design
1. **Color Cues**: Green is resting, Yellow is active, Red is peak heart rate.
2. **Text Pairing**: JetBrains Mono at 13px delivers extreme clarity for pulse readings.
3. **Action Button**: A flat circular physical knob with thick stroke indicators.

- **Result**: Perfect outdoor readability from up to 3 feet while running. Zero misplaced taps reported during high-speed jogging tests.`
  },
  {
    id: 'nextgen-ecommerce',
    title: 'NeoShop high-legibility layout',
    companyName: 'neoshop',
    category: 'Web Design',
    description: 'High contrast visual merchandise catalog layout designed with absolute structural honesty, persistent sidebar cart, and zero-flicker transitions.',
    accentColor: '#FFD214', // Yellow
    bgColor: 'bg-neo-yellow',
    caseStudyContent: `### The Challenge
Modern e-commerce sites hide checkout options behind sliding side drawers, subtle shopping cart numbers, and slow fade animations. We wanted to build a fast-purchase interface that places the checkout directly in your field of view.

### The Solution
We designed a grid framework featuring:
- A permanent neobrutalist grid of items with 4px offset shadow buttons.
- Sticky responsive sidebar summarizing items, total price, and shipping estimate.
- Immediate visual feedback upon item addition—no loading spinners.

- **Outcome**: Checkout completion speed increased by 42%. Users loved the playful physical card buttons.`
  }
];

export const articlesData: Article[] = [
  {
    id: 'art-brutalism-philosophy',
    title: 'The Philosophy of Neobrutalist Web Interfaces',
    date: 'July 5, 2026',
    category: 'Neobrutalism',
    readTime: '5 min read',
    summary: 'Why flat, corporate designs have made the web boring, and how thick black borders, comic typography, and high-contrast color choices are fighting back.',
    content: `For the last decade, corporate design has slowly sucked the soul out of the internet. Every website started looking exactly like a generic tech landing page: rounded subtle light-gray cards, soft pastel gradients, washed out #6B7280 text on a white canvas, and zero-opinion generic icons.

This trend is called **corporate minimalism**. It was created to avoid offending anyone. But in doing so, it also stopped engaging anyone.

Enter **Neobrutalism** (Neo-Brutalism).

### What is Neobrutalism?
Neobrutalism is a direct descendant of the architectural Brutalism of the 1950s and the raw HTML web pages of the 1990s. It rejects fake shadows, slick gradients, and polished corporate safety. Instead, it relies on:

1. **Extreme High Contrast**: No more subtle gray text. Everything is pitch black (#000000) on vibrant primary colors or solid off-whites.
2. **Structural Honesty**: Borders are not hidden. They are made thick, black (2px to 4px), and unapologetic. 
3. **Offset Physical Shadows**: Instead of smooth CSS gradients, shadows are solid black blocks offset horizontally and vertically. Clicking a button literally "presses" it down into its shadow.
4. **Quirky, Geometric Typography**: Using monospaced fonts (like JetBrains Mono) and round, display sans-serifs (like Space Grotesk) to convey a comic, tech-forward, or poster-like feel.

### Why It Works
It respects human cognition. Humans do not see the world in smooth, borderless 2D gradients. We perceive objects through boundaries, tactile feedback, and high visual contrast. Neobrutalist buttons *look* like physical blocks you want to press. They respond instantly to your finger or mouse cursor, making browsing feel like an interactive playground.

It is also incredibly fun to design. It invites you to use bright sunshine yellow, coral pink, and electric blue without being afraid of "breaking brand guidelines."

Let's make the internet weird and beautiful again!`,
    accentColor: 'yellow',
    likes: 128,
    views: 1420,
    comments: [
      { author: 'Clara Oswald', text: 'Finally someone said it! I am so tired of the Tailwind-default rounded gray cards. This neobrutalist style is so refreshing.', date: 'July 6, 2026' },
      { author: 'Miles Morales', text: 'This design style is perfect for portfolios! It makes the designer personality pop out immediately.', date: 'July 7, 2026' }
    ]
  },
  {
    id: 'art-contrast-layouts',
    title: 'Why High Contrast is the Secret to Accessible Aesthetics',
    date: 'June 28, 2026',
    category: 'Design',
    readTime: '4 min read',
    summary: 'Exploring the intersection of accessibility standards (WCAG) and neobrutalist designs, proving that readable apps can also look stunning.',
    content: `Many developers think that satisfying Web Content Accessibility Guidelines (WCAG) means making their applications look dull, clinical, or simplified. 

This is a massive myth. 

In fact, the extreme contrast ratios of Neobrutalist design satisfy AAA accessibility standards almost automatically, while maintaining an ultra-modern, trendy aesthetic.

### The Problem with Soft Contrast
Modern design systems often prioritize "subtlety" over readability. They use 12px light gray fonts on slightly lighter gray backgrounds to indicate metadata. While this looks clean on a high-end 5K Retina display in a dark office, it becomes completely invisible to:
- A user walking in direct sunlight with a budget smartphone.
- Older users with declining visual acuity.
- Users with standard color blindness.

### The Neobrutalist Accessibility Cheat Code
By default, neobrutalism demands:
- **Foreground**: Pure black (#000000)
- **Background**: Soft cream (#FDFDFC) or intense solid color panels (yellow, green, violet)
- **Borders**: 2px to 4px pure black

This achieves a contrast ratio of **21:1**, which exceeds even the most strict accessibility requirements.

Furthermore, because buttons have persistent, solid borders, users with motor-control challenges or cognitive differences don't have to guess what is interactive and what is static text. The design defines interactivity clearly and honestly.

### Designing High-Contrast Without Looking "Basic"
You don't need to make everything look like a default HTML page. You can balance extreme contrast with:
- Curved asymmetric corners (e.g. \`rounded-2xl\` mixed with \`rounded-tl-none\`).
- Smooth CSS translation animation offsets.
- Custom vector icons that add playfulness.

Accessibility is not a constraint on your creativity—it is the foundation of brilliant design.`,
    accentColor: 'pink',
    likes: 94,
    views: 980,
    comments: [
      { author: 'Aria Stark', text: 'I love that this style is both accessible and beautiful. No compromises.', date: 'June 29, 2026' }
    ]
  },
  {
    id: 'art-minimal-toolchain',
    title: 'My Minimalist Toolchain for Custom Vector Illustration',
    date: 'June 14, 2026',
    category: 'Tech',
    readTime: '6 min read',
    summary: 'Ditching heavy subscriptions for lightweight, rapid prototyping vector programs to create comic line art and customized icons.',
    content: `You don't need a heavy, expensive Adobe Creative Cloud subscription to draw beautiful vector illustration assets like the ones shown on this website. 

In fact, heavy software often introduces too many options, causing decision paralysis. When you have 500 gradient options, drop-shadow configurations, and blur filters, you lose focus on what matters: **line weight, composition, and shape balance.**

Here is the exact free/affordable toolchain I use to build neobrutalist vectors:

### 1. Figma (For Shape Composition)
Figma isn't just for UI layouts. Its pen tool is incredibly clean and intuitive for drawing simple line illustrations.
- **Tip**: Set your stroke to \`Inside\` or \`Center\` with a thickness of \`3px\` or \`4px\`, with caps set to \`Round\` and joins set to \`Round\`. This instantly gives you that hand-drawn, cartoonish comic feel.

### 2. Inkscape or Vectr (For Vector Operations)
If you prefer offline, open-source alternatives, Inkscape remains the gold standard. It allows you to perform clean path boolean operations (Union, Difference, Intersection) to build complex geometric structures easily.

### 3. SVG Optimization via SVGO
Once your illustration is complete, export it as an SVG. Raw exports usually contain messy metadata, editor-specific tags, and unoptimized paths.
- Run it through \`SVGO\` (or the web GUI SVGOg) to strip unnecessary tags.
- Convert raw hex colors to clean Tailwind-compatible inline color variables so you can style them dynamically.

### 4. Code Injection directly in React
Instead of loading SVGs inside \`<img src="..." />\` tags, paste them directly as React components. This lets you bind state, trigger hover classes, change stroke colors dynamically, and animate individual paths using \`motion/react\`!

By using these lightweight vector tools, you will find your illustration workflow becomes faster, cleaner, and significantly more fun.`,
    accentColor: 'blue',
    likes: 72,
    views: 820,
    comments: []
  },
  {
    id: 'art-smartwatch-clutter',
    title: 'Designing Smartwatches Without Cluttering the Wrist',
    date: 'May 30, 2026',
    category: 'Design',
    readTime: '5 min read',
    summary: 'A deep dive into screen estate constraints, touch target safety margins, and high-visibility outdoor fitness graphics.',
    content: `Wearable design is the ultimate test of a designer's discipline. On a screen that is barely 1.5 inches wide, every single pixel carries massive structural weight.

If you add a single unnecessary line or a decorative label, you immediately ruin the user's ability to quickly read their health vitals while running or bicycling.

### Rule 1: Touch Target Safety Margins
Never place interactive icons right next to each other. On a small screen, the human finger pad is huge. If you have a "Play" and "Skip" button with less than 8px of padding, users will constantly trigger the wrong action.
- Touch targets should be at least 44px by 44px, even if the visible icon is only 20px. Use hidden transparent click boundaries to ensure tapping is a breeze.

### Rule 2: The Glare Test
A fitness watch is meant to be used outside in direct summer sunlight, or during a pouring rainstorm. 
- Avoid light-blue text or thin orange lines.
- Stick to maximum contrast. A pure black background with electric neon green or solid yellow yields instant reading capabilities.

### Rule 3: Trade Circular progress for Solid Blocks
Circular radial tracks are beautiful in mockups, but they are hard to read at a glance because the text is often forced to wrap in a curve.
- A horizontal linear scale with explicit tick marks mimics physical rulers and gives immediate, unambiguous feedback. It looks unique and performs exceptionally well under high heart rate situations.`,
    accentColor: 'green',
    likes: 85,
    views: 690,
    comments: [
      { author: 'Sam Wilson', text: 'This matches the Vitals project design so well. The ruler progress bar is genius!', date: 'June 1, 2026' }
    ]
  }
];
