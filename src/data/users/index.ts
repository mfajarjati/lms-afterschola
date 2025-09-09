interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  role: "admin" | "instructor" | "user";
  avatar: string;
  phone: string;
  bio: string;
  level: number;
  points: number;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

export const dummyUsers: User[] = [
  // Admin Users
  {
    id: "admin-1",
    email: "admin@afterschola.com",
    username: "admin_master",
    fullName: "Admin Master",
    role: "admin",
    avatar: "/avatars/admin-1.jpg",
    phone: "+62812345678",
    bio: "Platform Administrator with 5+ years experience in educational technology.",
    level: 10,
    points: 5000,
    balance: 1000000,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "admin-2",
    email: "superadmin@afterschola.com",
    username: "super_admin",
    fullName: "Super Admin",
    role: "admin",
    avatar: "/avatars/admin-2.jpg",
    phone: "+62887654321",
    bio: "Senior Administrator managing platform operations and user experience.",
    level: 15,
    points: 7500,
    balance: 2000000,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-12-01"),
  },

  // Instructor Users
  {
    id: "instructor-1",
    email: "budi.scratch@afterschola.com",
    username: "budi_scratch_master",
    fullName: "Budi Santoso",
    role: "instructor",
    avatar: "/avatars/instructor-1.jpg",
    phone: "+62812111222",
    bio: "Certified Scratch instructor with 8+ years experience teaching kids programming. Passionate about making coding fun and accessible.",
    level: 8,
    points: 3200,
    balance: 15000000,
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "instructor-2",
    email: "sari.roblox@afterschola.com",
    username: "sari_roblox_pro",
    fullName: "Sari Wulandari",
    role: "instructor",
    avatar: "/avatars/instructor-2.jpg",
    phone: "+62813333444",
    bio: "Professional Roblox game developer and educator. Expert in Lua scripting and game design principles.",
    level: 9,
    points: 4100,
    balance: 22000000,
    createdAt: new Date("2024-02-20"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "instructor-3",
    email: "andi.games@afterschola.com",
    username: "andi_game_dev",
    fullName: "Andi Pratama",
    role: "instructor",
    avatar: "/avatars/instructor-3.jpg",
    phone: "+62814555666",
    bio: "Multi-platform game developer specializing in both Scratch and Roblox. 6+ years teaching experience.",
    level: 7,
    points: 2800,
    balance: 12000000,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-12-01"),
  },

  {
    id: "instructor-4",
    email: "cahya@afterschola.com",
    username: "cahya_instructor",
    fullName: "Cahyaaa",
    role: "instructor",
    avatar: "/avatars/instructor-3.jpg",
    phone: "+628221123445",
    bio: "Akun demo",
    level: 420,
    points: 5090,
    balance: 5000000000000000,
    createdAt: new Date("2025-03-01"),
    updatedAt: new Date("2025-12-01"),
  },

  // Student Users
  {
    id: "user-1",
    email: "rian.student@gmail.com",
    username: "rian_coder",
    fullName: "Rian Nugraha",
    role: "user",
    avatar: "/avatars/abdul.jpg",
    phone: "+62815777888",
    bio: "Passionate young programmer learning Scratch and game development.",
    level: 3,
    points: 850,
    balance: 150000,
    createdAt: new Date("2024-05-10"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "user-2",
    email: "maya.gamer@gmail.com",
    username: "maya_builder",
    fullName: "Maya Sari",
    role: "user",
    avatar: "/avatars/user-2.jpg",
    phone: "+62816999000",
    bio: "Creative student interested in building games and interactive stories.",
    level: 4,
    points: 1200,
    balance: 200000,
    createdAt: new Date("2024-06-15"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "user-3",
    email: "dimas.junior@gmail.com",
    username: "dimas_scratch",
    fullName: "Dimas Pratama",
    role: "user",
    avatar: "/avatars/user-3.jpg",
    phone: "+62817111222",
    bio: "Beginner in programming, excited to learn Scratch and create my first game.",
    level: 1,
    points: 320,
    balance: 50000,
    createdAt: new Date("2024-08-20"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "user-4",
    email: "nina.creative@gmail.com",
    username: "nina_artist",
    fullName: "Nina Kusuma",
    role: "user",
    avatar: "/avatars/user-4.jpg",
    phone: "+62818333444",
    bio: "Art student learning to combine creativity with programming through visual coding.",
    level: 2,
    points: 680,
    balance: 125000,
    createdAt: new Date("2024-07-05"),
    updatedAt: new Date("2024-12-01"),
  },
  {
    id: "user-5",
    email: "fajar.gamer@gmail.com",
    username: "fajar_roblox",
    fullName: "Fajar Ramadhan",
    role: "user",
    avatar: "/avatars/user-5.jpg",
    phone: "+62819555666",
    bio: "Roblox enthusiast learning to create my own games and experiences.",
    level: 5,
    points: 1850,
    balance: 300000,
    createdAt: new Date("2024-04-12"),
    updatedAt: new Date("2024-12-01"),
  },
];

// Helper functions
export const getUserById = (id: string): User | undefined => {
  return dummyUsers.find((user) => user.id === id);
};

export const getUsersByRole = (
  role: "admin" | "instructor" | "user"
): User[] => {
  return dummyUsers.filter((user) => user.role === role);
};

export const getAdmins = (): User[] => getUsersByRole("admin");
export const getInstructors = (): User[] => getUsersByRole("instructor");
export const getStudents = (): User[] => getUsersByRole("user");
