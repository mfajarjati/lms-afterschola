"use client";

import { useAuth } from "../../hooks/useAuth";
import { DashboardLayout } from "../../components/sidebar/SidebarLayout";
import { Container, Stack, Text, LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "instructor")) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <Container size="sm" py={100}>
        <LoadingOverlay visible />
      </Container>
    );
  }

  if (!user || user.role !== "instructor") {
    return (
      <Container size="sm" py={100}>
        <Stack align="center" gap="md">
          <Text>Akses ditolak. Anda bukan instruktur.</Text>
        </Stack>
      </Container>
    );
  }

  return (
    <DashboardLayout user={user} onLogout={logout}>
      {children}
    </DashboardLayout>
  );
}
