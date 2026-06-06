export type Project = {
  projectNumber: string;
  category: string;
  date: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
};

export const projects: Project[] = [
  {
    projectNumber: '01',
    category: '🏆 Hackathon',
    date: 'Nov 2025',
    title: 'OneFlow',
    tagline: 'Plan to Bill in One Place',
    description:
      'A full-stack MERN workflow management platform for project planning, task management, timesheets, and billing. Features JWT-based role-based access control, analytics dashboards, and financial insights.',
    features: ['JWT Auth + RBAC', 'Timesheet & Billing', 'Analytics Dashboard', 'REST APIs'],
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/prit1112',
  },
  {
    projectNumber: '02',
    category: '📚 EdTech',
    date: 'Mar 2025',
    title: 'Smart-EDU',
    tagline: 'Education Management Platform',
    description:
      'A web-based education management platform to manage courses and students. Built with Node.js + Express.js + MongoDB. Implements RESTful APIs and CRUD operations for learning resources.',
    features: ['Course Management', 'Student Tracking', 'RESTful APIs', 'CRUD Operations'],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/prit1112',
  },
];

