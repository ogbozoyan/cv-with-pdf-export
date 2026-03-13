import { type CSSProperties, type ReactNode, useMemo, useRef, useState } from "react";
import { Download, Mail, Phone, MapPin, Github, Send } from "lucide-react";
import { techExecutiveTheme } from "./cvTheme";

const cvData = {
  name: "Bozoyan Oganes",
  title: "Java Developer",
  contact: {
    phone: "+7 (950) 4824072",
    email: "ogbozoyan@gmail.com",
    telegram: "t.me/ogbozoyan",
    github: "https://github.com/ogbozoyan",
    location: "Moscow",
    citizenship: "Russia",
  },
  about: "Male, 23 years old, born on November 13, 2002",
  status: "Ready to relocate, ready to travel",
  
  experience: [
    {
      period: "March 2025 – present",
      duration: "1 year 1 month",
      company: "Sber",
      website: "rabota.sber.ru/",
      location: "Moscow",
      sector: "Financial sector • Bank",
      position: "Senior Java developer",
      description: "Leading backend development for GigaChat—Sber's flagship AI platform serving millions of users. Building enterprise-grade microservices architecture that powers real-time dialogue generation, image synthesis, and code completion. Directly contributed to the platform's scalability from thousands to millions of daily requests while maintaining 99.9% uptime. My work enables seamless AI integration for corporate clients and individual users across Russia.",
      achievements: [
        "Architected and delivered 10+ production features for AIJ 2025—Russia's largest international AI exhibition, showcasing platform capabilities to 50,000+ attendees",
        "Built Agent Marketplace from ground up—enabling third-party developers to extend GigaChat functionality, creating new revenue streams",
        "Designed event-driven architecture with Kafka that reduced message processing latency by 40% and improved system resilience",
        "Implemented high-performance APIs (REST + WebFlux) handling 100K+ requests/second with sub-100ms response times",
        "Established monitoring and observability stack (Prometheus, Grafana, ELK) that decreased incident response time by 60%",
        "Led migration to Java 21 + Spring Boot 3.2, adopting virtual threads and modern async patterns for better resource utilization",
        "Deployed microservices to OpenShift using Helm charts with zero-downtime releases and automated rollback capabilities"
      ],
      technologies: "Java 21, Spring Boot 3.2, Spring WebFlux, Spring Cloud, Kafka, SSE, Async, PostgreSQL, Redis, ClickHouse, Docker, OpenShift, Helm, GitLab CI, Prometheus, Grafana, ELK Stack"
    },
    {
      period: "March 2024 – March 2025",
      duration: "1 year 1 month",
      company: "Raiffeisenbank",
      website: "www.raiffeisen.ru",
      sector: "Financial sector • Bank",
      position: "Java Developer",
      description: "Development and improvement of a banking product for loan restructuring, allowing customers to change the terms of their loan agreement in case of financial difficulties. The team's main tasks include ensuring the entire restructuring process—from the customer's application to the successful completion of the transaction—as well as creating high-quality data for other teams and reporting.",
      technologies: "Spring Boot 2/3, Java 11/17/21, jFrog, OpenSearch, PostgreSQL, Jira, GitLab, Kafka, IBM MQ, ArtemisMQ, PowerBI, React, AI tools, Agile/Scrum, Unit tests, Grafana, Atlassian (JIRA, Confluence)",
      achievements: [
        "Migration from monolithic architecture to microservices using modern versions of Spring Boot and Java",
        "Migration of the system from IBM MQ to Kafka and integration of various services via ArtemisMQ",
        "Developing an algorithm for calculating credit holidays and creating a calculator on React, which was posted on the bank's home page",
        "Participation in the design of a new system with AI integration to improve business processes"
      ],
      architecture: "1 Monolith, Microservice architecture with about 30 components, synchronous interaction between services via REST, asynchronous via Kafka/Artemis, Redis caching, ELK stack for log monitoring, Prometheus and Grafana for metrics, Postgres database, entire infrastructure in k8s"
    },
    {
      period: "December 2022 – March 2024",
      duration: "1 year 4 months",
      company: "Clickgroup LLC",
      website: "click-group.ru/",
      location: "Moscow",
      sector: "Information technology, system integration, internet • Software development",
      position: "Java developer",
      description: "Development and implementation of customized solutions for companies in the energy, oil and gas, financial, and telecommunications sectors. Key projects included a CRM system for Rosatom's nuclear power plants (B2B), as well as the creation of ERP and ETL platforms. The solutions were focused on the tasks of geographically distributed federal-level companies. The main objectives were to build scalable, fault-tolerant systems and deeply integrate business processes using modern technologies and automation.",
      technologies: "Spring Boot 2/3, Java 17, Spring Data JPA, Spring MVC, Spring Security, Camunda BPM, React, Flask, Docker, IBM BIRT, GitLab CI/CD, JavaScript, REST, Keycloak, Apache Tika, Apache Solr, microservice architecture, Atlassian (JIRA, Confluence).",
      achievements: [
        "Architecture and development: Designed and implemented more than 20 microservices on Spring Boot and Flask for various business areas. The template service I developed became the standard and basis for all subsequent microservices in the company.",
        "Business process automation: Designed and implemented complex business processes using Camunda BPM. Implemented custom logic on the server side by writing Java delegates to integrate processes with external systems and microservices.",
        "Reporting and analytics: Implemented the open-source BIRT report generator to automate the creation of complex reports, which significantly reduced the time required to prepare documents.",
        "DevOps and infrastructure: Actively participated in setting up CI/CD processes in GitLab to automate application build, testing, and deployment, which increased the reliability and speed of functionality delivery."
      ]
    },
    {
      period: "September 2021 – January 2023",
      duration: "1 year 5 months",
      company: "Medtouch/Authohem",
      location: "Moscow",
      sector: "Information technology, system integration, internet • Software development • System integration, automation of technological and business processes, IT consulting",
      position: "Java developer, ML, Linux system administrator",
      description: "Development and integration of medical solutions for Medtouch and the startup AutoHem. The Medtouch project involved the development of an educational medical platform and a CRM system for communications management. The AutoHem project involved the creation of a device for automated venous blood collection outside medical facilities, which reduces staffing costs and improves diagnostic accuracy. The project aims to improve the efficiency of laboratories and reduce errors in the collection and storage of blood samples.",
      technologies: "Java, Spring Boot 2, Spring Data JPA, Spring MVC, Spring Security, Python 3, React, jQuery, Linux system administration, CI/CD, machine learning (ML), CV (computer vision).",
      achievements: [
        "Development of microservices in Java using Spring Boot for medical platforms.",
        "Automation of business processes using Python scripts.",
        "Developed and trained a model for segmenting veins in images, integrated and tested an automatic blood collection system on a test bench.",
        "Implementation of CI/CD for deployment and automation of the ML model training process.",
        "Integration of trained models into software and successful testing of equipment for automatic venous blood sampling."
      ]
    }
  ],
  
  education: [
    {
      year: "2026",
      degree: "Higher",
      institution: "MIREA — Russian Technological University, Moscow",
      program: "Institute of Artificial Intelligence, Computer Systems Security Analysis"
    },
    {
      year: "2024",
      degree: "Higher",
      institution: "MIREA — Russian Technological University, Moscow",
      program: "Professional retraining. Devops technologies, Programmer"
    }
  ],
  
  skills: {
    languages: [
      { name: "Russian", level: "Native" },
      { name: "English", level: "B2 — Intermediate-advanced" }
    ],
    technical: [
      "microservices", "Git", "Linux", "Bash", "Docker", "SQL", "HTTP", "API",
      "Spring Framework", "Apache Maven", "Java", "DB", "Apache Kafka", "REST",
      "Microservices", "k8s", "Java Core", "PostgreSQL", "Unix", "Keycloak", "CI/CD",
      "Hibernate ORM", "JPA", "JUnit", "Spring Boot", "GitHub", "GitLab", "Kafka",
      "Redis", "AI"
    ]
  },
  
  additional: {
    about: "In my free time, I recharge by going for walks and playing sports – it clears my head and often helps me look at problems from a different angle. Sometimes I take on small pet projects and support open-source: I make small improvements, fixes, improve documentation, and sometimes just figure out someone else's code and suggest changes via PR. This helps me stay sharp as an engineer, try new approaches, and look at solutions more broadly.",
    philosophy: "I love tasks where you don't just \"write code,\" but understand the context, carefully think through the solution, and bring it to a stable result. I try to work in such a way that after I'm done, it's clear what has been done, why it was done that way, and how to maintain it going forward. I value transparent communication, respect within the team, and responsibility for quality — from the smallest details in implementation to the final behavior of the service in production.",
    links: [
      { type: "GitHub", url: "https://github.com/ogbozoyan" },
      { type: "Telegram", url: "https://t.me/ogbozoyan" }
    ],
    opensource: [
      { 
        project: "Spring Pet Clinic",
        description: "added Russian language support",
        url: "https://github.com/spring-projects/spring-petclinic/pull/1683"
      },
      {
        project: "Spring AI",
        description: "Fixed NPE bug when processing broken chunks",
        url: "https://github.com/spring-projects/spring-ai/pull/1572"
      },
      {
        project: "Spring AI",
        description: "FEATURE: expanded vector storage functionality",
        url: "https://github.com/spring-projects/spring-ai/pull/1824"
      }
    ]
  },
  
  driving: "Category B license"
};

type Locale = "en" | "ru";

const cvDataRu: typeof cvData = {
  ...cvData,
  title: "Java-разработчик",
  about: "Мужчина, 23 года, родился 13 ноября 2002",
  status: "Готов к переезду, готов к командировкам",
  contact: {
    ...cvData.contact,
    location: "Москва, м. Проспект Вернадского",
    citizenship: "Россия",
  },
  experience: [
    {
      ...cvData.experience[0],
      sector: "Финансовый сектор • Банк",
      description:
        "Разрабатываю backend-платформу для GigaChat — российской нейросети, созданной Сбером, способной вести диалог, генерировать текст, изображения, код и выполнять аналитические задачи. Участвую в построении высоконагруженной микросервисной архитектуры, обеспечивающей стабильную работу AI-сервиса в реальном времени.",
      achievements: [
        "Разработка микросервисов на Java 21 + Spring Boot 3.2, включая асинхронную обработку и поддержку SSE",
        "Интеграция с Kafka, проектирование событийной архитектуры",
        "Работа с PostgreSQL, Redis, ClickHouse, реализация производительных API (REST, WebFlux)",
        "Развертывание с использованием Helm в OpenShift",
        "Настройка CI/CD в GitLab, мониторинг через Prometheus, Grafana, логирование через ELK",
        "Подготовка 10+ фич для международной AI-выставки AIJ 2025",
        "Реализовал Маркетплейс агентов",
      ],
    },
    {
      ...cvData.experience[1],
      sector: "Финансовый сектор • Банк",
      position: "Java-разработчик",
      description:
        "Разработка и совершенствование банковского продукта для реструктуризации кредитов, позволяющего клиентам изменить условия кредитного договора в случае финансовых трудностей. Основные задачи команды включают обеспечение полного процесса реструктуризации — от подачи заявки клиентом до успешного завершения операции, а также создание качественных данных для других команд и отчетности. Проект также фокусируется на автоматизации рассмотрения обращений клиентов, включая расчет оптимальных предложений и принятие решений, что способствует улучшению клиентского опыта.",
      architecture:
        "1 Монолит, микросервисная архитектура порядка 30 компонентов, между сервисами синхронное взаимодействие по REST, асинхронное через Kafka/Artemis, кеширование Redis, ELK-стек для мониторинга логов, Prometheus и Grafana для метрик, Postgres, вся инфраструктура в k8s.",
      achievements: [
        "Миграция с монолитной архитектуры на микросервисы с использованием современных версий Spring Boot и Java",
        "Перевод системы с IBM MQ на Kafka и интеграция различных сервисов через ArtemisMQ",
        "Разработка алгоритма расчета кредитных каникул и создание калькулятора на React, размещенного на главной странице банка",
        "Участие в проектировании новой системы с интеграцией AI для улучшения бизнес-процессов",
      ],
    },
    {
      ...cvData.experience[2],
      position: "Java-разработчик",
      sector: "Информационные технологии, системная интеграция, интернет • Разработка программного обеспечения",
      description:
        "Разработка и внедрение кастомизированных решений для компаний энергетического, нефтегазового, финансового и телекоммуникационного секторов. Ключевые проекты включали CRM-систему для атомных станций Росатома (B2B), а также создание ERP и ETL-платформ. Решения были ориентированы на задачи территориально распределенных компаний федерального уровня. Основные цели заключались в построении масштабируемых, отказоустойчивых систем и глубокой интеграции бизнес-процессов с применением современных технологий и их автоматизации.",
      achievements: [
        "Архитектура и разработка: спроектировал и внедрил более 20 микросервисов на Spring Boot и Flask для различных бизнес-направлений; разработанный шаблонный сервис стал стандартом для последующих микросервисов",
        "Автоматизация бизнес-процессов: проектировал и внедрял сложные процессы на Camunda BPM, реализовывал Java Delegates для интеграции с внешними системами и микросервисами",
        "Отчетность и аналитика: внедрил open-source генератор отчетов BIRT для автоматизации сложной отчетности, что сократило время подготовки документов",
        "DevOps и инфраструктура: участвовал в настройке CI/CD в GitLab для автоматизации сборки, тестирования и деплоя, повысив надежность и скорость поставки",
      ],
    },
    {
      ...cvData.experience[3],
      position: "Java-разработчик, ML, системный администратор Linux",
      sector:
        "Информационные технологии, системная интеграция, интернет • Разработка программного обеспечения • Системная интеграция, автоматизация технологических и бизнес-процессов, ИТ-консалтинг",
      description:
        "Разработка и интеграция медицинских решений для компаний Medtouch и стартапа AutoHem. В рамках проекта Medtouch велась разработка образовательной медицинской платформы и CRM-системы для управления коммуникациями. В проекте AutoHem было создано устройство для автоматизированного забора венозной крови вне медицинских учреждений, что позволяет сократить затраты на персонал и улучшить точность диагностики. Проект направлен на повышение эффективности работы лабораторий и снижение ошибок при заборе и хранении образцов крови.",
      achievements: [
        "Разработка микросервисов на Java с использованием Spring Boot для медицинских платформ",
        "Автоматизация бизнес-процессов с помощью Python-скриптов",
        "Разработка и обучение модели сегментации вен на изображениях, интеграция и тестирование системы автоматического забора крови на стенде",
        "Реализация CI/CD для деплоя и автоматизации процесса обучения ML-моделей",
        "Интеграция обученных моделей в ПО и успешное тестирование оборудования для автоматического забора венозной крови",
      ],
    },
  ],
  education: [
    {
      ...cvData.education[0],
      degree: "Высшее",
      institution: "МИРЭА — Российский технологический университет, Москва",
      program: "Институт искусственного интеллекта, Анализ безопасности компьютерных систем",
    },
    {
      ...cvData.education[1],
      degree: "Высшее",
      institution: "МИРЭА — Российский технологический университет, Москва",
      program: "Профессиональная переподготовка. Технологии Devops, Программист",
    },
  ],
  skills: {
    languages: [
      { name: "Русский", level: "Родной" },
      { name: "Английский", level: "B2 — Средне-продвинутый" },
    ],
    technical: [
      "Микросервисы", "Git", "Linux", "Bash", "Docker", "SQL", "HTTP", "API",
      "Spring Framework", "Apache Maven", "Java", "СУБД", "Apache Kafka", "REST",
      "Microservices", "k8s", "Java Core", "PostgreSQL", "Unix", "Keycloak", "CI/CD",
      "Hibernate ORM", "JPA", "JUnit", "Spring Boot", "GitHub", "Gitlab", "Kafka",
      "Redis", "AI",
    ],
  },
  additional: {
    ...cvData.additional,
    about:
      "В свободное время перезагружаюсь прогулками и спортом — это хорошо разгружает голову и часто помогает взглянуть на проблему под другим углом. Иногда беру небольшие pet-проекты и поддерживаю open-source: делаю небольшие доработки, фиксы, улучшаю документацию, а иногда просто разбираюсь в чужом коде и предлагаю изменения через PR. Это помогает держать инженерный тонус, пробовать новые подходы и смотреть на решения шире.",
    philosophy:
      "Люблю задачи, где нужно не просто написать код, а разобраться в контексте, аккуратно продумать решение и довести его до стабильного результата. Стараюсь работать так, чтобы после меня было понятно: что сделано, почему так, и как это поддерживать дальше. Ценю прозрачную коммуникацию, уважение в команде и ответственность за качество — от мелочей в реализации до итогового поведения сервиса в проде.",
    opensource: [
      {
        ...cvData.additional.opensource[0],
        description: "добавил поддержку русского языка",
      },
      {
        ...cvData.additional.opensource[1],
        description: "исправил NPE при обработке поврежденных чанков",
      },
      {
        ...cvData.additional.opensource[2],
        description: "расширил функциональность векторных хранилищ",
      },
    ],
  },
  driving: "Права категории B",
};

const cvDataByLocale = {
  en: cvData,
  ru: cvDataRu,
} as const;

const localeCopy = {
  en: {
    localeToggleLabel: "Localization",
    exportPdf: "Export to PDF",
    preparingPdf: "Preparing PDF...",
    yearsExpLabel: "Years Experience",
    featuresLabel: "Production Features",
    throughputLabel: "Peak Throughput",
    citizenshipLabel: "Citizenship",
    summaryTitle: "Executive Summary",
    summarySubtitle: "Backend engineer focused on resilient AI-driven systems",
    summaryText:
      "Leading backend engineering for large-scale AI products in regulated domains. Strong track record in microservices modernization, event-driven design, and production reliability. Comfortable driving architecture decisions, delivery, and observability end-to-end.",
    keyAchievementsTitle: "Key Achievements",
    recentExperienceTitle: "Recent Experience",
    recentExperienceSubtitle: "Latest two roles with a timeline view",
    careerTimelineTitle: "Career Timeline",
    careerTimelineSubtitle: "Earlier roles and engineering responsibilities",
    educationTitle: "Education",
    skillsTitle: "Skills Matrix",
    additionalTitle: "Additional & Open Source",
    drivingLabel: "Driving",
    architectureLabel: "Architecture",
    technologiesLabel: "Technologies",
  },
  ru: {
    localeToggleLabel: "Локализация",
    exportPdf: "Скачать PDF",
    preparingPdf: "Подготовка PDF...",
    yearsExpLabel: "Лет опыта",
    featuresLabel: "Фич в проде",
    throughputLabel: "Пик нагрузки",
    citizenshipLabel: "Гражданство",
    summaryTitle: "Профиль",
    summarySubtitle: "Backend-инженер с фокусом на надежные AI-системы",
    summaryText:
      "Разрабатываю и поддерживаю высоконагруженные backend-системы для AI и финтех-продуктов. Сильная сторона — микросервисная архитектура, интеграции и стабильная работа сервисов в продакшене. Веду задачи от проектирования до мониторинга и сопровождения.",
    keyAchievementsTitle: "Ключевые достижения",
    recentExperienceTitle: "Последний опыт",
    recentExperienceSubtitle: "Две последние роли в формате таймлайна",
    careerTimelineTitle: "Карьерный путь",
    careerTimelineSubtitle: "Предыдущие роли и инженерные задачи",
    educationTitle: "Образование",
    skillsTitle: "Матрица навыков",
    additionalTitle: "Дополнительно и Open Source",
    drivingLabel: "Вождение",
    architectureLabel: "Архитектура",
    technologiesLabel: "Технологии",
  },
} as const;

export function CVTemplate() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [locale, setLocale] = useState<Locale>("ru");
  const copy = localeCopy[locale];
  const localizedCVData = cvDataByLocale[locale];
  const latestExperience = useMemo(() => localizedCVData.experience.slice(0, 2), [localizedCVData]);
  const earlierExperience = useMemo(() => localizedCVData.experience.slice(2), [localizedCVData]);
  const keyAchievements = useMemo(
    () =>
      localizedCVData.experience
        .slice(0, 2)
        .flatMap((job) =>
          (job.achievements ?? [])
            .slice(0, 2)
            .map((achievement) => `${job.company}: ${achievement}`),
        )
        .slice(0, 4),
    [localizedCVData],
  );

  const themeVars = useMemo(
    () =>
      ({
        "--cv-canvas-bg": techExecutiveTheme.tokens.canvasBg,
        "--cv-page-bg": techExecutiveTheme.tokens.pageBg,
        "--cv-page-border": techExecutiveTheme.tokens.pageBorder,
        "--cv-page-shadow": techExecutiveTheme.tokens.pageShadow,
        "--cv-hero-start": techExecutiveTheme.tokens.heroStart,
        "--cv-hero-end": techExecutiveTheme.tokens.heroEnd,
        "--cv-hero-text": techExecutiveTheme.tokens.heroText,
        "--cv-hero-muted": techExecutiveTheme.tokens.heroMuted,
        "--cv-text-primary": techExecutiveTheme.tokens.textPrimary,
        "--cv-text-secondary": techExecutiveTheme.tokens.textSecondary,
        "--cv-text-tertiary": techExecutiveTheme.tokens.textTertiary,
        "--cv-accent": techExecutiveTheme.tokens.accent,
        "--cv-accent-soft": techExecutiveTheme.tokens.accentSoft,
        "--cv-accent-border": techExecutiveTheme.tokens.accentBorder,
        "--cv-surface": techExecutiveTheme.tokens.surface,
        "--cv-surface-alt": techExecutiveTheme.tokens.surfaceAlt,
        "--cv-section-border": techExecutiveTheme.tokens.sectionBorder,
        "--cv-chip-bg": techExecutiveTheme.tokens.chipBg,
        "--cv-chip-text": techExecutiveTheme.tokens.chipText,
        "--cv-chip-border": techExecutiveTheme.tokens.chipBorder,
        "--cv-font-heading": techExecutiveTheme.tokens.fontHeading,
        "--cv-font-body": techExecutiveTheme.tokens.fontBody,
        "--cv-radius-lg": techExecutiveTheme.tokens.radiusLg,
        "--cv-radius-md": techExecutiveTheme.tokens.radiusMd,
        "--cv-radius-sm": techExecutiveTheme.tokens.radiusSm,
      }) as CSSProperties,
    [],
  );

  const handleExportPDF = async () => {
    if (isExporting) return;

    const element = cvRef.current;
    if (!element) return;

    setIsExporting(true);
    try {
      await (document as Document & { fonts?: { ready: Promise<void> } }).fonts?.ready;
      const { default: html2pdf } = await import("html2pdf.js");
      const opt = {
        margin: 10,
        filename: 'Bozoyan_Oganes_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
          scrollX: 0,
          scrollY: 0,
          onclone: (clonedDoc: Document) => {
            const clonedElement = clonedDoc.querySelector(".cv-document");
            if (!(clonedElement instanceof HTMLElement)) return;
            clonedElement.classList.add("cv-exporting");

            for (const [name, value] of Object.entries(themeVars)) {
              if (name.startsWith("--") && typeof value === "string") {
                clonedElement.style.setProperty(name, value);
              }
            }
          }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: {
          mode: ['css', 'legacy'],
          before: ['.pdf-page-break'],
          avoid: ['.cv-section-title', '.no-break-after', '.cv-highlight-card', '.cv-role-card', '.cv-edu-item', '.cv-opensource-item']
        }
      };

      await html2pdf()
        .set(opt)
        .from(element)
        .save();
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="cv-canvas" style={themeVars}>
      <div className="cv-toolbar print-hidden">
        <div className="cv-locale-toggle" role="group" aria-label={copy.localeToggleLabel}>
          {(["en", "ru"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLocale(option)}
              className={`cv-locale-button ${locale === option ? "active" : ""}`}
              aria-pressed={locale === option}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleExportPDF}
          disabled={isExporting}
          className="cv-export-button"
        >
          <Download className="h-4 w-4" />
          {isExporting ? copy.preparingPdf : copy.exportPdf}
        </button>
      </div>

      <div ref={cvRef} className={`cv-document ${isExporting ? "cv-exporting" : ""}`.trim()} style={themeVars}>
        <article className="cv-page cv-motion-rise">
          <header className="cv-hero no-break-after">
            <div className="cv-hero-grid">
              <div>
                <h1 className="cv-name">{localizedCVData.name}</h1>
                <p className="cv-title">{localizedCVData.title}</p>
                <div className="cv-hero-meta">
                  <span>{localizedCVData.about}</span>
                  <span>{localizedCVData.status}</span>
                </div>
              </div>
              <div className="cv-stat-grid">
                <div className="cv-stat-card">
                  <div className="cv-stat-value">4.7</div>
                  <div className="cv-stat-label">{copy.yearsExpLabel}</div>
                </div>
                <div className="cv-stat-card">
                  <div className="cv-stat-value">10+</div>
                  <div className="cv-stat-label">{copy.featuresLabel}</div>
                </div>
                <div className="cv-stat-card">
                  <div className="cv-stat-value">100K/s</div>
                  <div className="cv-stat-label">{copy.throughputLabel}</div>
                </div>
              </div>
            </div>
          </header>

          <div className="cv-contact-strip no-break-after">
            <ContactLink
              icon={<Phone className="h-3.5 w-3.5" />}
              href={`tel:${localizedCVData.contact.phone}`}
              text={localizedCVData.contact.phone}
            />
            <ContactLink
              icon={<Mail className="h-3.5 w-3.5" />}
              href={`mailto:${localizedCVData.contact.email}`}
              text={localizedCVData.contact.email}
            />
            <ContactLink
              icon={<Send className="h-3.5 w-3.5" />}
              href={normalizeUrl(localizedCVData.contact.telegram)}
              text={localizedCVData.contact.telegram}
            />
            <ContactLink
              icon={<Github className="h-3.5 w-3.5" />}
              href={localizedCVData.contact.github}
              text={localizedCVData.contact.github}
            />
            <div className="cv-contact-item">
              <MapPin className="h-3.5 w-3.5" />
              <span>{localizedCVData.contact.location}</span>
            </div>
            <div className="cv-contact-item">
              <MapPin className="h-3.5 w-3.5" />
              <span>{copy.citizenshipLabel}: {localizedCVData.contact.citizenship}</span>
            </div>
          </div>

          <main className="cv-page-main">
            <SectionBlock title={copy.summaryTitle} subtitle={copy.summarySubtitle}>
              <p className="cv-summary-copy">{copy.summaryText}</p>
            </SectionBlock>

            <SectionBlock title={copy.keyAchievementsTitle} className="cv-motion-rise cv-motion-delay-1">
              <div className="cv-highlight-grid">
                {keyAchievements.map((achievement, index) => (
                  <div key={index} className="cv-highlight-card avoid-break-inside">
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock
              title={copy.recentExperienceTitle}
              subtitle={copy.recentExperienceSubtitle}
              className="cv-motion-rise cv-motion-delay-2"
            >
              <ExperienceTimeline
                jobs={latestExperience}
                condensed
                labels={{ architecture: copy.architectureLabel, technologies: copy.technologiesLabel }}
              />
            </SectionBlock>
          </main>
        </article>

        <article className="cv-page pdf-page-break">
          <main className="cv-page-main">
            <SectionBlock title={copy.careerTimelineTitle} subtitle={copy.careerTimelineSubtitle}>
              <ExperienceTimeline
                jobs={earlierExperience}
                condensed
                labels={{ architecture: copy.architectureLabel, technologies: copy.technologiesLabel }}
              />
            </SectionBlock>

            <div className="cv-two-col">
              <SectionBlock title={copy.educationTitle}>
                {localizedCVData.education.map((edu, index) => (
                  <div key={index} className="cv-edu-item avoid-break-inside">
                    <div className="cv-edu-year">{edu.year} · {edu.degree}</div>
                    <p className="cv-edu-title">{edu.institution}</p>
                    <p className="cv-edu-program">{edu.program}</p>
                  </div>
                ))}
              </SectionBlock>

              <SectionBlock title={copy.skillsTitle}>
                <div className="cv-language-list">
                  {localizedCVData.skills.languages.map((lang, index) => (
                    <div key={index} className="cv-language-item">
                      {lang.name} · {lang.level}
                    </div>
                  ))}
                </div>
                <div className="cv-skill-cloud" style={{ marginTop: "0.55rem" }}>
                  {localizedCVData.skills.technical.map((skill, index) => (
                    <span key={`${skill}-${index}`} className="cv-chip">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="cv-driving">{copy.drivingLabel}: {localizedCVData.driving}</p>
              </SectionBlock>
            </div>

            <SectionBlock title={copy.additionalTitle}>
              <p className="cv-additional-copy">{localizedCVData.additional.about}</p>
              <p className="cv-additional-copy">{localizedCVData.additional.philosophy}</p>

              <div className="cv-links">
                {localizedCVData.additional.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cv-inline-link"
                  >
                    {link.type}: {link.url}
                  </a>
                ))}
              </div>

              <div className="cv-opensource" style={{ marginTop: "0.55rem" }}>
                {localizedCVData.additional.opensource.map((project, index) => (
                  <div key={index} className="cv-opensource-item avoid-break-inside">
                    <p className="cv-opensource-title">{project.project}</p>
                    <p className="cv-opensource-note">{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-inline-link"
                    >
                      {project.url}
                    </a>
                  </div>
                ))}
              </div>
            </SectionBlock>
          </main>
        </article>
      </div>
    </div>
  );
}

type SectionProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

function SectionBlock({ title, subtitle, className, children }: SectionProps) {
  return (
    <section className={`cv-section ${className ?? ""}`.trim()}>
      <h2 className="cv-section-title no-break-after">{title}</h2>
      {subtitle ? <p className="cv-section-subtitle">{subtitle}</p> : null}
      <div>{children}</div>
    </section>
  );
}

type ExperienceTimelineProps = {
  jobs: typeof cvData.experience;
  condensed?: boolean;
  labels: {
    architecture: string;
    technologies: string;
  };
};

function ExperienceTimeline({ jobs, condensed = false, labels }: ExperienceTimelineProps) {
  return (
    <div className="cv-timeline">
      {jobs.map((job, index) => {
        const achievementLimit = condensed ? 3 : job.achievements.length;
        const roleDescription = condensed ? truncateText(job.description, 360) : job.description;
        const roleArchitecture =
          condensed && job.architecture ? truncateText(job.architecture, 240) : job.architecture;
        return (
          <article key={`${job.company}-${index}`} className="cv-timeline-item avoid-break-inside">
            <div className="cv-role-card">
              <div className="cv-role-head">
                <div>
                  <p className="cv-role-company">{job.company}</p>
                  <p className="cv-role-position">{job.position}</p>
                  {job.website ? (
                    <a
                      href={normalizeUrl(job.website)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cv-role-link"
                    >
                      {job.website}
                    </a>
                  ) : null}
                </div>
                <div className="cv-role-meta">
                  <div>{job.period}</div>
                  <div>{job.duration}</div>
                  {job.location ? <div>{job.location}</div> : null}
                </div>
              </div>

              <p className="cv-role-copy">{roleDescription}</p>

              {roleArchitecture ? (
                <p className="cv-role-copy">
                  <strong>{labels.architecture}:</strong> {roleArchitecture}
                </p>
              ) : null}

              <ul className="cv-bullet-list">
                {job.achievements.slice(0, achievementLimit).map((achievement, itemIndex) => (
                  <li key={itemIndex}>{achievement}</li>
                ))}
              </ul>

              <div className="cv-tech-strip">
                <strong>{labels.technologies}:</strong> {job.technologies}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

type ContactLinkProps = {
  icon: ReactNode;
  href: string;
  text: string;
};

function ContactLink({ icon, href, text }: ContactLinkProps) {
  return (
    <div className="cv-contact-item">
      {icon}
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {text}
      </a>
    </div>
  );
}

function normalizeUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://") ? value : `https://${value}`;
}

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}...`;
}
