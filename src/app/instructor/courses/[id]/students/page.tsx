"use client";

import { notFound, useParams } from "next/navigation";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Avatar,
  Card,
  Button,
} from "@mantine/core";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import { getCourseById } from "../../../../../data/courses";

export default function CourseStudentsPage() {
  const params = useParams<{ id: string }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const course = getCourseById(id);
  if (!course) return notFound();

  // Dummy data siswa
  const students = [
    { id: "s1", name: "Budi Santoso", email: "budi@example.com" },
    { id: "s2", name: "Siti Aminah", email: "siti@example.com" },
    { id: "s3", name: "Andi Wijaya", email: "andi@example.com" },
  ];

  return (
    <Container size="md">
      <Stack gap="lg">
        <Group>
          <Button
            variant="subtle"
            leftSection={<IconChevronLeft size="1rem" />}
            component={Link}
            href={`/instructor/courses/${course.id}`}
          >
            Kembali
          </Button>
          <div>
            <Title order={2}>Siswa Terdaftar</Title>
            <Text c="dimmed">Kursus: {course.title}</Text>
          </div>
        </Group>

        <Stack gap="md">
          {students.map((s) => (
            <Card key={s.id} withBorder radius="md" padding="md">
              <Group>
                <Avatar radius="xl">{s.name[0]}</Avatar>
                <div>
                  <Text fw={600}>{s.name}</Text>
                  <Text size="sm" c="dimmed">
                    {s.email}
                  </Text>
                </div>
              </Group>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
