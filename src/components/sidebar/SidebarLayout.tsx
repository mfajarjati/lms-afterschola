"use client";

import React, { useEffect, useState } from "react";
import {
  AppShell,
  Burger,
  Text,
  Group,
  Menu,
  Avatar,
  UnstyledButton,
  ScrollArea,
  Stack,
  Badge,
  Switch,
  useMantineColorScheme,
} from "@mantine/core";
import Image from "next/image";
import { User, NavigationItem } from "../../types";
import {
  IconLogout,
  IconUser,
  IconMoon,
  IconSun,
  IconDashboard,
  IconBook,
  IconUsers,
  IconMessageCircle,
  IconChartBar,
  IconCoin,
  IconCertificate,
  IconBookmark,
  IconPlaylist,
  IconQuestionMark,
  IconAward,
  IconWallet,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: User;
  onLogout: () => void;
}

const getNavigationItems = (role: User["role"]): NavigationItem[] => {
  const baseItems: NavigationItem[] = [
    { label: "Dashboard", href: `/${role}/dashboard`, icon: "IconDashboard" },
  ];
  switch (role) {
    case "admin":
      return [
        ...baseItems,
        { label: "Manajemen User", href: "/admin/users", icon: "IconUsers" },
        { label: "Manajemen Keuangan", href: "/admin/earnings", icon: "IconCoin" },
      ];
    case "instructor":
      return [
        ...baseItems,
        { label: "Kursus Saya", href: "/instructor/courses", icon: "IconBook" },
        { label: "Forum Diskusi", href: "/instructor/discussions", icon: "IconMessageCircle" },
        { label: "Penghasilan", href: "/instructor/earnings", icon: "IconCoin" },
      ];
    case "user":
      return [
        ...baseItems,
        { label: "Kursus Saya", href: "/user/courses", icon: "IconBook" },
        { label: "Jelajahi Kursus", href: "/user/explore", icon: "IconBookmark" },
        { label: "Learning Path", href: "/user/learning-paths", icon: "IconPlaylist" },
        { label: "Diskusi & Forum", href: "/user/discussions", icon: "IconMessageCircle" },
      ];
    default:
      return baseItems;
  }
};

// map string keys to icon components (keys are the same strings used in getNavigationItems)
const iconMap: Record<string, React.FC<{ size?: string | number }>> = {
  IconDashboard,
  IconBook,
  IconUsers,
  IconMessageCircle,
  IconChartBar,
  IconCoin,
  IconCertificate,
  IconBookmark,
  IconPlaylist,
  IconQuestionMark,
  IconAward,
  IconWallet,
  IconShoppingCart,
};

export function DashboardLayout({ children, user, onLogout }: DashboardLayoutProps) {
  const pathname = usePathname() || "";
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [navOpened, setNavOpened] = useState(false);

  // Local UI state (initially fallback to user prop)
  // === PENANDA: Avatar Navbar Mulai ===
  const [avatar, setAvatar] = useState<string | null>(user?.avatar || null);
  const [fullName, setFullName] = useState<string>(user?.fullName || "");
  const [username, setUsername] = useState<string>(user?.username || "");

  // Decide whether to hide navbar when on profile page of the current role
  const hideNavbar = pathname === `/${user.role}/profile`;

  // read any saved avatar/profile from localStorage (per-user key) and listen to updates
  useEffect(() => {
    if (!user || !user.id) return;

    const perUserAvatarKey = `user-avatar-${user.id}`;
    const perUserProfileKey = `user-profile-${user.id}`;

    // legacy keys for backward compatibility (your profile page used these previously)
    const legacyAvatarKey = user.role === "instructor" ? "instructorAvatar" : null;
    const legacyProfileKey = user.role === "instructor" ? "instructorProfile" : null;

    // get avatar: prefer per-user key, then legacy, then server value
    const avatarFromLS =
      localStorage.getItem(perUserAvatarKey) ||
      (legacyAvatarKey ? localStorage.getItem(legacyAvatarKey) : null) ||
      user.avatar ||
      null;
  setAvatar(avatarFromLS);
  // === PENANDA: Avatar Navbar Selesai ===

    // get profile overrides
    const profileJson =
      localStorage.getItem(perUserProfileKey) ||
      (legacyProfileKey ? localStorage.getItem(legacyProfileKey) : null);
    if (profileJson) {
      try {
        const parsed = JSON.parse(profileJson);
        setFullName(parsed.fullName || user.fullName || "");
        setUsername(parsed.username || user.username || "");
      } catch {
        setFullName(user.fullName || "");
        setUsername(user.username || "");
      }
    } else {
      setFullName(user.fullName || "");
      setUsername(user.username || "");
    }

    // storage event (other tabs) -> update if relevant key changed
    const onStorage = (e: StorageEvent) => {
      if (!e.key) return;
      if (
        e.key === perUserAvatarKey ||
        e.key === perUserProfileKey ||
        e.key === legacyAvatarKey ||
        e.key === legacyProfileKey
      ) {
        const newAvatar =
          localStorage.getItem(perUserAvatarKey) ||
          (legacyAvatarKey ? localStorage.getItem(legacyAvatarKey) : null) ||
          user.avatar ||
          null;
        setAvatar(newAvatar);

        const prof =
          localStorage.getItem(perUserProfileKey) ||
          (legacyProfileKey ? localStorage.getItem(legacyProfileKey) : null);
        if (prof) {
          try {
            const p = JSON.parse(prof);
            setFullName(p.fullName || user.fullName || "");
            setUsername(p.username || user.username || "");
          } catch {
            setFullName(user.fullName || "");
            setUsername(user.username || "");
          }
        }
      }
    };
    window.addEventListener("storage", onStorage);

    // custom event (same-tab updates) -- nice to call from profile page after saving
    const onCustom = (ev: Event) => {
      // expect: new CustomEvent("user-profile-updated", { detail: { userId, avatar, profile } })
      const custom = ev as CustomEvent;
      const d = custom?.detail;
      if (d?.userId === user.id) {
        if (d.avatar !== undefined) setAvatar(d.avatar || user.avatar || null);
        if (d.profile) {
          setFullName(d.profile.fullName || user.fullName || "");
          setUsername(d.profile.username || user.username || "");
        }
      }
    };
    window.addEventListener("user-profile-updated", onCustom as EventListener);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("user-profile-updated", onCustom as EventListener);
    };
  }, [user]);

  const navigationItems = getNavigationItems(user.role);

  const getRoleColor = (role: User["role"]) =>
    role === "admin" ? "red" : role === "instructor" ? "blue" : "green";

  const getRoleLabel = (role: User["role"]) =>
    role === "admin" ? "Admin" : role === "instructor" ? "Instruktur" : "Siswa";

  useEffect(() => {
    setNavOpened(false);
  }, [pathname]);

  return (
    <AppShell
      navbar={
        !hideNavbar
          ? {
              width: 280,
              breakpoint: "sm",
              collapsed: { mobile: !navOpened },
            }
          : undefined
      }
      header={{ height: 70 }}
      padding="md"
    >
      <AppShell.Header bg={"var(--gradient-accent)"}>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={navOpened}
              onClick={() => setNavOpened((o) => !o)}
              hiddenFrom="sm"
              size="sm"
            />
            <Link href={`/${user.role}/dashboard`} style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/logo-text2.png"
                alt="Afterschola"
                width={140}
                height={28}
                priority
                style={{ height: 48, width: "auto" }}
                className="hidden md:block"
              />
            </Link>
            <Badge color={getRoleColor(user.role)} variant="light">
              {getRoleLabel(user.role)}
            </Badge>
          </Group>

          <Group>
            <Switch
              size="md"
              color="dark.4"
              onLabel={<IconSun size="1rem" stroke={2.5} />}
              offLabel={<IconMoon size="1rem" stroke={2.5} />}
              checked={colorScheme === "light"}
              onChange={() => toggleColorScheme()}
            />

            <Menu shadow="md" width={220}>
              <Menu.Target>
                <UnstyledButton>
                  <Group>
                    {/* === PENANDA: Avatar Navbar Mulai === */}
                    <Avatar src={avatar || undefined} alt={fullName || user.fullName} radius="xl" size="md">
                      {!avatar &&
                        (fullName || user.fullName)
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                    </Avatar>
                    {/* === PENANDA: Avatar Navbar Selesai === */}
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>
                  {fullName || user.fullName}
                  <Text size="xs" c="dimmed">
                    @{username || user.username}
                  </Text>
                </Menu.Label>
                <Menu.Divider />
                <Menu.Item component={Link} href={`/${user.role}/profile`} leftSection={<IconUser size="1rem" />}>
                  Profil Saya
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<IconLogout size="1rem" />} color="red" onClick={onLogout}>
                  Keluar
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      {!hideNavbar && (
        <AppShell.Navbar p="md" withBorder>
          <ScrollArea>
            <Stack gap="sm">
              {navigationItems.map((item) => {
                const Icon = iconMap[item.icon] ?? (() => null);
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    style={{ textDecoration: "none" }}
                    onClick={() => setNavOpened(false)}
                  >
                    <Group>
                      <Icon size="1.2rem" />
                      <Text size="sm">{item.label}</Text>
                    </Group>
                  </Link>
                );
              })}
            </Stack>
          </ScrollArea>
        </AppShell.Navbar>
      )}

      <AppShell.Main className="main-content">{children}</AppShell.Main>
    </AppShell>
  );
}
