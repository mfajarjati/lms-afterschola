(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/users/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dummyUsers",
    ()=>dummyUsers,
    "getAdmins",
    ()=>getAdmins,
    "getInstructors",
    ()=>getInstructors,
    "getStudents",
    ()=>getStudents,
    "getUserById",
    ()=>getUserById,
    "getUsersByRole",
    ()=>getUsersByRole
]);
const dummyUsers = [
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
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
        updatedAt: new Date("2024-12-01")
    }
];
const getUserById = (id)=>{
    return dummyUsers.find((user)=>user.id === id);
};
const getUsersByRole = (role)=>{
    return dummyUsers.filter((user)=>user.role === role);
};
const getAdmins = ()=>getUsersByRole("admin");
const getInstructors = ()=>getUsersByRole("instructor");
const getStudents = ()=>getUsersByRole("user");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useAuth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "demoCredentials",
    ()=>demoCredentials,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/users/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider(param) {
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Check for stored user session
            const storedUser = localStorage.getItem("afterschola_user");
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (error) {
                    console.error("Error parsing stored user:", error);
                    localStorage.removeItem("afterschola_user");
                }
            }
            setLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const login = async (credentials)=>{
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        // Find user in dummy data
        const foundUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.email.toLowerCase() === credentials.email.toLowerCase());
        if (!foundUser) {
            setLoading(false);
            return {
                success: false,
                error: "Email tidak ditemukan"
            };
        }
        // In real app, you would verify password hash
        // For demo, we'll just check if password is not empty
        if (!credentials.password) {
            setLoading(false);
            return {
                success: false,
                error: "Password salah"
            };
        }
        // Store user session
        localStorage.setItem("afterschola_user", JSON.stringify(foundUser));
        localStorage.setItem("userRole", foundUser.role);
        setUser(foundUser);
        setLoading(false);
        return {
            success: true
        };
    };
    const signup = async (data)=>{
        setLoading(true);
        // Simulate API call delay
        await new Promise((resolve)=>setTimeout(resolve, 1500));
        // Check if email already exists
        const existingUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.email.toLowerCase() === data.email.toLowerCase());
        if (existingUser) {
            setLoading(false);
            return {
                success: false,
                error: "Email sudah terdaftar"
            };
        }
        // Check if username already exists
        const existingUsername = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$users$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyUsers"].find((u)=>u.username.toLowerCase() === data.username.toLowerCase());
        if (existingUsername) {
            setLoading(false);
            return {
                success: false,
                error: "Username sudah digunakan"
            };
        }
        // Create new user
        const newUser = {
            id: "user-".concat(Date.now()),
            email: data.email,
            username: data.username,
            fullName: data.fullName,
            role: "user",
            level: 1,
            points: 0,
            balance: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        // Store user session
        localStorage.setItem("afterschola_user", JSON.stringify(newUser));
        localStorage.setItem("userRole", newUser.role);
        setUser(newUser);
        setLoading(false);
        return {
            success: true
        };
    };
    const logout = ()=>{
        localStorage.removeItem("afterschola_user");
        localStorage.removeItem("userRole");
        setUser(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            signup,
            logout,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/useAuth.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const demoCredentials = {
    admin: {
        email: "admin@afterschola.com",
        password: "admin123"
    },
    instructor: {
        email: "budi.scratch@afterschola.com",
        password: "instructor123"
    },
    student: {
        email: "rian.student@gmail.com",
        password: "student123"
    }
};
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_85689854._.js.map