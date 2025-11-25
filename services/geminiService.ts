import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from "../constants";

// Local AI responses based on portfolio data
const getLocalResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();

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
    return `Hello! 👋 I'm Arjun's portfolio assistant. I can tell you about his skills, experience, projects, or how to contact him. What would you like to know?`;
  }

  // Default response
  return `I can help you learn about Arjun's:\n• Skills and Technologies\n• Work Experience\n• Projects and Portfolio\n• Contact Information\n• Services Offered\n\nWhat would you like to know?`;
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