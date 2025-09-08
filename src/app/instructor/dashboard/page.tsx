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
  Table,
  Anchor,
  rem,
} from "@mantine/core";
import {
  IconBook,
  IconUsers,
  IconCoin,
  IconChartBar,
  IconPlus,
} from "@tabler/icons-react";
import { getCoursesByInstructor } from "../../../data/courses";
import { dummyUsers } from "../../../data/users";
import { monthlyRevenue } from "../../../data/finance";
import { useMemo, useState } from "react";
import Link from "next/link";

// Simulate current instructor (in real app, get from auth context)
const currentInstructor = dummyUsers.find((u) => u.role === "instructor")!;

type Purchase = {
  id: string;
  userName: string;
  courseTitle: string;
  amount: number;
  date: Date;
};

export default function InstructorDashboard() {
  const myCourses = getCoursesByInstructor(currentInstructor.id);
  const totalStudents = myCourses.reduce(
    (sum, course) => sum + course.enrolledCount,
    0
  );
  const totalEarnings = myCourses.reduce(
    (sum, course) => sum + course.price * course.enrolledCount * 0.7,
    0
  ); // 70% for instructor
  const avgRating =
    myCourses.length > 0
      ? myCourses.reduce((sum, course) => sum + course.rating, 0) /
        myCourses.length
      : 0;

  // Make numbers compact and prevent wrapping
  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      notation: "compact",
      maximumFractionDigits: 1,
    })
      .format(n)
      .replace("IDR", "Rp");

  // Earnings trend derived from global revenue for demo, scaled to instructor share
  const earningsTrend = useMemo(() => {
    const share = Math.min(0.35, Math.max(0.12, totalEarnings / 60000000));
    return monthlyRevenue.map((m, i) => ({
      label: m.month,
      value: Math.round(m.revenue * share * 0.7),
      idx: i,
    }));
  }, [totalEarnings]);

  // Generate recent purchases from users and courses (demo only)
  const [recentPurchases] = useState<Purchase[]>(() => {
    const students = dummyUsers.filter((u) => u.role === "user");
    const arr: Purchase[] = [];
    for (let i = 0; i < Math.min(6, myCourses.length); i++) {
      const course = myCourses[i % myCourses.length];
      const student = students[(i * 3 + 1) % students.length];
      arr.push({
        id: `p_${i}`,
        userName: student.fullName,
        courseTitle: course.title,
        amount: course.price,
        date: new Date(Date.now() - i * 36e5),
      });
    }
    return arr;
  });

  // Small SVG line chart with tooltip
  const Chart = () => {
    const [hoverIdx, setHoverIdx] = useState<number | null>(null);
    const padding = 24;
    const w = 600;
    const h = 220;
    const max = Math.max(...earningsTrend.map((d) => d.value), 1);
    const points = earningsTrend.map((d, i) => {
      const x =
        padding +
        (i * (w - padding * 2)) / Math.max(earningsTrend.length - 1, 1);
      const y = padding + (1 - d.value / max) * (h - padding * 2);
      return { x, y, ...d };
    });
    const path = points
      .map((p, i) => `${i ? "L" : "M"}${p.x},${p.y}`)
      .join(" ");
    return (
      <div style={{ width: "100%", overflowX: "auto" }}>
        <svg width={w} height={h} role="img">
          <defs>
            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--mantine-color-blue-5)"
                stopOpacity="0.5"
              />
              <stop
                offset="100%"
                stopColor="var(--mantine-color-blue-5)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <path
            d={path}
            fill="none"
            stroke="var(--mantine-color-blue-6)"
            strokeWidth={2}
          />
          <path
            d={`${path} L ${points.at(-1)?.x},${h - padding} L ${
              points[0]?.x
            },${h - padding} Z`}
            fill="url(#grad)"
            opacity={0.4}
          />
          {points.map((p, i) => (
            <g
              key={i}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={3}
                fill="var(--mantine-color-blue-6)"
              />
              {hoverIdx === i && (
                <g>
                  <rect
                    x={Math.min(Math.max(p.x - 60, 8), w - 120)}
                    y={Math.max(p.y - 46, 8)}
                    rx={6}
                    width={120}
                    height={40}
                    fill="var(--mantine-color-dark-6)"
                    opacity={0.9}
                  />
                  <text
                    x={Math.min(Math.max(p.x - 50, 14), w - 110)}
                    y={Math.max(p.y - 28, 22)}
                    fill="#fff"
                    fontSize={12}
                  >
                    {new Date(p.label + "-01").toLocaleDateString("id-ID", {
                      month: "short",
                    })}
                  </text>
                  <text
                    x={Math.min(Math.max(p.x - 50, 14), w - 110)}
                    y={Math.max(p.y - 12, 38)}
                    fill="#fff"
                    fontSize={12}
                  >
                    {formatCurrency(p.value)}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
        <Group gap="sm" mt="xs">
          <Badge color="blue" variant="light">
            Pendapatan
          </Badge>
          <Text size="xs" c="dimmed">
            Trend pendapatan per bulan (estimasi)
          </Text>
        </Group>
      </div>
    );
  };

  return (
    <Container size="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">
            Dashboard Instruktur Demo
          </Title>
          <Text size="lg" c="dimmed">
            Selamat datang kembali, {currentInstructor.fullName}!
          </Text>
        </div>

        {/* Stats Cards */}
        <Grid gutter="xl">
          {[
            {
              label: "Kursus Saya",
              value: String(myCourses.length),
              Icon: IconBook,
              color: "var(--mantine-color-blue-6)",
            },
            {
              label: "Total Siswa",
              value: String(totalStudents),
              Icon: IconUsers,
              color: "var(--mantine-color-grape-6)",
            },
            {
              label: "Total Penghasilan",
              value: formatCurrency(totalEarnings),
              Icon: IconCoin,
              color: "var(--mantine-color-green-6)",
            },
            {
              label: "Rata-rata Rating",
              value: `${avgRating.toFixed(1)}`,
              Icon: IconChartBar,
              color: "var(--mantine-color-yellow-6)",
            },
          ].map(({ label, value, Icon }) => (
            <Grid.Col key={label} span={{ base: 12, sm: 6, lg: 3 }}>
              <Card
                padding="lg"
                radius="md"
                className="stats-card"
                style={{ minHeight: 160, display: "flex" }}
              >
                <Stack align="center" gap={8} w="100%">
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "var(--gradient-primary)",
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
                  <Text
                    size={rem(28)}
                    fw={800}
                    ta="center"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {value}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Chart + Lists */}
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Card padding="lg" radius="md">
              <Group justify="space-between" mb="md">
                <Title order={3}>Pendapatan Bulanan</Title>
                <Anchor component={Link} href="/instructor/earnings" size="sm">
                  Lihat selengkapnya
                </Anchor>
              </Group>
              <Chart />
            </Card>

            <Card padding="lg" radius="md" mt="lg">
              <Group justify="space-between" mb="md">
                <Title order={3}>Kursus Saya</Title>
                <Button
                  leftSection={<IconPlus size="1rem" />}
                  className="btn-primary"
                  size="sm"
                  component={Link}
                  href="/instructor/courses"
                >
                  Kelola Kursus
                </Button>
              </Group>
              <Table verticalSpacing="xs">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Kursus</Table.Th>
                    <Table.Th>Siswa</Table.Th>
                    <Table.Th>Rating</Table.Th>
                    <Table.Th>Penghasilan</Table.Th>
                    <Table.Th>Status</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {myCourses.slice(0, 3).map((course) => (
                    <Table.Tr key={course.id}>
                      <Table.Td>
                        <Group>
                          <div
                            style={{
                              width: 44,
                              height: 32,
                              background: "var(--gradient-accent)",
                              borderRadius: 6,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "10px",
                              fontWeight: 700,
                            }}
                          >
                            {course.category === "scratch" ? "SCR" : "RBX"}
                          </div>
                          <div>
                            <Text fw={600} size="sm" lineClamp={1}>
                              {course.title}
                            </Text>
                            <Text size="xs" c="dimmed">
                              {course.totalModules} modul
                            </Text>
                          </div>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{course.enrolledCount}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{course.rating}/5</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text
                          size="sm"
                          fw={600}
                          c="green"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {formatCurrency(
                            course.price * course.enrolledCount * 0.7
                          )}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          variant="light"
                          color={course.isPublished ? "green" : "gray"}
                        >
                          {course.isPublished ? "Published" : "Draft"}
                        </Badge>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Card padding="lg" radius="md">
              <Title order={4} mb="md">
                Riwayat Pembelian Terbaru
              </Title>
              <Stack gap="sm">
                {recentPurchases.slice(0, 3).map((p) => (
                  <Group key={p.id} justify="space-between" wrap="nowrap">
                    <div style={{ minWidth: 0 }}>
                      <Text size="sm" fw={600} lineClamp={1}>
                        {p.userName}
                      </Text>
                      <Text size="xs" c="dimmed" lineClamp={1}>
                        {p.courseTitle}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {p.date.toLocaleString("id-ID", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </Text>
                    </div>
                    <Text
                      fw={700}
                      size="sm"
                      c="green"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {formatCurrency(p.amount)}
                    </Text>
                  </Group>
                ))}
              </Stack>
              <Button
                component={Link}
                href="/instructor/earnings"
                variant="light"
                fullWidth
                mt="md"
              >
                Lihat selengkapnya
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
