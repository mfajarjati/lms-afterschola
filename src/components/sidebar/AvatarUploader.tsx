"use client";

import { useEffect, useState } from "react";
import { Button, FileInput, Avatar, Stack } from "@mantine/core";

export default function AvatarUploader() {
  const [avatar, setAvatar] = useState<string | null>(null);

  // Load avatar dari localStorage saat mount
  useEffect(() => {
    const saved = localStorage.getItem("user-avatar");
    if (saved) {
      setAvatar(saved);
    }
  }, []);

  const handleFileChange = (file: File | null) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setAvatar(base64);
      localStorage.setItem("user-avatar", base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Stack>
      <Avatar src={avatar} size={80} radius="xl" />
      <FileInput
        placeholder="Upload avatar"
        accept="image/*"
        onChange={handleFileChange}
      />
      <Button
        color="red"
        variant="light"
        onClick={() => {
          localStorage.removeItem("user-avatar");
          setAvatar(null);
        }}
      >
        Hapus Avatar
      </Button>
    </Stack>
  );
}
