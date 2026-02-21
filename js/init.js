/* =======================================================================
   init.js — Vanilla JS for rayokadaparkerwebsite
   ======================================================================= */

(function () {
  'use strict';

  /* Sticky nav
  ----------------------------------------------------------------------- */
  var nav = document.getElementById('nav-wrap');

  function handleScroll() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* Mobile nav toggle
  ----------------------------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
  }

  document.querySelectorAll('#nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });
  });

  /* Active nav link via IntersectionObserver
  ----------------------------------------------------------------------- */
  var navLinks = document.querySelectorAll('#nav a[href^="#"]');
  var sections = document.querySelectorAll('header[id], section[id]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.parentElement.classList.remove('current');
            if (link.getAttribute('href') === '#' + id) {
              link.parentElement.classList.add('current');
            }
          });
        }
      });
    }, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* Portfolio modals
  ----------------------------------------------------------------------- */
  var modalData = {
    boeing: {
      logo: 'images/portfolio/boeing_logo.png',
      company: 'Boeing',
      role: 'Senior IT Service Owner',
      location: 'Bellevue, WA',
      url: 'https://www.boeing.com',
      body: [
        'Led a team of 12+ individuals in delivery of enterprise IT Change Management and product development lifecycle process from planning to executing technical development for enterprise-scale solutions.',
        'Implemented DevOps and Agile SAFe software development practices at program level, incorporating data-driven feature prioritization, automated data management tools, notification, and business logic automation to decrease cycle time by over 34% and decrease process-related errors by over 98%.',
        'Evangelized dashboard standardization across 15+ IT organizations through data-driven dashboards, reducing cycle time by 30% and increasing efficiency and customer satisfaction for 3,000+ people.',
        'Architected and developed software automation tools using SQL, Python, and R to automate business logic and manual processing, increasing efficiency by 50%+ and saving over 7,500+ hours every year for 50+ people.'
      ]
    },
    odem: {
      logo: 'images/portfolio/odem.png',
      company: 'ODEM',
      role: 'Director of Product Development & Solutions Architect',
      location: 'San Francisco, CA',
      url: 'https://odem.io/',
      body: [
        'Directed the entirety of the educational fintech technology platform, managing 8+ individual contributors and defining product features, architecture, priority, and roadmap while collaborating with Tech, Sales, Marketing, Legal, and C-level executives across 40+ stakeholders.',
        'Architected workflows using flow diagrams to map out user stories, user journey, and development flows, while using A/B testing, funnel analysis, and customer acquisition cost analysis to guide development and marketing.',
        'Established presales program that led to an increase in deals piloted and closed by over 150%. Secured over $4 million in capital. Contributed to pre-sales activities for blockchain business opportunities and developed solutions for proposals, expanding and delivering business strategy and implementation plans for complex distributed ledger/blockchain/fintech technology applications.'
      ]
    },
    dragonchain: {
      logo: 'images/portfolio/dragonchain.png',
      company: 'Okada LLC — Dragonchain & Raiin',
      role: 'Technical Program Manager & Director of Product Development',
      location: 'Bellevue, WA',
      url: 'https://www.dragonchain.com',
      body: [
        'Architected and led delivery of a 6-stage content validation pipeline, transitioning the organization from manual review to a fully automated, real-time streaming architecture on GCP — including a large-scale RLHF (Reinforcement Learning from Human Feedback) and Human-in-the-Loop (HITL) program using Google\'s Veo 3, coordinating data labeling and dataset packaging for model fine-tuning. Secured over $8 million in capital.',
        'Managed the end-to-end lifecycle of a consumer-facing RAG (Retrieval-Augmented Generation) AI Agent, coordinating cross-functional integration of internal LLMs with third-party APIs to enable user workflows.',
        'Identified requirements from 25+ stakeholders to drive the Data Tokenization and Synthetic Data roadmap. Defined Tokenomics, Staking mechanisms, and Governance protocols, ensuring GDPR/CCPA compliance.',
        'Organized and prioritized product roadmap, architected feature process flow diagrams using Lucidcharts, led agile ceremonies, and launched three software products from ideation to revenue generation.'
      ]
    },
    microsoft: {
      logo: 'images/portfolio/Microsoft_logo.svg',
      company: 'Microsoft',
      role: 'Software Development Consultant',
      location: 'Redmond, WA',
      url: 'https://www.microsoft.com',
      body: [
        'Implemented and gave pre-sales demos within the Office of the CTO in the Data and Artificial Intelligence (AI) Domain in the areas of data-driven readiness, data visuals, and AI solutions for 6+ customers, saving $3M+.',
        'Gathered customer requirements, defined customer value proposition, and developed Software as a Service (SaaS) minimum viable products (MVPs) and proof-of-concepts (POCs) for customers and internal stakeholders.',
        'Developed Power BI dashboards for visualizing internal metric tracking and domain readiness/preparation by taking and compiling status reports. Received certifications from Microsoft Professional Program in Big Data.'
      ]
    },
    bah: {
      logo: 'images/portfolio/BAH.png',
      company: 'Booz Allen Hamilton',
      role: 'Innovation Consultant',
      location: 'McLean, VA',
      url: 'https://www.bah.com',
      body: [
        'Competed within the Infrastructure and Military Health group to develop a real-time lead corrosion monitoring sensor for drinking water, developed for the Environmental Protection Agency.',
        'Helped develop the technical product using MySQL, Raspberry Pi, microcontrollers, Tableau, and various chemical reagents. Formulated the business model, marketing strategy, regulatory aspects, and pitch deck — gaining experience across the entire consultancy lifecycle.'
      ]
    },
    rainmakeme: {
      logo: 'images/portfolio/rainmakeme_logo.png',
      company: 'RainmakeMe Venture Capital',
      role: 'Venture Capital Analyst',
      location: 'New York, NY',
      url: 'http://rainmakeme.com/',
      body: [
        'Strategic angel investment group focused on funding early-stage pre-revenue startups. Conducted due diligence on over 200+ pre-revenue startups and presented findings and details to the executive team partners.',
        'Responsible for communicating, evaluating, and helping to guide potential investments. Assisted funded startups in developing their ventures and incorporating successful business strategies. Helped the executive team identify prospective deals.'
      ]
    },
    northrop: {
      logo: 'images/portfolio/northrop.jpg',
      company: 'Northrop Grumman',
      role: 'Product Management Intern',
      location: 'Melbourne, FL',
      url: 'https://www.northropgrumman.com',
      body: [
        'Streamlined innovative IT practices within Northrop Grumman\'s internal information services department, resulting in the development of an automated database financial forecasting program using Microsoft Access, the standing up of a high-performance computing service, SharePoint websites, and other services used by all Northrop Grumman employees.'
      ]
    },
    lime: {
      logo: 'images/portfolio/lime.jpg',
      company: 'Lime Connect',
      role: 'Fellow & Campus Ambassador',
      location: 'New York, NY',
      url: 'https://www.limeconnect.com/',
      body: [
        'Served as a Fellow and Campus Ambassador for Lime Connect, a selective professional development organization for high-achieving individuals. The network includes partners from IBM, PepsiCo, Google, Target, Goldman Sachs, Bloomberg, and JP Morgan.',
        'Organized events and networking opportunities for students on campus with partner companies and programs.'
      ]
    },
    orbital: {
      logo: 'images/portfolio/orbital.jpg',
      company: 'Orbital ATK',
      role: 'Testing and Environmental Engineering Co-op',
      location: 'Wallops Flight Facility, VA',
      url: 'http://orbitalatk.com/',
      body: [
        'Worked on NASA\'s Sounding Rocket Operations Contract II (NSROC II), which uses expendable suborbital sounding rockets to conduct scientific missions studying atmospheric and space environments and developing new technologies for space flight.',
        'Tested 13 customized sounding rockets to ensure flight hardware durability. Assisted with flight qualification testing of 15+ payload components (balance, vibration, bend, centrifugal, payload deployment, and MOI). Used AutoCAD and Solidworks to model 20+ parts for the Mechanical Engineering Department.',
        'Supported 300+ operations and lift procedures, ran 150+ tests, and won an award with the T&E Department for support of NASA JPL\'s Low-Density Supersonic Decelerator (LDSD) project.'
      ]
    },
    bms: {
      logo: 'images/portfolio/bms.jpg',
      company: 'Bristol-Myers Squibb',
      role: 'Downstream Process Development Co-op',
      location: 'Hopkinton, MA',
      url: 'https://www.bms.com',
      body: [
        'Worked in the Downstream Process Development group to develop novel separation technologies and gain an understanding of the current protein purification and drug development platform.',
        'Focused on process condition optimization using cation and anion exchange, hydrophobic interaction, and Protein-A/affinity chromatography resins for monoclonal antibody (mAb) drug products — including treatments for cancer (Opdivo®) and arthritis (Orencia®). Final processes improved impurity removal by 45%–852% and product yield by 23%–144%.',
        'Ran 150+ Avant experiment runs, 12 studies, 60+ experiments, 30 binding capacity tests, and packed 50+ columns. Used HPLC spectroscopy instrumentation and chromatographic analytical methods.'
      ]
    },
    nasa: {
      logo: 'images/portfolio/nasa1.jpg',
      company: 'NASA — Kennedy Space Center',
      role: 'Chemical Engineering Intern',
      location: 'Kennedy Space Center, FL',
      url: 'https://www.nasa.gov/',
      body: [
        'Worked in the Applied Physics/Chemistry Lab on the RESOLVE (Regolith & Environment Science & Oxygen & Lunar Volatile Extraction) Moon Rover — a Mission to Mars and ISRU (In-situ resource utilization) project designed to characterize lunar gas volatiles on the surface of the moon.',
        'Focused on the Lunar Advanced Volatile Analysis Subsystem, comprised of a manifold, gas chromatograph, mass spectrometer, and Water Droplet Unit.',
        'Researched, tested, and assembled line and circuit heaters, pressure transducers, RTDs, temperature sensors, thermocouples, thin film deposition, and thermal profiles in flight-forward space flight testing procedures. Formulated flight-forward experimental procedures to optimize scientific instrument effectiveness.'
      ]
    }
  };

  var backdrop = document.getElementById('modal-backdrop');
  var modalLogo = document.getElementById('modal-logo');
  var modalRole = document.getElementById('modal-role');
  var modalCompany = document.getElementById('modal-company');
  var modalBody = document.getElementById('modal-body');
  var modalLocation = document.getElementById('modal-location-text');
  var modalLink = document.getElementById('modal-link');

  function openModal(key) {
    var data = modalData[key];
    if (!data || !backdrop) return;

    modalLogo.src = data.logo;
    modalLogo.alt = data.company;
    modalCompany.textContent = data.company;
    modalRole.textContent = data.role;
    modalBody.innerHTML = data.body.map(function (p) {
      return '<p>' + p + '</p>';
    }).join('');
    modalLocation.textContent = data.location;
    modalLink.href = data.url;

    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.portfolio-card[data-modal]').forEach(function (card) {
    card.addEventListener('click', function () {
      openModal(card.dataset.modal);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.modal);
      }
    });
  });

  if (backdrop) {
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeModal();
    });
  }

  var closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* Copyright year
  ----------------------------------------------------------------------- */
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

}());
