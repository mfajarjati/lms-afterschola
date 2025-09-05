"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Badge,
  Table,
  ActionIcon,
  Button,
  Modal,
  TextInput,
} from "@mantine/core";
import {
  IconPlus,
  IconEye,
  IconEdit,
  IconTrash,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { dummyUsers } from "../../../data/users";
import { useState } from "react";
import type { User } from "../../../types";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(dummyUsers);
  const [viewUser, setViewUser] = useState<User | null>(null);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [deleteUser, setDeleteUser] = useState<User | null>(null);

  return (
    <Container size="xl">
      <Stack gap="xl">
        <Group justify="space-between">
          <div>
            <Title order={1} mb="md">
              Manajemen User
            </Title>
            <Text size="lg" c="dimmed">
              Kelola semua pengguna platform
            </Text>
          </div>
          <Button
            leftSection={<IconPlus size="1rem" />}
            className="btn-primary"
            onClick={() => setAddOpen(true)}
          >
            Tambah User Baru
          </Button>
        </Group>

        <Card padding="lg" radius="md">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>User</Table.Th>
                <Table.Th>Kontak</Table.Th>
                <Table.Th>Role</Table.Th>
                <Table.Th>Level & Poin</Table.Th>
                <Table.Th>Saldo</Table.Th>
                <Table.Th>Bergabung</Table.Th>
                <Table.Th>Aksi</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {users.map((user) => (
                <Table.Tr key={user.id}>
                  <Table.Td>
                    <Group>
                      <div>
                        <Text fw={600}>{user.fullName}</Text>
                        <Text size="sm" c="dimmed">
                          @{user.username}
                        </Text>
                      </div>
                    </Group>
                  </Table.Td>
                  <Table.Td>
                    <Stack gap={4}>
                      <Group gap="xs">
                        <IconMail size="0.8rem" />
                        <Text size="sm">{user.email}</Text>
                      </Group>
                      {user.phone && (
                        <Group gap="xs">
                          <IconPhone size="0.8rem" />
                          <Text size="sm">{user.phone}</Text>
                        </Group>
                      )}
                    </Stack>
                  </Table.Td>
                  <Table.Td>
                    <Badge
                      color={
                        user.role === "admin"
                          ? "red"
                          : user.role === "instructor"
                          ? "blue"
                          : "green"
                      }
                      variant="light"
                    >
                      {user.role === "admin"
                        ? "Admin"
                        : user.role === "instructor"
                        ? "Instruktur"
                        : "Siswa"}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <Stack gap={4}>
                      <Text size="sm">Level {user.level}</Text>
                      <Text size="xs" c="dimmed">
                        {user.points.toLocaleString()} poin
                      </Text>
                    </Stack>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" fw={600} c="green">
                      Rp {user.balance.toLocaleString()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm">
                      {user.createdAt.toLocaleDateString("id-ID")}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <ActionIcon
                        variant="light"
                        color="blue"
                        onClick={() => setViewUser(user)}
                      >
                        <IconEye size="1rem" />
                      </ActionIcon>
                      <ActionIcon
                        variant="light"
                        color="yellow"
                        onClick={() => setEditUser(user)}
                      >
                        <IconEdit size="1rem" />
                      </ActionIcon>
                      <ActionIcon
                        variant="light"
                        color="red"
                        onClick={() => setDeleteUser(user)}
                      >
                        <IconTrash size="1rem" />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card>

        {/* Modal: Lihat */}
        <Modal
          opened={!!viewUser}
          onClose={() => setViewUser(null)}
          title="Detail User"
          centered
        >
          {viewUser && (
            <Stack gap="xs">
              <Text fw={700}>{viewUser.fullName}</Text>
              <Text size="sm" c="dimmed">
                @{viewUser.username}
              </Text>
              <Group gap="xs">
                <IconMail size={14} />
                <Text size="sm">{viewUser.email}</Text>
              </Group>
              {viewUser.phone && (
                <Group gap="xs">
                  <IconPhone size={14} />
                  <Text size="sm">{viewUser.phone}</Text>
                </Group>
              )}
              <Badge
                color={
                  viewUser.role === "admin"
                    ? "red"
                    : viewUser.role === "instructor"
                    ? "blue"
                    : "green"
                }
                variant="light"
              >
                {viewUser.role}
              </Badge>
            </Stack>
          )}
        </Modal>

        {/* Modal: Edit */}
        <Modal
          opened={!!editUser}
          onClose={() => setEditUser(null)}
          title="Edit User"
          centered
        >
          {editUser && (
            <EditUserForm
              initial={editUser}
              onSubmit={(next) => {
                setUsers((prev) =>
                  prev.map((u) => (u.id === next.id ? next : u))
                );
                setEditUser(null);
              }}
            />
          )}
        </Modal>

        {/* Modal: Tambah */}
        <Modal
          opened={addOpen}
          onClose={() => setAddOpen(false)}
          title="Tambah User"
          centered
        >
          <AddUserForm
            onSubmit={(payload) => {
              const id = `u_${Math.random().toString(36).slice(2, 8)}`;
              const now = new Date();
              setUsers((prev) => [
                {
                  id,
                  level: 1,
                  points: 0,
                  balance: 0,
                  updatedAt: now,
                  createdAt: now,
                  ...payload,
                },
                ...prev,
              ]);
              setAddOpen(false);
            }}
          />
        </Modal>

        {/* Dialog: Hapus */}
        <Modal
          opened={!!deleteUser}
          onClose={() => setDeleteUser(null)}
          title="Hapus User"
          centered
        >
          <Stack>
            <Text>Anda yakin ingin menghapus user ini?</Text>
            <Group justify="end">
              <Button variant="light" onClick={() => setDeleteUser(null)}>
                Batal
              </Button>
              <Button
                color="red"
                onClick={() => {
                  if (deleteUser)
                    setUsers((prev) =>
                      prev.filter((u) => u.id !== deleteUser.id)
                    );
                  setDeleteUser(null);
                }}
              >
                Hapus
              </Button>
            </Group>
          </Stack>
        </Modal>
      </Stack>
    </Container>
  );
}

function EditUserForm({
  initial,
  onSubmit,
}: {
  initial: User;
  onSubmit: (next: User) => void;
}) {
  const [fullName, setFullName] = useState(initial.fullName);
  const [username, setUsername] = useState(initial.username);
  const [email, setEmail] = useState(initial.email);
  const [phone, setPhone] = useState(initial.phone || "");
  const [role, setRole] = useState<User["role"]>(initial.role);
  return (
    <Stack>
      <TextInput
        label="Nama Lengkap"
        value={fullName}
        onChange={(e) => setFullName(e.currentTarget.value)}
      />
      <TextInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <TextInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextInput
        label="Telepon"
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
      />
      <TextInput
        label="Role (admin/instructor/user)"
        value={role}
        onChange={(e) => setRole(e.currentTarget.value as User["role"])}
      />
      <Group justify="end">
        <Button
          className="btn-primary"
          onClick={() =>
            onSubmit({ ...initial, fullName, username, email, phone, role })
          }
        >
          Simpan
        </Button>
      </Group>
    </Stack>
  );
}

function AddUserForm({
  onSubmit,
}: {
  onSubmit: (
    payload: Omit<
      User,
      "id" | "createdAt" | "updatedAt" | "level" | "points" | "balance"
    >
  ) => void;
}) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<User["role"]>("user");
  return (
    <Stack>
      <TextInput
        label="Nama Lengkap"
        value={fullName}
        onChange={(e) => setFullName(e.currentTarget.value)}
      />
      <TextInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
      />
      <TextInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextInput
        label="Telepon"
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
      />
      <TextInput
        label="Role (admin/instructor/user)"
        value={role}
        onChange={(e) => setRole(e.currentTarget.value as User["role"])}
      />
      <Group justify="end">
        <Button
          className="btn-primary"
          onClick={() => onSubmit({ fullName, username, email, phone, role })}
        >
          Tambah
        </Button>
      </Group>
    </Stack>
  );
}
