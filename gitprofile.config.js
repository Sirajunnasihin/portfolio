// gitprofile.config.js

const config = {
  github: {
    username: 'sirajunnasihin', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sirajun-nasihin',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'sirajun_nasihin',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://sirajunnasihin.my.id',
    phone: '',
    email: 'sirajunnasihin7@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Codeigniter',
    'MySQL',
    'Git',
    'CSS',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Universitas Teknologi Sumbawa',
      position: 'Staff IT',
      from: '2018',
      to: '2020',
      companyLink: 'https://uts.ac.id',
    },
    {
      company: 'Satgas TP3 RTG NTB',
      position: 'IT Support and Web Developer',
      from: '2021',
      to: '2022',
      companyLink: 'https://bpbd.ntbprov.go.id',
    },
    {
      company: 'Politeknik Medica Farma Husada Mataram',
      position: 'Head of IT and Lecture',
      from: '2022',
      to: 'Present',
      companyLink: 'https://politeknikmfh.ac.id',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'STMIK LIKMI Bandung',
      degree: 'Master Sistem Informasi',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Universitas Teknologi Sumbawa',
      degree: 'Sarjana Teknik Informatika',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SIMAMI',
      description: 'Sistem Informasi Manajemen Administrasi Izin Universitas Teknologi Sumbawa',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://simami.uts.ac.id',
    },
    {
      title: 'SIMILEA',
      description: 'Sistem Informasi Monitoring Evaluasi Beasiswa Mahasiswa Universitas Teknologi Sumbawa',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://similea.uts.ac.id',
    },
    {
      title: 'SPMI UTS',
      description:
        'Sistem Penjaminan Mutu Internal Universitas Teknologi Sumbawa',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://uts.ac.id',
    },
    {
      title: 'SIRKON',
      description:
        'Sistem Informasi Rehabilitasi dan Rekonstruksi Rumah terdampak Gempa',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://sirkon.id',
    },
    {
      title: 'E-Arsip LPJ RTG',
      description:
        'Web Arsip Laporan Pertanggungjawaban Rumah Terdampak Gempa untuk kebutuhan internal dan lokal',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://sirkon.id',
    },
    {
      title: 'SISLABLING',
      description:
        'Sistem Informasi Laboratorium Lingkungan DLHK NTB',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://sislabling.net',
    },
    {
      title: 'STIMULAN',
      description:
        'Sistem Informasi Monitoring dan Evaluasi Penjaminan Mutu Universitas Muhammadiyah Mataram',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://spa.stimulan-ummat.id',
    },
    {
      title: 'SIMKEU',
      description:
        'Sistem Informasi Manajemen Keuangan Politeknik Medica Farma Husada Mataram',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://simkeu.politeknikmfh.ac.id',
    },
    {
      title: 'Website MFH',
      description:
        'Website Kampus Politeknik Medica Farma Husada Mataram',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://politeknikmfh.ac.id',
    },
    {
      title: 'SIPENMARU',
      description:
        'Sistem Informasi Penerimaan Mahasiswa Baru Politeknik Medica Farma Husada Mataram',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://new-pmb.politeknikmfh.ac.id',
    },
    {
      title: 'E-Commerce',
      description:
        'E-Commerce Horden',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: '#',
    },
    {
      title: 'SIKOMAS SESAIT',
      description:
        'Sistem Informasi Kelompok Masyarakat untuk pengenalan wisata dan wisata yang dihasilkan atau dikelola oleh kelompok masyarakat, dan dilengkapi dengan pencatatan penjualan',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://www.sikomas-sesait.biz.id',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
