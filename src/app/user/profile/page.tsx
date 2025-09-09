// Tambahkan CSS global agar efek hover bekerja
// ...existing code...
"use client";

import { useState } from "react";
import { Container, Title, Text, Card, Stack, Group, Avatar, TextInput, Button, Grid, Paper, Divider, Badge, Tabs, Progress, Modal } from "@mantine/core";
import { useAuth } from "../../../hooks/useAuth";
import { dummyCourses } from "../../../data/courses";
import { IconUser, IconMail, IconPhone, IconTrophy, IconReceipt2, IconCreditCard, IconCertificate, IconEye } from "@tabler/icons-react";
import { transactionsSeed } from "../../../data/finance";

export default function UserProfilePage() {
  // State untuk efek hover gambar sertifikat
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  const { user } = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [bio, setBio] = useState(user?.bio || "");


  // State untuk modal sertifikat
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);

  if (!user) return null;

  // Ambil course yang selesai (simulasi: index === 0 dianggap selesai)
  const completedCourses = dummyCourses.slice(0, 1); // ganti logika sesuai data asli jika perlu
  const certificates = completedCourses.map((course) => ({
    id: course.id,
    courseTitle: course.title,
    date: course.updatedAt?.toISOString?.() || new Date().toISOString(),
    url: "/Sertif1.png",
  }));

  const level = 7;
  const currentXP = 1280;
  const nextLevelXP = 1500;
  const latestPaid = transactionsSeed
    .filter((t) => t.status === "paid")
    .slice(-8)
    .reverse();

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(n);

  return (
    <Container size="xl">
      <Stack gap="lg">
        <div>
          <Button
            variant="outline"
            component="a"
            href="/user/dashboard"
            mb="md"
          >
            Kembali ke Dashboard
          </Button>
          <Title order={2}>Profil Saya</Title>
          <Text c="dimmed">
            Kelola akun, lihat pencapaian dan riwayat pembelian
          </Text>
        </div>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card padding="lg" radius="md" withBorder>
              <Stack align="center" gap="md">
                <Avatar size={120} radius="xl" src={user.avatar}>
                  {user.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </Avatar>
                <Stack gap={4} align="center">
                  <Text fw={700}>{user.fullName}</Text>
                  <Badge color="green" variant="light">Siswa</Badge>
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 8 }}>
            <Paper p="lg" radius="md" withBorder>
              <Tabs defaultValue="edit">
                <Tabs.List>
                  <Tabs.Tab value="edit" leftSection={<IconUser size={16} />}>
                    Edit Profil
                  </Tabs.Tab>
                  <Tabs.Tab value="achievements" leftSection={<IconTrophy size={16} />}>
                    Pencapaian
                  </Tabs.Tab>
                  <Tabs.Tab value="purchases" leftSection={<IconReceipt2 size={16} />}>
                    Riwayat Pembelian
                  </Tabs.Tab>
                  <Tabs.Tab value="wallet" leftSection={<IconCreditCard size={16} />}>
                    Dompet & Pembayaran
                  </Tabs.Tab>
                  <Tabs.Tab value="certificate" leftSection={<IconCertificate size={16} />}>
                    Sertifikat
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="edit" pt="md">
                  <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput label="Nama Lengkap" leftSection={<IconUser size={16} />} value={fullName} onChange={(e) => setFullName(e.currentTarget.value)} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput label="Username" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput label="Email" leftSection={<IconMail size={16} />} value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput label="Telepon" leftSection={<IconPhone size={16} />} value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
                    </Grid.Col>
                    <Grid.Col span={12}>
                      <TextInput label="Bio" value={bio} onChange={(e) => setBio(e.currentTarget.value)} />
                    </Grid.Col>
                  </Grid>
                  <Divider my="md" />
                  <Group justify="end">
                    <Button variant="light">Reset</Button>
                    <Button className="btn-primary">Simpan Perubahan</Button>
                  </Group>
                </Tabs.Panel>

                <Tabs.Panel value="achievements" pt="md">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <div>
                        <Text c="dimmed" size="sm">Level Saat Ini</Text>
                        <Title order={3}>Level {level}</Title>
                      </div>
                      <Badge variant="light" color="indigo">{currentXP}/{nextLevelXP} XP</Badge>
                    </Group>
                    <div>
                      <Group justify="space-between" mb="xs">
                        <Text size="sm">Menuju level berikutnya</Text>
                        <Text size="sm" fw={600}>{Math.round((currentXP / nextLevelXP) * 100)}%</Text>
                      </Group>
                      <Progress value={(currentXP / nextLevelXP) * 100} color="indigo" />
                    </div>
                    <Card withBorder radius="md" p="md">
                      <Text fw={600} mb="xs">Badge & Trophy</Text>
                      <Group gap="xs">
                        <Badge color="yellow" variant="light">Starter</Badge>
                        <Badge color="green" variant="light">First Win</Badge>
                        <Badge color="blue" variant="light">Quiz Master</Badge>
                      </Group>
                    </Card>
                  </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="purchases" pt="md">
                  <Stack gap="sm">
                    {latestPaid.map((t) => (
                      <Group key={t.id} justify="space-between">
                        <div>
                          <Text fw={600} size="sm">{t.courseTitle}</Text>
                          <Text size="xs" c="dimmed">
                            {new Date(t.date).toLocaleString("id-ID", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </Text>
                        </div>
                        <Text fw={700} size="sm" c="green">{formatCurrency(t.amount)}</Text>
                      </Group>
                    ))}
                    {latestPaid.length === 0 && (
                      <Text c="dimmed" size="sm">Belum ada pembelian</Text>
                    )}
                  </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="wallet" pt="md">
                  <Stack gap="md">
                    <Group justify="space-between">
                      <Text fw={600}>Saldo Dompet</Text>
                      <Badge color="teal" size="lg">
                        {formatCurrency(user.walletBalance || 0)}
                      </Badge>
                    </Group>
                    <Button color="blue" variant="filled" mb={8} onClick={() => alert('Fitur top up coming soon!')}>
                      Top Up Saldo
                    </Button>
                    <Divider />
                    <Text fw={600}>Riwayat Transaksi</Text>
                    {(user.transactions ?? []).length > 0 ? (
                      (user.transactions ?? []).map((tx) => (
                        <Group key={tx.id} justify="space-between">
                          <Text size="sm">{tx.description}</Text>
                          <Text size="sm" c={tx.type === "credit" ? "green" : "red"}>
                            {formatCurrency(tx.amount)}
                          </Text>
                        </Group>
                      ))
                    ) : (
                      <Text c="dimmed" size="sm">Belum ada transaksi</Text>
                    )}
                  </Stack>
                </Tabs.Panel>

                <Tabs.Panel value="certificate" pt="md">
                  <Stack gap="md">
                    <Text fw={600}>Sertifikat Kursus</Text>
                    {certificates.length > 0 ? (
                      certificates.map((cert) => (
                        <Card key={cert.id} withBorder radius="md" p="md">
                          <Text fw={600}>{cert.courseTitle}</Text>
                          <Text size="sm" c="dimmed">
                            Diterbitkan: {new Date(cert.date).toLocaleDateString("id-ID")}
                          </Text>
                          <div
                            style={{ position: 'relative', display: 'inline-block', marginTop: 12, width: 250 }}
                            onClick={() => {
                              setModalImg(cert.url);
                              setModalOpen(true);
                            }}
                            onMouseEnter={() => setHoveredCert(cert.id)}
                            onMouseLeave={() => setHoveredCert(null)}
                          >
                            <img
                              src={cert.url}
                              alt="Sertifikat"
                              style={{
                                width: 250,
                                borderRadius: 8,
                                cursor: 'pointer',
                                display: 'block',
                                transition: 'filter 0.2s',
                                filter: hoveredCert === cert.id ? 'brightness(0.7)' : 'none',
                              }}
                            />
                            {hoveredCert === cert.id && (
                              <div
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: 8,
                                  background: 'rgba(0,0,0,0.28)',
                                  color: '#fff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontWeight: 600,
                                  fontSize: 18,
                                  pointerEvents: 'none',
                                  zIndex: 2,
                                }}
                              >
                                Pratinjau
                              </div>
                            )}
                          </div>
                        </Card>
                      ))
                    ) : (
                      <Text c="dimmed" size="sm">
                        Belum ada sertifikat
                      </Text>
                    )}
                    {/* Modal Sertifikat */}
                    {modalImg && (
                      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Pratinjau Sertifikat" size="xl" centered>
                        <img src={modalImg} alt="Sertifikat" style={{ width: '100%', borderRadius: 12 }} />
                      </Modal>
                    )}
                  </Stack>
                </Tabs.Panel>
              </Tabs>
            </Paper>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
}
