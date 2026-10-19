export const portfolioData = {
  personal: {
    name: "Devansh Gupta",
    role: "Salesforce Developer & Enterprise Systems Engineer",
    company: "Plus91Labs",
    tagline: "Engineering Robust Salesforce Cloud Solutions, Enterprise Apex Architecture, Reactive LWC & AI-Powered Integrations",
    location: "Jhansi, Uttar Pradesh, India",
    educationCurrent: "Master of Computer Applications (MCA) • ITM University Gwalior (2025 - 2027)",
    educationPast: "Bachelor of Computer Applications (BCA) • (2020 - 2024)",
    linkedin: "https://www.linkedin.com/in/devansh-gupta-423976226",
    github: "https://github.com/devanshg94500",
    avatar: "/avatar.jpg",
    avatarFallback: "https://media.licdn.com/dms/image/v2/D4D03AQGC--4OpVPeqg/profile-displayphoto-scale_200_200/B4DaFS_lGEJ8Ag-/0/1792393765218?e=2147483647&v=beta&t=pxx5ccInGmZeoPswx1WXMhOkyxjd5fsUBPBTHvqHR00",
    credlyBadge: "https://www.credly.com/badges/5b5a5a9a-3b32-4de4-af64-9d5bb15861f6/linked_in_profile",
    credlyBadgeImage: "https://images.credly.com/images/252ed95c-8043-44f5-ae1f-6f5a6cf313c4/linkedin_thumb_blob",
    experienceSummary: "Salesforce Developer at Plus91Labs with a proven professional background at Amazon (Resolution Specialist) and Spectraforce, complemented by industrial immersion at MongoDB HQ Gurugram and deep Java enterprise engineering foundations with Salesforce Apex, Lightning Web Components (LWC), and modern AI Agent architectures.",
    status: "Salesforce Developer @ Plus91Labs • Building Enterprise Cloud Architecture",
    languages: [
      { name: "English", level: "Full Professional Proficiency" },
      { name: "Hindi", level: "Native / Bilingual Proficiency" }
    ],
    stats: [
      { label: "Current Role", value: "Salesforce Dev", subtext: "Plus91Labs" },
      { label: "GitHub Projects", value: "2+ Repos", subtext: "GymFit • Servlets" },
      { label: "Industry Experience", value: "3+ Years", subtext: "Plus91Labs • Amazon" },
      { label: "LinkedIn Network", value: "590+", subtext: "Followers & Connections" }
    ]
  },

  skills: {
    categories: [
      {
        id: "salesforce",
        name: "Salesforce & Cloud Architecture",
        skills: [
          { name: "Apex Programming", level: 95, tags: ["Apex Triggers", "Batch Apex", "Asynchronous Apex", "Governor Limits", "Trigger Handlers"] },
          { name: "Lightning Web Components (LWC)", level: 92, tags: ["Modern Reactive UI", "Custom Events", "Wire Service", "LMS", "Aura Migration"] },
          { name: "SOQL & SOSL Querying", level: 94, tags: ["Database Queries", "Bulkification", "Custom Fields", "Index Optimization"] },
          { name: "Salesforce Automation", level: 90, tags: ["Record-Triggered Flows", "Screen Flows", "Process Automation", "Approval Processes"] },
          { name: "Data Sharing & Security", level: 92, tags: ["OWD", "Sharing Rules", "Permission Sets", "Profiles", "Role Hierarchy", "Agentforce"] },
          { name: "API & System Integration", level: 88, tags: ["REST/SOAP Callouts", "Connected Apps", "Named Credentials", "JSON Payloads"] }
        ]
      },
      {
        id: "backend",
        name: "Enterprise Java & Backend",
        skills: [
          { name: "Core Java Engineering", level: 95, tags: ["OOP", "Exception Handling", "Multithreading", "Collections Framework", "Design Patterns"] },
          { name: "Spring Framework / Core", level: 90, tags: ["IoC Container", "Dependency Injection", "Autowiring", "Bean Lifecycles"] },
          { name: "RESTful Web Services", level: 92, tags: ["Jersey (JAX-RS)", "HTTP Status Codes", "Apache Tomcat", "Postman Testing"] },
          { name: "JDBC & DAO Architecture", level: 92, tags: ["PreparedStatements", "Connection Pooling", "Zero SQL Injection", "MySQL"] }
        ]
      },
      {
        id: "ai-tools",
        name: "AI Agents & Modern DevOps",
        skills: [
          { name: "Building AI Agents", level: 90, tags: ["Multi-tool Agents", "Decision-Making", "Short & Long-term Memory", "Credly Verified"] },
          { name: "MongoDB & Vector Search", level: 88, tags: ["Document DB", "Vector Embeddings", "RAG Pipeline", "Atlas Search"] },
          { name: "Developer Tooling", level: 92, tags: ["Salesforce CLI (SFDX)", "VS Code", "Maven", "Postman", "Git & GitHub"] }
        ]
      }
    ]
  },

  projects: [
    {
      id: "gymfit-salesforce",
      title: "GymFit — Salesforce Gym Management App",
      subtitle: "Salesforce DX, Custom SObjects, Apex Triggers, Flows & Automated PDF Invoicing",
      description: "Full-scale Salesforce DX application built to manage gym operations: member registration, dynamic membership plans, attendance check-in/out, trainer scheduling, class session bookings, equipment maintenance, and payment tracking with automated PDF receipts.",
      details: [
        "Designed comprehensive data model across 12+ Custom SObjects (Member__c, Membership__c, Payment__c, Attendance__c, Class_Session__c, Trainer__c, Equipment__c)",
        "Architected configurable Apex Trigger Handler framework governed by Trigger_Settings__c and Trigger_Custom__c custom settings",
        "Configured automated PDF invoice generation web link on Payment__c object for instantaneous member receipts",
        "Engineered real-time attendance check-in/out tracking and class session booking capacity validation engine",
        "Automated background operations using Salesforce Flows, scheduled jobs, and Apex batch classes"
      ],
      tech: ["Salesforce DX", "Apex", "Salesforce Flows", "Custom SObjects", "Lightning App", "PDF Invoicing", "VS Code"],
      github: "https://github.com/devanshg94500/GymFit-Salesforce",
      interactiveType: "gymfit-demo",
      interactiveData: {
        crmEvents: [
          {
            type: "Member Attendance Check-In",
            sobject: "Attendance__c (South Branch)",
            action: "Log member check-in & validate active membership status",
            governorUsage: "SOQL Queries: 1/100 | DML Statements: 1/150 | CPU Time: 18ms",
            status: "CHECKED_IN",
            log: "[APEX_TRIGGER] AttendanceTriggerHandler.afterInsert() executed.\n[VALIDATION] Membership #MB-1049 verified ACTIVE.\n[STATUS] Checked-in successfully at Downtown Branch. Attendance #ATT-4902 committed."
          },
          {
            type: "Payment & Automated PDF Invoicing",
            sobject: "Payment__c (Annual Gold Plan)",
            action: "Process renewal payment & trigger Generate PDF WebLink",
            governorUsage: "SOQL Queries: 2/100 | DML Statements: 1/150 | CPU Time: 31ms",
            status: "COMMITTED",
            log: "[FLOW_EVENT] PaymentAutomationFlow invoked.\n[RECORD] Payment__c #PAY-9912 created with Method: Credit_Card.\n[INVOICE] GeneratePDF WebLink dispatched. Receipt PDF #INV-2026 generated."
          },
          {
            type: "Class Booking & Seat Capacity Decrement",
            sobject: "Session_Booking__c (HIIT Fitness)",
            action: "Validate seat availability, decrement remaining capacity on Class_Session__c",
            governorUsage: "SOQL Queries: 2/100 | DML Statements: 2/150 | CPU Time: 26ms",
            status: "BOOKED",
            log: "[APEX] SessionBookingHandler.beforeInsert() executed.\n[CAPACITY] Available seats updated from 15 -> 14.\n[STATUS] Booking confirmed for Devansh Gupta. Trainer assigned."
          }
        ]
      },
      statusBadge: "GitHub Open Source"
    },
    {
      id: "java-servlets-core",
      title: "Java Servlets — Core Web Concepts",
      subtitle: "Java, JSP, Apache Tomcat 9, Maven, HttpSession & Cookie Architecture",
      description: "A foundational Java web application exploring the core mechanics of the HTTP Request-Response lifecycle, client-side Cookies, server-side HttpSession tracking, ServletConfig vs ServletContext hierarchies, and declarative web.xml deployment on Apache Tomcat.",
      details: [
        "Implemented HTTP Request-Response dispatching with doGet() and doPost() handlers in custom servlets",
        "Engineered robust state management using client-side Cookies (Max-Age, HttpOnly) and server-side HttpSession tracking",
        "Configured servlet-level parameters via ServletConfig and application-wide shared attributes via ServletContext",
        "Structured Maven build lifecycle with automated packaging for Apache Tomcat 9 deployment",
        "Created interactive /feedback_app processing user submissions and stateful session inspection"
      ],
      tech: ["Java", "Java Servlets", "JSP", "Apache Tomcat", "Maven", "HttpSession", "Cookies", "web.xml"],
      github: "https://github.com/devanshg94500/java-servlets-core-concepts",
      interactiveType: "servlets-demo",
      interactiveData: {
        servletEvents: [
          {
            name: "POST /feedback_app",
            action: "Process user feedback form via HttpServletRequest & initialize session",
            status: "200 OK",
            log: "[SERVLET] FeedbackServlet.doPost() invoked.\n[SESSION] New HttpSession created. JSESSIONID=7F92DA4B10283C.\n[COOKIE] Set-Cookie: user_submitted=true; Max-Age=3600; Path=/; HttpOnly.\n[RESPONSE] HTTP 200 OK. Feedback recorded successfully in request scope."
          },
          {
            name: "GET /session/inspect",
            action: "Inspect active session attributes, creation time & cookie headers",
            status: "200 OK",
            log: "[SESSION] Session ID: 7F92DA4B10283C\n[ATTRIBUTES] user='devansh', role='developer', lastAccess=2026-10-19\n[STATUS] Session state active. Timeout set to 30 minutes in web.xml."
          },
          {
            name: "GET /context/config",
            action: "Query ServletConfig parameters and ServletContext application-wide scope",
            status: "200 OK",
            log: "[SERVLET_CONFIG] servlet-name: FeedbackServlet | env: production\n[SERVLET_CONTEXT] appName: CoreJavaWeb | tomcatVersion: 9.0.x\n[MAPPING] Url-Pattern: /feedback_app -> FeedbackServlet mapped in web.xml."
          }
        ]
      },
      statusBadge: "GitHub Open Source"
    },
    {
      id: "rest-api",
      title: "Full-Stack Backend REST API Engine",
      subtitle: "Java, Jersey (JAX-RS), Apache Tomcat, MySQL & Maven",
      description: "Architected and built a high-performance RESTful API from scratch. Implemented complete CRUD endpoints, structured HTTP response codes, resilient database handling, and SQL injection prevention.",
      details: [
        "Constructed clean endpoints handling GET, POST, PUT, DELETE with strict status code adherence",
        "Integrated MySQL database utilizing secure PreparedStatements and custom database connection pools",
        "Overcame real-world deployment challenges: resolved 'No suitable driver found' JDBC driver loading, Tomcat context classpathing, and HTTP 500 internal server exceptions",
        "Extensively benchmarked and verified with Postman collection testing"
      ],
      tech: ["Java", "Jersey (JAX-RS)", "Apache Tomcat", "Maven", "MySQL", "JDBC", "Postman"],
      interactiveType: "api-tester",
      interactiveData: {
        endpoints: [
          { method: "GET", path: "/api/v1/salesforce/leads", status: 200, res: [{ id: 101, name: "Devansh Gupta", company: "Plus91Labs", role: "Salesforce Developer", status: "Active" }, { id: 102, name: "Enterprise Client", role: "Cloud CRM", status: "Synced" }] },
          { method: "POST", path: "/api/v1/auth/salesforce-oauth", status: 200, res: { token: "sf_oauth_eyJhbGciOiJIUzI1Ni...", instanceUrl: "https://plus91labs.my.salesforce.com", expiresIn: 7200 } },
          { method: "PUT", path: "/api/v1/crm/integration/sync", status: 200, res: { status: "SYNC_SUCCESS", recordsProcessed: 450, failures: 0, executionTimeMs: 82 } },
          { method: "DELETE", path: "/api/v1/cache/flush", status: 204, res: { status: "Cache cleared successfully. PreparedStatement cache preserved." } }
        ]
      },
      github: "https://github.com",
      statusBadge: "Production Ready"
    },
    {
      id: "jdbc-dao",
      title: "Enterprise JDBC & DAO Pattern Framework",
      subtitle: "Clean Database Architecture, Connection Management & SQL Security",
      description: "Designed a production-grade Data Access Object (DAO) layer decoupling core business logic from database operations, safeguarding applications against SQL Injection vulnerabilities.",
      details: [
        "Implemented comprehensive CRUD operations with com.mysql.cj.jdbc.Driver configuration",
        "Applied DAO pattern isolating entity models, interface contracts, and implementation classes",
        "Enforced strict parameterized queries via PreparedStatement preventing SQL injection threats",
        "Streamlined resource management using try-with-resources and defensive connection closure"
      ],
      tech: ["Java", "MySQL", "JDBC", "DAO Pattern", "PreparedStatements", "Connection Pooling"],
      interactiveType: "security-demo",
      interactiveData: {
        unsafeSql: "SELECT * FROM users WHERE email = 'devansh@test.com' OR '1'='1' -- VULNERABLE",
        safeSql: "SELECT * FROM users WHERE email = ? -- SECURE (PreparedStatement binds parameterized literal)"
      },
      statusBadge: "Security Validated"
    },
    {
      id: "bank-oop",
      title: "Resilient Bank Account OOP System",
      subtitle: "Polymorphism, Abstraction & Custom Exception Handling",
      description: "Engineered an object-oriented financial transaction system implementing robust domain modeling and custom exception architectures.",
      details: [
        "Designed clean interfaces and abstract classes separating checking, savings, and investment behaviors",
        "Created custom checked exceptions (InsufficientBalanceException, InvalidAccountState) with structured error reporting",
        "Demonstrated runtime polymorphism and defensive business logic encapsulation",
        "Comprehensive unit test coverage verifying atomic account balance state changes"
      ],
      tech: ["Core Java", "OOP Principles", "Custom Exceptions", "Runtime Polymorphism", "Unit Testing"],
      interactiveType: "bank-demo",
      statusBadge: "OOP Pattern"
    }
  ],

  certifications: [
    {
      title: "Building AI Agents with MongoDB",
      issuer: "MongoDB",
      issuedDate: "Jul 2026",
      credlyId: "5b5a5a9a-3b32-4de4-af64-9d5bb15861f6",
      credlyUrl: "https://www.credly.com/badges/5b5a5a9a-3b32-4de4-af64-9d5bb15861f6/linked_in_profile",
      badgeImage: "https://images.credly.com/images/252ed95c-8043-44f5-ae1f-6f5a6cf313c4/linkedin_thumb_blob",
      description: "Validates knowledge in building and deploying multi-tool AI agents using MongoDB, decision-making capabilities, tool utilization, and implementing both long-term and short-term memory.",
      skills: ["AI Agents", "MongoDB Atlas", "Vector Search", "Decision Reasoning", "Memory Architecture"],
      highlight: true
    },
    {
      title: "MongoDB Industry Immersion Program",
      issuer: "MongoDB HQ & ICT Academy",
      issuedDate: "2026",
      credlyUrl: "https://www.linkedin.com/posts/devansh-gupta-423976226_mongodb-industryimmersion-ictacademy-activity-7483121579116216320-xmqD",
      description: "Practical immersion at the MongoDB Gurugram Office covering cloud-native application development, vector search, Retrieval-Augmented Generation (RAG), and production debugging.",
      skills: ["Cloud-Native Architecture", "Vector Search", "RAG", "Software Engineering Life Cycle"],
      highlight: true
    },
    {
      title: "Java Servlets – Core Web Concepts",
      issuer: "LinkedIn Learning / Industry Credential",
      issuedDate: "2026",
      credlyUrl: "https://www.linkedin.com/in/devansh-gupta-423976226",
      description: "Demonstrated implementation of cookies, sessions, servlet configuration, context parameters, HTTP request-response handling, and Apache Tomcat deployment.",
      skills: ["Java Servlets", "HttpSession", "Cookies", "Apache Tomcat", "Web Architecture"],
      highlight: false
    },
    {
      title: "Data Structures & Algorithms Program",
      issuer: "CodingGurukul",
      issuedDate: "2024",
      credlyUrl: "https://www.linkedin.com/in/devansh-gupta-423976226",
      description: "Intensive program focusing on algorithmic problem solving, time and space complexity optimization, and Java software development fundamentals.",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Java", "Logical Architecture"],
      highlight: false
    }
  ],

  timeline: [
    {
      year: "2026 – Present",
      title: "Salesforce Developer",
      institution: "Plus91Labs",
      type: "experience",
      badge: "Current Role",
      description: "Developing robust cloud CRM applications, custom Apex business logic, high-performance Lightning Web Components (LWC), Flow automations, and enterprise integrations.",
      bullets: [
        "Architecting scalable enterprise Salesforce Cloud solutions, Apex Triggers, and Lightning Web Components (LWC)",
        "Designing automated business workflows with Flow Builder and ensuring strict governor limit compliance",
        "Integrating external RESTful APIs, OAuth connected apps, and exploring AI Agent architectures"
      ],
      accent: "cyan"
    },
    {
      year: "2025 – 2027",
      title: "Master of Computer Applications (MCA)",
      institution: "ITM University Gwalior",
      type: "education",
      badge: "Postgraduate Degree",
      description: "Advanced postgraduate specialization focusing on distributed enterprise architectures, cloud database systems, and modern software engineering.",
      bullets: [
        "Advanced specialization in Enterprise Distributed Systems & Cloud Architectures",
        "Mastering Relational & NoSQL Database Optimization (MySQL, MongoDB)"
      ],
      accent: "purple"
    },
    {
      year: "Sep 2022 – Aug 2024",
      title: "Resolution Specialist",
      institution: "Amazon",
      type: "experience",
      badge: "Enterprise Industry",
      description: "Resolved critical customer and operational issues through omnichannel communications, collaborating with cross-functional teams to diagnose and resolve complex systemic challenges.",
      bullets: [
        "Resolved customer issues through phone, chat, and email channels.",
        "Collaborated with cross-functional teams to analyze and solve complex issues.",
        "Developed strong analytical, communication, and problem-solving skills."
      ],
      accent: "amber"
    },
    {
      year: "Nov 2021 – Sep 2022",
      title: "Recruiter",
      institution: "Spectraforce",
      type: "experience",
      badge: "Talent Acquisition",
      description: "Managed candidate sourcing and screening processes using enterprise ATS platforms and recruitment workflows.",
      bullets: [
        "Managed candidate sourcing and screening processes using ATS platforms.",
        "Worked with structured data and recruitment workflows.",
        "Enhanced stakeholder management and communication skills."
      ],
      accent: "emerald"
    },
    {
      year: "2026",
      title: "MongoDB Industry Immersion (Gurugram HQ)",
      institution: "MongoDB & ICT Academy",
      type: "milestone",
      badge: "Industrial Immersion",
      description: "Selected to participate in the exclusive on-site MongoDB immersion at Gurugram Office. Mastered Vector Search, RAG application development, and collaborated with senior software architects.",
      accent: "emerald"
    },
    {
      year: "2024",
      title: "Data Structures & Algorithms (DSA) Training",
      institution: "CodingGurukul",
      type: "milestone",
      badge: "Technical Training",
      description: "Focused on algorithmic problem-solving logic, Java data structures, time and space complexity, and algorithm optimization.",
      accent: "blue"
    },
    {
      year: "2020 – 2024",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Bundelkhand University / Jhansi",
      type: "education",
      badge: "Undergraduate Degree",
      description: "Graduated with strong foundations in computer science, Object-Oriented Programming, relational databases (SQL), and web engineering.",
      accent: "blue"
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  • role       - View current role at Plus91Labs\n  • about      - View Devansh's profile & background\n  • github     - View Devansh's GitHub profile & open-source repos\n  • experience - View complete professional track (Plus91Labs, Amazon, Spectraforce)\n  • skills     - List Salesforce & Backend tech stack\n  • projects   - Showcase GymFit (Salesforce) & Java Servlets\n  • certs      - View verified credentials (Credly)\n  • contact    - Contact & LinkedIn connection details\n  • status     - Current role & professional status\n  • clear      - Clear terminal window",
    role: "CURRENT ROLE:\nDevansh Gupta\nPosition: Salesforce Developer\nCompany: Plus91Labs\nFocus: Apex, Lightning Web Components (LWC), SOQL, Flows, Data Security & Enterprise CRM Integrations.",
    about: "Devansh Gupta\nRole: Salesforce Developer @ Plus91Labs\nLocation: Jhansi, Uttar Pradesh, India\nEducation: MCA @ ITM University Gwalior (2025-2027) | BCA (2020-2024)\nExperience: Plus91Labs (Salesforce Dev), Amazon (Resolution Specialist), Spectraforce (Recruiter), MongoDB Immersion, CodingGurukul (DSA Training)\nGitHub: https://github.com/devanshg94500",
    github: "GITHUB PROFILE:\n• Handle: devanshg94500\n• URL: https://github.com/devanshg94500\n• Featured Repositories:\n  1. GymFit-Salesforce (Salesforce DX, Custom SObjects, Apex Triggers, Flows, PDF Generation)\n     Link: https://github.com/devanshg94500/GymFit-Salesforce\n  2. java-servlets-core-concepts (Java, Servlets, Tomcat 9, JSP, HttpSession, Cookies)\n     Link: https://github.com/devanshg94500/java-servlets-core-concepts",
    experience: "PROFESSIONAL EXPERIENCE:\n1. Plus91Labs (2026 – Present) • Salesforce Developer\n   - Apex Triggers, LWC, Flows, Governor Limit Defense, REST API Integrations\n2. Amazon (Sep 2022 – Aug 2024) • Resolution Specialist\n   - Resolved critical customer & operational issues across phone, chat, and email\n   - Cross-functional team collaboration, root cause analysis, and analytical problem-solving\n3. Spectraforce (Nov 2021 – Sep 2022) • Recruiter\n   - Sourcing & screening with enterprise ATS platforms, recruitment data workflows\n4. CodingGurukul (2024) • Data Structures & Algorithms Training\n5. MongoDB Gurugram HQ (2026) • Industry Immersion Scholar",
    skills: "TECHNICAL ARSENAL:\n[Salesforce] Apex (Triggers, Batch, Async), LWC, SOQL/SOSL, Flows, OWD & Sharing Rules, Integrations\n[Backend]    Java (17/21), Spring Framework, Spring Core, Jersey JAX-RS, Servlets, JDBC, DAO Pattern\n[Databases]  MongoDB (Atlas & Vector Search), MySQL, SQL, Connection Pooling\n[AI/RAG]     AI Multi-tool Agents, Vector Embeddings, RAG, Agentforce / Claude AI Foundations\n[Tools]      Salesforce CLI (SFDX), VS Code, Apache Tomcat, Maven, Postman, Git & GitHub",
    projects: "TOP HIGHLIGHTS:\n1. GymFit — Salesforce Gym Management App (GitHub: devanshg94500/GymFit-Salesforce)\n2. Java Servlets — Core Web Concepts (GitHub: devanshg94500/java-servlets-core-concepts)\n3. Full-Stack Backend REST API (Java + Jersey + MySQL + Tomcat)\n4. Enterprise JDBC & DAO Architecture (Zero SQLi)\n5. Resilient Banking OOP System with Custom Exceptions",
    certs: "VERIFIED CREDENTIALS:\n• Building AI Agents with MongoDB (Credly ID: 5b5a5a9a-3b32-4de4-af64-9d5bb15861f6)\n• MongoDB Industry Immersion (Gurugram Office)\n• Java Servlets – Core Web Concepts\n• DSA & Java Training (CodingGurukul)",
    contact: "CONNECT WITH DEVANSH:\n• GitHub: https://github.com/devanshg94500\n• LinkedIn: https://www.linkedin.com/in/devansh-gupta-423976226\n• Location: Jhansi, Uttar Pradesh, India\n• Company: Plus91Labs",
    status: "STATUS: ACTIVE SALESFORCE DEVELOPER @ PLUS91LABS\n• Crafting high-performance Apex, LWC, and Cloud Architectures\n• Open to technical collaborations & networking"
  }
};
