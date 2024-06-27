import { Test } from '../types';

export const mockTests: Test[] = [
  {
    id: 1,
    title: 'Frontend Development Test',
    timeLimit: 60, // 1 minute in seconds
    questions: [
      {
        id: 1,
        type: 'single-choice',
        question: 'What is the purpose of the HTML <head> element?',
        options: [
          'To define the main content of the webpage',
          'To define metadata about the document',
          'To define the footer of the webpage',
          'To define a section in the document'
        ],
        correctAnswer: 1 // index of the correct option
      },
      {
        id: 2,
        type: 'multiple-choice',
        question:
          'Which of the following are CSS frameworks? (Select all that apply)',
        options: ['Bootstrap', 'React', 'Tailwind CSS', 'Angular'],
        correctAnswers: [0, 2] // indices of the correct options
      },
      {
        id: 3,
        type: 'short-answer',
        question: "What does the acronym 'DOM' stand for?",
        correctAnswer: 'Document Object Model'
      },
      {
        id: 4,
        type: 'long-answer',
        question:
          'Explain the box model in CSS and how it affects the layout of elements on a webpage.',
        correctAnswer:
          'The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The box model allows us to add a border around elements and define space between elements.'
      },
      {
        id: 5,
        type: 'single-choice',
        question:
          'Which JavaScript method is used to select an HTML element by its ID?',
        options: [
          'getElementById',
          'querySelector',
          'getElementsByClassName',
          'querySelectorAll'
        ],
        correctAnswer: 0 // index of the correct option
      },
      {
        id: 6,
        type: 'multiple-choice',
        question:
          'Which of the following are JavaScript data types? (Select all that apply)',
        options: ['String', 'Boolean', 'Integer', 'Object'],
        correctAnswers: [0, 1, 3] // indices of the correct options
      },
      {
        id: 7,
        type: 'short-answer',
        question: 'What is the use of the <canvas> element in HTML?',
        correctAnswer:
          'The <canvas> element is used to draw graphics on a web page using JavaScript.'
      },
      {
        id: 8,
        type: 'long-answer',
        question:
          'Describe the difference between local storage and session storage in web browsers.',
        correctAnswer:
          "Local storage and session storage are both web storage objects used to store data on the client's browser. The main difference is that local storage has no expiration time, meaning the data persists even after the browser is closed and reopened. Session storage, on the other hand, is cleared when the page session ends, which happens when the page is closed."
      }
    ]
  },
  {
    id: 2,
    title: 'Backend Development Test',
    questions: [
      {
        id: 1,
        type: 'single-choice',
        question: 'What is a RESTful API?',
        options: [
          'A database management system',
          'A type of programming language',
          'An architectural style for designing networked applications',
          'An encryption algorithm'
        ],
        correctAnswer: 2 // index of the correct option
      },
      {
        id: 2,
        type: 'multiple-choice',
        question:
          'Which of the following are popular databases for backend development? (Select all that apply)',
        options: ['MySQL', 'MongoDB', 'SQLite', 'Firebase'],
        correctAnswers: [0, 1, 3] // indices of the correct options
      },
      {
        id: 3,
        type: 'short-answer',
        question: 'What is the purpose of a middleware in backend development?',
        correctAnswer:
          'Middleware provides a way to interact with HTTP requests and responses, allowing developers to modify incoming requests, outgoing responses, or both.'
      },
      {
        id: 4,
        type: 'long-answer',
        question:
          'Explain the concept of database normalization and its importance in backend development.',
        correctAnswer:
          'Database normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller tables and defining relationships between them. Normalization helps optimize database structure, reduce data duplication, and ensure data consistency.'
      }
    ]
  },
  {
    id: 3,
    title: 'DevOps Test',
    timeLimit: 1800, // 30 minutes in seconds
    questions: [
      {
        id: 1,
        type: 'single-choice',
        question: 'What is Continuous Integration (CI) in DevOps?',
        options: [
          'A version control system',
          'A software development methodology',
          'A process of automating the integration of code changes into a shared repository',
          'A cloud computing service'
        ],
        correctAnswer: 2 // index of the correct option
      },
      {
        id: 2,
        type: 'multiple-choice',
        question:
          'Which of the following tools are used for container orchestration? (Select all that apply)',
        options: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible'],
        correctAnswers: [1, 3] // indices of the correct options
      },
      {
        id: 3,
        type: 'short-answer',
        question: 'What is the role of Docker in DevOps?',
        correctAnswer:
          'Docker is a containerization platform that allows developers to package applications and their dependencies into standardized units called containers.'
      },
      {
        id: 4,
        type: 'long-answer',
        question:
          'Explain the concept of Infrastructure as Code (IaC) and its benefits in DevOps practices.',
        correctAnswer:
          'Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable script files, rather than physical hardware configuration or interactive configuration tools. It allows for automated provisioning, scaling, and management of infrastructure, improving consistency, efficiency, and scalability in DevOps environments.'
      }
    ]
  }
];
