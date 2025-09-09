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
"[project]/src/app/user/discussions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserDiscussionsPage
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Select/Select.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Avatar/Avatar.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Textarea/Textarea.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mantine/core/esm/components/Modal/Modal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-client] (ecmascript) <export default as IconSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFilter$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconFilter.mjs [app-client] (ecmascript) <export default as IconFilter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessageCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconMessageCircle.mjs [app-client] (ecmascript) <export default as IconMessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeart$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconHeart.mjs [app-client] (ecmascript) <export default as IconHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPlus.mjs [app-client] (ecmascript) <export default as IconPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSend$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSend$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSend.mjs [app-client] (ecmascript) <export default as IconSend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconPhoto.mjs [app-client] (ecmascript) <export default as IconPhoto>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTag$3e$__ = __turbopack_context__.i("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconTag.mjs [app-client] (ecmascript) <export default as IconTag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$learning$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/learning/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UserDiscussionsPage() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("recent");
    const [tagFilter, setTagFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newPost, setNewPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        content: "",
        tags: ""
    });
    const allTags = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$learning$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyDiscussions"].flatMap((d)=>d.tags)));
    const filteredDiscussions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$learning$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyDiscussions"].filter((discussion)=>{
        const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) || discussion.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = tagFilter === "all" || tagFilter && discussion.tags.includes(tagFilter);
        return matchesSearch && matchesTag;
    }).sort((a, b)=>{
        if (sortBy === "popular") {
            return b.likes - a.likes;
        }
        return b.createdAt.getTime() - a.createdAt.getTime(); // recent
    });
    const handleCreatePost = ()=>{
        // In real app, this would call API
        console.log("Creating post:", newPost);
        setNewPost({
            title: "",
            content: "",
            tags: ""
        });
        setIsCreateModalOpen(false);
    };
    const formatDate = (date)=>{
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        if (diffInHours < 1) return "Baru saja";
        if (diffInHours < 24) return "".concat(diffInHours, " jam yang lalu");
        if (diffInHours < 48) return "Kemarin";
        return date.toLocaleDateString("id-ID");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Container$2f$Container$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
        size: "xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
            gap: "xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    justify: "space-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                    order: 1,
                                    mb: "md",
                                    children: "Forum Diskusi"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    size: "lg",
                                    c: "dimmed",
                                    children: "Berbagi pengalaman, tanya jawab, dan berkolaborasi dengan sesama learner"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/discussions/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPlus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPlus$3e$__["IconPlus"], {
                                size: "1rem"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 92,
                                columnNumber: 26
                            }, void 0),
                            className: "btn-primary",
                            onClick: ()=>setIsCreateModalOpen(true),
                            children: "Buat Post Baru"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/discussions/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/discussions/page.tsx",
                    lineNumber: 81,
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
                                    md: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                    placeholder: "Cari diskusi...",
                                    leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSearch$3e$__["IconSearch"], {
                                        size: "1rem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 30
                                    }, void 0),
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.currentTarget.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"].Col, {
                                span: {
                                    base: 12,
                                    md: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    placeholder: "Urutkan berdasarkan",
                                    leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconFilter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconFilter$3e$__["IconFilter"], {
                                        size: "1rem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 30
                                    }, void 0),
                                    data: [
                                        {
                                            value: "recent",
                                            label: "Terbaru"
                                        },
                                        {
                                            value: "popular",
                                            label: "Paling Populer"
                                        }
                                    ],
                                    value: sortBy,
                                    onChange: setSortBy
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Grid$2f$Grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"].Col, {
                                span: {
                                    base: 12,
                                    md: 4
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Select$2f$Select$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    placeholder: "Filter berdasarkan tag",
                                    leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconTag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTag$3e$__["IconTag"], {
                                        size: "1rem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 30
                                    }, void 0),
                                    data: [
                                        {
                                            value: "all",
                                            label: "Semua Tag"
                                        },
                                        ...allTags.map((tag)=>({
                                                value: tag,
                                                label: tag
                                            }))
                                    ],
                                    value: tagFilter,
                                    onChange: setTagFilter
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/discussions/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/discussions/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    padding: "md",
                    radius: "md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            size: "sm",
                            fw: 600,
                            mb: "xs",
                            children: "Tag Populer:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/discussions/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                            gap: "xs",
                            children: allTags.slice(0, 8).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "light",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>setTagFilter(tag),
                                    children: [
                                        "#",
                                        tag
                                    ]
                                }, tag, true, {
                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/discussions/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/discussions/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    gap: "md",
                    children: filteredDiscussions.map((discussion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            padding: "lg",
                            radius: "md",
                            className: "card-hover",
                            withBorder: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                gap: "md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                        src: discussion.user.avatar,
                                                        size: "md",
                                                        radius: "xl",
                                                        children: discussion.user.fullName.split(" ").map((n)=>n[0]).join("")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                fw: 600,
                                                                children: discussion.user.fullName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "xs",
                                                                c: "dimmed",
                                                                children: formatDate(discussion.createdAt)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "xs",
                                                children: discussion.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Badge$2f$Badge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                        size: "sm",
                                                        variant: "light",
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Title$2f$Title$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                order: 4,
                                                mb: "xs",
                                                children: discussion.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "sm",
                                                lineClamp: 3,
                                                children: discussion.content
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    discussion.images && discussion.images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        gap: "xs",
                                        children: discussion.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 60,
                                                    height: 60,
                                                    background: "var(--gradient-accent)",
                                                    borderRadius: 8,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "white",
                                                    fontSize: "12px"
                                                },
                                                children: "📷"
                                            }, index, false, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                        justify: "space-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                gap: "lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        gap: "xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                                variant: "subtle",
                                                                color: "red",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconHeart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconHeart$3e$__["IconHeart"], {
                                                                    size: "1rem"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "sm",
                                                                children: discussion.likes
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                        gap: "xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ActionIcon$2f$ActionIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionIcon"], {
                                                                variant: "subtle",
                                                                color: "blue",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessageCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessageCircle$3e$__["IconMessageCircle"], {
                                                                    size: "1rem"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "sm",
                                                                children: discussion.comments.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                lineNumber: 236,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "light",
                                                size: "sm",
                                                children: "Lihat Detail"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    discussion.comments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderTop: "1px solid #e5e7eb",
                                            paddingTop: "12px",
                                            marginTop: "8px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                size: "xs",
                                                c: "dimmed",
                                                mb: "xs",
                                                children: "Komentar terbaru:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 21
                                            }, this),
                                            discussion.comments.slice(-1).map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                                    gap: "xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Avatar$2f$Avatar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            src: comment.user.avatar,
                                                            size: "xs",
                                                            radius: "xl",
                                                            children: comment.user.fullName.split(" ").map((n)=>n[0]).join("")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/discussions/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                                size: "xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontWeight: 600
                                                                        },
                                                                        children: comment.user.fullName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    ": ",
                                                                    comment.content.slice(0, 100),
                                                                    comment.content.length > 100 ? "..." : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/discussions/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, comment.id, true, {
                                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this)
                        }, discussion.id, false, {
                            fileName: "[project]/src/app/user/discussions/page.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/user/discussions/page.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                filteredDiscussions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Card$2f$Card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    padding: "xl",
                    radius: "md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        align: "center",
                        gap: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconMessageCircle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMessageCircle$3e$__["IconMessageCircle"], {
                                size: "3rem",
                                color: "gray"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "lg",
                                c: "dimmed",
                                children: "Tidak ada diskusi ditemukan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                size: "sm",
                                c: "dimmed",
                                ta: "center",
                                children: "Coba ubah kata kunci pencarian atau filter yang digunakan"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/discussions/page.tsx",
                        lineNumber: 284,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/discussions/page.tsx",
                    lineNumber: 283,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Modal$2f$Modal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                    opened: isCreateModalOpen,
                    onClose: ()=>setIsCreateModalOpen(false),
                    title: "Buat Post Diskusi Baru",
                    size: "lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Stack$2f$Stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                        gap: "md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                label: "Judul",
                                placeholder: "Tulis judul diskusi yang menarik...",
                                value: newPost.title,
                                onChange: (e)=>setNewPost({
                                        ...newPost,
                                        title: e.currentTarget.value
                                    }),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Textarea$2f$Textarea$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                label: "Konten",
                                placeholder: "Tulis pertanyaan atau topik diskusi Anda...",
                                minRows: 4,
                                value: newPost.content,
                                onChange: (e)=>setNewPost({
                                        ...newPost,
                                        content: e.currentTarget.value
                                    }),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                                label: "Tags",
                                placeholder: "scratch, beginner, help (pisahkan dengan koma)",
                                value: newPost.tags,
                                onChange: (e)=>setNewPost({
                                        ...newPost,
                                        tags: e.currentTarget.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                gap: "xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "light",
                                    leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconPhoto$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconPhoto$3e$__["IconPhoto"], {
                                        size: "1rem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 52
                                    }, void 0),
                                    children: "Tambah Gambar"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/discussions/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                                justify: "flex-end",
                                gap: "md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        onClick: ()=>setIsCreateModalOpen(false),
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        leftSection: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSend$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconSend$3e$__["IconSend"], {
                                            size: "1rem"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/discussions/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 30
                                        }, void 0),
                                        className: "btn-primary",
                                        onClick: handleCreatePost,
                                        disabled: !newPost.title || !newPost.content,
                                        children: "Posting"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/discussions/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/discussions/page.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/discussions/page.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/discussions/page.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/discussions/page.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/discussions/page.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(UserDiscussionsPage, "EDUHMR42BKSFE62sres3V2BdRWY=");
_c = UserDiscussionsPage;
var _c;
__turbopack_context__.k.register(_c, "UserDiscussionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e338cbb7._.js.map