"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Group,
  Button,
  Card,
  Stack,
  Progress,
  Drawer,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconPlayerPlayFilled,
  IconFileTypePdf,
  IconVideo,
} from "@tabler/icons-react";
import Link from "next/link";

const dummyModules = [
  { id: 1, title: "Pengenalan Scratch", type: "video", url: "/videos/scratch-intro.mp4" },
  { id: 2, title: "Blok Dasar dan Pergerakan", type: "pdf", url: "/docs/scratch-basic.pdf" },
  { id: 3, title: "Kontrol dan Event", type: "video", url: "/videos/scratch-control.mp4" },
  { id: 4, title: "Membuat Animasi Sederhana", type: "video", url: "/videos/scratch-animation.mp4" },
  { id: 5, title: "Membuat Game Interaktif", type: "pdf", url: "/docs/scratch-game.pdf" },
];

export default function CourseDetailPage() {
  const [current, setCurrent] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const module = dummyModules[current];
  const progress = Math.round(((current + 1) / dummyModules.length) * 100);

  return (
    <Container fluid p={0} style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <Group>
          <Link href="/user/courses">
            <Button variant="subtle" leftSection={<IconArrowLeft size="1rem" />}>
              Kembali
            </Button>
          </Link>
          <Title order={4}>{module.title}</Title>
        </Group>
        <Button variant="outline" onClick={() => setSidebarOpen(true)}>
          Daftar Modul
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <Card shadow="sm" radius="md" padding="md" style={{ height: "100%" }}>
          <Stack gap="md">
            <Group gap="xs">
              {module.type === "pdf" ? <IconFileTypePdf /> : <IconVideo />}
              <Text fw={600}>{module.title}</Text>
            </Group>

            {module.type === "pdf" ? (
              <iframe
                src={module.url}
                style={{ width: "100%", height: "70vh", border: 0 }}
                title="PDF Preview"
              />
            ) : (
              <video
                src={module.url}
                controls
                style={{ width: "100%", height: "70vh", borderRadius: 8 }}
              />
            )}
          </Stack>
        </Card>
      </main>

      {/* Bottom Nav */}
      <footer className="flex justify-between items-center px-4 py-3 border-t border-gray-300">
        <Button
          disabled={current === 0}
          onClick={() => setCurrent((c) => Math.max(c - 1, 0))}
          variant="default"
        >
          ⬅ Sebelumnya
        </Button>
        <div className="flex flex-col items-center">
          <Text size="sm">Progress {progress}%</Text>
          <Progress value={progress} style={{ width: 150 }} />
        </div>
        <Button
          disabled={current === dummyModules.length - 1}
          onClick={() => setCurrent((c) => Math.min(c + 1, dummyModules.length - 1))}
          leftSection={<IconPlayerPlayFilled size="1rem" />}
        >
          Selanjutnya ➡
        </Button>
      </footer>

      {/* Sidebar Modul */}
      <Drawer opened={sidebarOpen} onClose={() => setSidebarOpen(false)} title="Daftar Modul" position="right">
        <Stack>
          {dummyModules.map((m, i) => (
            <Button
              key={m.id}
              variant={i === current ? "filled" : "light"}
              onClick={() => {
                setCurrent(i);
                setSidebarOpen(false);
              }}
            >
              {i + 1}. {m.title}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </Container>
  );
}
