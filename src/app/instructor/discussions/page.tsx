"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Avatar,
  ActionIcon,
  Button,
  Textarea,
  Badge,
  SegmentedControl,
  TextInput,
} from "@mantine/core";
import {
  IconHeart,
  IconMessageCircle,
  IconSend,
  IconPlus,
} from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { dummyUsers } from "../../../data/users";
import { User } from "../../../types";

type Post = {
  id: string;
  user: User;
  content: string;
  images?: string[];
  likes: number;
  likedByMe?: boolean;
  tags: string[];
  createdAt: Date;
  comments: {
    id: string;
    user: User;
    content: string;
    createdAt: Date;
  }[];
};

const currentUser = dummyUsers.find((u) => u.role === "instructor")!;

export default function InstructorDiscussionsFeed() {
  const students = dummyUsers.filter((u) => u.role === "user");
  const seedPosts: Post[] = useMemo(
    () => [
      {
        id: "p1",
        user: students[0] || currentUser,
        content:
          "Halo semua! Ada yang bisa bantu cara membuat karakter lompat dua kali di Scratch?",
        likes: 12,
        tags: ["scratch", "movement"],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
        comments: [
          {
            id: "c1",
            user: currentUser,
            content:
              "Gunakan variable untuk counter jump, reset saat menyentuh tanah.",
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
          },
        ],
      },
      {
        id: "p2",
        user: currentUser,
        content:
          "Baru upload video materi baru: Looping dan Events di Roblox Lua. Cek ya!",
        likes: 30,
        likedByMe: true,
        tags: ["roblox", "lua", "video"],
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
        comments: [
          {
            id: "c2",
            user: students[1] || currentUser,
            content: "Videonya jelas banget, makasih kak!",
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 23),
          },
        ],
      },
    ],
    [students]
  );

  const [filter, setFilter] = useState<string>("all");
  const [posts, setPosts] = useState<Post[]>(seedPosts);
  const [composer, setComposer] = useState("");
  const [commentDraft, setCommentDraft] = useState<Record<string, string>>({});

  const filteredPosts = posts.filter((p) =>
    filter === "mine" ? p.user.id === currentUser.id : true
  );

  const postNow = () => {
    if (!composer.trim()) return;
    const newPost: Post = {
      id: `p_${Date.now()}`,
      user: currentUser,
      content: composer.trim(),
      images: [],
      likes: 0,
      tags: [],
      createdAt: new Date(),
      comments: [],
    };
    setPosts((prev) => [newPost, ...prev]);
    setComposer("");
  };

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              likedByMe: !p.likedByMe,
              likes: p.likedByMe ? Math.max(0, p.likes - 1) : p.likes + 1,
            }
          : p
      )
    );
  };

  const addComment = (id: string) => {
    const text = (commentDraft[id] || "").trim();
    if (!text) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              comments: [
                ...p.comments,
                {
                  id: `c_${Date.now()}`,
                  user: currentUser,
                  content: text,
                  createdAt: new Date(),
                },
              ],
            }
          : p
      )
    );
    setCommentDraft((d) => ({ ...d, [id]: "" }));
  };

  return (
    <Container size="xl">
      <Stack gap="lg">
        <Group justify="space-between" align="center">
          <div>
            <Title order={1} mb="xs">
              Forum Diskusi
            </Title>
            <Text c="dimmed">Bagikan update, tanya, dan bantu yang lain</Text>
          </div>
          <SegmentedControl
            value={filter}
            onChange={setFilter}
            data={[
              { label: "Semua", value: "all" },
              { label: "Postingan Saya", value: "mine" },
            ]}
          />
        </Group>

        {/* Composer */}
        <Card padding="md" radius="md">
          <Group align="start">
            <Avatar radius="xl" size="md" src={currentUser.avatar}>
              {currentUser.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </Avatar>
            <Stack w="100%" gap="xs">
              <Textarea
                placeholder="Apa yang ingin Anda bagikan?"
                autosize
                minRows={2}
                value={composer}
                onChange={(e) => setComposer(e.currentTarget.value)}
              />
              <Group justify="space-between">
                <Group gap="xs">
                  <Badge variant="light">#scratch</Badge>
                  <Badge variant="light">#roblox</Badge>
                </Group>
                <Button
                  leftSection={<IconPlus size="1rem" />}
                  className="btn-primary"
                  onClick={postNow}
                >
                  Post
                </Button>
              </Group>
            </Stack>
          </Group>
        </Card>

        {/* Feed */}
        <Stack>
          {filteredPosts.map((p) => (
            <Card key={p.id} padding="md" radius="md">
              <Group align="start" wrap="nowrap">
                <Avatar radius="xl" size="md" src={p.user.avatar}>
                  {p.user.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Avatar>
                <Stack gap={4} style={{ flex: 1 }}>
                  <Group justify="space-between" align="start">
                    <div>
                      <Group gap={8}>
                        <Text fw={600}>{p.user.fullName}</Text>
                        <Badge variant="light" size="xs">
                          {p.user.role}
                        </Badge>
                      </Group>
                      <Text size="xs" c="dimmed">
                        {p.createdAt.toLocaleString("id-ID", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </Text>
                    </div>
                  </Group>
                  <Text>{p.content}</Text>
                  {p.tags.length > 0 && (
                    <Group gap="xs">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="light" size="xs">
                          #{t}
                        </Badge>
                      ))}
                    </Group>
                  )}
                  <Group gap="lg" mt="xs">
                    <ActionIcon
                      variant={p.likedByMe ? "filled" : "light"}
                      color="red"
                      onClick={() => toggleLike(p.id)}
                    >
                      <IconHeart size="1.1rem" />
                    </ActionIcon>
                    <Group gap={4}>
                      <IconMessageCircle size={16} />
                      <Text size="sm" c="dimmed">
                        {p.comments.length} komentar
                      </Text>
                    </Group>
                    <Text size="sm" c="dimmed">
                      {p.likes} suka
                    </Text>
                  </Group>

                  {/* Comments */}
                  <Stack gap="sm" mt="sm">
                    {p.comments.slice(-3).map((c) => (
                      <Group key={c.id} align="start" wrap="nowrap">
                        <Avatar size="sm" radius="xl" src={c.user.avatar}>
                          {c.user.fullName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </Avatar>
                        <Card
                          withBorder
                          padding="xs"
                          radius="sm"
                          style={{ flex: 1 }}
                        >
                          <Group gap={6}>
                            <Text fw={600} size="sm">
                              {c.user.fullName}
                            </Text>
                            <Text size="xs" c="dimmed">
                              {c.createdAt.toLocaleString("id-ID", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </Text>
                          </Group>
                          <Text size="sm">{c.content}</Text>
                        </Card>
                      </Group>
                    ))}
                  </Stack>

                  {/* Add comment */}
                  <Group mt="sm" align="center">
                    <Avatar size="sm" radius="xl" src={currentUser.avatar}>
                      {currentUser.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <TextInput
                      placeholder="Tulis komentar..."
                      value={commentDraft[p.id] || ""}
                      onChange={(e) => {
                        const value = e.currentTarget.value;
                        setCommentDraft((d) => ({
                          ...d,
                          [p.id]: value,
                        }));
                      }}
                      style={{ flex: 1 }}
                    />
                    <ActionIcon
                      variant="filled"
                      color="blue"
                      onClick={() => addComment(p.id)}
                    >
                      <IconSend size="1rem" />
                    </ActionIcon>
                  </Group>
                </Stack>
              </Group>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
