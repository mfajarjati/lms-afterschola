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
  ActionIcon,
  Modal,
  TextInput,
  NumberInput,
  Select,
  Switch,
} from "@mantine/core";
import {
  IconBook,
  IconPlus,
  IconEye,
  IconEdit,
  IconTrash,
  IconUsers,
  IconStar,
} from "@tabler/icons-react";
import { getCoursesByInstructor } from "../../../data/courses";
import { dummyUsers } from "../../../data/users";
import { useState } from "react";
import Link from "next/link";

// Simulate current instructor
const currentInstructor = dummyUsers.find((u) => u.role === "instructor")!;

export default function InstructorCoursesPage() {
  const [courses, setCourses] = useState(() =>
    getCoursesByInstructor(currentInstructor.id)
  );
  const [opened, setOpened] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    category: "scratch" as "scratch" | "roblox",
    price: 0,
    totalModules: 0,
    isPublished: true,
    level: "beginner" as "beginner" | "intermediate" | "advanced",
  });

  const myCourses = courses;

  const resetForm = () => {
    setForm({
      title: "",
      category: "scratch",
      price: 0,
      totalModules: 0,
      isPublished: true,
      level: "beginner",
    });
    setEditingId(null);
  };

  const openAdd = () => {
    resetForm();
    setOpened(true);
  };

  const openEdit = (id: string) => {
    const c = myCourses.find((c) => c.id === id)!;
    setForm({
      title: c.title,
      category: c.category,
      price: c.price,
      totalModules: c.totalModules,
      isPublished: c.isPublished,
      level: c.level,
    });
    setEditingId(id);
    setOpened(true);
  };

  const saveCourse = () => {
    if (editingId) {
      setCourses((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? {
                ...c,
                title: form.title,
                category: form.category,
                price: form.price,
                totalModules: form.totalModules,
                isPublished: form.isPublished,
                level: form.level,
                updatedAt: new Date(),
              }
            : c
        )
      );
    } else {
      const id = `new-${Date.now()}`;
      setCourses((prev) => [
        ...prev,
        {
          id,
          title: form.title,
          description: "",
          thumbnail: "/course-thumbnails/new.jpg",
          category: form.category,
          instructorId: currentInstructor.id,
          instructor: currentInstructor,
          price: form.price,
          duration: 0,
          level: form.level,
          totalModules: form.totalModules,
          enrolledCount: 0,
          rating: 0,
          isPublished: form.isPublished,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
    setOpened(false);
  };

  const confirmDelete = (id: string) => setDeleteId(id);
  const doDelete = () => {
    setCourses((prev) => prev.filter((c) => c.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <Container size="xl">
      <Stack gap="xl">
        <Group justify="space-between">
          <div>
            <Title order={1} mb="md">
              Kursus Saya
            </Title>
            <Text size="lg" c="dimmed">
              Kelola dan pantau semua kursus yang Anda buat
            </Text>
          </div>
          <Button
            leftSection={<IconPlus size="1rem" />}
            className="btn-primary"
            onClick={openAdd}
          >
            Buat Kursus Baru
          </Button>
        </Group>

        {/* Stats */}
        <Grid gutter="lg">
          {[
            {
              label: "Total Kursus",
              value: String(myCourses.length),
              Icon: IconBook,
              bg: "var(--gradient-primary)",
            },
            {
              label: "Total Siswa",
              value: String(
                myCourses.reduce((sum, course) => sum + course.enrolledCount, 0)
              ),
              Icon: IconUsers,
              bg: "var(--gradient-secondary)",
            },
            {
              label: "Rata-rata Rating",
              value:
                myCourses.length > 0
                  ? (
                      myCourses.reduce(
                        (sum, course) => sum + course.rating,
                        0
                      ) / myCourses.length
                    ).toFixed(1)
                  : "0",
              Icon: IconStar,
              bg: "var(--gradient-accent)",
            },
          ].map(({ label, value, Icon, bg }) => (
            <Grid.Col key={label} span={{ base: 12, md: 4 }}>
              <Card
                padding="md"
                radius="md"
                className="stats-card"
                style={{ minHeight: 140 }}
              >
                <Stack align="center" gap={6}>
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size="1.4rem" color="#fff" />
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
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        <Card padding="lg" radius="md">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Kursus</Table.Th>
                <Table.Th>Kategori</Table.Th>
                <Table.Th>Harga</Table.Th>
                <Table.Th>Siswa Terdaftar</Table.Th>
                <Table.Th>Rating</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Dibuat</Table.Th>
                <Table.Th>Aksi</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {myCourses.map((course) => (
                <Table.Tr key={course.id}>
                  <Table.Td>
                    <Group>
                      <div>
                        <Text fw={600} lineClamp={1}>
                          {course.title}
                        </Text>
                        <Text size="sm" c="dimmed">
                          {course.totalModules} modul •{" "}
                          {Math.round(course.duration / 60)}h
                        </Text>
                      </div>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      variant="light"
                      color={course.category === "scratch" ? "orange" : "cyan"}
                    >
                      {course.category}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Text fw={600} c="green">
                      Rp {course.price.toLocaleString()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Group>
                      <Text size="sm">{course.enrolledCount}</Text>
                      <Text size="xs" c="dimmed">
                        siswa
                      </Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <IconStar size="1rem" color="gold" />
                      <Text size="sm">{course.rating}</Text>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      variant="light"
                      color={course.isPublished ? "green" : "gray"}
                    >
                      {course.isPublished ? "Published" : "Draft"}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm">
                      {course.createdAt.toLocaleDateString("id-ID")}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs" wrap="nowrap">
                      <ActionIcon
                        variant="light"
                        color="blue"
                        component={Link}
                        href={`/instructor/courses/${course.id}`}
                        title="Lihat detail"
                      >
                        <IconEye size="1rem" />
                      </ActionIcon>
                      <ActionIcon
                        variant="light"
                        color="yellow"
                        onClick={() => openEdit(course.id)}
                      >
                        <IconEdit size="1rem" />
                      </ActionIcon>
                      <ActionIcon
                        variant="light"
                        color="red"
                        onClick={() => confirmDelete(course.id)}
                      >
                        <IconTrash size="1rem" />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          {myCourses.length === 0 && (
            <Stack align="center" py="xl" gap="md">
              <IconBook size="3rem" color="gray" />
              <Text size="lg" c="dimmed">
                Belum ada kursus
              </Text>
              <Text size="sm" c="dimmed" ta="center">
                Mulai berbagi pengetahuan Anda dengan membuat kursus pertama
              </Text>
              <Button
                className="btn-primary"
                leftSection={<IconPlus size="1rem" />}
              >
                Buat Kursus Pertama
              </Button>
            </Stack>
          )}
        </Card>
      </Stack>

      {/* Add / Edit Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingId ? "Edit Kursus" : "Tambah Kursus"}
        centered
      >
        <Stack gap="md">
          <TextInput
            label="Judul Kursus"
            placeholder="Masukkan judul kursus"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.currentTarget.value })}
            required
          />
          <Select
            label="Kategori"
            data={[
              { value: "scratch", label: "Scratch" },
              { value: "roblox", label: "Roblox" },
            ]}
            value={form.category}
            onChange={(v) =>
              setForm({
                ...form,
                category: (v as "scratch" | "roblox") || "scratch",
              })
            }
          />
          <Select
            label="Level"
            data={[
              { value: "beginner", label: "Beginner" },
              { value: "intermediate", label: "Intermediate" },
              { value: "advanced", label: "Advanced" },
            ]}
            value={form.level}
            onChange={(v) =>
              setForm({
                ...form,
                level:
                  (v as "beginner" | "intermediate" | "advanced") || "beginner",
              })
            }
          />
          <NumberInput
            label="Harga (Rp)"
            value={form.price}
            onChange={(v) => setForm({ ...form, price: Number(v || 0) })}
            thousandSeparator
            min={0}
          />
          <NumberInput
            label="Total Modul"
            value={form.totalModules}
            onChange={(v) => setForm({ ...form, totalModules: Number(v || 0) })}
            min={0}
          />
          <Group justify="space-between" wrap="nowrap">
            <Switch
              label="Published"
              checked={form.isPublished}
              onChange={(e) =>
                setForm({ ...form, isPublished: e.currentTarget.checked })
              }
            />
            <Group>
              <Button variant="default" onClick={() => setOpened(false)}>
                Batal
              </Button>
              <Button className="btn-primary" onClick={saveCourse}>
                Simpan
              </Button>
            </Group>
          </Group>
        </Stack>
      </Modal>

      {/* Delete Confirm */}
      <Modal
        opened={!!deleteId}
        onClose={() => setDeleteId(null)}
        title="Hapus Kursus"
        centered
      >
        <Stack>
          <Text>
            Yakin ingin menghapus kursus ini? Tindakan ini tidak dapat
            dibatalkan.
          </Text>
          <Group justify="flex-end">
            <Button variant="default" onClick={() => setDeleteId(null)}>
              Batal
            </Button>
            <Button
              color="red"
              onClick={doDelete}
              leftSection={<IconTrash size="1rem" />}
            >
              Hapus
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Container>
  );
}

//
