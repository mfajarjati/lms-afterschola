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
  SimpleGrid,
} from "@mantine/core";
import {
  IconSearch,
  IconFilter,
  IconBook,
  IconStar,
  IconUsers,
  IconClock,
  IconShoppingCart,
  IconHeart,
} from "@tabler/icons-react";
import { dummyCourses } from "../../../data/courses";

export default function UserExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>("all");
  const [levelFilter, setLevelFilter] = useState<string | null>("all");

  const filteredCourses = dummyCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || course.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <Container size="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">
            Jelajahi Kursus
          </Title>
          <Text size="lg" c="dimmed">
            Temukan kursus yang sesuai dengan minat dan level Anda
          </Text>
        </div>

        {/* Search and Filters */}
        <Card padding="lg" radius="md">
          <Grid gutter="md" align="end">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                placeholder="Cari kursus..."
                leftSection={<IconSearch size="1rem" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Select
                placeholder="Kategori"
                leftSection={<IconFilter size="1rem" />}
                data={[
                  { value: "all", label: "Semua Kategori" },
                  { value: "scratch", label: "Scratch" },
                  { value: "roblox", label: "Roblox" },
                ]}
                value={categoryFilter}
                onChange={setCategoryFilter}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <Select
                placeholder="Level"
                data={[
                  { value: "all", label: "Semua Level" },
                  { value: "beginner", label: "Pemula" },
                  { value: "intermediate", label: "Menengah" },
                  { value: "advanced", label: "Lanjutan" },
                ]}
                value={levelFilter}
                onChange={setLevelFilter}
              />
            </Grid.Col>
          </Grid>
        </Card>

        {/* Course Grid */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {filteredCourses.map((course) => (
            <Card key={course.id} radius="lg" className="course-card">
              <Card.Section>
                <div
                  style={{
                    height: 200,
                    background: "var(--gradient-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  {course.category === "scratch" ? "🎨" : "🎮"}
                </div>
              </Card.Section>

              <Stack p="md" gap="sm">
                <Group justify="space-between">
                  <Badge
                    variant="light"
                    color={course.category === "scratch" ? "orange" : "cyan"}
                  >
                    {course.category}
                  </Badge>
                  <Badge
                    variant="light"
                    color={
                      course.level === "beginner"
                        ? "green"
                        : course.level === "intermediate"
                        ? "yellow"
                        : "red"
                    }
                  >
                    {course.level === "beginner"
                      ? "Pemula"
                      : course.level === "intermediate"
                      ? "Menengah"
                      : "Lanjutan"}
                  </Badge>
                </Group>

                <Title order={4} lineClamp={2}>
                  {course.title}
                </Title>
                <Text size="sm" c="dimmed" lineClamp={3}>
                  {course.description}
                </Text>

                <Group gap="xs" mb="sm">
                  <IconUsers size="1rem" />
                  <Text size="sm">{course.enrolledCount} siswa</Text>
                  <IconStar size="1rem" color="gold" />
                  <Text size="sm">{course.rating}</Text>
                  <IconClock size="1rem" />
                  <Text size="sm">{Math.round(course.duration / 60)}h</Text>
                </Group>

                <Group justify="space-between" align="center">
                  <div>
                    <Text size="lg" fw={700} c="green">
                      Rp {course.price.toLocaleString()}
                    </Text>
                    <Text size="xs" c="dimmed">
                      oleh {course.instructor.fullName}
                    </Text>
                  </div>
                  <Group gap="xs">
                    <Button variant="light" size="sm" p={8}>
                      <IconHeart size="1rem" />
                    </Button>
                    <Button
                      className="btn-primary"
                      size="sm"
                      leftSection={<IconShoppingCart size="1rem" />}
                    >
                      Beli
                    </Button>
                  </Group>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {filteredCourses.length === 0 && (
          <Card padding="xl" radius="md">
            <Stack align="center" gap="md">
              <IconBook size="3rem" color="gray" />
              <Text size="lg" c="dimmed">
                Tidak ada kursus ditemukan
              </Text>
              <Text size="sm" c="dimmed" ta="center">
                Coba ubah filter atau kata kunci pencarian Anda
              </Text>
            </Stack>
          </Card>
        )}

        {/* Featured Categories */}
        <Card padding="lg" radius="md">
          <Title order={3} mb="md">
            Kategori Populer
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card
              p="md"
              radius="sm"
              className="card-hover"
              style={{ cursor: "pointer" }}
            >
              <Group>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    background:
                      "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  🎨
                </div>
                <div>
                  <Text fw={600}>Scratch Programming</Text>
                  <Text size="sm" c="dimmed">
                    Visual coding untuk pemula
                  </Text>
                  <Text size="xs" c="dimmed">
                    {
                      dummyCourses.filter((c) => c.category === "scratch")
                        .length
                    }{" "}
                    kursus
                  </Text>
                </div>
              </Group>
            </Card>

            <Card
              p="md"
              radius="sm"
              className="card-hover"
              style={{ cursor: "pointer" }}
            >
              <Group>
                <div
                  style={{
                    width: 60,
                    height: 60,
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #090979 100%)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  🎮
                </div>
                <div>
                  <Text fw={600}>Roblox Development</Text>
                  <Text size="sm" c="dimmed">
                    Buat game 3D yang amazing
                  </Text>
                  <Text size="xs" c="dimmed">
                    {dummyCourses.filter((c) => c.category === "roblox").length}{" "}
                    kursus
                  </Text>
                </div>
              </Group>
            </Card>
          </SimpleGrid>
        </Card>
      </Stack>
    </Container>
  );
}
