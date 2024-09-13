export default {
  /**
   * basic Information
   */
  title: `nageune`,
  description: `나그네 개발자`,
  language: `ko`,
  siteUrl: `https://nageune.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: `nageune/nageune.github.io`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `강경현`,
    nickname: `나그네`,
    stack: ['PS', 'CP', 'C++'],
    bio: {
      email: `nageune.dev@gmail.com`,
      residence: 'Geoje, Republic of Korea',
      bachelorDegree: 'Kyung Hee Univ. Computer Science & Engineering (2022. 3.-Present)',
    },
    social: {
      github: `https://github.com/nageune`,
	  linkedin: `https://www.linkedin.com/in/nageune`,
      email: `mailto:nageune.dev@gmail.com`,
    },
    dropdown: {
      solvedac: 'https://solved.ac/profile/kangkh0906',
      codeforces: 'https://codeforces.com/profile/nageune',
      atcoder: 'https://atcoder.jp/users/nageune',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'Experience',
      category: 'featured-Experience',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
	  // Career
	  // Activity
	  {
		category: 'Activity',
		date: '2022. 3. - Present',
		en: 'Hacker',
		kr: '해커',
		info: 'Kyung Hee Univ. School of Computing Academic Club',
		link: 'https://www.instagram.com/khu_hacker',
	  },
	  // Contest
	  {
		category: 'Contest',
		date: '2022. 9.',
		en: '2022 KHU Club Unity Contest',
		kr: '2022 경희대학교 동아리 단합 공모전',
		info: '3rd Prize',
		link: '',
	  },
	  {
		category: 'Contest',
		date: '2023. 9.',
		en: 'shake! 2023',
		kr: '2023 경인지역 6개 대학 연합 프로그래밍 경시대회',
		info: 'Kyung Hee Univ. Trials 7th Place',
		link: 'https://shake.codes',
	  },
	  // Certificate
	  {
		category: 'Certificate',
		date: '2023. 4.',
		en: 'Craftsman Information Processing',
		kr: '정보처리기능사',
		info: 'National Technical Qualification',
		link: 'https://www.q-net.or.kr/crf005.do?id=crf00503&jmCd=6921',
	  },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
		title: '',
		description: '',
		techStack: [''],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
