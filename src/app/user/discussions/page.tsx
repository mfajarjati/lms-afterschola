"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Stack,
  Group,
  Badge,
  Button,
  TextInput,
  Select,
  Avatar,
  ActionIcon,
  Textarea,
  Modal,
} from "@mantine/core";
import {
  IconSearch,
  IconFilter,
  IconMessageCircle,
  IconHeart,
  IconPlus,
  IconSend,
  IconPhoto,
  IconTag,
} from "@tabler/icons-react";
import { dummyDiscussions } from "../../../data/learning";
import Link from "next/link";

export default function UserDiscussionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string | null>("recent");
  const [tagFilter, setTagFilter] = useState<string | null>("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "", tags: "" });

  const allTags = Array.from(new Set(dummyDiscussions.flatMap((d) => d.tags)));

  const filteredDiscussions = dummyDiscussions
    .filter((discussion) => {
      const matchesSearch =
        discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        discussion.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag =
        tagFilter === "all" ||
        (tagFilter && discussion.tags.includes(tagFilter));
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      if (sortBy === "popular") {
        return b.likes - a.likes;
      }
      return b.createdAt.getTime() - a.createdAt.getTime(); // recent
    });

  const handleCreatePost = () => {
    // In real app, this would call API
    console.log("Creating post:", newPost);
    setNewPost({ title: "", content: "", tags: "" });
    setIsCreateModalOpen(false);
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Baru saja";
    if (diffInHours < 24) return `${diffInHours} jam yang lalu`;
    if (diffInHours < 48) return "Kemarin";
    return date.toLocaleDateString("id-ID");
  };

  return (
    <Container size="xl">
      <Stack gap="xl">
        <Group justify="space-between">
          <div>
            <Title order={1} mb="md">
              Forum Diskusi
            </Title>
            <Text size="lg" c="dimmed">
              Berbagi pengalaman, tanya jawab, dan berkolaborasi dengan sesama
              learner
            </Text>
          </div>
          <Button
            leftSection={<IconPlus size="1rem" />}
            className="btn-primary"
            onClick={() => setIsCreateModalOpen(true)}
          >
            Buat Post Baru
          </Button>
        </Group>

        {/* Search and Filters */}
        <Card padding="lg" radius="md">
          <Grid gutter="md" align="end">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                placeholder="Cari diskusi..."
                leftSection={<IconSearch size="1rem" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Select
                placeholder="Urutkan berdasarkan"
                leftSection={<IconFilter size="1rem" />}
                data={[
                  { value: "recent", label: "Terbaru" },
                  { value: "popular", label: "Paling Populer" },
                ]}
                value={sortBy}
                onChange={setSortBy}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Select
                placeholder="Filter berdasarkan tag"
                leftSection={<IconTag size="1rem" />}
                data={[
                  { value: "all", label: "Semua Tag" },
                  ...allTags.map((tag) => ({ value: tag, label: tag })),
                ]}
                value={tagFilter}
                onChange={setTagFilter}
              />
            </Grid.Col>
          </Grid>
        </Card>

        {/* Popular Tags */}
        <Card padding="md" radius="md">
          <Text size="sm" fw={600} mb="xs">
            Tag Populer:
          </Text>
          <Group gap="xs">
            {allTags.slice(0, 8).map((tag) => (
              <Badge
                key={tag}
                variant="light"
                style={{ cursor: "pointer" }}
                onClick={() => setTagFilter(tag)}
              >
                #{tag}
              </Badge>
            ))}
          </Group>
        </Card>

        {/* Discussions List */}
        <Stack gap="md">
          {filteredDiscussions.map((discussion) => (
            <Card
              key={discussion.id}
              padding="lg"
              radius="md"
              className="card-hover"
              withBorder
            >
              <Stack gap="md">
                <Group justify="space-between">
                  <Group>
                    <Avatar src={discussion.user.avatar} size="md" radius="xl">
                      {discussion.user.fullName
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </Avatar>
                    <div>
                      <Text fw={600}>{discussion.user.fullName}</Text>
                      <Text size="xs" c="dimmed">
                        {formatDate(discussion.createdAt)}
                      </Text>
                    </div>
                  </Group>
                  <Group gap="xs">
                    {discussion.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} size="sm" variant="light">
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                </Group>

                <div>
                  <Title order={4} mb="xs">
                    {discussion.title}
                  </Title>
                  <Text size="sm" lineClamp={3}>
                    {discussion.content}
                  </Text>
                </div>

                {discussion.images && discussion.images.length > 0 && (
                  <Group gap="xs">
                    {discussion.images.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          width: 60,
                          height: 60,
                          background: "var(--gradient-accent)",
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "12px",
                        }}
                      >
                        📷
                      </div>
                    ))}
                  </Group>
                )}

                <Group justify="space-between">
                  <Group gap="lg">
                    <Group gap="xs">
                      <ActionIcon variant="subtle" color="red">
                        <IconHeart size="1rem" />
                      </ActionIcon>
                      <Text size="sm">{discussion.likes}</Text>
                    </Group>
                    <Group gap="xs">
                      <Link href={`/user/discussions/discuss-detail`} passHref>
                        <ActionIcon variant="subtle" color="blue">
                          <IconMessageCircle size="1rem" />
                        </ActionIcon>
                      </Link>
                      <Text size="sm">{discussion.comments.length}</Text>
                    </Group>
                  </Group>
                  <Link href="/user/discussions/discuss-detail" passHref>
                    <Button variant="light" size="sm">
                      Lihat Detail
                    </Button>
                  </Link>
                </Group>

                {/* Latest Comments Preview */}
                {discussion.comments.length > 0 && (
                  <div
                    style={{
                      borderTop: "1px solid #e5e7eb",
                      paddingTop: "12px",
                      marginTop: "8px",
                    }}
                  >
                    <Text size="xs" c="dimmed" mb="xs">
                      Komentar terbaru:
                    </Text>
                    {discussion.comments.slice(-1).map((comment) => (
                      <Group key={comment.id} gap="xs">
                        <Avatar src={comment.user.avatar} size="xs" radius="xl">
                          {comment.user.fullName
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </Avatar>
                        <div style={{ flex: 1 }}>
                          <Text size="xs">
                            <span style={{ fontWeight: 600 }}>
                              {comment.user.fullName}
                            </span>
                            : {comment.content.slice(0, 100)}
                            {comment.content.length > 100 ? "..." : ""}
                          </Text>
                        </div>
                      </Group>
                    ))}
                  </div>
                )}
              </Stack>
            </Card>
          ))}
        </Stack>

        {filteredDiscussions.length === 0 && (
          <Card padding="xl" radius="md">
            <Stack align="center" gap="md">
              <IconMessageCircle size="3rem" color="gray" />
              <Text size="lg" c="dimmed">
                Tidak ada diskusi ditemukan
              </Text>
              <Text size="sm" c="dimmed" ta="center">
                Coba ubah kata kunci pencarian atau filter yang digunakan
              </Text>
            </Stack>
          </Card>
        )}

        {/* Create Post Modal */}
        <Modal
          opened={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          title="Buat Post Diskusi Baru"
          size="lg"
        >
          <Stack gap="md">
            <TextInput
              label="Judul"
              placeholder="Tulis judul diskusi yang menarik..."
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.currentTarget.value })
              }
              required
            />

            <Textarea
              label="Konten"
              placeholder="Tulis pertanyaan atau topik diskusi Anda..."
              minRows={4}
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.currentTarget.value })
              }
              required
            />

            <TextInput
              label="Tags"
              placeholder="scratch, beginner, help (pisahkan dengan koma)"
              value={newPost.tags}
              onChange={(e) =>
                setNewPost({ ...newPost, tags: e.currentTarget.value })
              }
            />

            <Group gap="xs">
              <Button variant="light" leftSection={<IconPhoto size="1rem" />}>
                Tambah Gambar
              </Button>
            </Group>

            <Group justify="flex-end" gap="md">
              <Button
                variant="outline"
                onClick={() => setIsCreateModalOpen(false)}
              >
                Batal
              </Button>
              <Button
                leftSection={<IconSend size="1rem" />}
                className="btn-primary"
                onClick={handleCreatePost}
                disabled={!newPost.title || !newPost.content}
              >
                Posting
              </Button>
            </Group>
          </Stack>
        </Modal>
      </Stack>
    </Container>
  );
}
