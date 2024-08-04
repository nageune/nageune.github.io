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
      bachelorDegree: 'Kyung Hee University Computer Science & Engineering (2022. 3.-Present)',
    },
    social: {
      github: `https://github.com/nageune`,
	  linkedin: `https://www.linkedin.com/in/nageune`,
      resume: `https://nageune.github.io`,
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
      title: '',
      category: '',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
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
		kr: '2023 경인지역 6개 대학 연합 프로그래밍 경시대회 shake!',
		info: '경희대학교 선발전 7th Place, 본선 진출',
		link: '',
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
