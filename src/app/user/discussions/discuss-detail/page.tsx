"use client";

import { useState } from "react";
import {
  Container,
  Card,
  Text,
  Group,
  Avatar,
  Badge,
  Button,
  Stack,
  Textarea,
} from "@mantine/core";
import {
  IconArrowBack,
  IconThumbUp,
  IconThumbDown,
} from "@tabler/icons-react";
import Link from "next/link";

// Dummy data diskusi
const discussion = {
  id: "1",
  author: "Maya Sari",
  role: "siswa",
  date: "5/12/2024",
  title: "Kolaborasi project Roblox - Cari teammate!",
  content:
    "Halo! Saya sedang planning bikin game RPG sederhana di Roblox dan butuh teammate. Target selesai dalam 2-3 bulan. Kalau ada yang interested bisa comment di bawah! 🚀",
  tags: ["Roblox", "Collaboration", "Project"],
};

// Dummy komentar flat
const initialComments = [
  {
    id: 1,
    author: "Hendri Mardani",
    role: "Instruktur",
    date: "3 bulan yang lalu",
    content: "Halo kak, instruktur maw ikut ^^",
    likes: 2,
    userAction: null as "like" | "dislike" | null,
  },
  {
    id: 2,
    author: "Ucok Karbo",
    role: "siswa",
    date: "3 bulan yang lalu",
    content: "Aku pun nak ikut, apa aku boleh ikut bergabung kak?",
    likes: 1,
    userAction: null as "like" | "dislike" | null,
  },
  {
    id: 3,
    author: "Maya Sari",
    role: "Siswa",
    date: "3 bulan yang lalu",
    content: "Wah boleh banget kak",
    likes: 5,
    userAction: null as "like" | "dislike" | null,
  },
];

export default function DiscussionDetailPage() {
  const [comments, setComments] = useState(initialComments);

  const handleLike = (id: number) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;

        if (c.userAction === "like") {
          // batal like
          return { ...c, likes: c.likes - 1, userAction: null };
        } else if (c.userAction === "dislike") {
          // pindah dari dislike ke like
          return { ...c, likes: c.likes + 1, userAction: "like" };
        } else {
          // like pertama kali
          return { ...c, likes: c.likes + 1, userAction: "like" };
        }
      })
    );
  };

  const handleDislike = (id: number) => {
    setComments((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;

        if (c.userAction === "dislike") {
          // batal dislike
          return { ...c, userAction: null };
        } else if (c.userAction === "like") {
          // pindah dari like ke dislike
          return { ...c, likes: c.likes - 1, userAction: "dislike" };
        } else {
          // dislike pertama kali
          return { ...c, userAction: "dislike" };
        }
      })
    );
  };

  return (
    <Container>
      {/* Tombol back */}
      <Link href="/user/discussions">
        <Button
          leftSection={<IconArrowBack size={16} />}
          variant="subtle"
          mb="md"
        >
          Kembali
        </Button>
      </Link>

      {/* Detail Diskusi */}
      <Card withBorder shadow="sm" mb="lg">
        <Group align="flex-start">
          <Avatar radius="xl">{discussion.author.charAt(0)}</Avatar>
          <Stack gap="xs">
            <Group>
              <Text fw={500}>{discussion.author}</Text>
              <Text size="xs" c="dimmed">
                {discussion.date}
              </Text>
            </Group>
            <Text fw={600} size="lg">
              {discussion.title}
            </Text>
            <Text>{discussion.content}</Text>
            <Group>
              {discussion.tags.map((tag) => (
                <Badge key={tag} variant="light">
                  {tag}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Group>
      </Card>

      {/* Form komentar baru */}
      <Card withBorder shadow="sm" mb="lg">
        <Stack>
          <Textarea placeholder="Tulis komentar Anda..." minRows={3} />
          <Group justify="flex-start">
            <Button variant="light">Kirim</Button>
          </Group>
        </Stack>
      </Card>

      {/* Semua komentar */}
      <Card withBorder shadow="sm">
        <Stack>
          {comments.map((comment) => (
            <Stack key={comment.id} mt="md">
              <Group align="flex-start">
                <Avatar radius="xl">{comment.author.charAt(0)}</Avatar>
                <Stack gap="xs" style={{ flex: 1 }}>
                  {/* Info user */}
                  <Group>
                    <Text fw={500}>{comment.author}</Text>
                    {comment.role && (
                      <Badge color="blue" variant="light" size="sm">
                        {comment.role}
                      </Badge>
                    )}
                    <Text size="xs" c="dimmed">
                      {comment.date}
                    </Text>
                  </Group>

                  {/* Isi komentar */}
                  <Text>{comment.content}</Text>
                  {/* Tombol aksi */}
                  <Group gap="sm" mt="xs">
                    {/* Tombol Like */}
                    <Button
                      size="xs"
                      variant={comment.userAction === "like" ? "filled" : "subtle"}
                      color="blue"
                      leftSection={<IconThumbUp size={14} />}
                      onClick={() => handleLike(comment.id)}
                    >
                      {comment.likes || 0}
                    </Button>
                    {/* Tombol Dislike */}
                    <Button
                      size="xs"
                      variant={comment.userAction === "dislike" ? "filled" : "subtle"}
                      color="red"
                      onClick={() => handleDislike(comment.id)}
                      px="xs" // biar lebih rapat, gak ada ruang kosong besar
                    >
                      <IconThumbDown size={14} />
                    </Button>
                  </Group>
                </Stack>
              </Group>
            </Stack>
          ))}
        </Stack>
      </Card>
    </Container>
  );
}
