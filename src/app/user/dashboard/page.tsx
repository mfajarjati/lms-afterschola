"use client";

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
  Progress,
  rem,
} from "@mantine/core";
import {
  IconBook,
  IconTrophy,
  IconPlayerPlayFilled,
  IconTarget,
  IconAward,
  IconReceipt2,
} from "@tabler/icons-react";
import { dummyCourses } from "../../../data/courses";
import { dummyUsers } from "../../../data/users";
import { getRecentDiscussions } from "../../../data/learning";
import { transactionsSeed } from "../../../data/finance";
import Link from "next/link";

// Simulate current student
const currentStudent = dummyUsers.find((u) => u.role === "user")!;

// Simulate enrolled courses (first 3 courses)
const enrolledCourses = dummyCourses.slice(0, 3);
const completedCourses = 1;
const inProgressCourses = 2;
const currentLevel = 7;
const currentXP = 1280;
const nextLevelXP = 1500;

const recentThreeDiscussions = getRecentDiscussions().slice(0, 3);
const latestPaid = transactionsSeed
  .filter((t) => t.status === "paid")
  .slice(-3)
  .reverse();

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

// Simple weekly XP chart (dummy data)
const weeklyXP = [120, 180, 90, 210, 160, 200, 140];
const WeeklyChart = () => {
  const padding = 24;
  const w = 480;
  const h = 180;
  const max = Math.max(...weeklyXP, 1);
  const points = weeklyXP.map((v, i) => {
    const x =
      padding + (i * (w - padding * 2)) / Math.max(weeklyXP.length - 1, 1);
    const y = padding + (1 - v / max) * (h - padding * 2);
    return { x, y };
  });
  const path = points.map((p, i) => `${i ? "L" : "M"}${p.x},${p.y}`).join(" ");
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <svg width={w} height={h} role="img">
        <defs>
          <linearGradient id="gradXP" x1="0" x2="0" y1="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--mantine-color-indigo-6)"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="var(--mantine-color-indigo-6)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          d={path}
          fill="none"
          stroke="var(--mantine-color-indigo-6)"
          strokeWidth={2}
        />
        <path
          d={`${path} L ${points.at(-1)?.x},${h - padding} L ${points[0]?.x},${
            h - padding
          } Z`}
          fill="url(#gradXP)"
          opacity={0.4}
        />
      </svg>
    </div>
  );
};

export default function UserDashboard() {
  return (
    <Container size="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">
            Dashboard Belajar
          </Title>
          <Text size="lg" c="dimmed">
            Selamat datang kembali, {currentStudent.fullName}! Mari lanjutkan
            perjalanan belajar Anda.
          </Text>
        </div>

        {/* Stats Cards (vertical) */}
        <Grid gutter="xl">
          {[
            {
              label: "Kursus Aktif",
              value: String(inProgressCourses),
              Icon: IconBook,
              bg: "var(--gradient-primary)",
            },
            {
              label: "Kursus Selesai",
              value: String(completedCourses),
              Icon: IconTrophy,
              bg: "var(--gradient-secondary)",
            },
            {
              label: "XP Points",
              value: String(currentXP),
              Icon: IconAward,
              bg: "var(--gradient-accent)",
            },
            {
              label: "Level",
              value: `Lv ${currentLevel}`,
              Icon: IconTarget,
              bg: "linear-gradient(45deg,#FF6B6B,#FFD93D)",
            },
          ].map(({ label, value, Icon, bg }) => (
            <Grid.Col key={label} span={{ base: 12, md: 6, lg: 3 }}>
              <Card
                padding="lg"
                radius="md"
                className="stats-card"
                style={{ minHeight: 150 }}
              >
                <Stack align="center" gap={6}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size="1.6rem" color="#fff" />
                  </div>
                  <Text
                    size="sm"
                    c="dimmed"
                    tt="uppercase"
                    fw={600}
                    ta="center"
                  >
                    {label}
                  </Text>
                  <Text size={rem(28)} fw={800} ta="center">
                    {value}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Learning Progress */}
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Card padding="lg" radius="md">
              <Group justify="space-between" mb="md">
                <Title order={3}>Kursus Saya</Title>
                <Text size="sm" c="dimmed">
                  Perkembangan XP Mingguan
                </Text>
              </Group>
              <WeeklyChart />

              <Stack gap="lg">
                {enrolledCourses.map((course, index) => {
                  const isCompleted = index === 0; // First course is completed
                  const progress = isCompleted ? 100 : Math.random() * 80 + 10; // Random progress for demo

                  return (
                    <Card key={course.id} p="md" radius="sm" withBorder>
                      <Group justify="space-between" mb="sm">
                        <Group>
                          <div
                            style={{
                              width: 50,
                              height: 35,
                              background: "var(--gradient-accent)",
                              borderRadius: 6,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "11px",
                              fontWeight: 600,
                            }}
                          >
                            {course.category === "scratch" ? "SCR" : "RBX"}
                          </div>
                          <div>
                            <Text fw={600} lineClamp={1}>
                              {course.title}
                            </Text>
                            <Group gap="xs">
                              <Badge
                                size="xs"
                                variant="light"
                                color={
                                  course.category === "scratch"
                                    ? "orange"
                                    : "cyan"
                                }
                              >
                                {course.category}
                              </Badge>
                              <Text size="xs" c="dimmed">
                                {course.totalModules} modul
                              </Text>
                            </Group>
                          </div>
                        </Group>

                        <Group gap="xs">
                          <Badge
                            variant="light"
                            color={isCompleted ? "green" : "blue"}
                          >
                            {isCompleted ? "Selesai" : "Berlangsung"}
                          </Badge>
                          <Button
                            size="xs"
                            variant="light"
                            leftSection={<IconPlayerPlayFilled size="0.8rem" />}
                            component={Link}
                            href={`/user/courses`}
                          >
                            {isCompleted ? "Review" : "Lanjutkan"}
                          </Button>
                        </Group>
                      </Group>

                      <Group justify="space-between" mb="xs">
                        <Text size="sm">Progress</Text>
                        <Text size="sm" fw={600}>
                          {Math.round(progress)}%
                        </Text>
                      </Group>
                      <Progress
                        value={progress}
                        color={isCompleted ? "green" : "blue"}
                      />
                    </Card>
                  );
                })}
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap="lg">
              <Card padding="lg" radius="md">
                <Title order={4} mb="md">
                  Target XP Mingguan
                </Title>
                <Stack gap="md">
                  <div>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm">XP Terkumpul</Text>
                      <Text size="sm" fw={600}>
                        {currentXP % 500}/500 XP
                      </Text>
                    </Group>
                    <Progress
                      value={((currentXP % 500) / 500) * 100}
                      color="indigo"
                    />
                  </div>
                  <div>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm">Menuju Level Berikutnya</Text>
                      <Text size="sm" fw={600}>
                        {currentXP}/{nextLevelXP} XP
                      </Text>
                    </Group>
                    <Progress
                      value={(currentXP / nextLevelXP) * 100}
                      color="green"
                    />
                  </div>
                </Stack>
              </Card>

              <Card padding="lg" radius="md">
                <Group justify="space-between" mb="md">
                  <Title order={4}>Diskusi Terbaru</Title>
                  <Button
                    variant="subtle"
                    size="xs"
                    component={Link}
                    href="/user/discussions"
                  >
                    Lihat semua
                  </Button>
                </Group>
                <Stack gap="sm">
                  {recentThreeDiscussions.map((d) => (
                    <div key={d.id}>
                      <Text fw={600} size="sm" lineClamp={1}>
                        {d.title}
                      </Text>
                      <Text size="xs" c="dimmed" lineClamp={2}>
                        {d.content}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Card>

              <Card padding="lg" radius="md">
                <Group justify="space-between" mb="md">
                  <Title order={4}>Pembayaran Terbaru</Title>
                </Group>
                <Stack gap="sm">
                  {latestPaid.map((t) => (
                    <Group key={t.id} justify="space-between">
                      <Group gap="xs">
                        <IconReceipt2 size="1rem" />
                        <div>
                          <Text size="sm" fw={600}>
                            {t.courseTitle}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {new Date(t.date).toLocaleString("id-ID", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </Text>
                        </div>
                      </Group>
                      <Text size="sm" fw={700} c="green">
                        {formatCurrency(t.amount)}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
