"use client";

import { notFound, useParams } from "next/navigation";
import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Badge,
  Grid,
  Table,
  Button,
  Paper,
  Divider,
} from "@mantine/core";
import Link from "next/link";
import { getCourseById, getModulesByCourse } from "../../../../data/courses";
import {
  IconBook,
  IconClock,
  IconUser,
  IconChevronLeft,
} from "@tabler/icons-react";

export default function InstructorCourseDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const course = getCourseById(id);
  if (!course) return notFound();

  const modules = getModulesByCourse(course.id).sort(
    (a, b) => a.order - b.order
  );

  const toHrs = (min: number) => `${Math.floor(min / 60)}j ${min % 60}m`;

  return (
    <Container size="xl">
      <Stack gap="lg">
        <Group justify="space-between">
          <Group>
            <Button
              variant="subtle"
              leftSection={<IconChevronLeft size="1rem" />}
              component={Link}
              href="/instructor/courses"
            >
              Kembali
            </Button>
            <div>
              <Title order={2}>{course.title}</Title>
              <Text c="dimmed">Detail kursus, materi, dan statistik</Text>
            </div>
          </Group>
          <Badge variant="light" color={course.isPublished ? "green" : "gray"}>
            {course.isPublished ? "Published" : "Draft"}
          </Badge>
        </Group>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Card padding="lg" radius="md">
              <Stack gap="sm">
                <Text>{course.description}</Text>
                <Group gap="md">
                  <Group gap={6}>
                    <IconBook size="1rem" />
                    <Text size="sm">{course.totalModules} modul</Text>
                  </Group>
                  <Group gap={6}>
                    <IconClock size="1rem" />
                    <Text size="sm">{toHrs(course.duration)}</Text>
                  </Group>
                  <Group gap={6}>
                    <IconUser size="1rem" />
                    <Text size="sm">{course.enrolledCount} siswa</Text>
                  </Group>
                </Group>
              </Stack>
            </Card>

            <Card padding="lg" radius="md" mt="lg">
              <Title order={4} mb="sm">
                Daftar Modul
              </Title>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>#</Table.Th>
                    <Table.Th>Judul</Table.Th>
                    <Table.Th>Jenis</Table.Th>
                    <Table.Th>Durasi</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {modules.map((m) => (
                    <Table.Tr key={m.id}>
                      <Table.Td>{m.order}</Table.Td>
                      <Table.Td>
                        <Text fw={600}>{m.title}</Text>
                        <Text size="xs" c="dimmed">
                          {m.description}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Badge variant="light">{m.type}</Badge>
                      </Table.Td>
                      <Table.Td>{m.duration} mnt</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Paper p="lg" radius="md" withBorder>
              <Title order={4} mb="sm">
                Info Kursus
              </Title>
              <Stack gap={8}>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Kategori
                  </Text>
                  <Badge
                    variant="light"
                    color={course.category === "scratch" ? "orange" : "cyan"}
                  >
                    {course.category}
                  </Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Level
                  </Text>
                  <Badge variant="light">{course.level}</Badge>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Harga
                  </Text>
                  <Text fw={700}>Rp {course.price.toLocaleString()}</Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Rating
                  </Text>
                  <Text fw={600}>{course.rating}/5</Text>
                </Group>
                <Divider my="sm" />
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Dibuat
                  </Text>
                  <Text size="sm">
                    {course.createdAt.toLocaleDateString("id-ID")}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Diperbarui
                  </Text>
                  <Text size="sm">
                    {course.updatedAt.toLocaleDateString("id-ID")}
                  </Text>
                </Group>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
