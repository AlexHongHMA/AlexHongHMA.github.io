// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "How I got here, the long version.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My curriculum vitae, viewable here and available to download.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-seeing-methane-notes-on-the-3d-cnn-behind-the-icoict-paper",
        
          title: "Seeing methane: notes on the 3D-CNN behind the ICoICT paper",
        
        description: "How an optimised 3D-CNN reached 99.75 percent accuracy on infrared gas-leak video, and what had to be thrown away to get there.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/seeing-methane/";
          
        },
      },{id: "post-why-i-rebuilt-this-site",
        
          title: "Why I rebuilt this site",
        
        description: "A short note on what this site is for, and what I am working on before Taiwan.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-this-site/";
          
        },
      },{id: "news-started-research-on-optimized-3d-cnn-for-real-time-infrared-natural-gas-leak-classification-achieving-99-75-accuracy-fire",
          title: 'Started research on Optimized 3D-CNN for Real-Time Infrared Natural Gas Leak Classification, achieving...',
          description: "",
          section: "News",},{id: "news-best-presentation-award-at-ica-sp-con-2025",
          title: 'Best Presentation Award at ICA-SP Con 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-won-first-runner-up-award-in-smart-infrastructure-for-smart-city-competition-by-metropolitan-waterworks-authority-featured-in-kmutt-pride-medal-sports",
          title: 'Won First Runner-Up Award in “Smart Infrastructure for Smart City” competition by Metropolitan...',
          description: "",
          section: "News",},{id: "news-best-paper-award-at-ieee-icoict-2025",
          title: 'Best Paper Award at IEEE ICoICT 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-listed-in-kmutt-hall-of-fame-for-outstanding-achievement-in-smart-infrastructure-development-star",
          title: 'Listed in KMUTT Hall of Fame for outstanding achievement in Smart Infrastructure development!...',
          description: "",
          section: "News",},{id: "news-started-as-a-full-time-machine-learning-researcher-at-maintenance-technology-center-mtc-kmutt-collaborating-with-prof-cherdpong-jomdecha-on-non-destructive-detection-technology-research-microscope",
          title: 'Started as a Full Time Machine Learning Researcher at Maintenance Technology Center (MTC),...',
          description: "",
          section: "News",},{id: "news-our-ndt-amp-e-paper-recognized-as-a-q1-journal-on-web-of-science",
          title: 'Our NDT&amp;amp;E paper recognized as a Q1 journal on Web of Science',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-awarded-a-fully-funded-scholarship-for-the-master-of-mechanical-engineering-automation-amp-amp-control-program-at-the-department-of-mechanical-engineering-national-chung-cheng-university-chiayi-taiwan-taiwan-starting-1-september-2026-mortar-board",
          title: 'Awarded a Fully Funded Scholarship for the Master of Mechanical Engineering (Automation &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/HtetMyatAung_resume_update.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%74%65%74%6D%79%61%74%61%75%6E%67.%63%74%6C%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/AlexHongHMA", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/htetmyataung-alex", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-7913-928X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DVHSkBgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
