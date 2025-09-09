(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/courses/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dummyCourses",
    ()=>dummyCourses,
    "dummyLearningPaths",
    ()=>dummyLearningPaths,
    "dummyModules",
    ()=>dummyModules,
    "dummyQuizzes",
    ()=>dummyQuizzes,
    "getCourseById",
    ()=>getCourseById,
    "getCoursesByCategory",
    ()=>getCoursesByCategory,
    "getCoursesByInstructor",
    ()=>getCoursesByInstructor,
    "getModulesByCourse",
    ()=>getModulesByCourse,
    "getRobloxCourses",
    ()=>getRobloxCourses,
    "getScratchCourses",
    ()=>getScratchCourses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/users/index.ts [app-client] (ecmascript)");
;
const dummyCourses = [
    // Scratch Courses
    {
        id: "scratch-basic-1",
        title: "Scratch Fundamentals for Beginners",
        description: "Learn the basics of visual programming with Scratch. Perfect for complete beginners who want to start their coding journey.",
        thumbnail: "/course-thumbnails/scratch-basic.jpg",
        category: "scratch",
        instructorId: "instructor-1",
        instructor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-1"),
        price: 150000,
        duration: 480,
        level: "beginner",
        totalModules: 8,
        enrolledCount: 156,
        rating: 4.8,
        isPublished: true,
        createdAt: new Date("2024-03-01"),
        updatedAt: new Date("2024-11-15")
    },
    {
        id: "scratch-intermediate-1",
        title: "Interactive Stories with Scratch",
        description: "Create engaging interactive stories and animations using advanced Scratch features like variables, lists, and custom blocks.",
        thumbnail: "/course-thumbnails/scratch-stories.jpg",
        category: "scratch",
        instructorId: "instructor-1",
        instructor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-1"),
        price: 250000,
        duration: 720,
        level: "intermediate",
        totalModules: 12,
        enrolledCount: 89,
        rating: 4.9,
        isPublished: true,
        createdAt: new Date("2024-04-15"),
        updatedAt: new Date("2024-11-20")
    },
    {
        id: "scratch-games-1",
        title: "Game Development with Scratch",
        description: "Build exciting games from platformers to puzzle games. Learn game mechanics, physics, and advanced programming concepts.",
        thumbnail: "/course-thumbnails/scratch-games.jpg",
        category: "scratch",
        instructorId: "instructor-3",
        instructor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-3"),
        price: 350000,
        duration: 960,
        level: "advanced",
        totalModules: 16,
        enrolledCount: 67,
        rating: 4.7,
        isPublished: true,
        createdAt: new Date("2024-05-01"),
        updatedAt: new Date("2024-11-25")
    },
    // Roblox Courses
    {
        id: "roblox-basic-1",
        title: "Roblox Studio Basics",
        description: "Master the fundamentals of Roblox Studio and start building your first 3D worlds and simple games.",
        thumbnail: "/course-thumbnails/roblox-basic.jpg",
        category: "roblox",
        instructorId: "instructor-2",
        instructor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-2"),
        price: 200000,
        duration: 600,
        level: "beginner",
        totalModules: 10,
        enrolledCount: 134,
        rating: 4.6,
        isPublished: true,
        createdAt: new Date("2024-03-15"),
        updatedAt: new Date("2024-11-18")
    },
    {
        id: "roblox-lua-1",
        title: "Lua Scripting for Roblox",
        description: "Learn Lua programming language specifically for Roblox development. From basic scripts to advanced game mechanics.",
        thumbnail: "/course-thumbnails/roblox-lua.jpg",
        category: "roblox",
        instructorId: "instructor-2",
        instructor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-2"),
        price: 300000,
        duration: 840,
        level: "intermediate",
        totalModules: 14,
        enrolledCount: 98,
        rating: 4.8,
        isPublished: true,
        createdAt: new Date("2024-04-01"),
        updatedAt: new Date("2024-11-22")
    },
    {
        id: "roblox-advanced-1",
        title: "Advanced Roblox Game Development",
        description: "Create complex multiplayer games with advanced features like data stores, remote events, and professional game design.",
        thumbnail: "/course-thumbnails/roblox-advanced.jpg",
        category: "roblox",
        instructorId: "instructor-3",
        instructor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-3"),
        price: 500000,
        duration: 1200,
        level: "advanced",
        totalModules: 20,
        enrolledCount: 45,
        rating: 4.9,
        isPublished: true,
        createdAt: new Date("2024-06-01"),
        updatedAt: new Date("2024-12-01")
    }
];
const dummyModules = [
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
                    "/modules/scratch-blocks.png"
                ],
                pptUrl: "/presentations/scratch-intro.ppt"
            }
        },
        createdAt: new Date("2024-03-01")
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
                transcript: "In this lesson, we will create our first Scratch program..."
            }
        },
        createdAt: new Date("2024-03-01")
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
                images: [
                    "/modules/roblox-studio-interface.png"
                ],
                pptUrl: "/presentations/roblox-studio-intro.ppt"
            }
        },
        createdAt: new Date("2024-03-15")
    }
];
const dummyQuizzes = [
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
                    "A game console"
                ],
                correctAnswer: 0,
                explanation: "Scratch is a visual programming language developed by MIT that uses drag-and-drop blocks."
            },
            {
                id: "q2",
                question: "Scratch was developed by MIT.",
                type: "true-false",
                options: [
                    "True",
                    "False"
                ],
                correctAnswer: 0,
                explanation: "Yes, Scratch was developed by the MIT Media Lab."
            }
        ],
        passingScore: 70,
        timeLimit: 10
    }
];
const dummyLearningPaths = [
    {
        id: "scratch-complete-path",
        title: "Complete Scratch Programming Journey",
        description: "Master Scratch programming from absolute beginner to advanced game developer",
        courses: [
            dummyCourses.find((c)=>c.id === "scratch-basic-1"),
            dummyCourses.find((c)=>c.id === "scratch-intermediate-1"),
            dummyCourses.find((c)=>c.id === "scratch-games-1")
        ],
        estimatedDuration: 2160,
        difficulty: "beginner",
        category: "scratch",
        prerequisites: []
    },
    {
        id: "roblox-complete-path",
        title: "Complete Roblox Development Journey",
        description: "Learn Roblox development from basics to professional game creation",
        courses: [
            dummyCourses.find((c)=>c.id === "roblox-basic-1"),
            dummyCourses.find((c)=>c.id === "roblox-lua-1"),
            dummyCourses.find((c)=>c.id === "roblox-advanced-1")
        ],
        estimatedDuration: 2640,
        difficulty: "beginner",
        category: "roblox",
        prerequisites: []
    }
];
const getCourseById = (id)=>{
    return dummyCourses.find((course)=>course.id === id);
};
const getCoursesByCategory = (category)=>{
    return dummyCourses.filter((course)=>course.category === category);
};
const getCoursesByInstructor = (instructorId)=>{
    return dummyCourses.filter((course)=>course.instructorId === instructorId);
};
const getModulesByCourse = (courseId)=>{
    return dummyModules.filter((module)=>module.courseId === courseId);
};
const getScratchCourses = ()=>getCoursesByCategory("scratch");
const getRobloxCourses = ()=>getCoursesByCategory("roblox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/learning/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dummyDiscussions",
    ()=>dummyDiscussions,
    "dummyLearningPaths",
    ()=>dummyLearningPaths,
    "getDiscussionById",
    ()=>getDiscussionById,
    "getDiscussionsByTag",
    ()=>getDiscussionsByTag,
    "getDiscussionsByUser",
    ()=>getDiscussionsByUser,
    "getLearningPathById",
    ()=>getLearningPathById,
    "getLearningPathsByCategory",
    ()=>getLearningPathsByCategory,
    "getLearningPathsByDifficulty",
    ()=>getLearningPathsByDifficulty,
    "getPopularDiscussions",
    ()=>getPopularDiscussions,
    "getRecentDiscussions",
    ()=>getRecentDiscussions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/courses/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/users/index.ts [app-client] (ecmascript)");
;
;
const dummyLearningPaths = [
    {
        id: "path-scratch-beginner",
        title: "Scratch Programming untuk Pemula",
        description: "Jalur pembelajaran lengkap untuk menguasai Scratch dari dasar hingga mahir. Cocok untuk anak-anak yang baru memulai belajar programming.",
        courses: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "scratch-basic-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "scratch-intermediate-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "scratch-games-1")
        ],
        estimatedDuration: 2160,
        difficulty: "beginner",
        category: "scratch",
        prerequisites: []
    },
    {
        id: "path-roblox-beginner",
        title: "Roblox Game Development untuk Pemula",
        description: "Pelajari cara membuat game 3D di Roblox dari nol. Mulai dari basic studio hingga scripting Lua tingkat lanjut.",
        courses: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "roblox-basic-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "roblox-lua-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "roblox-advanced-1")
        ],
        estimatedDuration: 2640,
        difficulty: "beginner",
        category: "roblox",
        prerequisites: []
    },
    {
        id: "path-scratch-advanced",
        title: "Advanced Scratch Projects",
        description: "Tingkatkan skill Scratch dengan project-project kompleks dan teknik advanced programming.",
        courses: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "scratch-intermediate-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "scratch-games-1")
        ],
        estimatedDuration: 1680,
        difficulty: "advanced",
        category: "scratch",
        prerequisites: [
            "Dasar-dasar Scratch Programming"
        ]
    },
    {
        id: "path-game-creator",
        title: "Complete Game Creator Path",
        description: "Jalur pembelajaran untuk menjadi game creator yang handal. Menggabungkan Scratch dan Roblox.",
        courses: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "scratch-games-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "roblox-basic-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "roblox-lua-1"),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyCourses"].find((c)=>c.id === "roblox-advanced-1")
        ],
        estimatedDuration: 3600,
        difficulty: "intermediate",
        category: "roblox",
        prerequisites: [
            "Pengalaman basic programming"
        ]
    }
];
const dummyDiscussions = [
    {
        id: "disc-1",
        userId: "user-1",
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-1"),
        title: "Bagaimana cara membuat karakter bergerak di Scratch?",
        content: "Hai teman-teman! Saya baru belajar Scratch dan masih bingung cara membuat sprite bergerak dengan smooth. Ada yang bisa bantu? Saya sudah coba pakai move steps tapi gerakannya patah-patah.",
        images: [],
        likes: 15,
        comments: [
            {
                id: "comment-1",
                postId: "disc-1",
                userId: "instructor-1",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-1"),
                content: "Halo! Untuk gerakan yang smooth, coba gunakan change x/y by daripada move steps. Juga pastikan pakai forever loop dengan wait 0.1 seconds di dalamnya.",
                likes: 8,
                createdAt: new Date("2024-12-01T10:30:00Z")
            },
            {
                id: "comment-2",
                postId: "disc-1",
                userId: "user-2",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-2"),
                content: "Setuju sama mas Budi! Saya juga pakai cara itu dan hasilnya lebih halus. Kalau mau lebih advanced bisa pakai glide to x: y: juga.",
                likes: 5,
                createdAt: new Date("2024-12-01T11:15:00Z")
            }
        ],
        tags: [
            "scratch",
            "movement",
            "sprite",
            "beginner"
        ],
        createdAt: new Date("2024-12-01T09:00:00Z"),
        updatedAt: new Date("2024-12-01T11:15:00Z")
    },
    {
        id: "disc-2",
        userId: "user-3",
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-3"),
        title: "Share project Scratch pertama saya!",
        content: "Halo semuanya! Akhirnya berhasil buat game sederhana di Scratch. Ini adalah game catch the ball sederhana. Masih banyak bug tapi saya senang banget bisa bikin ini! 🎉\n\nAda saran untuk improvement?",
        images: [
            "/projects/scratch-ball-game.png"
        ],
        likes: 23,
        comments: [
            {
                id: "comment-3",
                postId: "disc-2",
                userId: "instructor-3",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-3"),
                content: "Wah keren banget! Untuk project pertama ini sudah bagus sekali. Saran saya coba tambahkan score system dan sound effects untuk membuat game lebih engaging.",
                likes: 12,
                createdAt: new Date("2024-12-02T08:45:00Z")
            },
            {
                id: "comment-4",
                postId: "disc-2",
                userId: "user-4",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-4"),
                content: "Keren! Saya juga lagi belajar bikin game. Boleh share cara bikin collision detection-nya?",
                likes: 6,
                createdAt: new Date("2024-12-02T10:20:00Z")
            }
        ],
        tags: [
            "scratch",
            "project",
            "game",
            "showcase"
        ],
        createdAt: new Date("2024-12-02T07:30:00Z"),
        updatedAt: new Date("2024-12-02T10:20:00Z")
    },
    {
        id: "disc-3",
        userId: "user-5",
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-5"),
        title: "Tips belajar Lua scripting di Roblox?",
        content: "Halo! Saya sudah bisa pakai Roblox Studio untuk build, tapi masih kesulitan dengan scripting Lua. Ada yang punya tips atau resource bagus untuk belajar? Terutama untuk membuat NPC dan game mechanics.",
        images: [],
        likes: 18,
        comments: [
            {
                id: "comment-5",
                postId: "disc-3",
                userId: "instructor-2",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-2"),
                content: "Halo! Untuk belajar Lua di Roblox, saran saya mulai dari script sederhana dulu seperti print() dan variables. Lalu praktik bikin simple clickable parts. Developer Hub Roblox juga resource yang bagus!",
                likes: 10,
                createdAt: new Date("2024-12-03T09:15:00Z")
            }
        ],
        tags: [
            "roblox",
            "lua",
            "scripting",
            "help"
        ],
        createdAt: new Date("2024-12-03T08:00:00Z"),
        updatedAt: new Date("2024-12-03T09:15:00Z")
    },
    {
        id: "disc-4",
        userId: "instructor-1",
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-1"),
        title: "[Tips] 5 Kesalahan Umum Pemula di Scratch",
        content: "Halo semuanya! Sebagai instruktur, saya sering melihat kesalahan yang sama dari siswa pemula. Berikut 5 kesalahan umum dan cara menghindarinya:\n\n1. Tidak menggunakan broadcast untuk komunikasi antar sprite\n2. Membuat script terlalu panjang tanpa custom blocks\n3. Lupa menambahkan stop conditions di loop\n4. Tidak menggunakan koordinat dengan benar\n5. Tidak testing edge cases\n\nAda yang mau diskusi lebih lanjut?",
        images: [],
        likes: 45,
        comments: [
            {
                id: "comment-6",
                postId: "disc-4",
                userId: "user-1",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-1"),
                content: "Terima kasih pak! Saya baru tahu tentang broadcast. Bisa dijelaskan lebih detail kapan sebaiknya pakai broadcast?",
                likes: 8,
                createdAt: new Date("2024-12-04T10:30:00Z")
            },
            {
                id: "comment-7",
                postId: "disc-4",
                userId: "instructor-1",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "instructor-1"),
                content: 'Broadcast berguna ketika kamu mau komunikasi antar sprite. Misal sprite player nabrak enemy, player broadcast "hit" dan enemy bisa respond dengan script "when I receive hit". Ini lebih clean daripada pakai variables.',
                likes: 15,
                createdAt: new Date("2024-12-04T11:00:00Z")
            }
        ],
        tags: [
            "scratch",
            "tips",
            "beginner",
            "tutorial"
        ],
        createdAt: new Date("2024-12-04T09:00:00Z"),
        updatedAt: new Date("2024-12-04T11:00:00Z")
    },
    {
        id: "disc-5",
        userId: "user-2",
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-2"),
        title: "Kolaborasi project Roblox - Cari teammate!",
        content: "Halo! Saya sedang planning bikin game RPG sederhana di Roblox dan butuh teammate. Yang saya cari:\n\n- 1 orang untuk building/map design\n- 1 orang untuk scripting (saya bisa scripting basic)\n- 1 orang untuk UI design\n\nGame concept: Fantasy RPG dengan quest system sederhana. Target selesai dalam 2-3 bulan.\n\nKalau ada yang interested bisa comment di bawah! 🚀",
        images: [
            "/projects/rpg-concept.png"
        ],
        likes: 32,
        comments: [
            {
                id: "comment-8",
                postId: "disc-5",
                userId: "user-4",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-4"),
                content: "Saya tertarik untuk UI design! Saya sudah bikin beberapa GUI di Roblox dan suka design. Boleh DM untuk diskusi lebih lanjut?",
                likes: 7,
                createdAt: new Date("2024-12-05T14:20:00Z")
            },
            {
                id: "comment-9",
                postId: "disc-5",
                userId: "user-5",
                user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.id === "user-5"),
                content: "Wah project menarik! Saya bisa bantu building. Saya suka bikin medieval/fantasy builds. Portfolio saya ada di Roblox profile.",
                likes: 9,
                createdAt: new Date("2024-12-05T15:45:00Z")
            }
        ],
        tags: [
            "roblox",
            "collaboration",
            "project",
            "rpg"
        ],
        createdAt: new Date("2024-12-05T13:30:00Z"),
        updatedAt: new Date("2024-12-05T15:45:00Z")
    }
];
const getLearningPathById = (id)=>{
    return dummyLearningPaths.find((path)=>path.id === id);
};
const getLearningPathsByCategory = (category)=>{
    return dummyLearningPaths.filter((path)=>path.category === category);
};
const getLearningPathsByDifficulty = (difficulty)=>{
    return dummyLearningPaths.filter((path)=>path.difficulty === difficulty);
};
const getDiscussionById = (id)=>{
    return dummyDiscussions.find((discussion)=>discussion.id === id);
};
const getDiscussionsByTag = (tag)=>{
    return dummyDiscussions.filter((discussion)=>discussion.tags.includes(tag));
};
const getDiscussionsByUser = (userId)=>{
    return dummyDiscussions.filter((discussion)=>discussion.userId === userId);
};
const getPopularDiscussions = ()=>{
    return dummyDiscussions.sort((a, b)=>b.likes - a.likes);
};
const getRecentDiscussions = ()=>{
    return dummyDiscussions.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime());
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/learning-paths/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserLearningPathsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Container/Container.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Title/Title.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Grid/Grid.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Card/Card.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Stack/Stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Badge/Badge.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SimpleGrid$2f$SimpleGrid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/SimpleGrid/SimpleGrid.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Divider/Divider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRoute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRoute$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconRoute.mjs [app-client] (ecmascript) <export default as IconRoute>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconClock.mjs [app-client] (ecmascript) <export default as IconClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStar$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconStar.mjs [app-client] (ecmascript) <export default as IconStar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconUsers.mjs [app-client] (ecmascript) <export default as IconUsers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrophy$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTrophy.mjs [app-client] (ecmascript) <export default as IconTrophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronRight.mjs [app-client] (ecmascript) <export default as IconChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBook$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBook$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconBook.mjs [app-client] (ecmascript) <export default as IconBook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTarget$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTarget$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTarget.mjs [app-client] (ecmascript) <export default as IconTarget>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$learning$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/learning/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UserLearningPathsPage() {
    _s();
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [difficultyFilter, setDifficultyFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const filteredPaths = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$learning$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyLearningPaths"].filter((path)=>{
        const matchesCategory = categoryFilter === "all" || path.category === categoryFilter;
        const matchesDifficulty = difficultyFilter === "all" || path.difficulty === difficultyFilter;
        return matchesCategory && matchesDifficulty;
    });
    const getDifficultyColor = (difficulty)=>{
        switch(difficulty){
            case "beginner":
                return "green";
            case "intermediate":
                return "yellow";
            case "advanced":
                return "red";
            default:
                return "gray";
        }
    };
    const getDifficultyLabel = (difficulty)=>{
        switch(difficulty){
            case "beginner":
                return "Pemula";
            case "intermediate":
                return "Menengah";
            case "advanced":
                return "Lanjutan";
            default:
                return difficulty;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
        size: "xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
            gap: "xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                            order: 1,
                            mb: "md",
                            children: "Learning Paths"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            size: "lg",
                            c: "dimmed",
                            children: "Ikuti jalur pembelajaran terstruktur untuk menguasai skill programming step by step"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    padding: "lg",
                    radius: "md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                        gutter: "md",
                        align: "end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"].Col, {
                                span: {
                                    base: 12,
                                    md: 6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    label: "Kategori",
                                    placeholder: "Pilih kategori",
                                    data: [
                                        {
                                            value: "all",
                                            label: "Semua Kategori"
                                        },
                                        {
                                            value: "scratch",
                                            label: "Scratch"
                                        },
                                        {
                                            value: "roblox",
                                            label: "Roblox"
                                        }
                                    ],
                                    value: categoryFilter,
                                    onChange: setCategoryFilter
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"].Col, {
                                span: {
                                    base: 12,
                                    md: 6
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    label: "Tingkat Kesulitan",
                                    placeholder: "Pilih tingkat",
                                    data: [
                                        {
                                            value: "all",
                                            label: "Semua Tingkat"
                                        },
                                        {
                                            value: "beginner",
                                            label: "Pemula"
                                        },
                                        {
                                            value: "intermediate",
                                            label: "Menengah"
                                        },
                                        {
                                            value: "advanced",
                                            label: "Lanjutan"
                                        }
                                    ],
                                    value: difficultyFilter,
                                    onChange: setDifficultyFilter
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SimpleGrid$2f$SimpleGrid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
                    cols: {
                        base: 1,
                        lg: 2
                    },
                    spacing: "lg",
                    children: filteredPaths.map((path)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            radius: "lg",
                            padding: "lg",
                            className: "card-hover",
                            withBorder: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                gap: "md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 50,
                                                        height: 50,
                                                        background: "var(--gradient-accent)",
                                                        borderRadius: 12,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "white",
                                                        fontSize: "1.2rem"
                                                    },
                                                    children: "🎯"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "light",
                                                            color: path.category === "scratch" ? "orange" : "cyan",
                                                            mb: "xs",
                                                            children: path.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "light",
                                                            color: getDifficultyColor(path.difficulty),
                                                            children: getDifficultyLabel(path.difficulty)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                order: 4,
                                                mb: "xs",
                                                children: path.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                lineClamp: 3,
                                                children: path.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconClock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconClock$3e$__["IconClock"], {
                                                size: "1rem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                children: [
                                                    Math.round(path.estimatedDuration / 60),
                                                    "h total"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconBook$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconBook$3e$__["IconBook"], {
                                                size: "1rem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                children: [
                                                    path.courses.length,
                                                    " kursus"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    path.prerequisites && path.prerequisites.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                fw: 600,
                                                mb: "xs",
                                                children: "Prasyarat:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                                gap: 4,
                                                children: path.prerequisites.map((prereq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "xs",
                                                        c: "dimmed",
                                                        children: [
                                                            "• ",
                                                            prereq
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Divider$2f$Divider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                justify: "space-between",
                                                mb: "xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        fw: 600,
                                                        children: "Kursus dalam path ini:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "xs",
                                                        c: "dimmed",
                                                        children: [
                                                            path.courses.length,
                                                            " kursus"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                                gap: "xs",
                                                children: path.courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        justify: "space-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                gap: "xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: 20,
                                                                            height: 20,
                                                                            background: "#e3f2fd",
                                                                            borderRadius: "50%",
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            justifyContent: "center",
                                                                            fontSize: "10px",
                                                                            fontWeight: 600,
                                                                            color: "#1976d2"
                                                                        },
                                                                        children: index + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                        size: "sm",
                                                                        lineClamp: 1,
                                                                        children: course.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                                gap: "xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconStar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconStar$3e$__["IconStar"], {
                                                                        size: "0.8rem",
                                                                        color: "gold"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                        size: "xs",
                                                                        children: course.rating
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, course.id, true, {
                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "xs",
                                                        c: "dimmed",
                                                        children: "Estimasi waktu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                        size: "sm",
                                                        fw: 600,
                                                        children: [
                                                            Math.round(path.estimatedDuration / 60),
                                                            " jam"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                rightSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronRight$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconChevronRight$3e$__["IconChevronRight"], {
                                                    size: "1rem"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 35
                                                }, void 0),
                                                className: "btn-primary",
                                                children: "Mulai Path"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        }, path.id, false, {
                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                filteredPaths.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    padding: "xl",
                    radius: "md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        align: "center",
                        gap: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconRoute$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconRoute$3e$__["IconRoute"], {
                                size: "3rem",
                                color: "gray"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "lg",
                                c: "dimmed",
                                children: "Tidak ada learning path ditemukan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                lineNumber: 267,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "sm",
                                c: "dimmed",
                                ta: "center",
                                children: "Coba ubah filter untuk melihat learning path lainnya"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                lineNumber: 270,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                        lineNumber: 265,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                    lineNumber: 264,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    padding: "lg",
                    radius: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                            order: 3,
                            mb: "md",
                            children: "Rekomendasi Learning Path"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$SimpleGrid$2f$SimpleGrid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleGrid"], {
                            cols: {
                                base: 1,
                                sm: 2,
                                lg: 3
                            },
                            spacing: "md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    p: "md",
                                    radius: "sm",
                                    withBorder: true,
                                    className: "card-hover",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                        align: "center",
                                        gap: "sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTarget$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTarget$3e$__["IconTarget"], {
                                                size: "2rem",
                                                color: "green"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                fw: 600,
                                                ta: "center",
                                                children: "Pemula? Mulai dari Scratch!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                ta: "center",
                                                children: "Path Scratch Programming untuk Pemula"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                variant: "light",
                                                color: "green",
                                                children: "Lihat Path"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    p: "md",
                                    radius: "sm",
                                    withBorder: true,
                                    className: "card-hover",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                        align: "center",
                                        gap: "sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTrophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTrophy$3e$__["IconTrophy"], {
                                                size: "2rem",
                                                color: "blue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                fw: 600,
                                                ta: "center",
                                                children: "Siap Tantangan?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                ta: "center",
                                                children: "Complete Game Creator Path"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                variant: "light",
                                                color: "blue",
                                                children: "Lihat Path"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    p: "md",
                                    radius: "sm",
                                    withBorder: true,
                                    className: "card-hover",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                        align: "center",
                                        gap: "sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconUsers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconUsers$3e$__["IconUsers"], {
                                                size: "2rem",
                                                color: "orange"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                fw: 600,
                                                ta: "center",
                                                children: "Gabung Komunitas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                c: "dimmed",
                                                ta: "center",
                                                children: "Diskusi dengan sesama learner"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "xs",
                                                variant: "light",
                                                color: "orange",
                                                children: "Join Forum"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/learning-paths/page.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/learning-paths/page.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/learning-paths/page.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/learning-paths/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(UserLearningPathsPage, "Zb+SGB5r+FKNmKki20vryHb85Pk=");
_c = UserLearningPathsPage;
var _c;
__turbopack_context__.k.register(_c, "UserLearningPathsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b6ebedc7._.js.map