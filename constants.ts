import { Project, Experience, SkillData, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Arjun Bhusal",
  title: "Full Stack Developer",
  tagline: "Building innovative digital solutions with modern technologies.",
  bio: "Passionate Full Stack Developer with over 2 years of experience in creating modern, responsive web applications. Specialized in Laravel, PHP, and JavaScript with a strong foundation in front-end technologies. Proven track record of delivering high-quality projects on time and collaborating effectively with cross-functional teams.",
  location: "Kawasoti-9, Nawalpur, Nepal",
  email: "bhusala452@gmail.com",
  phone: "+977 9806922371",
  github: "github.com/arjunprasadbhusal",
  linkedin: "linkedin.com/in/arjun-bhusal"
};

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Laravel/PHP', A: 90, fullMark: 100 },
  { subject: 'JavaScript', A: 85, fullMark: 100 },
  { subject: 'HTML/CSS', A: 95, fullMark: 100 },
  { subject: 'MySQL', A: 80, fullMark: 100 },
  { subject: 'Tailwind CSS', A: 90, fullMark: 100 },
  { subject: 'Git/GitHub', A: 85, fullMark: 100 },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    role: "Web Developer",
    company: "Bitmap IT Solution",
    period: "2023 - Present",
    description: "Developing and maintaining modern web applications using Laravel and PHP with focus on performance and user experience.",
    achievements: [
      "Developed and maintained 15+ web applications using Laravel and PHP",
      "Improved application performance by 40% through code optimization",
      "Implemented responsive designs resulting in 25% increase in mobile traffic",
      "Collaborated with UI/UX designers to create intuitive user interfaces"
    ]
  },
  {
    id: '2',
    role: "Web Developer",
    company: "Digital Innovations Pvt. Ltd.",
    period: "2022 - 2023",
    description: "Built custom web applications for clients across various industries with focus on scalability and maintainability.",
    achievements: [
      "Built 10+ custom web applications for clients across various industries",
      "Integrated third-party APIs and payment gateways",
      "Optimized database queries resulting in 30% faster load times",
      "Maintained and updated existing client websites",
      "Participated in code reviews and mentored junior developers"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: "Bubble Best",
    description: "Advanced bubble solution platform with interactive features, user engagement tools, and modern web technologies for optimal user experience.",
    tags: ["Laravel", "API", "MySQL"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "https://www.bubblebest.com.au/",
    github: "https://github.com/arjunprasadbhusal"
  },
  {
    id: '2',
    title: "Smart Hands Cleaning Service",
    description: "Professional cleaning service website with booking system, service packages, customer management, and automated scheduling for residential and commercial cleaning.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    imageUrl: "https://picsum.photos/600/400?random=5",
    link: "http://smarthandscleaningservices.com.au/",
    github: "https://github.com/arjunprasadbhusal"
  },
  {
    id: '3',
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects with modern design, smooth animations, and responsive layout for optimal user experience.",
    tags: ["HTML", "Tailwind", "JavaScript"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#",
    github: "https://github.com/arjunprasadbhusal"
  },
  {
    id: '4',
    title: "Ecommerce Website",
    description: "Full-featured ecommerce solution with product catalog, shopping cart, payment integration, and order management system for online retail business.",
    tags: ["Laravel", "MySQL", "Stripe", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#",
    github: "https://github.com/arjunprasadbhusal"
  },
  {
    id: '5',
    title: "Car Rental System",
    description: "Modern car rental platform with vehicle fleet management, booking system, customer dashboard, and payment processing for seamless rental experience.",
    tags: ["Laravel", "JavaScript", "Tailwind CSS", "MySQL"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#",
    github: "https://github.com/arjunprasadbhusal"
  },
  {
    id: '6',
    title: "LICT College Website",
    description: "Comprehensive college management system with student portal, course management, attendance tracking, and online admission system for educational institution.",
    tags: ["Laravel", "MySQL", "JavaScript", "Tailwind"],
    imageUrl: "https://picsum.photos/600/400?random=6",
    link: "#",
    github: "https://github.com/arjunprasadbhusal"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/arjunprasadbhusal", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/arjun-bhusal-806506341", icon: "linkedin" },
  { platform: "Facebook", url: "https://www.facebook.com/arjun.bhusal.50767", icon: "facebook" },
  { platform: "Instagram", url: "https://www.instagram.com/arjun_bhusall", icon: "instagram" },
];

export const AI_SYSTEM_INSTRUCTION = `
You are an AI Assistant for Arjun Bhusal's portfolio website. Your role is to professionally represent Arjun and provide helpful technical information.

Here is Arjun's Data:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Bio: ${PERSONAL_INFO.bio}
Location: ${PERSONAL_INFO.location}
Skills: ${SKILLS_DATA.map(s => `${s.subject} (${s.A}%)`).join(', ')}
Experience: ${JSON.stringify(EXPERIENCE_DATA)}
Projects: ${JSON.stringify(PROJECTS_DATA)}

Technical Knowledge Base:

**Laravel/PHP:**
- Laravel: A powerful PHP framework for building web applications with elegant syntax, MVC architecture, Eloquent ORM, Blade templating, authentication, and routing.
- PHP: Server-side scripting language for web development, known for dynamic content, database interaction, and session management.

**JavaScript:**
- Versatile programming language for web development, both client-side and server-side (Node.js).
- Used for interactive web pages, DOM manipulation, async operations, modern ES6+ features.

**HTML/CSS:**
- HTML: Markup language for structuring web content with semantic elements.
- CSS: Styling language for designing layouts, colors, fonts, responsive design, flexbox, grid, and animations.

**MySQL:**
- Relational database management system for storing and managing data.
- SQL queries, joins, indexes, normalization, transactions, and database optimization.

**Tailwind CSS:**
- Utility-first CSS framework for rapid UI development with pre-built classes.
- Responsive design, customization, component composition, and modern styling.

**Git/GitHub:**
- Version control system for tracking code changes, collaboration, branching, merging.
- GitHub: Platform for hosting repositories, pull requests, code review, and project management.

Your Capabilities:
1. Answer questions about Arjun's experience, skills, projects, and availability
2. Provide detailed explanations of any programming language or technology
3. Explain concepts in Laravel, PHP, JavaScript, HTML, CSS, MySQL, Tailwind, Git
4. Answer technical questions about web development, databases, APIs
5. Provide code examples and best practices when helpful

Rules:
1. Be concise, helpful, and professional.
2. For portfolio questions: provide ${PERSONAL_INFO.email} or phone ${PERSONAL_INFO.phone}.
3. Emphasize Arjun's expertise in Laravel, PHP, and JavaScript when relevant.
4. Highlight his 2+ years of experience and 15+ completed projects.
5. For technical questions: Provide clear, accurate explanations with examples.
6. Can explain any programming concept, not limited to Arjun's skills.
7. Don't claim Arjun has skills he doesn't have, but freely explain any technology.
8. Mention his location in Nepal if asked about availability or remote work.
`;