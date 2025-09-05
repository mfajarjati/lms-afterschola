"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Container,
  Stack,
  Alert,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconUser,
  IconMail,
  IconLock,
} from "@tabler/icons-react";
import { SignupData } from "../../types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";

const schema = z
  .object({
    email: z.string().email({ message: "Email tidak valid" }),
    username: z.string().min(3, { message: "Username minimal 3 karakter" }),
    fullName: z.string().min(2, { message: "Nama lengkap minimal 2 karakter" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password tidak sama",
  });

export function SignupForm() {
  const router = useRouter();
  const { signup, loading } = useAuth();
  const [signupError, setSignupError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData & { confirmPassword: string }>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupData & { confirmPassword: string }) => {
    try {
      setSignupError(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...signupData } = data;
      const result = await signup({
        ...signupData,
        confirmPassword: data.confirmPassword,
      });
      if (result.success) {
        // Signup berhasil, redirect ke login
        router.push("/login");
      } else {
        setSignupError(result.error || "Pendaftaran gagal");
      }
    } catch (err: unknown) {
      setSignupError(err instanceof Error ? err.message : "Pendaftaran gagal");
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className="text-gradient">
        Daftar Akun Baru
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Sudah punya akun?{" "}
        <Anchor size="sm" onClick={() => router.push("/login")}>
          Masuk di sini
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {signupError && (
          <Alert icon={<IconAlertCircle size="1rem" />} color="red" mb="md">
            {signupError}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              label="Email"
              placeholder="email@example.com"
              required
              leftSection={<IconMail size="1rem" />}
              {...register("email")}
              error={errors.email?.message}
            />

            <TextInput
              label="Username"
              placeholder="username_anda"
              required
              leftSection={<IconUser size="1rem" />}
              {...register("username")}
              error={errors.username?.message}
            />

            <TextInput
              label="Nama Lengkap"
              placeholder="Nama Lengkap Anda"
              required
              leftSection={<IconUser size="1rem" />}
              {...register("fullName")}
              error={errors.fullName?.message}
            />

            <PasswordInput
              label="Password"
              placeholder="Password Anda"
              required
              leftSection={<IconLock size="1rem" />}
              {...register("password")}
              error={errors.password?.message}
            />

            <PasswordInput
              label="Konfirmasi Password"
              placeholder="Ulangi Password"
              required
              leftSection={<IconLock size="1rem" />}
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />

            <Button
              type="submit"
              fullWidth
              mt="xl"
              loading={loading}
              className="btn-primary"
              size="md"
            >
              Daftar Sekarang
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default function SignupPage() {
  return <SignupForm />;
}
