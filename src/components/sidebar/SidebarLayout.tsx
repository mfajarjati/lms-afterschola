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
//

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: User;
  onLogout: () => void;
}

const getNavigationItems = (role: User["role"]): NavigationItem[] => {
  const baseItems: NavigationItem[] = [
    {
      label: "Dashboard",
      href: `/${role}/dashboard`,
      icon: "IconDashboard",
    },
  ];

  switch (role) {
    case "admin":
      return [
        ...baseItems,

        {
          label: "Manajemen User",
          href: "/admin/users",
          icon: "IconUsers",
        },
        {
          label: "Manajemen Keuangan",
          href: "/admin/earnings",
          icon: "IconCoin",
        },
      ];

    case "instructor":
      return [
        ...baseItems,
        {
          label: "Kursus Saya",
          href: "/instructor/courses",
          icon: "IconBook",
        },

        {
          label: "Forum Diskusi",
          href: "/instructor/discussions",
          icon: "IconMessageCircle",
        },

        {
          label: "Penghasilan",
          href: "/instructor/earnings",
          icon: "IconCoin",
        },
      ];

    case "user":
      return [
        ...baseItems,
        {
          label: "Kursus Saya",
          href: "/user/courses",
          icon: "IconBook",
        },
        {
          label: "Jelajahi Kursus",
          href: "/user/explore",
          icon: "IconBookmark",
        },
        {
          label: "Learning Path",
          href: "/user/learning-paths",
          icon: "IconPlaylist",
        },
        {
          label: "Diskusi & Forum",
          href: "/user/discussions",
          icon: "IconMessageCircle",
        },
      ];

    default:
      return baseItems;
  }
};

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

export function DashboardLayout({
  children,
  user,
  onLogout,
}: DashboardLayoutProps) {
  const pathname = usePathname();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [navOpened, setNavOpened] = useState(false);

  const navigationItems = getNavigationItems(user.role);

  const getRoleColor = (role: User["role"]) => {
    switch (role) {
      case "admin":
        return "red";
      case "instructor":
        return "blue";
      case "user":
        return "green";
      default:
        return "gray";
    }
  };

  const getRoleLabel = (role: User["role"]) => {
    switch (role) {
      case "admin":
        return "Admin";
      case "instructor":
        return "Instruktur";
      case "user":
        return "Siswa";
      default:
        return "User";
    }
  };

  // Close navbar on route change (especially on mobile) to avoid overlaying content
  useEffect(() => {
    setNavOpened(false);
  }, [pathname]);

  return (
    <AppShell
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !navOpened },
      }}
      header={{ height: 70 }}
      padding="md"
    >
      <AppShell.Header withBorder>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            {/* Mobile burger */}
            <Burger
              opened={navOpened}
              onClick={() => setNavOpened((o) => !o)}
              hiddenFrom="sm"
              size="sm"
            />
            {/* Brand logo */}
            <Link
              href={`/${user.role}/dashboard`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Image
                src="/logo-text.png"
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

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Group>
                    <Avatar
                      src={user.avatar}
                      alt={user.fullName}
                      radius="xl"
                      size="md"
                    >
                      {user.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </Avatar>
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>
                  {user.fullName}
                  <Text size="xs" c="dimmed">
                    @{user.username}
                  </Text>
                </Menu.Label>
                <Menu.Divider />
                <Menu.Item
                  component={Link}
                  href={`/${user.role}/profile`}
                  leftSection={<IconUser size="1rem" />}
                >
                  Profil Saya
                </Menu.Item>

                <Menu.Divider />
                <Menu.Item
                  leftSection={<IconLogout size="1rem" />}
                  color="red"
                  onClick={onLogout}
                >
                  Keluar
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" withBorder>
        <ScrollArea>
          <Stack gap="sm">
            {navigationItems.map((item) => {
              const Icon = iconMap[item.icon];
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

      <AppShell.Main className="main-content">{children}</AppShell.Main>
    </AppShell>
  );
}
