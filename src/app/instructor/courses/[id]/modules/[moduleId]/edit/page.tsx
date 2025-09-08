"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Title,
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Button,
  Stack,
  Group,
  Paper,
  Radio,
  FileInput,
} from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { IconChevronLeft, IconUpload } from "@tabler/icons-react";

export default function EditModulePage() {
  const { id, moduleId } = useParams<{ id: string; moduleId: string }>();
  const router = useRouter();

  // State form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("video");
  const [duration, setDuration] = useState(10);
  const [contentType, setContentType] = useState<"file" | "link">("file");
  const [file, setFile] = useState<File | null>(null);
  const [link, setLink] = useState("");

  // Simulasi fetch data modul lama
  useEffect(() => {
    // TODO: ambil data dari database/API berdasarkan `id` & `moduleId`
    const dummyModule = {
      title: "Pendahuluan JavaScript",
      description: "Belajar dasar-dasar JavaScript",
      type: "video",
      duration: 15,
      contentType: "link" as "file" | "link",
      file: null,
      link: "https://www.youtube.com/watch?v=dummy",
    };

    setTitle(dummyModule.title);
    setDescription(dummyModule.description);
    setType(dummyModule.type);
    setDuration(dummyModule.duration);
    setContentType(dummyModule.contentType);
    setFile(dummyModule.file);
    setLink(dummyModule.link);
  }, [id, moduleId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedModule = {
      title,
      description,
      type,
      duration,
      contentType,
      file,
      link,
    };

    console.log("Modul diupdate:", updatedModule);

    // TODO: update ke database / API
    router.push(`/instructor/courses/${id}`);
  };

  return (
    <Container size="sm">
      <Paper p="lg" radius="md" withBorder>
        <Stack gap="lg">
          <Group justify="space-between">
            <Button
              variant="subtle"
              component={Link}
              href={`/instructor/courses/${id}`}
              leftSection={<IconChevronLeft size="1rem" />}
            >
              Kembali
            </Button>
            <Title order={3}>Edit Modul</Title>
          </Group>

          <form onSubmit={handleSubmit}>
            <Stack gap="md">
              <TextInput
                label="Judul Modul"
                placeholder="Masukkan judul modul"
                value={title}
                onChange={(e) => setTitle(e.currentTarget.value)}
                required
              />

              <Textarea
                label="Deskripsi"
                placeholder="Masukkan deskripsi modul"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                minRows={3}
              />

              <Select
                label="Jenis Modul"
                data={[
                  { value: "video", label: "Video" },
                  { value: "quiz", label: "Kuis" },
                  { value: "assignment", label: "Tugas" },
                ]}
                value={type}
                onChange={(val) => setType(val || "video")}
              />

              <NumberInput
                label="Durasi (menit)"
                min={1}
                value={duration}
                onChange={(val) => {
                  const n = typeof val === "number" ? val : Number(val);
                  setDuration(Number.isFinite(n) && n >= 1 ? n : 1);
                }}
              />

              <Radio.Group
                label="Konten Modul"
                value={contentType}
                onChange={(val: "file" | "link") => setContentType(val)}
              >
                <Group>
                  <Radio value="file" label="Upload File" />
                  <Radio value="link" label="Link" />
                </Group>
              </Radio.Group>

              {contentType === "file" ? (
                <FileInput
                  label="Upload File Baru (opsional)"
                  placeholder="Pilih file"
                  value={file}
                  onChange={setFile}
                  leftSection={<IconUpload size={16} />}
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4"
                />
              ) : (
                <TextInput
                  label="Link"
                  placeholder="https://..."
                  value={link}
                  onChange={(e) => setLink(e.currentTarget.value)}
                />
              )}

              <Group justify="flex-end">
                <Button type="submit" className="btn-primary">
                  Update Modul
                </Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Container>
  );
}
