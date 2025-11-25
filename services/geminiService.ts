import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from "../constants";

// Local AI responses based on portfolio data
const getLocalResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();

  // React Questions
  if (lowerMsg.includes('react') && (lowerMsg.includes('what') || lowerMsg.includes('how') || lowerMsg.includes('explain'))) {
    if (lowerMsg.includes('component') || lowerMsg.includes('jsx')) {
      return `React Components & JSX\n\nConcept: React components are reusable building blocks for UI. JSX is JavaScript XML syntax.\n\nExample:\n\`\`\`jsx\nfunction Button({ text, onClick }) {\n  return <button onClick={onClick}>{text}</button>;\n}\n\`\`\`\n\nBest Practices:\n• Use functional components with hooks\n• Keep components small and focused\n• Pass data via props\n• Use PascalCase for component names\n\nCommon Mistakes:\n• Forgetting to import React (in older versions)\n• Not using keys in lists\n• Mutating state directly`;
    }
    if (lowerMsg.includes('hook')) {
      return `React Hooks\n\nConcept: Hooks let you use state and lifecycle in functional components.\n\nCommon Hooks:\n• \`useState\` - manage state\n• \`useEffect\` - side effects\n• \`useContext\` - context API\n• \`useRef\` - DOM references\n\nExample:\n\`\`\`jsx\nconst [count, setCount] = useState(0);\n\nuseEffect(() => {\n  document.title = \`Count: \${count}\`;\n}, [count]);\n\`\`\`\n\nBest Practice: Always include dependencies in useEffect array`;
    }
    return `React is a JavaScript library for building user interfaces. It uses components, virtual DOM for performance, and declarative syntax. Key features: component-based architecture, one-way data flow, JSX syntax, hooks for state management. Perfect for SPAs and dynamic web apps.`;
  }

  // TypeScript Questions
  if (lowerMsg.includes('typescript') && (lowerMsg.includes('what') || lowerMsg.includes('why') || lowerMsg.includes('difference'))) {
    return `TypeScript vs JavaScript\n\nTypeScript is JavaScript with static type checking.\n\nBenefits:\n• Catch errors before runtime\n• Better IDE autocomplete\n• Improved code documentation\n• Safer refactoring\n\nExample:\n\`\`\`typescript\ninterface User {\n  name: string;\n  age: number;\n}\n\nfunction greet(user: User): string {\n  return \`Hello, \${user.name}\`;\n}\n\`\`\`\n\nWhen to use: Large projects, team collaboration, enterprise applications`;
  }

  // Vite Questions
  if (lowerMsg.includes('vite')) {
    return `Vite\n\nConcept: Modern build tool that's faster than Webpack/CRA.\n\nWhy Vite?\n• Instant hot module reload (HMR)\n• Fast cold start\n• Optimized builds\n• Native ES modules\n\nSetup React + Vite:\n\`\`\`bash\nnpm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install\nnpm run dev\n\`\`\`\n\nBest Practice: Use Vite for new React projects instead of Create React App`;
  }

  // Node.js / Backend Questions
  if (lowerMsg.includes('node') || (lowerMsg.includes('backend') && !lowerMsg.includes('laravel'))) {
    if (lowerMsg.includes('api') || lowerMsg.includes('rest')) {
      return `Building REST API with Node.js\n\nStep-by-step:\n1. Install Express: \`npm install express\`\n2. Create server:\n\`\`\`javascript\nconst express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.get('/api/users', (req, res) => {\n  res.json({ users: [] });\n});\n\napp.listen(3000, () => console.log('Server running'));\n\`\`\`\n\nBest Practices:\n• Use middleware for validation\n• Implement error handling\n• Use environment variables\n• Add rate limiting\n• Document with Swagger`;
    }
    return `Node.js is a JavaScript runtime for server-side development. It's fast, scalable, and uses non-blocking I/O. Great for APIs, real-time apps, microservices. Use Express.js framework for routing, middleware, and REST APIs.`;
  }

  // Tailwind CSS Questions
  if (lowerMsg.includes('tailwind') && (lowerMsg.includes('how') || lowerMsg.includes('center') || lowerMsg.includes('responsive'))) {
    if (lowerMsg.includes('center')) {
      return `Centering in TailwindCSS\n\nFlexbox Method:\n\`\`\`html\n<div class="flex items-center justify-center h-screen">\n  <div>Centered Content</div>\n</div>\n\`\`\`\n\nGrid Method:\n\`\`\`html\n<div class="grid place-items-center h-screen">\n  <div>Centered</div>\n</div>\n\`\`\`\n\nMargin Auto:\n\`\`\`html\n<div class="mx-auto w-64">Centered Horizontally</div>\n\`\`\`\n\nTip: Use \`h-screen\` for full viewport height`;
    }
    return `Tailwind CSS is a utility-first framework. Instead of writing custom CSS, use classes like \`bg-blue-500\`, \`p-4\`, \`flex\`. Benefits: faster development, consistent design, responsive utilities (\`md:\`, \`lg:\`), no CSS conflicts. Setup: \`npm install -D tailwindcss\` then \`npx tailwindcss init\`.`;
  }

  // SQL / Database Questions
  if (lowerMsg.includes('sql') || lowerMsg.includes('database') || lowerMsg.includes('query')) {
    if (lowerMsg.includes('join')) {
      return `SQL Joins\n\nTypes:\n• INNER JOIN - matching rows only\n• LEFT JOIN - all from left table\n• RIGHT JOIN - all from right table\n• FULL JOIN - all rows from both\n\nExample:\n\`\`\`sql\nSELECT users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nWHERE orders.total > 100;\n\`\`\`\n\nBest Practice: Use indexes on join columns for performance`;
    }
    if (lowerMsg.includes('optimize') || lowerMsg.includes('slow')) {
      return `SQL Optimization\n\nSolutions:\n1. Add indexes: \`CREATE INDEX idx_email ON users(email);\`\n2. Use EXPLAIN to analyze queries\n3. Avoid SELECT * - specify columns\n4. Use LIMIT for large results\n5. Optimize WHERE clauses\n6. Use connection pooling\n\nExample:\n\`\`\`sql\n-- Bad\nSELECT * FROM users WHERE YEAR(created_at) = 2024;\n\n-- Good\nSELECT id, name FROM users WHERE created_at >= '2024-01-01';\n\`\`\``;
    }
    return `SQL (MySQL) manages relational databases. Key operations: SELECT (read), INSERT (create), UPDATE (modify), DELETE (remove). Use JOIN for multiple tables, WHERE for filtering, GROUP BY for aggregation. Indexes improve query speed. Normalization reduces redundancy.`;
  }

  // API Questions
  if (lowerMsg.includes('api') && !lowerMsg.includes('laravel')) {
    if (lowerMsg.includes('rest')) {
      return `REST API Best Practices\n\nHTTP Methods:\n• GET - retrieve data\n• POST - create new\n• PUT/PATCH - update\n• DELETE - remove\n\nExample Structure:\n\`\`\`\nGET    /api/users          - List all\nGET    /api/users/:id      - Get one\nPOST   /api/users          - Create\nPUT    /api/users/:id      - Update\nDELETE /api/users/:id      - Delete\n\`\`\`\n\nStatus Codes:\n• 200 - Success\n• 201 - Created\n• 400 - Bad Request\n• 401 - Unauthorized\n• 404 - Not Found\n• 500 - Server Error`;
    }
    if (lowerMsg.includes('fetch') || lowerMsg.includes('axios')) {
      return `Fetching API Data in React\n\nUsing Fetch:\n\`\`\`jsx\nconst [data, setData] = useState([]);\n\nuseEffect(() => {\n  fetch('https://api.example.com/users')\n    .then(res => res.json())\n    .then(data => setData(data))\n    .catch(err => console.error(err));\n}, []);\n\`\`\`\n\nUsing Axios:\n\`\`\`jsx\nimport axios from 'axios';\n\nconst fetchData = async () => {\n  try {\n    const response = await axios.get('/api/users');\n    setData(response.data);\n  } catch (error) {\n    console.error(error);\n  }\n};\n\`\`\`\n\nBest Practice: Handle loading and error states`;
    }
    return `APIs enable communication between applications. REST uses HTTP methods (GET, POST, PUT, DELETE). GraphQL allows flexible data queries. Always validate input, use authentication (JWT), rate limiting, and return proper status codes. Document with Swagger/Postman.`;
  }

  // Python Questions
  if (lowerMsg.includes('python')) {
    return `Python is a versatile, easy-to-learn language. Uses: web development (Django/Flask), data analysis (Pandas), machine learning (TensorFlow), automation, scripting. Clean syntax, dynamic typing, huge library ecosystem. Great for beginners and professionals alike.`;
  }

  // Design Questions (Figma/Photoshop)
  if (lowerMsg.includes('figma') || lowerMsg.includes('design') || lowerMsg.includes('ui/ux')) {
    return `Figma is a collaborative design tool for UI/UX. Features: vector editing, prototyping, components, auto-layout, design systems. Workflow: Create frames → Design components → Add interactions → Share with developers. Export designs as PNG, SVG, or inspect CSS/code.\n\nUI/UX Best Practices:\n• Consistent spacing (8px grid)\n• Clear visual hierarchy\n• Readable typography\n• Accessible colors (WCAG)\n• Mobile-first design`;
  }

  if (lowerMsg.includes('photoshop')) {
    return `Photoshop is for image editing and graphic design. Common tasks: photo retouching, layer manipulation, masking, color correction, creating web graphics. For web dev: export assets as PNG/JPG, slice designs, optimize images. Tip: Use artboards for multiple screen sizes.`;
  }

  // Full-Stack / Learning Path Questions
  if (lowerMsg.includes('full stack') || lowerMsg.includes('learn') || lowerMsg.includes('roadmap')) {
    return `Full-Stack Development Roadmap\n\nFrontend Path:\n1. HTML/CSS basics\n2. JavaScript fundamentals\n3. React + TypeScript\n4. TailwindCSS\n5. State management (Redux/Context)\n\nBackend Path:\n1. Node.js + Express or Laravel\n2. SQL databases (MySQL)\n3. REST API design\n4. Authentication (JWT)\n5. Deployment (Docker, CI/CD)\n\nPractice: Build projects like todo app, blog, e-commerce site.\n\nArjun specializes in this stack with 2+ years experience!`;
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

  // Technology Definitions - Laravel/PHP
  if (lowerMsg.includes('laravel') || (lowerMsg.includes('what') && lowerMsg.includes('php'))) {
    return `Laravel is a powerful PHP web application framework with elegant syntax. It provides MVC architecture, Eloquent ORM for database operations, Blade templating engine, built-in authentication, routing system, and comprehensive tools for modern web development.\n\nPHP is a server-side scripting language designed for web development. It's used for creating dynamic web pages, handling forms, managing sessions, database interactions, and building robust backend systems. Arjun specializes in PHP with 90% proficiency.`;
  }

  // JavaScript
  if (lowerMsg.includes('javascript') || lowerMsg.includes('js ')) {
    return `JavaScript is a versatile, high-level programming language that enables interactive web pages and is an essential part of web applications. It runs in browsers (client-side) and servers (Node.js). Key features include: DOM manipulation, async operations (promises, async/await), ES6+ modern features, event handling, and dynamic typing. Arjun has 85% proficiency in JavaScript and uses it for both frontend and backend development.`;
  }

  // HTML/CSS
  if (lowerMsg.includes('html') || lowerMsg.includes('css') || lowerMsg.includes('markup')) {
    return `HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures content with semantic elements like headings, paragraphs, links, images, forms, and more.\n\nCSS (Cascading Style Sheets) is used for styling web pages. It controls layout, colors, fonts, spacing, responsive design (media queries), flexbox, grid systems, animations, and visual presentation. Arjun has 95% proficiency in HTML/CSS.`;
  }

  // MySQL/Database
  if (lowerMsg.includes('mysql') || lowerMsg.includes('database') || lowerMsg.includes('sql')) {
    return `MySQL is a popular open-source relational database management system (RDBMS). It's used for storing, organizing, and retrieving data efficiently. Key concepts include: SQL queries (SELECT, INSERT, UPDATE, DELETE), table relationships (joins), indexes for performance, normalization, transactions, and data integrity. MySQL is essential for backend development and data management. Arjun has 80% proficiency in MySQL.`;
  }

  // Tailwind CSS
  if (lowerMsg.includes('tailwind')) {
    return `Tailwind CSS is a utility-first CSS framework that enables rapid UI development. Instead of predefined components, it provides low-level utility classes for building custom designs. Benefits include: responsive design, customization, consistent spacing/colors, no CSS file bloat, and component composition. Great for modern, professional interfaces. Arjun has 90% proficiency in Tailwind CSS.`;
  }

  // Git/GitHub
  if (lowerMsg.includes('git') || lowerMsg.includes('github') || lowerMsg.includes('version control')) {
    return `Git is a distributed version control system for tracking code changes, enabling collaboration, branching, merging, and maintaining code history. Common commands include commit, push, pull, branch, and merge.\n\nGitHub is a web-based platform for hosting Git repositories. It provides collaboration tools like pull requests, code review, issue tracking, project management, and CI/CD workflows. Essential for modern software development. Arjun has 85% proficiency in Git/GitHub.`;
  }

  // General web development
  if (lowerMsg.includes('web development') || lowerMsg.includes('full stack') || lowerMsg.includes('frontend') || lowerMsg.includes('backend')) {
    return `Web Development involves creating websites and web applications. Frontend handles the user interface (HTML, CSS, JavaScript, React). Backend manages server logic, databases, and APIs (PHP, Laravel, Node.js). Full Stack developers like Arjun work on both frontend and backend, creating complete web solutions from database to user interface.`;
  }

  // API
  if (lowerMsg.includes('api') || lowerMsg.includes('rest') || lowerMsg.includes('endpoint')) {
    return `API (Application Programming Interface) is a set of rules that allows different software applications to communicate. REST APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations. APIs enable data exchange between frontend and backend, third-party integrations, and microservices architecture. Common formats include JSON and XML.`;
  }

  // Programming concepts
  if (lowerMsg.includes('oop') || lowerMsg.includes('object oriented')) {
    return `OOP (Object-Oriented Programming) is a programming paradigm based on objects that contain data (properties) and code (methods). Key principles: Encapsulation (bundling data), Inheritance (code reuse), Polymorphism (multiple forms), and Abstraction (hiding complexity). Used in languages like PHP, JavaScript, Java, and Python.`;
  }

  // Greeting
  if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
    return `Hello! 👋 I'm Arjun's expert portfolio assistant. I can help you with:\n\nAbout Arjun: Skills, experience, projects, contact\nTech Explanations: React, TypeScript, Node.js, Laravel, SQL, APIs, Tailwind, Python, Figma\nHow-To Guides: Step-by-step tutorials with code examples\nDebugging: Common issues and solutions\nBest Practices: Professional development tips\n\nWhat would you like to know?`;
  }

  // Default response
  return `I'm an expert assistant covering:\n\n📱 Frontend: React, Vite, TypeScript, TailwindCSS, JavaScript\n⚙️ Backend: Node.js, Laravel, REST APIs, SQL/MySQL\n🎨 Design: Figma, Photoshop, UI/UX\n🐍 Programming: Python, algorithms\n\nAsk me:\n• How to build something (with code examples)\n• What is X technology\n• Best practices & optimization\n• Debug help\n• Arjun's skills & projects\n• Learning roadmaps\n\nType your question!`;
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