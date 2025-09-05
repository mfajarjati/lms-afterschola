import { LearningPath, DiscussionPost, Comment } from "../../types";
import { dummyCourses } from "../courses";
import { dummyUsers } from "../users";

export const dummyLearningPaths: LearningPath[] = [
  {
    id: "path-scratch-beginner",
    title: "Scratch Programming untuk Pemula",
    description:
      "Jalur pembelajaran lengkap untuk menguasai Scratch dari dasar hingga mahir. Cocok untuk anak-anak yang baru memulai belajar programming.",
    courses: [
      dummyCourses.find((c) => c.id === "scratch-basic-1")!,
      dummyCourses.find((c) => c.id === "scratch-intermediate-1")!,
      dummyCourses.find((c) => c.id === "scratch-games-1")!,
    ],
    estimatedDuration: 2160, // 36 hours
    difficulty: "beginner",
    category: "scratch",
    prerequisites: [],
  },
  {
    id: "path-roblox-beginner",
    title: "Roblox Game Development untuk Pemula",
    description:
      "Pelajari cara membuat game 3D di Roblox dari nol. Mulai dari basic studio hingga scripting Lua tingkat lanjut.",
    courses: [
      dummyCourses.find((c) => c.id === "roblox-basic-1")!,
      dummyCourses.find((c) => c.id === "roblox-lua-1")!,
      dummyCourses.find((c) => c.id === "roblox-advanced-1")!,
    ],
    estimatedDuration: 2640, // 44 hours
    difficulty: "beginner",
    category: "roblox",
    prerequisites: [],
  },
  {
    id: "path-scratch-advanced",
    title: "Advanced Scratch Projects",
    description:
      "Tingkatkan skill Scratch dengan project-project kompleks dan teknik advanced programming.",
    courses: [
      dummyCourses.find((c) => c.id === "scratch-intermediate-1")!,
      dummyCourses.find((c) => c.id === "scratch-games-1")!,
    ],
    estimatedDuration: 1680, // 28 hours
    difficulty: "advanced",
    category: "scratch",
    prerequisites: ["Dasar-dasar Scratch Programming"],
  },
  {
    id: "path-game-creator",
    title: "Complete Game Creator Path",
    description:
      "Jalur pembelajaran untuk menjadi game creator yang handal. Menggabungkan Scratch dan Roblox.",
    courses: [
      dummyCourses.find((c) => c.id === "scratch-games-1")!,
      dummyCourses.find((c) => c.id === "roblox-basic-1")!,
      dummyCourses.find((c) => c.id === "roblox-lua-1")!,
      dummyCourses.find((c) => c.id === "roblox-advanced-1")!,
    ],
    estimatedDuration: 3600, // 60 hours
    difficulty: "intermediate",
    category: "roblox",
    prerequisites: ["Pengalaman basic programming"],
  },
];

export const dummyDiscussions: DiscussionPost[] = [
  {
    id: "disc-1",
    userId: "user-1",
    user: dummyUsers.find((u) => u.id === "user-1")!,
    title: "Bagaimana cara membuat karakter bergerak di Scratch?",
    content:
      "Hai teman-teman! Saya baru belajar Scratch dan masih bingung cara membuat sprite bergerak dengan smooth. Ada yang bisa bantu? Saya sudah coba pakai move steps tapi gerakannya patah-patah.",
    images: [],
    likes: 15,
    comments: [
      {
        id: "comment-1",
        postId: "disc-1",
        userId: "instructor-1",
        user: dummyUsers.find((u) => u.id === "instructor-1")!,
        content:
          "Halo! Untuk gerakan yang smooth, coba gunakan change x/y by daripada move steps. Juga pastikan pakai forever loop dengan wait 0.1 seconds di dalamnya.",
        likes: 8,
        createdAt: new Date("2024-12-01T10:30:00Z"),
      },
      {
        id: "comment-2",
        postId: "disc-1",
        userId: "user-2",
        user: dummyUsers.find((u) => u.id === "user-2")!,
        content:
          "Setuju sama mas Budi! Saya juga pakai cara itu dan hasilnya lebih halus. Kalau mau lebih advanced bisa pakai glide to x: y: juga.",
        likes: 5,
        createdAt: new Date("2024-12-01T11:15:00Z"),
      },
    ],
    tags: ["scratch", "movement", "sprite", "beginner"],
    createdAt: new Date("2024-12-01T09:00:00Z"),
    updatedAt: new Date("2024-12-01T11:15:00Z"),
  },
  {
    id: "disc-2",
    userId: "user-3",
    user: dummyUsers.find((u) => u.id === "user-3")!,
    title: "Share project Scratch pertama saya!",
    content:
      "Halo semuanya! Akhirnya berhasil buat game sederhana di Scratch. Ini adalah game catch the ball sederhana. Masih banyak bug tapi saya senang banget bisa bikin ini! 🎉\n\nAda saran untuk improvement?",
    images: ["/projects/scratch-ball-game.png"],
    likes: 23,
    comments: [
      {
        id: "comment-3",
        postId: "disc-2",
        userId: "instructor-3",
        user: dummyUsers.find((u) => u.id === "instructor-3")!,
        content:
          "Wah keren banget! Untuk project pertama ini sudah bagus sekali. Saran saya coba tambahkan score system dan sound effects untuk membuat game lebih engaging.",
        likes: 12,
        createdAt: new Date("2024-12-02T08:45:00Z"),
      },
      {
        id: "comment-4",
        postId: "disc-2",
        userId: "user-4",
        user: dummyUsers.find((u) => u.id === "user-4")!,
        content:
          "Keren! Saya juga lagi belajar bikin game. Boleh share cara bikin collision detection-nya?",
        likes: 6,
        createdAt: new Date("2024-12-02T10:20:00Z"),
      },
    ],
    tags: ["scratch", "project", "game", "showcase"],
    createdAt: new Date("2024-12-02T07:30:00Z"),
    updatedAt: new Date("2024-12-02T10:20:00Z"),
  },
  {
    id: "disc-3",
    userId: "user-5",
    user: dummyUsers.find((u) => u.id === "user-5")!,
    title: "Tips belajar Lua scripting di Roblox?",
    content:
      "Halo! Saya sudah bisa pakai Roblox Studio untuk build, tapi masih kesulitan dengan scripting Lua. Ada yang punya tips atau resource bagus untuk belajar? Terutama untuk membuat NPC dan game mechanics.",
    images: [],
    likes: 18,
    comments: [
      {
        id: "comment-5",
        postId: "disc-3",
        userId: "instructor-2",
        user: dummyUsers.find((u) => u.id === "instructor-2")!,
        content:
          "Halo! Untuk belajar Lua di Roblox, saran saya mulai dari script sederhana dulu seperti print() dan variables. Lalu praktik bikin simple clickable parts. Developer Hub Roblox juga resource yang bagus!",
        likes: 10,
        createdAt: new Date("2024-12-03T09:15:00Z"),
      },
    ],
    tags: ["roblox", "lua", "scripting", "help"],
    createdAt: new Date("2024-12-03T08:00:00Z"),
    updatedAt: new Date("2024-12-03T09:15:00Z"),
  },
  {
    id: "disc-4",
    userId: "instructor-1",
    user: dummyUsers.find((u) => u.id === "instructor-1")!,
    title: "[Tips] 5 Kesalahan Umum Pemula di Scratch",
    content:
      "Halo semuanya! Sebagai instruktur, saya sering melihat kesalahan yang sama dari siswa pemula. Berikut 5 kesalahan umum dan cara menghindarinya:\n\n1. Tidak menggunakan broadcast untuk komunikasi antar sprite\n2. Membuat script terlalu panjang tanpa custom blocks\n3. Lupa menambahkan stop conditions di loop\n4. Tidak menggunakan koordinat dengan benar\n5. Tidak testing edge cases\n\nAda yang mau diskusi lebih lanjut?",
    images: [],
    likes: 45,
    comments: [
      {
        id: "comment-6",
        postId: "disc-4",
        userId: "user-1",
        user: dummyUsers.find((u) => u.id === "user-1")!,
        content:
          "Terima kasih pak! Saya baru tahu tentang broadcast. Bisa dijelaskan lebih detail kapan sebaiknya pakai broadcast?",
        likes: 8,
        createdAt: new Date("2024-12-04T10:30:00Z"),
      },
      {
        id: "comment-7",
        postId: "disc-4",
        userId: "instructor-1",
        user: dummyUsers.find((u) => u.id === "instructor-1")!,
        content:
          'Broadcast berguna ketika kamu mau komunikasi antar sprite. Misal sprite player nabrak enemy, player broadcast "hit" dan enemy bisa respond dengan script "when I receive hit". Ini lebih clean daripada pakai variables.',
        likes: 15,
        createdAt: new Date("2024-12-04T11:00:00Z"),
      },
    ],
    tags: ["scratch", "tips", "beginner", "tutorial"],
    createdAt: new Date("2024-12-04T09:00:00Z"),
    updatedAt: new Date("2024-12-04T11:00:00Z"),
  },
  {
    id: "disc-5",
    userId: "user-2",
    user: dummyUsers.find((u) => u.id === "user-2")!,
    title: "Kolaborasi project Roblox - Cari teammate!",
    content:
      "Halo! Saya sedang planning bikin game RPG sederhana di Roblox dan butuh teammate. Yang saya cari:\n\n- 1 orang untuk building/map design\n- 1 orang untuk scripting (saya bisa scripting basic)\n- 1 orang untuk UI design\n\nGame concept: Fantasy RPG dengan quest system sederhana. Target selesai dalam 2-3 bulan.\n\nKalau ada yang interested bisa comment di bawah! 🚀",
    images: ["/projects/rpg-concept.png"],
    likes: 32,
    comments: [
      {
        id: "comment-8",
        postId: "disc-5",
        userId: "user-4",
        user: dummyUsers.find((u) => u.id === "user-4")!,
        content:
          "Saya tertarik untuk UI design! Saya sudah bikin beberapa GUI di Roblox dan suka design. Boleh DM untuk diskusi lebih lanjut?",
        likes: 7,
        createdAt: new Date("2024-12-05T14:20:00Z"),
      },
      {
        id: "comment-9",
        postId: "disc-5",
        userId: "user-5",
        user: dummyUsers.find((u) => u.id === "user-5")!,
        content:
          "Wah project menarik! Saya bisa bantu building. Saya suka bikin medieval/fantasy builds. Portfolio saya ada di Roblox profile.",
        likes: 9,
        createdAt: new Date("2024-12-05T15:45:00Z"),
      },
    ],
    tags: ["roblox", "collaboration", "project", "rpg"],
    createdAt: new Date("2024-12-05T13:30:00Z"),
    updatedAt: new Date("2024-12-05T15:45:00Z"),
  },
];

// Helper functions
export const getLearningPathById = (id: string): LearningPath | undefined => {
  return dummyLearningPaths.find((path) => path.id === id);
};

export const getLearningPathsByCategory = (
  category: "scratch" | "roblox"
): LearningPath[] => {
  return dummyLearningPaths.filter((path) => path.category === category);
};

export const getLearningPathsByDifficulty = (
  difficulty: "beginner" | "intermediate" | "advanced"
): LearningPath[] => {
  return dummyLearningPaths.filter((path) => path.difficulty === difficulty);
};

export const getDiscussionById = (id: string): DiscussionPost | undefined => {
  return dummyDiscussions.find((discussion) => discussion.id === id);
};

export const getDiscussionsByTag = (tag: string): DiscussionPost[] => {
  return dummyDiscussions.filter((discussion) => discussion.tags.includes(tag));
};

export const getDiscussionsByUser = (userId: string): DiscussionPost[] => {
  return dummyDiscussions.filter((discussion) => discussion.userId === userId);
};

export const getPopularDiscussions = (): DiscussionPost[] => {
  return dummyDiscussions.sort((a, b) => b.likes - a.likes);
};

export const getRecentDiscussions = (): DiscussionPost[] => {
  return dummyDiscussions.sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
};
