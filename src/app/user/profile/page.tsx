"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Avatar,
  TextInput,
  Button,
  Grid,
  Paper,
  Divider,
  Badge,
  Tabs,
  Progress,
} from "@mantine/core";
import { useAuth } from "../../../hooks/useAuth";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconTrophy,
  IconReceipt2,
} from "@tabler/icons-react";
import { transactionsSeed } from "../../../data/finance";

export default function UserProfilePage() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [bio, setBio] = useState(user?.bio || "");

  if (!user) return null;

  const level = 7;
  const currentXP = 1280;
  const nextLevelXP = 1500;
  const latestPaid = transactionsSeed
    .filter((t) => t.status === "paid")
    .slice(-8)
    .reverse();

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(n);

  return (
    <Container size="xl">
      <Stack gap="lg">
        <div>
          <Title order={2}>Profil Saya</Title>
          <Text c="dimmed">
            Kelola akun, lihat pencapaian dan riwayat pembelian
          </Text>
        </div>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card padding="lg" radius="md" withBorder>
              <Stack align="center" gap="md">
                <Avatar size={120} radius="xl" src={user.avatar}>
                  {user.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </Avatar>
                <Stack gap={4} align="center">
                  <Text fw={700}>{user.fullName}</Text>
                  <Badge color="green" variant="light">
                    Siswa
                  </Badge>
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Paper p="lg" radius="md" withBorder>
              <Tabs defaultValue="edit">
                <Tabs.List>
                  <Tabs.Tab value="edit" leftSection={<IconUser size={16} />}>
                    Edit Profil
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="achievements"
                    leftSection={<IconTrophy size={16} />}
                  >
                    Pencapaian
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="purchases"
                    leftSection={<IconReceipt2 size={16} />}
                  >
                    Riwayat Pembelian
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="edit" pt="md">
                  <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Nama Lengkap"
                        leftSection={<IconUser size={16} />}
                        value={fullName}
                        onChange={(e) => setFullName(e.currentTarget.value)}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Email"
                        leftSection={<IconMail size={16} />}
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Telepon"
                        leftSection={<IconPhone size={16} />}
                        value={phone}
                        onChange={(e) => setPhone(e.currentTarget.value)}
                      />
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <TextInput
                        label="Bio"
                        value={bio}
                        onChange={(e) => setBio(e.currentTarget.value)}
                      />
                    </Grid.Col>
                  </Grid>
                  <Divider my="md" />
                  <Group justify="end">
                    <Button variant="light">Reset</Button>
                    <Button className="btn-primary">Simpan Perubahan</Button>
                  </Group>
                </Tabs.Panel>

                <Tabs.Panel value="achievements" pt="md">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <div>
                        <Text c="dimmed" size="sm">
                          Level Saat Ini
                        </Text>
                        <Title order={3}>Level {level}</Title>
                      </div>
                      <Badge variant="light" color="indigo">
                        {currentXP}/{nextLevelXP} XP
                      </Badge>
                    </Group>
                    <div>
                      <Group justify="space-between" mb="xs">
                        <Text size="sm">Menuju level berikutnya</Text>
                        <Text size="sm" fw={600}>
                          {Math.round((currentXP / nextLevelXP) * 100)}%
                        </Text>
                      </Group>
                      <Progress
                        value={(currentXP / nextLevelXP) * 100}
                        color="indigo"
                      />
                    </div>
                    <Card withBorder radius="md" p="md">
                      <Text fw={600} mb="xs">
                        Badge & Trophy
                      </Text>
                      <Group gap="xs">
                        <Badge color="yellow" variant="light">
                          Starter
                        </Badge>
                        <Badge color="green" variant="light">
                          First Win
                        </Badge>
                        <Badge color="blue" variant="light">
                          Quiz Master
                        </Badge>
                      </Group>
                    </Card>
                  </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="purchases" pt="md">
                  <Stack gap="sm">
                    {latestPaid.map((t) => (
                      <Group key={t.id} justify="space-between">
                        <div>
                          <Text fw={600} size="sm">
                            {t.courseTitle}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {new Date(t.date).toLocaleString("id-ID", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </Text>
                        </div>
                        <Text fw={700} size="sm" c="green">
                          {formatCurrency(t.amount)}
                        </Text>
                      </Group>
                    ))}
                    {latestPaid.length === 0 && (
                      <Text c="dimmed" size="sm">
                        Belum ada pembelian
                      </Text>
                    )}
                  </Stack>
                </Tabs.Panel>
              </Tabs>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
