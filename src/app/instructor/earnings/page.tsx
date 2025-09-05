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
  Table,
  Avatar,
  Select,
  Button,
  Paper,
  Progress,
  RingProgress,
  Center,
  Tabs,
} from "@mantine/core";
import {
  IconCash,
  IconTrendingUp,
  IconUsers,
  IconCalendar,
  IconDownload,
  IconCreditCard,
  IconWallet,
  IconBook,
  IconArrowUp,
} from "@tabler/icons-react";
import { useState } from "react";

// Dummy data untuk penghasilan
const revenueData = {
  totalRevenue: 45750000,
  monthlyRevenue: 8950000,
  dailyRevenue: 295000,
  totalStudents: 1247,
  newStudents: 89,
  conversionRate: 12.5,
  avgRevenuePerStudent: 36700,
  monthlyGrowth: 23.4,
  yearlyGrowth: 156.7,
};

const monthlyRevenueData = [
  { month: "Jan 2024", revenue: 3200000, students: 45, courses: 8 },
  { month: "Feb 2024", revenue: 4100000, students: 62, courses: 12 },
  { month: "Mar 2024", revenue: 5300000, students: 78, courses: 15 },
  { month: "Apr 2024", revenue: 6200000, students: 92, courses: 18 },
  { month: "Mei 2024", revenue: 7800000, students: 124, courses: 22 },
  { month: "Jun 2024", revenue: 8950000, students: 156, courses: 25 },
];

const courseRevenueData = [
  {
    id: 1,
    title: "Scratch untuk Pemula",
    price: 299000,
    enrollments: 234,
    revenue: 69966000,
    commission: 6996600,
    instructor: "Budi Santoso",
    category: "scratch",
  },
  {
    id: 2,
    title: "Roblox Game Development",
    price: 450000,
    enrollments: 156,
    revenue: 70200000,
    commission: 7020000,
    instructor: "Sari Indah",
    category: "roblox",
  },
  {
    id: 3,
    title: "Animasi Scratch Lanjutan",
    price: 399000,
    enrollments: 98,
    revenue: 39102000,
    commission: 3910200,
    instructor: "Budi Santoso",
    category: "scratch",
  },
  {
    id: 4,
    title: "Lua Scripting untuk Roblox",
    price: 550000,
    enrollments: 67,
    revenue: 36850000,
    commission: 3685000,
    instructor: "Andi Wijaya",
    category: "roblox",
  },
  {
    id: 5,
    title: "Game Design dengan Scratch",
    price: 350000,
    enrollments: 123,
    revenue: 43050000,
    commission: 4305000,
    instructor: "Nina Sari",
    category: "scratch",
  },
];

const paymentMethods = [
  {
    method: "Transfer Bank",
    amount: 15680000,
    percentage: 35,
    icon: IconCreditCard,
  },
  { method: "E-Wallet", amount: 18950000, percentage: 42, icon: IconWallet },
  {
    method: "Virtual Account",
    amount: 10320000,
    percentage: 23,
    icon: IconCash,
  },
];

const instructorPayouts = [
  {
    id: 1,
    instructor: "Budi Santoso",
    avatar: null,
    totalEarnings: 10906800,
    coursesCount: 2,
    studentsCount: 332,
    lastPayout: "2024-01-15",
    pendingPayout: 1250000,
    status: "active",
  },
  {
    id: 2,
    instructor: "Sari Indah",
    avatar: null,
    totalEarnings: 7020000,
    coursesCount: 1,
    studentsCount: 156,
    lastPayout: "2024-01-15",
    pendingPayout: 890000,
    status: "active",
  },
  {
    id: 3,
    instructor: "Andi Wijaya",
    avatar: null,
    totalEarnings: 3685000,
    coursesCount: 1,
    studentsCount: 67,
    lastPayout: "2024-01-15",
    pendingPayout: 420000,
    status: "active",
  },
  {
    id: 4,
    instructor: "Nina Sari",
    avatar: null,
    totalEarnings: 4305000,
    coursesCount: 1,
    studentsCount: 123,
    lastPayout: "2024-01-15",
    pendingPayout: 580000,
    status: "active",
  },
];

export default function AdminEarningsPage() {
  const [timeRange, setTimeRange] = useState("month");
  const [activeTab, setActiveTab] = useState("overview");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <Container size="xl">
      <Stack gap="xl">
        <Group justify="space-between">
          <div>
            <Title order={1} mb="md">
              Penghasilan & Analitik
            </Title>
            <Text size="lg" c="dimmed">
              Monitor pendapatan dan kinerja platform
            </Text>
          </div>
          <Group>
            <Select
              value={timeRange}
              onChange={(value) => setTimeRange(value || "month")}
              data={[
                { value: "week", label: "7 Hari Terakhir" },
                { value: "month", label: "30 Hari Terakhir" },
                { value: "quarter", label: "3 Bulan Terakhir" },
                { value: "year", label: "12 Bulan Terakhir" },
              ]}
            />
            <Button leftSection={<IconDownload size="1rem" />} variant="light">
              Export Laporan
            </Button>
          </Group>
        </Group>

        {/* Main Stats */}
        <Grid gutter="lg">
          {[
            {
              label: "Total Pendapatan",
              value: formatCurrency(revenueData.totalRevenue),
              sub: `+${revenueData.yearlyGrowth}%`,
              subColor: "green",
              Icon: IconCash,
              bg: "var(--gradient-primary)",
            },
            {
              label: "Pendapatan Bulan Ini",
              value: formatCurrency(revenueData.monthlyRevenue),
              sub: `+${revenueData.monthlyGrowth}%`,
              subColor: "green",
              Icon: IconTrendingUp,
              bg: "var(--gradient-accent)",
            },
            {
              label: "Total Siswa",
              value: revenueData.totalStudents.toLocaleString(),
              sub: `+${revenueData.newStudents} bulan ini`,
              subColor: "green",
              Icon: IconUsers,
              bg: "var(--gradient-secondary)",
            },
            {
              label: "Rata-rata per Siswa",
              value: formatCurrency(revenueData.avgRevenuePerStudent),
              sub: `Konversi: ${revenueData.conversionRate}%`,
              subColor: "dimmed",
              Icon: IconCalendar,
              bg: "linear-gradient(45deg, #ff6b6b, #feca57)",
            },
          ].map(({ label, value, sub, subColor, Icon, bg }) => (
            <Grid.Col key={label} span={{ base: 12, md: 3 }}>
              <Card
                padding="lg"
                radius="md"
                className="stats-card"
                style={{ minHeight: 160 }}
              >
                <Stack align="center" gap={8}>
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
                  <Text size="xl" fw={700} ta="center">
                    {value}
                  </Text>
                  {sub && (
                    <Group gap="xs" mt="xs">
                      {subColor === "green" && (
                        <IconArrowUp size="1rem" color="green" />
                      )}
                      <Text
                        size="sm"
                        c={subColor === "green" ? "green" : "dimmed"}
                      >
                        {sub}
                      </Text>
                    </Group>
                  )}
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        <Tabs
          value={activeTab}
          onChange={(value) => setActiveTab(value || "overview")}
        >
          <Tabs.List>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="courses">Pendapatan Kursus</Tabs.Tab>
            <Tabs.Tab value="instructors">Pembayaran Instruktur</Tabs.Tab>
            <Tabs.Tab value="methods">Metode Pembayaran</Tabs.Tab>
          </Tabs.List>

          {/* Overview Tab */}
          <Tabs.Panel value="overview" pt="md">
            <Grid gutter="lg">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Card padding="lg" radius="md">
                  <Title order={3} mb="md">
                    Tren Pendapatan Bulanan
                  </Title>
                  <Stack gap="md">
                    {monthlyRevenueData.map((data, index) => (
                      <Paper key={index} p="md" radius="sm">
                        <Group justify="space-between">
                          <div>
                            <Text fw={600}>{data.month}</Text>
                            <Text size="sm" c="dimmed">
                              {data.students} siswa baru • {data.courses} kursus
                            </Text>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <Text size="lg" fw={700} c="green">
                              {formatCurrency(data.revenue)}
                            </Text>
                            <Progress
                              value={(data.revenue / 10000000) * 100}
                              size="sm"
                              color="green"
                              w={120}
                            />
                          </div>
                        </Group>
                      </Paper>
                    ))}
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card padding="lg" radius="md" h="100%">
                  <Title order={3} mb="md">
                    Distribusi Kategori
                  </Title>
                  <Center>
                    <RingProgress
                      size={200}
                      thickness={16}
                      sections={[
                        {
                          value: 60,
                          color: "orange",
                          tooltip: "Scratch - 60%",
                        },
                        { value: 40, color: "cyan", tooltip: "Roblox - 40%" },
                      ]}
                      label={
                        <Text ta="center" fw={700} size="lg">
                          Kursus
                        </Text>
                      }
                    />
                  </Center>
                  <Stack gap="sm" mt="md">
                    <Group justify="space-between">
                      <Group gap="xs">
                        <div
                          style={{
                            width: 12,
                            height: 12,
                            backgroundColor: "orange",
                            borderRadius: "50%",
                          }}
                        />
                        <Text size="sm">Scratch</Text>
                      </Group>
                      <Text size="sm" fw={600}>
                        60%
                      </Text>
                    </Group>
                    <Group justify="space-between">
                      <Group gap="xs">
                        <div
                          style={{
                            width: 12,
                            height: 12,
                            backgroundColor: "cyan",
                            borderRadius: "50%",
                          }}
                        />
                        <Text size="sm">Roblox</Text>
                      </Group>
                      <Text size="sm" fw={600}>
                        40%
                      </Text>
                    </Group>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          {/* Courses Tab */}
          <Tabs.Panel value="courses" pt="md">
            <Card padding="lg" radius="md">
              <Title order={3} mb="md">
                Pendapatan per Kursus
              </Title>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Kursus</Table.Th>
                    <Table.Th>Instruktur</Table.Th>
                    <Table.Th>Harga</Table.Th>
                    <Table.Th>Siswa</Table.Th>
                    <Table.Th>Total Revenue</Table.Th>
                    <Table.Th>Komisi (10%)</Table.Th>
                    <Table.Th>Net Revenue</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {courseRevenueData.map((course) => (
                    <Table.Tr key={course.id}>
                      <Table.Td>
                        <Group>
                          <div
                            style={{
                              width: 40,
                              height: 40,
                              background:
                                course.category === "scratch"
                                  ? "var(--gradient-secondary)"
                                  : "var(--gradient-accent)",
                              borderRadius: 8,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            <IconBook size="1.2rem" />
                          </div>
                          <div>
                            <Text fw={600} lineClamp={1}>
                              {course.title}
                            </Text>
                            <Badge
                              variant="light"
                              color={
                                course.category === "scratch"
                                  ? "orange"
                                  : "cyan"
                              }
                              size="xs"
                            >
                              {course.category}
                            </Badge>
                          </div>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{course.instructor}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text fw={600} c="blue">
                          {formatCurrency(course.price)}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{course.enrollments} siswa</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text fw={600} c="green">
                          {formatCurrency(course.revenue)}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Text fw={600} c="red">
                          {formatCurrency(course.commission)}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Text fw={700} c="green">
                          {formatCurrency(course.revenue - course.commission)}
                        </Text>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          </Tabs.Panel>

          {/* Instructors Tab */}
          <Tabs.Panel value="instructors" pt="md">
            <Card padding="lg" radius="md">
              <Group justify="space-between" mb="md">
                <Title order={3}>Pembayaran Instruktur</Title>
                <Button className="btn-primary">Proses Pembayaran</Button>
              </Group>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Instruktur</Table.Th>
                    <Table.Th>Kursus</Table.Th>
                    <Table.Th>Siswa</Table.Th>
                    <Table.Th>Total Earnings</Table.Th>
                    <Table.Th>Pending Payout</Table.Th>
                    <Table.Th>Last Payout</Table.Th>
                    <Table.Th>Status</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {instructorPayouts.map((instructor) => (
                    <Table.Tr key={instructor.id}>
                      <Table.Td>
                        <Group>
                          <Avatar src={instructor.avatar} size="sm" radius="xl">
                            {instructor.instructor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </Avatar>
                          <Text fw={600}>{instructor.instructor}</Text>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{instructor.coursesCount} kursus</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{instructor.studentsCount} siswa</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text fw={600} c="green">
                          {formatCurrency(instructor.totalEarnings)}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Text fw={600} c="orange">
                          {formatCurrency(instructor.pendingPayout)}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm" c="dimmed">
                          {formatDate(instructor.lastPayout)}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          variant="light"
                          color={
                            instructor.status === "active" ? "green" : "gray"
                          }
                        >
                          {instructor.status}
                        </Badge>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          </Tabs.Panel>

          {/* Payment Methods Tab */}
          <Tabs.Panel value="methods" pt="md">
            <Grid gutter="lg">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Card padding="lg" radius="md">
                  <Title order={3} mb="md">
                    Metode Pembayaran
                  </Title>
                  <Stack gap="md">
                    {paymentMethods.map((method, index) => (
                      <Paper key={index} p="md" radius="sm" bg="gray.0">
                        <Group justify="space-between">
                          <Group>
                            <div
                              style={{
                                width: 50,
                                height: 50,
                                background: "var(--gradient-primary)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <method.icon size="1.5rem" color="white" />
                            </div>
                            <div>
                              <Text fw={600}>{method.method}</Text>
                              <Text size="sm" c="dimmed">
                                {method.percentage}% dari total transaksi
                              </Text>
                            </div>
                          </Group>
                          <div style={{ textAlign: "right" }}>
                            <Text size="lg" fw={700} c="green">
                              {formatCurrency(method.amount)}
                            </Text>
                            <Progress
                              value={method.percentage}
                              size="sm"
                              color="blue"
                              w={120}
                            />
                          </div>
                        </Group>
                      </Paper>
                    ))}
                  </Stack>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Card padding="lg" radius="md" h="100%">
                  <Title order={3} mb="md">
                    Ringkasan Pembayaran
                  </Title>
                  <Stack gap="lg">
                    <div>
                      <Text size="sm" c="dimmed" mb="xs">
                        Total Transaksi Hari Ini
                      </Text>
                      <Text size="xl" fw={700} c="green">
                        {formatCurrency(revenueData.dailyRevenue)}
                      </Text>
                    </div>
                    <div>
                      <Text size="sm" c="dimmed" mb="xs">
                        Pending Withdrawals
                      </Text>
                      <Text size="lg" fw={600} c="orange">
                        {formatCurrency(3140000)}
                      </Text>
                    </div>
                    <div>
                      <Text size="sm" c="dimmed" mb="xs">
                        Processing Fees
                      </Text>
                      <Text size="lg" fw={600} c="red">
                        {formatCurrency(127500)}
                      </Text>
                    </div>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
}
