"use client";

import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Grid,
  Card,
  Badge,
  LoadingOverlay,
  Paper,
} from "@mantine/core";
import {
  IconBook,
  IconTrophy,
  IconArrowRight,
  IconBrandSteam,
} from "@tabler/icons-react";

function LandingPage() {
  const router = useRouter();

  return (
    <Container size="xl" py={50}>
      <Stack align="center" gap="xl">
        <div style={{ textAlign: "center" }}>
          <Title size="3rem" className="text-gradient" mb="md">
            AfterSchola
          </Title>
          <Text size="xl" c="dimmed" mb="xl">
            Platform pembelajaran pemrograman visual untuk anak-anak
          </Text>
          <Text size="lg" mb="xl">
            Belajar Scratch dan Roblox dengan mudah dan menyenangkan!
          </Text>
          <Group justify="center" gap="md">
            <Button
              size="lg"
              className="btn-primary"
              rightSection={<IconArrowRight size="1.2rem" />}
              onClick={() => router.push("/signup")}
            >
              Mulai Belajar Gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/login")}
            >
              Masuk
            </Button>
          </Group>
        </div>

        <Grid gutter="xl" mt="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card padding="xl" radius="md" className="card-hover" h="100%">
              <Stack align="center" gap="md">
                <IconBook size="3rem" className="text-gradient" />
                <Title order={3} ta="center">
                  Scratch Programming
                </Title>
                <Text ta="center" c="dimmed">
                  Pelajari dasar-dasar pemrograman dengan visual coding yang
                  mudah dipahami
                </Text>
                <Badge variant="light" color="green">
                  Untuk Pemula
                </Badge>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card padding="xl" radius="md" className="card-hover" h="100%">
              <Stack align="center" gap="md">
                <IconBrandSteam size="3rem" className="text-gradient" />
                <Title order={3} ta="center">
                  Roblox Development
                </Title>
                <Text ta="center" c="dimmed">
                  Buat game 3D yang amazing dengan Roblox Studio dan Lua
                  scripting
                </Text>
                <Badge variant="light" color="blue">
                  Game Development
                </Badge>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card padding="xl" radius="md" className="card-hover" h="100%">
              <Stack align="center" gap="md">
                <IconTrophy size="3rem" className="text-gradient" />
                <Title order={3} ta="center">
                  Gamifikasi
                </Title>
                <Text ta="center" c="dimmed">
                  Raih poin, level up, dan dapatkan sertifikat untuk setiap
                  pencapaian
                </Text>
                <Badge variant="light" color="yellow">
                  Reward System
                </Badge>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Paper p="xl" radius="md" mt="xl" w="100%" maw={800}>
          <Stack align="center" gap="sm">
            <Title order={2}>Demo Login Credentials</Title>
            <Text ta="center">Gunakan credentials berikut untuk testing:</Text>
            <Grid gutter="md">
              <Grid.Col span={4}>
                <Card p="md" radius="sm">
                  <Stack gap="xs">
                    <Text fw={600} c="red">
                      Admin
                    </Text>
                    <Text size="sm">admin@afterschola.com</Text>
                    <Text size="sm">password: admin123</Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={4}>
                <Card p="md" radius="sm">
                  <Stack gap="xs">
                    <Text fw={600} c="blue">
                      Instruktur
                    </Text>
                    <Text size="sm">budi.scratch@afterschola.com</Text>
                    <Text size="sm">password: instructor123</Text>
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={4}>
                <Card p="md" radius="sm">
                  <Stack gap="xs">
                    <Text fw={600} c="green">
                      Siswa
                    </Text>
                    <Text size="sm">rian.student@gmail.com</Text>
                    <Text size="sm">password: student123</Text>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

function AppContent() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <Container size="sm" py={100}>
        <Stack align="center" gap="md">
          <LoadingOverlay visible />
          <Text>Memuat...</Text>
        </Stack>
      </Container>
    );
  }

  return <LandingPage />;
}

export default function HomePage() {
  return <AppContent />;
}
