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
  Checkbox,
} from "@mantine/core";
import { IconAlertCircle, IconMail, IconLock } from "@tabler/icons-react";
import { LoginCredentials } from "../../types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";

const schema = z.object({
  email: z.string().email({ message: "Email tidak valid" }),
  password: z.string().min(1, { message: "Password harus diisi" }),
  rememberMe: z.boolean().optional(),
});

export default function LoginPage() {
  return <LoginForm />;
}

export function LoginForm() {
  const router = useRouter();
  const { login, loading } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials & { rememberMe?: boolean }>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      setLoginError(null);
      const result = await login(data);
      if (result.success) {
        // Login berhasil, redirect ke dashboard berdasarkan role
        const userRole = localStorage.getItem("userRole");
        if (userRole === "admin") {
          router.push("/admin/dashboard");
        } else if (userRole === "instructor") {
          router.push("/instructor/dashboard");
        } else if (userRole === "user") {
          router.push("/user/dashboard");
        } else {
          // Fallback jika role tidak ditemukan
          router.push("/");
        }
      } else {
        setLoginError(result.error || "Login gagal");
      }
    } catch (err: unknown) {
      setLoginError(err instanceof Error ? err.message : "Login gagal");
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className="text-gradient">
        Selamat Datang
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Belum punya akun?{" "}
        <Anchor size="sm" onClick={() => router.push("/signup")}>
          Daftar di sini
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {loginError && (
          <Alert icon={<IconAlertCircle size="1rem" />} color="red" mb="md">
            {loginError}
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

            <PasswordInput
              label="Password"
              placeholder="Password Anda"
              required
              leftSection={<IconLock size="1rem" />}
              {...register("password")}
              error={errors.password?.message}
            />

            <Checkbox label="Ingat saya" {...register("rememberMe")} />

            <Button
              type="submit"
              fullWidth
              mt="xl"
              loading={loading}
              className="btn-primary"
              size="md"
            >
              Masuk
            </Button>

            <Text ta="center" mt="md">
              <Anchor size="sm" component="button">
                Lupa password?
              </Anchor>
            </Text>

            <Text ta="center" mt="md">
              Belum punya akun?{" "}
              <Anchor size="sm" onClick={() => router.push("/signup")}>
                Daftar di sini
              </Anchor>
            </Text>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
