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
  SimpleGrid,
  Modal,
} from "@mantine/core";
import {
  IconBook,
  IconPlayerPlayFilled,
  IconCheck,
  IconStar,
  IconTrophy,
  IconCertificate,
  IconDownload,
  IconFileTypePdf,
  IconVideo,
  IconAward,
} from "@tabler/icons-react";
import { dummyCourses } from "../../../data/courses";
import { useState } from "react";

// Simulate enrolled courses
const enrolledCourses = dummyCourses.slice(0, 4);

export default function UserCoursesPage() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resume, setResume] = useState<{
    title: string;
    type: "pdf" | "video";
    url: string;
  } | null>(null);

  return (
    <Container size="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">
            Kursus Saya
          </Title>
          <Text size="lg" c="dimmed">
            Pantau progress belajar dan lanjutkan kursus yang sedang Anda ikuti
          </Text>
        </div>

        {/* Progress Overview */}
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md" className="stats-card">
              <Group>
                <IconBook size="2rem" color="blue" />
                <div>
                  <Text size="sm" c="dimmed">
                    Kursus Aktif
                  </Text>
                  <Text size="xl" fw={700}>
                    {enrolledCourses.filter((_, i) => i !== 0).length}
                  </Text>
                </div>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md" className="stats-card">
              <Group>
                <IconCheck size="2rem" color="green" />
                <div>
                  <Text size="sm" c="dimmed">
                    Selesai
                  </Text>
                  <Text size="xl" fw={700}>
                    1
                  </Text>
                </div>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md" className="stats-card">
              <Group>
                <IconAward size="2rem" color="indigo" />
                <div>
                  <Text size="sm" c="dimmed">
                    Total XP
                  </Text>
                  <Text size="xl" fw={700}>
                    1,280
                  </Text>
                </div>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md" className="stats-card">
              <Group>
                <IconTrophy size="2rem" color="gold" />
                <div>
                  <Text size="sm" c="dimmed">
                    Pencapaian
                  </Text>
                  <Text size="xl" fw={700}>
                    8
                  </Text>
                </div>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Course List */}
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
          {enrolledCourses.map((course, index) => {
            const isCompleted = index === 0; // First course is completed
            const progress = isCompleted
              ? 100
              : Math.floor(Math.random() * 80) + 10; // Random progress for demo
            const currentModule = isCompleted
              ? course.totalModules
              : Math.floor((progress / 100) * course.totalModules);

            return (
              <Card
                key={course.id}
                radius="lg"
                padding="lg"
                className="card-hover"
              >
                <Stack gap="md">
                  <Group justify="space-between">
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
                      <Badge
                        variant="light"
                        color={isCompleted ? "green" : "blue"}
                      >
                        {isCompleted ? "Selesai" : "Berlangsung"}
                      </Badge>
                    </Group>

                    {isCompleted && (
                      <Badge
                        variant="light"
                        color="yellow"
                        leftSection={<IconTrophy size="0.8rem" />}
                      >
                        Sertifikat
                      </Badge>
                    )}
                  </Group>

                  <div>
                    <Title order={4} mb="xs" lineClamp={2}>
                      {course.title}
                    </Title>
                    <Text size="sm" c="dimmed" lineClamp={2}>
                      {course.description}
                    </Text>
                  </div>

                  <Group gap="xs">
                    <IconStar size="1rem" color="gold" />
                    <Text size="sm">{course.rating}</Text>
                    <Text size="sm" c="dimmed">
                      •
                    </Text>
                    <Text size="sm" c="dimmed">
                      {course.instructor.fullName}
                    </Text>
                  </Group>

                  <div>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm">
                        Progress ({currentModule}/{course.totalModules} modul)
                      </Text>
                      <Text size="sm" fw={600}>
                        {progress}%
                      </Text>
                    </Group>
                    <Progress
                      value={progress}
                      color={isCompleted ? "green" : "blue"}
                    />
                  </div>

                  <Group justify="space-between">
                    <Group gap="xs">
                      <IconAward size="1rem" />
                      <Text size="sm">
                        {Math.round((course.duration / 60) * 80)} XP
                      </Text>
                    </Group>

                    <Group gap="xs">
                      {isCompleted && (
                        <Button
                          variant="light"
                          size="sm"
                          leftSection={<IconDownload size="0.8rem" />}
                          color="yellow"
                        >
                          Sertifikat
                        </Button>
                      )}
                      <Button
                        className="btn-primary"
                        size="sm"
                        leftSection={<IconPlayerPlayFilled size="0.8rem" />}
                        onClick={() => {
                          // demo resume: alternating pdf/video
                          const type = Math.random() > 0.5 ? "pdf" : "video";
                          setResume({
                            title: course.title,
                            type,
                            url:
                              type === "pdf"
                                ? "/docs/sample.pdf"
                                : "/videos/sample.mp4",
                          });
                          setResumeOpen(true);
                        }}
                      >
                        {isCompleted ? "Resume Materi" : "Lanjutkan"}
                      </Button>
                    </Group>
                  </Group>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>

        {/* Completed Courses with Certificates */}
        <Card padding="lg" radius="md">
          <Title order={3} mb="md">
            Sertifikat yang Diperoleh
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
            <Card p="md" radius="sm" withBorder className="card-hover">
              <Stack align="center" gap="sm">
                <IconCertificate size="3rem" color="gold" />
                <div style={{ textAlign: "center" }}>
                  <Text fw={600} size="sm">
                    Scratch Fundamentals
                  </Text>
                  <Text size="xs" c="dimmed">
                    Diperoleh 15 Nov 2024
                  </Text>
                </div>
                <Button
                  size="xs"
                  variant="light"
                  color="yellow"
                  leftSection={<IconDownload size="0.8rem" />}
                >
                  Download
                </Button>
              </Stack>
            </Card>
          </SimpleGrid>
        </Card>

        {enrolledCourses.length === 0 && (
          <Card padding="xl" radius="md">
            <Stack align="center" gap="md">
              <IconBook size="3rem" color="gray" />
              <Text size="lg" c="dimmed">
                Belum ada kursus yang diikuti
              </Text>
              <Text size="sm" c="dimmed" ta="center">
                Mulai perjalanan belajar Anda dengan memilih kursus yang menarik
              </Text>
              <Button className="btn-primary">Jelajahi Kursus</Button>
            </Stack>
          </Card>
        )}
      </Stack>

      {/* Resume Material Modal */}
      <Modal
        opened={resumeOpen}
        onClose={() => setResumeOpen(false)}
        title="Resume Materi"
        size="xl"
      >
        <Stack gap="md">
          <Group gap="xs">
            {resume?.type === "pdf" ? (
              <IconFileTypePdf size="1.2rem" />
            ) : (
              <IconVideo size="1.2rem" />
            )}
            <Text fw={700}>{resume?.title}</Text>
          </Group>
          {resume?.type === "pdf" ? (
            <div style={{ height: 500 }}>
              <iframe
                src={resume.url}
                style={{ width: "100%", height: "100%", border: 0 }}
                title="PDF Preview"
              />
            </div>
          ) : (
            <video
              src={resume?.url}
              controls
              style={{ width: "100%", borderRadius: 8 }}
            />
          )}
        </Stack>
      </Modal>
    </Container>
  );
}
