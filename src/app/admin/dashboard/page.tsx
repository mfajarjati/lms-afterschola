"use client";

import React, { useState } from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Stack,
  Group,
  Badge,
  Avatar,
  Divider,
  Paper,
} from "@mantine/core";
import {
  IconUsers,
  IconBook,
  IconCoin,
  IconChartBar,
} from "@tabler/icons-react";
import { dummyUsers, getStudents } from "../../../data/users";
import { dummyCourses } from "../../../data/courses";
import Link from "next/link";
import {
  monthlyRevenue,
  transactionsSeed,
  roleDistribution,
  computeFinanceSummary,
} from "../../../data/finance";

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

function SimpleLineChart({
  data,
  height = 120,
  color = "#187420",
  labels,
}: {
  data: number[];
  height?: number;
  color?: string;
  labels?: string[];
}) {
  const width = 360;
  const max = Math.max(...data, 1);
  const stepX = width / (data.length - 1 || 1);
  const [hover, setHover] = useState<number | null>(null);
  const points = data
    .map((v, i) => {
      const x = i * stepX;
      const y = height - (v / max) * (height - 10) - 5;
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `0,${height} ${points} ${width},${height}`;
  return (
    <svg
      width="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ display: "block" }}
    >
      <polyline points={areaPoints} fill={`${color}22`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {data.map((v, i) => {
        const x = i * stepX;
        const y = height - (v / max) * (height - 10) - 5;
        const tooltipX = Math.min(x + 8, width - 120);
        const tooltipY = Math.max(y - 28, 0);
        return (
          <g
            key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <circle cx={x} cy={y} r={3} fill={color} />
            {hover === i && (
              <g>
                <rect
                  x={tooltipX}
                  y={tooltipY}
                  width="112"
                  height="24"
                  rx="4"
                  fill="#0009"
                />
                <text
                  x={tooltipX + 6}
                  y={tooltipY + 16}
                  fill="#fff"
                  fontSize="10"
                >
                  {(labels?.[i] ? labels[i] + " • " : "") +
                    new Intl.NumberFormat("id-ID").format(v)}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function SimpleDonut({
  data,
  size = 140,
}: {
  data: { label: string; value: number; color: string }[];
  size?: number;
}) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  let acc = 0;
  const stops = data
    .map((d) => {
      const start = (acc / total) * 360;
      acc += d.value;
      const end = (acc / total) * 360;
      return `${d.color} ${start}deg ${end}deg`;
    })
    .join(", ");
  return (
    <div
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `conic-gradient(${stops})`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 10,
          borderRadius: "50%",
          background: "var(--mantine-color-body)",
        }}
      />
    </div>
  );
}

export default function AdminDashboard() {
  const totalUsers = dummyUsers.length;
  const totalCourses = dummyCourses.length;
  const finSummary = computeFinanceSummary(transactionsSeed, []);
  const totalRevenue = finSummary.totalRevenue;
  const activeStudents = getStudents().length;

  const recentUsers = dummyUsers.slice(-5);
  const recentTransactions = transactionsSeed.slice(0, 5);
  const revenueNumbers = monthlyRevenue.map((m) => m.revenue);
  const ordersNumbers = monthlyRevenue.map((m) => m.orders);
  const monthLabels = monthlyRevenue.map((m) => m.month);
  const donutData = roleDistribution.map((r) => ({
    label: r.role,
    value: r.value,
    color:
      r.role === "admin"
        ? "#093569"
        : r.role === "instructor"
        ? "#4b7d90"
        : "#fcac0f",
  }));

  return (
    <Container size="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">
            Dashboard Admin
          </Title>
          <Text size="lg" c="dimmed">
            Overview dan manajemen platform AfterSchola
          </Text>
        </div>

        {/* Stats Cards */}
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card padding="lg" radius="md" className="stats-card">
              <Group justify="space-between">
                <div>
                  <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                    Total Users
                  </Text>
                  <Text size="2rem" fw={700} className="text-gradient">
                    {totalUsers}
                  </Text>
                </div>
                <IconUsers size="2rem" color="var(--primary-color)" />
              </Group>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card padding="lg" radius="md" className="stats-card">
              <Group justify="space-between">
                <div>
                  <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                    Total Kursus
                  </Text>
                  <Text size="2rem" fw={700} c="blue">
                    {totalCourses}
                  </Text>
                </div>
                <IconBook size="2rem" color="blue" />
              </Group>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card padding="lg" radius="md" className="stats-card">
              <Group justify="space-between">
                <div>
                  <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                    Total Revenue
                  </Text>
                  <Text size="2rem" fw={700} c="green">
                    Rp {totalRevenue.toLocaleString()}
                  </Text>
                </div>
                <IconCoin size="2rem" color="green" />
              </Group>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Card padding="lg" radius="md" className="stats-card">
              <Group justify="space-between">
                <div>
                  <Text size="sm" c="dimmed" tt="uppercase" fw={600}>
                    Siswa Aktif
                  </Text>
                  <Text size="2rem" fw={700} c="orange">
                    {activeStudents}
                  </Text>
                </div>
                <IconChartBar size="2rem" color="orange" />
              </Group>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Charts and recent activity */}
        <Grid gutter="xl" align="stretch">
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Stack gap="lg">
              <Card padding="lg" radius="md" withBorder>
                <Group justify="space-between" align="center" mb="xs">
                  <Title order={3}>Perkembangan Pendapatan</Title>
                  <Group gap="xs">
                    <Badge color="green" variant="light">
                      Pendapatan
                    </Badge>
                    <Badge color="blue" variant="light">
                      Orders
                    </Badge>
                  </Group>
                </Group>
                <Divider my="sm" />
                <SimpleLineChart data={revenueNumbers} labels={monthLabels} />
                <Divider my="sm" />
                <Text size="sm" c="dimmed">
                  Orders
                </Text>
                <SimpleLineChart
                  data={ordersNumbers}
                  color="#4b7d90"
                  height={90}
                  labels={monthLabels}
                />
                <Text size="xs" c="dimmed" mt="sm">
                  Keterangan: Simulasi data 8 bulan terakhir. Arahkan kursor ke
                  titik untuk melihat detail.
                </Text>
              </Card>

              <Paper p="md" radius="md" withBorder>
                <Group justify="space-between" mb="sm">
                  <Title order={3}>Transaksi Terbaru</Title>
                  <Text
                    component={Link}
                    href="/admin/earnings"
                    size="sm"
                    c="blue"
                    style={{ textDecoration: "none" }}
                  >
                    Lihat selengkapnya
                  </Text>
                </Group>
                <Stack gap="sm">
                  {recentTransactions.slice(0, 3).map((t) => (
                    <Group key={t.id} justify="space-between" wrap="nowrap">
                      <div>
                        <Text fw={600}>{t.courseTitle}</Text>
                        <Text size="xs" c="dimmed">
                          {t.userName} •{" "}
                          {new Date(t.date).toLocaleString("id-ID")}
                        </Text>
                      </div>
                      <Badge
                        variant="light"
                        color={
                          t.status === "paid"
                            ? "teal"
                            : t.status === "pending"
                            ? "yellow"
                            : "red"
                        }
                      >
                        {rupiah(t.amount)}
                      </Badge>
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap="lg">
              <Card padding="lg" radius="md" withBorder>
                <Title order={4} mb="md">
                  Distribusi Role
                </Title>
                <Group justify="center" my="md">
                  <SimpleDonut data={donutData} />
                </Group>
                <Stack gap={6}>
                  {donutData.map((d) => (
                    <Group key={d.label} justify="space-between">
                      <Group gap="xs">
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            background: d.color,
                            display: "inline-block",
                            borderRadius: 2,
                          }}
                        />
                        <Text>{d.label}</Text>
                      </Group>
                      <Badge variant="light">{d.value}</Badge>
                    </Group>
                  ))}
                </Stack>
              </Card>

              <Card padding="lg" radius="md" withBorder>
                <Group justify="space-between" mb="md">
                  <Title order={4}>Pengguna Terbaru</Title>
                  <Text
                    component={Link}
                    href="/admin/users"
                    size="sm"
                    c="blue"
                    style={{ textDecoration: "none" }}
                  >
                    Lihat selengkapnya
                  </Text>
                </Group>
                <Stack gap="sm">
                  {recentUsers.slice(-3).map((user) => (
                    <Group key={user.id} justify="space-between" wrap="nowrap">
                      <Group>
                        <Avatar src={user.avatar} size="sm" radius="xl">
                          {user.fullName
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </Avatar>
                        <div>
                          <Text fw={600}>{user.fullName}</Text>
                          <Text size="xs" c="dimmed">
                            {user.email}
                          </Text>
                        </div>
                      </Group>
                      <Badge
                        variant="light"
                        color={
                          user.role === "admin"
                            ? "red"
                            : user.role === "instructor"
                            ? "blue"
                            : "green"
                        }
                      >
                        {user.role}
                      </Badge>
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
