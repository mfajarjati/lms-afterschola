"use client";

import { useState, useEffect } from "react";
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

  // === PENANDA: Bagian Edit Profile Instruktur Mulai ===
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");


  useEffect(() => {
    const savedProfile = localStorage.getItem("instructorProfile");
    const savedAvatar = localStorage.getItem("instructorAvatar");

    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setFullName(profile.fullName || "");
      setUsername(profile.username || "");
      setEmail(profile.email || "");
      setPhone(profile.phone || "");
      setBio(profile.bio || "");
    } else if (user) {
      setFullName(user.fullName || "");
      setUsername(user.username || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setBio(user.bio || "");
    }

    if (savedAvatar) {
      setAvatar(savedAvatar);
    } else if (user?.avatar) {
      setAvatar(user.avatar);
    }
  }, [user]);

  if (!user) return null;

  // upload avatar -> convert ke base64
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setAvatar(base64);
        localStorage.setItem("instructorAvatar", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const profile = { fullName, username, email, phone, bio };
    localStorage.setItem("instructorProfile", JSON.stringify(profile));
    if (avatar) localStorage.setItem("instructorAvatar", avatar);
    alert("Profil berhasil disimpan ke lokal!");
  };

  const handleReset = () => {
    if (user) {
      setFullName(user.fullName || "");
      setUsername(user.username || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setBio(user.bio || "");
      setAvatar(user.avatar || "");
    }
  };

  // === PENANDA: Bagian Edit Profile Instruktur Selesai ===
  return (
    <Container size="lg">
      <Stack gap="lg">
        <div>
          <Title order={2}>Profil Instruktur</Title>
          <Text c="dimmed">Kelola informasi akun Anda</Text>
        </div>

        <Grid gutter="lg">
          {/* Kartu avatar */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card padding="lg" radius="md" withBorder>
              <Stack align="center" gap="md">
                <Avatar size={120} radius="xl" src={avatar}>
                  {fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </Avatar>

                <Button variant="light" component="label" size="xs">
                  Upload Foto
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleAvatarUpload}
                  />
                </Button>

                <Stack gap={4} align="center">
                  <Text fw={700}>{fullName}</Text>
                  <Badge color="blue" variant="light">
                    Instruktur
                  </Badge>
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>

          {/* Form profil */}
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
                <Button variant="light" onClick={handleReset}>
                  Reset
                </Button>
                <Button className="btn-primary" onClick={handleSave}>
                  Simpan Perubahan
                </Button>
              </Group>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
