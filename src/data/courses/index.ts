import { Course, Module, Quiz, LearningPath } from "../../types";
import { dummyUsers } from "../users";

export const dummyCourses: Course[] = [
  // Scratch Courses
  {
    id: "scratch-basic-1",
    title: "Scratch Fundamentals for Beginners",
    description:
      "Learn the basics of visual programming with Scratch. Perfect for complete beginners who want to start their coding journey.",
    thumbnail: "/course-thumbnails/scratch-basic.jpg",
    category: "scratch",
    instructorId: "instructor-1",
    instructor: dummyUsers.find((u) => u.id === "instructor-1")!,
    price: 150000,
    duration: 480, // 8 hours
    level: "beginner",
    totalModules: 8,
    enrolledCount: 156,
    rating: 4.8,
    isPublished: true,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-11-15"),
  },
  {
    id: "scratch-intermediate-1",
    title: "Interactive Stories with Scratch",
    description:
      "Create engaging interactive stories and animations using advanced Scratch features like variables, lists, and custom blocks.",
    thumbnail: "/course-thumbnails/scratch-stories.jpg",
    category: "scratch",
    instructorId: "instructor-1",
    instructor: dummyUsers.find((u) => u.id === "instructor-1")!,
    price: 250000,
    duration: 720, // 12 hours
    level: "intermediate",
    totalModules: 12,
    enrolledCount: 89,
    rating: 4.9,
    isPublished: true,
    createdAt: new Date("2024-04-15"),
    updatedAt: new Date("2024-11-20"),
  },
  {
    id: "scratch-games-1",
    title: "Game Development with Scratch",
    description:
      "Build exciting games from platformers to puzzle games. Learn game mechanics, physics, and advanced programming concepts.",
    thumbnail: "/course-thumbnails/scratch-games.jpg",
    category: "scratch",
    instructorId: "instructor-3",
    instructor: dummyUsers.find((u) => u.id === "instructor-3")!,
    price: 350000,
    duration: 960, // 16 hours
    level: "advanced",
    totalModules: 16,
    enrolledCount: 67,
    rating: 4.7,
    isPublished: true,
    createdAt: new Date("2024-05-01"),
    updatedAt: new Date("2024-11-25"),
  },

  // Roblox Courses
  {
    id: "roblox-basic-1",
    title: "Roblox Studio Basics",
    description:
      "Master the fundamentals of Roblox Studio and start building your first 3D worlds and simple games.",
    thumbnail: "/course-thumbnails/roblox-basic.jpg",
    category: "roblox",
    instructorId: "instructor-2",
    instructor: dummyUsers.find((u) => u.id === "instructor-2")!,
    price: 200000,
    duration: 600, // 10 hours
    level: "beginner",
    totalModules: 10,
    enrolledCount: 134,
    rating: 4.6,
    isPublished: true,
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-11-18"),
  },
  {
    id: "roblox-lua-1",
    title: "Lua Scripting for Roblox",
    description:
      "Learn Lua programming language specifically for Roblox development. From basic scripts to advanced game mechanics.",
    thumbnail: "/course-thumbnails/roblox-lua.jpg",
    category: "roblox",
    instructorId: "instructor-2",
    instructor: dummyUsers.find((u) => u.id === "instructor-2")!,
    price: 300000,
    duration: 840, // 14 hours
    level: "intermediate",
    totalModules: 14,
    enrolledCount: 98,
    rating: 4.8,
    isPublished: true,
    createdAt: new Date("2024-04-01"),
    updatedAt: new Date("2024-11-22"),
  },
  {
    id: "roblox-advanced-1",
    title: "Advanced Roblox Game Development",
    description:
      "Create complex multiplayer games with advanced features like data stores, remote events, and professional game design.",
    thumbnail: "/course-thumbnails/roblox-advanced.jpg",
    category: "roblox",
    instructorId: "instructor-3",
    instructor: dummyUsers.find((u) => u.id === "instructor-3")!,
    price: 500000,
    duration: 1200, // 20 hours
    level: "advanced",
    totalModules: 20,
    enrolledCount: 45,
    rating: 4.9,
    isPublished: true,
    createdAt: new Date("2024-06-01"),
    updatedAt: new Date("2024-12-01"),
  },
];

export const dummyModules: Module[] = [
  // Scratch Basic Course Modules
  {
    id: "scratch-basic-1-mod-1",
    courseId: "scratch-basic-1",
    title: "Introduction to Scratch",
    description: "Understanding the Scratch interface and basic concepts",
    order: 1,
    duration: 60,
    type: "theory",
    content: {
      theory: {
        text: "Scratch is a visual programming language developed by MIT. It uses drag-and-drop blocks to create programs, making it perfect for beginners.",
        images: [
          "/modules/scratch-interface.png",
          "/modules/scratch-blocks.png",
        ],
        pptUrl: "/presentations/scratch-intro.ppt",
      },
    },
    createdAt: new Date("2024-03-01"),
  },
  {
    id: "scratch-basic-1-mod-2",
    courseId: "scratch-basic-1",
    title: "Your First Scratch Program",
    description: "Create your first moving sprite and animation",
    order: 2,
    duration: 45,
    type: "video",
    content: {
      video: {
        url: "/videos/scratch-first-program.mp4",
        transcript:
          "In this lesson, we will create our first Scratch program...",
      },
    },
    createdAt: new Date("2024-03-01"),
  },

  // Roblox Basic Course Modules
  {
    id: "roblox-basic-1-mod-1",
    courseId: "roblox-basic-1",
    title: "Getting Started with Roblox Studio",
    description: "Learn the basics of Roblox Studio interface and tools",
    order: 1,
    duration: 60,
    type: "theory",
    content: {
      theory: {
        text: "Roblox Studio is a powerful 3D development environment where you can create games and experiences for the Roblox platform.",
        images: ["/modules/roblox-studio-interface.png"],
        pptUrl: "/presentations/roblox-studio-intro.ppt",
      },
    },
    createdAt: new Date("2024-03-15"),
  },
];

export const dummyQuizzes: Quiz[] = [
  {
    id: "scratch-basic-quiz-1",
    title: "Scratch Fundamentals Quiz",
    questions: [
      {
        id: "q1",
        question: "What is Scratch?",
        type: "multiple-choice",
        options: [
          "A visual programming language",
          "A text editor",
          "A web browser",
          "A game console",
        ],
        correctAnswer: 0,
        explanation:
          "Scratch is a visual programming language developed by MIT that uses drag-and-drop blocks.",
      },
      {
        id: "q2",
        question: "Scratch was developed by MIT.",
        type: "true-false",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "Yes, Scratch was developed by the MIT Media Lab.",
      },
    ],
    passingScore: 70,
    timeLimit: 10,
  },
];

export const dummyLearningPaths: LearningPath[] = [
  {
    id: "scratch-complete-path",
    title: "Complete Scratch Programming Journey",
    description:
      "Master Scratch programming from absolute beginner to advanced game developer",
    courses: [
      dummyCourses.find((c) => c.id === "scratch-basic-1")!,
      dummyCourses.find((c) => c.id === "scratch-intermediate-1")!,
      dummyCourses.find((c) => c.id === "scratch-games-1")!,
    ],
    estimatedDuration: 2160, // 36 hours total
    difficulty: "beginner",
    category: "scratch",
    prerequisites: [],
  },
  {
    id: "roblox-complete-path",
    title: "Complete Roblox Development Journey",
    description:
      "Learn Roblox development from basics to professional game creation",
    courses: [
      dummyCourses.find((c) => c.id === "roblox-basic-1")!,
      dummyCourses.find((c) => c.id === "roblox-lua-1")!,
      dummyCourses.find((c) => c.id === "roblox-advanced-1")!,
    ],
    estimatedDuration: 2640, // 44 hours total
    difficulty: "beginner",
    category: "roblox",
    prerequisites: [],
  },
];

// Helper functions
export const getCourseById = (id: string): Course | undefined => {
  return dummyCourses.find((course) => course.id === id);
};

export const getCoursesByCategory = (
  category: "scratch" | "roblox"
): Course[] => {
  return dummyCourses.filter((course) => course.category === category);
};

export const getCoursesByInstructor = (instructorId: string): Course[] => {
  return dummyCourses.filter((course) => course.instructorId === instructorId);
};

export const getModulesByCourse = (courseId: string): Module[] => {
  return dummyModules.filter((module) => module.courseId === courseId);
};

export const getScratchCourses = (): Course[] =>
  getCoursesByCategory("scratch");
export const getRobloxCourses = (): Course[] => getCoursesByCategory("roblox");
