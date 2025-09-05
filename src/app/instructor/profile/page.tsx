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
} from "@mantine/core";
import { useAuth } from "../../../hooks/useAuth";
import { IconUser, IconMail, IconPhone } from "@tabler/icons-react";

export default function InstructorProfilePage() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [bio, setBio] = useState(user?.bio || "");

  if (!user) return null;

  return (
    <Container size="lg">
      <Stack gap="lg">
        <div>
          <Title order={2}>Profil Instruktur</Title>
          <Text c="dimmed">Kelola informasi akun Anda</Text>
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
                  <Badge color="blue" variant="light">
                    Instruktur
                  </Badge>
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Paper p="lg" radius="md" withBorder>
              <Title order={4} mb="md">
                Informasi Akun
              </Title>
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
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
