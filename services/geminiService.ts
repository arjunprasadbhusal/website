import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from "../constants";

// Comprehensive Knowledge Base - API-like responses
const KNOWLEDGE_BASE = {
  react: {
    overview: "React is a JavaScript library for building user interfaces, created by Facebook. Version 18+ supports concurrent features and automatic batching.",
    keyFeatures: [
      "Component-Based Architecture - Build encapsulated components that manage their own state",
      "Virtual DOM - Efficient updates by comparing virtual and real DOM",
      "JSX Syntax - Write HTML-like code in JavaScript",
      "Unidirectional Data Flow - Data flows from parent to child components",
      "Hooks - useState, useEffect, useContext, useReducer, useMemo, useCallback",
      "React Router - Client-side routing for SPAs",
      "React DevTools - Browser extension for debugging"
    ],
    useCases: ["Single Page Applications", "Progressive Web Apps", "Mobile Apps (React Native)", "Dynamic Dashboards", "Social Media Platforms"],
    codeExample: "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}",
    bestPractices: ["Use functional components with hooks", "Keep components small and focused", "Avoid prop drilling - use Context API", "Memoize expensive calculations with useMemo", "Use keys in lists for efficient re-rendering"],
    learningPath: "1. JSX & Components → 2. Props & State → 3. Hooks → 4. Context API → 5. React Router → 6. State Management (Redux/Zustand)"
  },
  typescript: {
    overview: "TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. Developed by Microsoft.",
    keyFeatures: [
      "Static Type Checking - Catch errors at compile time",
      "Interfaces & Types - Define object shapes and contracts",
      "Enums - Define named constants",
      "Generics - Write reusable, type-safe code",
      "Union & Intersection Types - Combine types flexibly",
      "Type Inference - Automatically infer types",
      "TSC Compiler - Transpile TS to JS"
    ],
    benefits: ["Better IDE autocomplete", "Fewer runtime errors", "Improved code documentation", "Easier refactoring", "Better team collaboration"],
    codeExample: "interface Product {\n  id: number;\n  name: string;\n  price: number;\n}\n\nfunction calculateTotal(products: Product[]): number {\n  return products.reduce((sum, p) => sum + p.price, 0);\n}",
    whenToUse: "Large codebases, team projects, enterprise applications, libraries/packages"
  },
  vite: {
    overview: "Vite is a next-generation frontend build tool by Evan You (Vue.js creator). It's 10-100x faster than Webpack.",
    keyFeatures: [
      "Lightning Fast HMR - Instant hot module replacement",
      "Native ES Modules - No bundling during development",
      "Optimized Builds - Uses Rollup for production",
      "Framework Agnostic - Works with React, Vue, Svelte",
      "Plugin Ecosystem - Extensive plugin support",
      "TypeScript Support - Built-in TS support"
    ],
    advantages: ["Instant server start", "Fast updates", "Smaller bundle sizes", "Better developer experience"],
    setup: "npm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install\nnpm run dev",
    vsWebpack: "Vite: Dev server starts instantly, HMR in <100ms. Webpack: Slower cold start, slower HMR."
  },
  nodejs: {
    overview: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It enables server-side JavaScript execution.",
    keyFeatures: [
      "Non-blocking I/O - Asynchronous operations",
      "Event-Driven Architecture - Efficient handling of concurrent requests",
      "NPM Ecosystem - 2M+ packages available",
      "Express.js Framework - Minimalist web framework",
      "Built-in Modules - fs, http, path, crypto, etc.",
      "Cluster Mode - Utilize multiple CPU cores"
    ],
    useCases: ["REST APIs", "Real-time applications (Socket.io)", "Microservices", "Streaming services", "CLI tools"],
    codeExample: "const express = require('express');\nconst app = express();\n\napp.get('/api/users', async (req, res) => {\n  const users = await User.findAll();\n  res.json(users);\n});\n\napp.listen(3000);",
    bestPractices: ["Use async/await", "Implement error handling middleware", "Use environment variables", "Validate inputs", "Implement rate limiting"]
  },
  laravel: {
    overview: "Laravel is a PHP web framework with expressive, elegant syntax. It's the most popular PHP framework with 75K+ GitHub stars.",
    keyFeatures: [
      "Eloquent ORM - Beautiful database abstraction",
      "Blade Templates - Powerful templating engine",
      "Artisan CLI - Command-line tool for tasks",
      "Migrations - Version control for databases",
      "Authentication - Built-in auth scaffolding",
      "Queue System - Background job processing",
      "Laravel Mix - Asset compilation"
    ],
    architecture: "MVC Pattern - Model (database), View (blade templates), Controller (logic)",
    codeExample: "Route::get('/users', [UserController::class, 'index']);\n\nclass UserController {\n  public function index() {\n    return User::all();\n  }\n}",
    whyUse: "Rapid development, clean code, huge ecosystem, excellent documentation, active community",
    arjunExpertise: "Arjun has 90% proficiency in Laravel/PHP with 2+ years of experience building e-commerce, CMS, and web applications."
  },
  tailwind: {
    overview: "Tailwind CSS is a utility-first CSS framework. Instead of predefined components, it provides low-level utility classes.",
    keyFeatures: [
      "Utility Classes - bg-blue-500, text-lg, flex, grid",
      "Responsive Design - sm:, md:, lg:, xl: prefixes",
      "Customization - Configure colors, spacing, fonts",
      "Dark Mode - Built-in dark mode support",
      "JIT Compiler - Just-in-time compilation",
      "Purge CSS - Remove unused styles in production"
    ],
    advantages: ["Faster development", "No naming conventions needed", "Smaller CSS files", "Consistent design system"],
    codeExample: "<div class=\"flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600\">\n  <h1 class=\"text-4xl font-bold text-white\">Hello Tailwind</h1>\n</div>",
    commonPatterns: "Centering: 'flex items-center justify-center' or 'grid place-items-center'"
  },
  sql: {
    overview: "SQL (Structured Query Language) is used for managing relational databases. MySQL is the most popular open-source RDBMS.",
    keyFeatures: [
      "CRUD Operations - SELECT, INSERT, UPDATE, DELETE",
      "Joins - INNER, LEFT, RIGHT, FULL OUTER",
      "Indexes - Speed up query performance",
      "Transactions - ACID properties (Atomicity, Consistency, Isolation, Durability)",
      "Stored Procedures - Reusable SQL code",
      "Views - Virtual tables",
      "Foreign Keys - Maintain referential integrity"
    ],
    codeExample: "SELECT u.name, o.total FROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.total > 100\nORDER BY o.total DESC\nLIMIT 10;",
    optimization: ["Add indexes on frequently queried columns", "Use EXPLAIN to analyze queries", "Avoid SELECT *", "Use prepared statements", "Normalize database schema"],
    arjunSkills: "Arjun has 80% proficiency in MySQL, experienced in database design, optimization, and complex queries."
  },
  git: {
    overview: "Git is a distributed version control system. GitHub is a platform for hosting Git repositories with collaboration features.",
    keyFeatures: [
      "Branching - Create isolated development environments",
      "Commits - Save snapshots of your code",
      "Merging - Combine changes from different branches",
      "Pull Requests - Code review workflow",
      "GitHub Actions - CI/CD automation",
      "Issues & Projects - Track bugs and features"
    ],
    commonCommands: "git init, git clone, git add, git commit, git push, git pull, git branch, git merge, git checkout",
    workflow: "1. Clone repo → 2. Create branch → 3. Make changes → 4. Commit → 5. Push → 6. Create PR → 7. Review → 8. Merge",
    bestPractices: ["Write meaningful commit messages", "Commit often", "Use branches for features", "Pull before pushing", "Review code before merging"],
    arjunExpertise: "Arjun has 85% proficiency in Git/GitHub, uses version control for all projects with proper branching strategies."
  },
  python: {
    overview: "Python is a high-level, interpreted programming language known for simplicity and readability. Created by Guido van Rossum.",
    keyFeatures: [
      "Easy Syntax - Readable, beginner-friendly",
      "Dynamic Typing - No need to declare types",
      "Extensive Libraries - NumPy, Pandas, TensorFlow, Django, Flask",
      "Multiple Paradigms - OOP, functional, procedural",
      "Interpreted - No compilation needed",
      "Cross-platform - Works on Windows, Mac, Linux"
    ],
    useCases: ["Web Development (Django/Flask)", "Data Science & Analysis", "Machine Learning & AI", "Automation & Scripting", "Desktop Applications"],
    codeExample: "def fetch_users():\n    users = User.query.all()\n    return [{'id': u.id, 'name': u.name} for u in users]\n\n@app.route('/api/users')\ndef get_users():\n    return jsonify(fetch_users())",
    popularity: "Most popular language for data science, 2nd most popular overall (TIOBE Index)"
  },
  figma: {
    overview: "Figma is a collaborative web-based design tool for UI/UX design. It's the industry standard for modern design teams.",
    keyFeatures: [
      "Real-time Collaboration - Multiple designers work simultaneously",
      "Components - Reusable design elements",
      "Auto Layout - Responsive design within Figma",
      "Prototyping - Create interactive prototypes",
      "Design Systems - Build consistent design libraries",
      "Dev Mode - Inspect designs, export code",
      "Plugins - Extend functionality"
    ],
    workflow: "1. Create frames → 2. Design UI components → 3. Build prototypes → 4. Share with developers → 5. Export assets",
    advantages: ["Browser-based (no installation)", "Version history", "Design tokens", "Handoff to developers", "Free for individuals"],
    designPrinciples: "Consistent spacing (8px grid), clear hierarchy, readable typography, accessible colors (WCAG compliance)"
  },
  photoshop: {
    overview: "Adobe Photoshop is the industry-standard software for image editing, photo manipulation, and graphic design.",
    keyFeatures: [
      "Layers - Non-destructive editing",
      "Masking - Hide/reveal parts of images",
      "Filters - Apply effects and adjustments",
      "Selection Tools - Precise selections",
      "Color Correction - Levels, curves, hue/saturation",
      "Typography - Text editing and effects",
      "Export - Save for web, mobile, print"
    ],
    webDesignUse: ["Create mockups", "Edit photos", "Design banners/graphics", "Slice designs for development", "Optimize images for web"],
    tips: ["Use artboards for multiple sizes", "Export as PNG for transparency", "Optimize JPG quality vs file size", "Use smart objects for scalability"],
    alternatives: "Figma (UI design), Canva (quick graphics), GIMP (free alternative)"
  },
  apis: {
    overview: "APIs (Application Programming Interfaces) allow different software systems to communicate. REST is the most common architectural style.",
    restPrinciples: [
      "Stateless - Each request independent",
      "Resource-Based - URLs represent resources",
      "HTTP Methods - GET, POST, PUT, PATCH, DELETE",
      "Status Codes - 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error",
      "JSON Format - Standard data exchange format"
    ],
    structure: "GET /api/users - List all\nGET /api/users/:id - Get one\nPOST /api/users - Create\nPUT /api/users/:id - Update\nDELETE /api/users/:id - Delete",
    authentication: "JWT (JSON Web Tokens), OAuth 2.0, API Keys",
    bestPractices: ["Version your API (/api/v1)", "Use proper HTTP methods", "Validate inputs", "Rate limiting", "Document with Swagger/Postman", "CORS configuration"],
    graphQLAlternative: "GraphQL allows clients to request exactly the data they need, reducing over-fetching"
  },
  webDevelopment: {
    overview: "Web development encompasses frontend (client-side), backend (server-side), and full-stack development.",
    frontend: {
      technologies: "HTML, CSS, JavaScript, React, Vue, Angular, TailwindCSS",
      responsibilities: "UI design, user interactions, responsive design, performance optimization"
    },
    backend: {
      technologies: "Node.js, Laravel, Django, Ruby on Rails, Spring Boot",
      responsibilities: "Server logic, databases, APIs, authentication, business logic"
    },
    fullStack: "Developers who work on both frontend and backend, like Arjun with React + Laravel stack",
    modernStack: "Frontend: React + TypeScript + Tailwind | Backend: Node.js/Laravel + MySQL | DevOps: Git + Docker + CI/CD",
    arjunStack: "Arjun specializes in full-stack development with Laravel (backend), React (frontend), MySQL (database), and TailwindCSS (styling)"
  }
};

// Local AI responses based on portfolio data
const getLocalResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();

  // Comprehensive React Information
  if (lowerMsg.includes('react')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const react = KNOWLEDGE_BASE.react;
      return `REACT - Complete Information\n\n${react.overview}\n\nKey Features:\n${react.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nUse Cases:\n${react.useCases.join(', ')}\n\nCode Example:\n\`\`\`jsx\n${react.codeExample}\n\`\`\`\n\nBest Practices:\n${react.bestPractices.map(p => `• ${p}`).join('\n')}\n\nLearning Path:\n${react.learningPath}`;
    }
    if (lowerMsg.includes('component') || lowerMsg.includes('jsx')) {
      return `React Components & JSX\n\nConcept: React components are reusable building blocks for UI. JSX is JavaScript XML syntax.\n\nExample:\n\`\`\`jsx\nfunction Button({ text, onClick }) {\n  return <button onClick={onClick}>{text}</button>;\n}\n\`\`\`\n\nBest Practices:\n• Use functional components with hooks\n• Keep components small and focused\n• Pass data via props\n• Use PascalCase for component names`;
    }
    if (lowerMsg.includes('hook')) {
      return `React Hooks\n\n${KNOWLEDGE_BASE.react.keyFeatures.find(f => f.includes('Hooks'))}\n\nExample:\n\`\`\`jsx\nconst [count, setCount] = useState(0);\n\nuseEffect(() => {\n  document.title = \`Count: \${count}\`;\n}, [count]);\n\`\`\`\n\nBest Practice: Always include dependencies in useEffect array`;
    }
    return `${KNOWLEDGE_BASE.react.overview}\n\nKey Features: ${KNOWLEDGE_BASE.react.keyFeatures.slice(0, 4).map(f => f.split(' - ')[0]).join(', ')}\n\nUse Cases: ${KNOWLEDGE_BASE.react.useCases.join(', ')}\n\nAsk 'React all information' for complete details!`;
  }

  // Comprehensive TypeScript Information
  if (lowerMsg.includes('typescript')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const ts = KNOWLEDGE_BASE.typescript;
      return `TYPESCRIPT - Complete Information\n\n${ts.overview}\n\nKey Features:\n${ts.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nBenefits:\n${ts.benefits.map(b => `• ${b}`).join('\n')}\n\nCode Example:\n\`\`\`typescript\n${ts.codeExample}\n\`\`\`\n\nWhen to Use:\n${ts.whenToUse}`;
    }
    return `${KNOWLEDGE_BASE.typescript.overview}\n\nBenefits: ${KNOWLEDGE_BASE.typescript.benefits.slice(0, 3).join(', ')}\n\nWhen to Use: ${KNOWLEDGE_BASE.typescript.whenToUse}\n\nAsk 'TypeScript all information' for complete details!`;
  }

  // Comprehensive Vite Information
  if (lowerMsg.includes('vite')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const vite = KNOWLEDGE_BASE.vite;
      return `VITE - Complete Information\n\n${vite.overview}\n\nKey Features:\n${vite.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nAdvantages:\n${vite.advantages.map(a => `• ${a}`).join('\n')}\n\nSetup:\n\`\`\`bash\n${vite.setup}\n\`\`\`\n\nVite vs Webpack:\n${vite.vsWebpack}`;
    }
    return `${KNOWLEDGE_BASE.vite.overview}\n\nAdvantages: ${KNOWLEDGE_BASE.vite.advantages.join(', ')}\n\nSetup: npm create vite@latest my-app\n\nAsk 'Vite all information' for complete details!`;
  }

  // Comprehensive Node.js Information
  if (lowerMsg.includes('node')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const node = KNOWLEDGE_BASE.nodejs;
      return `NODE.JS - Complete Information\n\n${node.overview}\n\nKey Features:\n${node.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nUse Cases:\n${node.useCases.map(u => `• ${u}`).join('\n')}\n\nCode Example:\n\`\`\`javascript\n${node.codeExample}\n\`\`\`\n\nBest Practices:\n${node.bestPractices.map(p => `• ${p}`).join('\n')}`;
    }
    if (lowerMsg.includes('api') || lowerMsg.includes('express')) {
      return `Building APIs with Node.js\n\n${KNOWLEDGE_BASE.nodejs.keyFeatures.find(f => f.includes('Express'))}\n\nCode Example:\n\`\`\`javascript\n${KNOWLEDGE_BASE.nodejs.codeExample}\n\`\`\`\n\nBest Practices:\n${KNOWLEDGE_BASE.nodejs.bestPractices.map(p => `• ${p}`).join('\n')}`;
    }
    return `${KNOWLEDGE_BASE.nodejs.overview}\n\nUse Cases: ${KNOWLEDGE_BASE.nodejs.useCases.slice(0, 3).join(', ')}\n\nAsk 'Node.js all information' for complete details!`;
  }

  // Comprehensive Laravel Information
  if (lowerMsg.includes('laravel') || (lowerMsg.includes('php') && !lowerMsg.includes('photoshop'))) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const laravel = KNOWLEDGE_BASE.laravel;
      return `LARAVEL - Complete Information\n\n${laravel.overview}\n\nKey Features:\n${laravel.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nArchitecture:\n${laravel.architecture}\n\nCode Example:\n\`\`\`php\n${laravel.codeExample}\n\`\`\`\n\nWhy Use Laravel:\n${laravel.whyUse}\n\nArjun's Expertise:\n${laravel.arjunExpertise}`;
    }
    return `${KNOWLEDGE_BASE.laravel.overview}\n\nKey Features: ${KNOWLEDGE_BASE.laravel.keyFeatures.slice(0, 4).map(f => f.split(' - ')[0]).join(', ')}\n\nWhy Use: ${KNOWLEDGE_BASE.laravel.whyUse}\n\n${KNOWLEDGE_BASE.laravel.arjunExpertise}\n\nAsk 'Laravel all information' for complete details!`;
  }

  // Comprehensive Tailwind Information
  if (lowerMsg.includes('tailwind')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const tailwind = KNOWLEDGE_BASE.tailwind;
      return `TAILWIND CSS - Complete Information\n\n${tailwind.overview}\n\nKey Features:\n${tailwind.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nAdvantages:\n${tailwind.advantages.map(a => `• ${a}`).join('\n')}\n\nCode Example:\n\`\`\`html\n${tailwind.codeExample}\n\`\`\`\n\nCommon Patterns:\n${tailwind.commonPatterns}`;
    }
    if (lowerMsg.includes('center')) {
      return `Centering in Tailwind CSS\n\n${KNOWLEDGE_BASE.tailwind.commonPatterns}\n\nFlexbox:\n<div class="flex items-center justify-center h-screen">\n  <div>Centered</div>\n</div>\n\nGrid:\n<div class="grid place-items-center h-screen">\n  <div>Centered</div>\n</div>`;
    }
    return `${KNOWLEDGE_BASE.tailwind.overview}\n\nAdvantages: ${KNOWLEDGE_BASE.tailwind.advantages.join(', ')}\n\nAsk 'Tailwind all information' for complete details!`;
  }

  // Comprehensive SQL/MySQL Information
  if (lowerMsg.includes('sql') || lowerMsg.includes('mysql') || lowerMsg.includes('database')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const sql = KNOWLEDGE_BASE.sql;
      return `SQL/MySQL - Complete Information\n\n${sql.overview}\n\nKey Features:\n${sql.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nCode Example:\n\`\`\`sql\n${sql.codeExample}\n\`\`\`\n\nOptimization Tips:\n${sql.optimization.map(o => `• ${o}`).join('\n')}\n\nArjun's Skills:\n${sql.arjunSkills}`;
    }
    if (lowerMsg.includes('join')) {
      return `SQL Joins\n\nTypes:\n• INNER JOIN - matching rows only\n• LEFT JOIN - all from left table\n• RIGHT JOIN - all from right table\n\nExample:\n\`\`\`sql\n${KNOWLEDGE_BASE.sql.codeExample}\n\`\`\``;
    }
    if (lowerMsg.includes('optimize')) {
      return `SQL Optimization\n\n${KNOWLEDGE_BASE.sql.optimization.map(o => `• ${o}`).join('\n')}\n\nRemember: Indexes speed up SELECT but slow down INSERT/UPDATE`;
    }
    return `${KNOWLEDGE_BASE.sql.overview}\n\nKey Operations: ${KNOWLEDGE_BASE.sql.keyFeatures.slice(0, 3).map(f => f.split(' - ')[0]).join(', ')}\n\n${KNOWLEDGE_BASE.sql.arjunSkills}\n\nAsk 'SQL all information' for complete details!`;
  }

  // Comprehensive Git/GitHub Information
  if (lowerMsg.includes('git')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const git = KNOWLEDGE_BASE.git;
      return `GIT/GITHUB - Complete Information\n\n${git.overview}\n\nKey Features:\n${git.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nCommon Commands:\n${git.commonCommands}\n\nWorkflow:\n${git.workflow}\n\nBest Practices:\n${git.bestPractices.map(p => `• ${p}`).join('\n')}\n\nArjun's Expertise:\n${git.arjunExpertise}`;
    }
    return `${KNOWLEDGE_BASE.git.overview}\n\nWorkflow: ${KNOWLEDGE_BASE.git.workflow}\n\n${KNOWLEDGE_BASE.git.arjunExpertise}\n\nAsk 'Git all information' for complete details!`;
  }

  // Comprehensive Python Information
  if (lowerMsg.includes('python')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const python = KNOWLEDGE_BASE.python;
      return `PYTHON - Complete Information\n\n${python.overview}\n\nKey Features:\n${python.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nUse Cases:\n${python.useCases.map(u => `• ${u}`).join('\n')}\n\nCode Example:\n\`\`\`python\n${python.codeExample}\n\`\`\`\n\nPopularity:\n${python.popularity}`;
    }
    return `${KNOWLEDGE_BASE.python.overview}\n\nUse Cases: ${KNOWLEDGE_BASE.python.useCases.join(', ')}\n\n${KNOWLEDGE_BASE.python.popularity}\n\nAsk 'Python all information' for complete details!`;
  }

  // Comprehensive Figma Information
  if (lowerMsg.includes('figma')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const figma = KNOWLEDGE_BASE.figma;
      return `FIGMA - Complete Information\n\n${figma.overview}\n\nKey Features:\n${figma.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nWorkflow:\n${figma.workflow}\n\nAdvantages:\n${figma.advantages.map(a => `• ${a}`).join('\n')}\n\nDesign Principles:\n${figma.designPrinciples}`;
    }
    return `${KNOWLEDGE_BASE.figma.overview}\n\nKey Features: ${KNOWLEDGE_BASE.figma.keyFeatures.slice(0, 4).map(f => f.split(' - ')[0]).join(', ')}\n\nWorkflow: ${KNOWLEDGE_BASE.figma.workflow}\n\nAsk 'Figma all information' for complete details!`;
  }

  // Comprehensive Photoshop Information
  if (lowerMsg.includes('photoshop')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const ps = KNOWLEDGE_BASE.photoshop;
      return `PHOTOSHOP - Complete Information\n\n${ps.overview}\n\nKey Features:\n${ps.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nWeb Design Use:\n${ps.webDesignUse.map(u => `• ${u}`).join('\n')}\n\nTips:\n${ps.tips.map(t => `• ${t}`).join('\n')}\n\nAlternatives:\n${ps.alternatives}`;
    }
    return `${KNOWLEDGE_BASE.photoshop.overview}\n\nFor Web: ${KNOWLEDGE_BASE.photoshop.webDesignUse.join(', ')}\n\nAsk 'Photoshop all information' for complete details!`;
  }

  // Comprehensive API Information
  if (lowerMsg.includes('api') && !lowerMsg.includes('laravel') && !lowerMsg.includes('node')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const apis = KNOWLEDGE_BASE.apis;
      return `APIs - Complete Information\n\n${apis.overview}\n\nREST Principles:\n${apis.restPrinciples.map(p => `• ${p}`).join('\n')}\n\nStructure:\n\`\`\`\n${apis.structure}\n\`\`\`\n\nAuthentication:\n${apis.authentication}\n\nBest Practices:\n${apis.bestPractices.map(p => `• ${p}`).join('\n')}\n\nGraphQL Alternative:\n${apis.graphQLAlternative}`;
    }
    if (lowerMsg.includes('rest')) {
      return `REST APIs\n\n${KNOWLEDGE_BASE.apis.overview}\n\nHTTP Methods:\n${KNOWLEDGE_BASE.apis.restPrinciples.find(p => p.includes('HTTP'))}\n\nStructure:\n\`\`\`\n${KNOWLEDGE_BASE.apis.structure}\n\`\`\``;
    }
    return `${KNOWLEDGE_BASE.apis.overview}\n\nPrinciples: ${KNOWLEDGE_BASE.apis.restPrinciples.slice(0, 3).map(p => p.split(' - ')[0]).join(', ')}\n\nAsk 'API all information' for complete details!`;
  }

  // Comprehensive Web Development Information
  if (lowerMsg.includes('web development') || lowerMsg.includes('full stack') || lowerMsg.includes('frontend') || lowerMsg.includes('backend')) {
    if (lowerMsg.includes('all') || lowerMsg.includes('everything') || lowerMsg.includes('complete')) {
      const web = KNOWLEDGE_BASE.webDevelopment;
      return `WEB DEVELOPMENT - Complete Information\n\n${web.overview}\n\nFrontend:\n• Technologies: ${web.frontend.technologies}\n• Responsibilities: ${web.frontend.responsibilities}\n\nBackend:\n• Technologies: ${web.backend.technologies}\n• Responsibilities: ${web.backend.responsibilities}\n\nFull-Stack:\n${web.fullStack}\n\nModern Stack:\n${web.modernStack}\n\nArjun's Stack:\n${web.arjunStack}`;
    }
    return `${KNOWLEDGE_BASE.webDevelopment.overview}\n\n${KNOWLEDGE_BASE.webDevelopment.arjunStack}\n\nAsk 'Web development all information' for complete details!`;
  }

  // Skills related
  if (lowerMsg.includes('skill') || lowerMsg.includes('technology') || lowerMsg.includes('tech stack')) {
    const skillsList = SKILLS_DATA.map(s => `${s.name} (${s.level}%)`).join(', ');
    return `Arjun is proficient in: ${skillsList}. He specializes in full-stack web development with strong expertise in Laravel/PHP and modern JavaScript frameworks.`;
  }

  // Experience related
  if (lowerMsg.includes('experience') || lowerMsg.includes('work') || lowerMsg.includes('job')) {
    return `Arjun has ${EXPERIENCE_DATA.length} years of professional experience. Currently working at ${EXPERIENCE_DATA[0].company} as ${EXPERIENCE_DATA[0].position} since ${EXPERIENCE_DATA[0].period}. Previously worked at ${EXPERIENCE_DATA[1].company}. He has completed 15+ projects with 100% client satisfaction.`;
  }

  // Projects related
  if (lowerMsg.includes('project') || lowerMsg.includes('portfolio') || lowerMsg.includes('built')) {
    const projectList = PROJECTS_DATA.map(p => p.title).join(', ');
    return `Arjun has worked on several impressive projects including: ${projectList}. His projects showcase expertise in e-commerce platforms, car rental systems, and modern web applications using Laravel, React, and MySQL.`;
  }

  // Contact related
  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach') || lowerMsg.includes('phone')) {
    return `You can reach Arjun at:\n📧 Email: ${PERSONAL_INFO.email}\n📱 Phone: ${PERSONAL_INFO.phone}\n📍 Location: ${PERSONAL_INFO.location}\n\nFeel free to use the contact form below to send him a message!`;
  }

  // Location related
  if (lowerMsg.includes('location') || lowerMsg.includes('where') || lowerMsg.includes('based')) {
    return `Arjun is based in ${PERSONAL_INFO.location}. He's available for both local and remote opportunities.`;
  }

  // About related
  if (lowerMsg.includes('about') || lowerMsg.includes('who') || lowerMsg.includes('background')) {
    return `Arjun Bhusal is a skilled Full Stack Web Developer specializing in Laravel and modern web technologies. With 2+ years of experience, he has successfully delivered 15+ projects. He's passionate about creating efficient, scalable web applications and has expertise in PHP, JavaScript, MySQL, and Tailwind CSS.`;
  }

  // Education related
  if (lowerMsg.includes('education') || lowerMsg.includes('study') || lowerMsg.includes('degree')) {
    return `Arjun has a strong educational background in Computer Science and Web Development. He continuously updates his skills with modern technologies and best practices in software development.`;
  }

  // Services related
  if (lowerMsg.includes('service') || lowerMsg.includes('offer') || lowerMsg.includes('do')) {
    return `Arjun offers: Web Development, E-commerce Solutions, Custom Web Applications, Database Design, Responsive Design, and Maintenance & Support. He specializes in creating professional, scalable solutions tailored to client needs.`;
  }

  // Greeting
  if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
    return `Hello! 👋 I'm Arjun's expert portfolio assistant with comprehensive API-like knowledge!\n\nI can provide COMPLETE information about:\n• React, TypeScript, Vite, Node.js, Laravel\n• TailwindCSS, HTML/CSS, SQL/MySQL\n• Git/GitHub, Python, Figma, Photoshop\n• APIs, Web Development, Arjun's Portfolio\n\nTry asking:\n• "React all information"\n• "Laravel complete details"\n• "TypeScript everything"\n• Or any specific question!\n\nWhat would you like to know?`;
  }

  // Default response
  return `I'm an expert assistant with API-like comprehensive knowledge!\n\n📱 Frontend: React, Vite, TypeScript, TailwindCSS, JavaScript\n⚙️ Backend: Node.js, Laravel, REST APIs, SQL/MySQL\n🎨 Design: Figma, Photoshop, UI/UX\n🐍 Programming: Python, OOP concepts\n\nGet COMPLETE information:\n• Ask "[Technology] all information" for comprehensive details\n• Ask specific questions for targeted answers\n• Ask about Arjun's skills, projects, experience\n\nExamples:\n• "React all information"\n• "How to center in Tailwind"\n• "SQL optimization tips"\n• "Arjun's projects"\n\nType your question!`;
};

export const sendMessageToGemini = async function* (message: string) {
  try {
    // Simulate streaming response
    const response = getLocalResponse(message);
    const words = response.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      yield words[i] + ' ';
      await new Promise(resolve => setTimeout(resolve, 30)); // Simulate typing delay
    }
  } catch (error) {
    console.error("Error generating response:", error);
    yield "Sorry, I encountered an error. Please try asking something else!";
  }
};