"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { User, LoginCredentials, SignupData } from "../types";
import { dummyUsers } from "../data/users";

interface AuthContextType {
  user: User | null;
  login: (
    credentials: LoginCredentials
  ) => Promise<{ success: boolean; error?: string }>;
  signup: (data: SignupData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  const login = async (
    credentials: LoginCredentials
  ): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Find user in dummy data
    const foundUser = dummyUsers.find(
      (u) => u.email.toLowerCase() === credentials.email.toLowerCase()
    );

    if (!foundUser) {
      setLoading(false);
      return { success: false, error: "Email tidak ditemukan" };
    }

    // In real app, you would verify password hash
    // For demo, we'll just check if password is not empty
    if (!credentials.password) {
      setLoading(false);
      return { success: false, error: "Password salah" };
    }

    // Store user session
    localStorage.setItem("afterschola_user", JSON.stringify(foundUser));
    localStorage.setItem("userRole", foundUser.role);
    setUser(foundUser);
    setLoading(false);

    return { success: true };
  };

  const signup = async (
    data: SignupData
  ): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Check if email already exists
    const existingUser = dummyUsers.find(
      (u) => u.email.toLowerCase() === data.email.toLowerCase()
    );

    if (existingUser) {
      setLoading(false);
      return { success: false, error: "Email sudah terdaftar" };
    }

    // Check if username already exists
    const existingUsername = dummyUsers.find(
      (u) => u.username.toLowerCase() === data.username.toLowerCase()
    );

    if (existingUsername) {
      setLoading(false);
      return { success: false, error: "Username sudah digunakan" };
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      email: data.email,
      username: data.username,
      fullName: data.fullName,
      role: "user",
      level: 1,
      points: 0,
      balance: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Store user session
    localStorage.setItem("afterschola_user", JSON.stringify(newUser));
    localStorage.setItem("userRole", newUser.role);
    setUser(newUser);
    setLoading(false);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("afterschola_user");
    localStorage.removeItem("userRole");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Demo login credentials for testing
export const demoCredentials = {
  admin: {
    email: "admin@afterschola.com",
    password: "admin123",
  },
  instructor: {
    email: "budi.scratch@afterschola.com",
    password: "instructor123",
  },
  student: {
    email: "rian.student@gmail.com",
    password: "student123",
  },
};
