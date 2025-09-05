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
  Select,
  SimpleGrid,
  Divider,
} from "@mantine/core";
import {
  IconRoute,
  IconClock,
  IconStar,
  IconUsers,
  IconTrophy,
  IconChevronRight,
  IconBook,
  IconTarget,
} from "@tabler/icons-react";
import { dummyLearningPaths } from "../../../data/learning";

export default function UserLearningPathsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(
    "all"
  );

  const filteredPaths = dummyLearningPaths.filter((path) => {
    const matchesCategory =
      categoryFilter === "all" || path.category === categoryFilter;
    const matchesDifficulty =
      difficultyFilter === "all" || path.difficulty === difficultyFilter;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "green";
      case "intermediate":
        return "yellow";
      case "advanced":
        return "red";
      default:
        return "gray";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "Pemula";
      case "intermediate":
        return "Menengah";
      case "advanced":
        return "Lanjutan";
      default:
        return difficulty;
    }
  };

  return (
    <Container size="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">
            Learning Paths
          </Title>
          <Text size="lg" c="dimmed">
            Ikuti jalur pembelajaran terstruktur untuk menguasai skill
            programming step by step
          </Text>
        </div>

        {/* Filters */}
        <Card padding="lg" radius="md">
          <Grid gutter="md" align="end">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="Kategori"
                placeholder="Pilih kategori"
                data={[
                  { value: "all", label: "Semua Kategori" },
                  { value: "scratch", label: "Scratch" },
                  { value: "roblox", label: "Roblox" },
                ]}
                value={categoryFilter}
                onChange={setCategoryFilter}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Select
                label="Tingkat Kesulitan"
                placeholder="Pilih tingkat"
                data={[
                  { value: "all", label: "Semua Tingkat" },
                  { value: "beginner", label: "Pemula" },
                  { value: "intermediate", label: "Menengah" },
                  { value: "advanced", label: "Lanjutan" },
                ]}
                value={difficultyFilter}
                onChange={setDifficultyFilter}
              />
            </Grid.Col>
          </Grid>
        </Card>

        {/* Learning Paths Grid */}
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
          {filteredPaths.map((path) => (
            <Card
              key={path.id}
              radius="lg"
              padding="lg"
              className="card-hover"
              withBorder
            >
              <Stack gap="md">
                <Group justify="space-between">
                  <Group>
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        background: "var(--gradient-accent)",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      🎯
                    </div>
                    <div>
                      <Badge
                        variant="light"
                        color={path.category === "scratch" ? "orange" : "cyan"}
                        mb="xs"
                      >
                        {path.category}
                      </Badge>
                      <Badge
                        variant="light"
                        color={getDifficultyColor(path.difficulty)}
                      >
                        {getDifficultyLabel(path.difficulty)}
                      </Badge>
                    </div>
                  </Group>
                </Group>

                <div>
                  <Title order={4} mb="xs">
                    {path.title}
                  </Title>
                  <Text size="sm" c="dimmed" lineClamp={3}>
                    {path.description}
                  </Text>
                </div>

                <Group gap="xs">
                  <IconClock size="1rem" />
                  <Text size="sm">
                    {Math.round(path.estimatedDuration / 60)}h total
                  </Text>
                  <Text size="sm" c="dimmed">
                    •
                  </Text>
                  <IconBook size="1rem" />
                  <Text size="sm">{path.courses.length} kursus</Text>
                </Group>

                {path.prerequisites && path.prerequisites.length > 0 && (
                  <div>
                    <Text size="sm" fw={600} mb="xs">
                      Prasyarat:
                    </Text>
                    <Stack gap={4}>
                      {path.prerequisites.map((prereq, index) => (
                        <Text key={index} size="xs" c="dimmed">
                          • {prereq}
                        </Text>
                      ))}
                    </Stack>
                  </div>
                )}

                <Divider />

                <div>
                  <Group justify="space-between" mb="xs">
                    <Text size="sm" fw={600}>
                      Kursus dalam path ini:
                    </Text>
                    <Text size="xs" c="dimmed">
                      {path.courses.length} kursus
                    </Text>
                  </Group>
                  <Stack gap="xs">
                    {path.courses.map((course, index) => (
                      <Group key={course.id} justify="space-between">
                        <Group gap="xs">
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              background: "#e3f2fd",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "10px",
                              fontWeight: 600,
                              color: "#1976d2",
                            }}
                          >
                            {index + 1}
                          </div>
                          <Text size="sm" lineClamp={1}>
                            {course.title}
                          </Text>
                        </Group>
                        <Group gap="xs">
                          <IconStar size="0.8rem" color="gold" />
                          <Text size="xs">{course.rating}</Text>
                        </Group>
                      </Group>
                    ))}
                  </Stack>
                </div>

                <Group justify="space-between">
                  <div>
                    <Text size="xs" c="dimmed">
                      Estimasi waktu
                    </Text>
                    <Text size="sm" fw={600}>
                      {Math.round(path.estimatedDuration / 60)} jam
                    </Text>
                  </div>
                  <Button
                    rightSection={<IconChevronRight size="1rem" />}
                    className="btn-primary"
                  >
                    Mulai Path
                  </Button>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {filteredPaths.length === 0 && (
          <Card padding="xl" radius="md">
            <Stack align="center" gap="md">
              <IconRoute size="3rem" color="gray" />
              <Text size="lg" c="dimmed">
                Tidak ada learning path ditemukan
              </Text>
              <Text size="sm" c="dimmed" ta="center">
                Coba ubah filter untuk melihat learning path lainnya
              </Text>
            </Stack>
          </Card>
        )}

        {/* Quick Stats */}
        <Card padding="lg" radius="md">
          <Title order={3} mb="md">
            Rekomendasi Learning Path
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
            <Card p="md" radius="sm" withBorder className="card-hover">
              <Stack align="center" gap="sm">
                <IconTarget size="2rem" color="green" />
                <Text fw={600} ta="center">
                  Pemula? Mulai dari Scratch!
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                  Path Scratch Programming untuk Pemula
                </Text>
                <Button size="xs" variant="light" color="green">
                  Lihat Path
                </Button>
              </Stack>
            </Card>

            <Card p="md" radius="sm" withBorder className="card-hover">
              <Stack align="center" gap="sm">
                <IconTrophy size="2rem" color="blue" />
                <Text fw={600} ta="center">
                  Siap Tantangan?
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                  Complete Game Creator Path
                </Text>
                <Button size="xs" variant="light" color="blue">
                  Lihat Path
                </Button>
              </Stack>
            </Card>

            <Card p="md" radius="sm" withBorder className="card-hover">
              <Stack align="center" gap="sm">
                <IconUsers size="2rem" color="orange" />
                <Text fw={600} ta="center">
                  Gabung Komunitas
                </Text>
                <Text size="sm" c="dimmed" ta="center">
                  Diskusi dengan sesama learner
                </Text>
                <Button size="xs" variant="light" color="orange">
                  Join Forum
                </Button>
              </Stack>
            </Card>
          </SimpleGrid>
        </Card>
      </Stack>
    </Container>
  );
}
