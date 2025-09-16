"use client";

import { useMemo, useState } from "react";
import {
  Container,
  Stack,
  Title,
  Grid,
  Card,
  Group,
  Text,
  Badge,
  Button,
  Table,
  Modal,
  TextInput,
  Select,
  NumberInput,
  Divider,
  Paper,
} from "@mantine/core";
import {
  IconReportMoney,
  IconCash,
  IconTrendingUp,
  IconPlus,
  IconEye,
  IconPencil,
} from "@tabler/icons-react";
import { FinanceTransaction, Payout } from "../../../types";
import {
  computeFinanceSummary,
  payoutsSeed,
  transactionsSeed,
} from "../../../data/finance";

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function AdminEarningsPage() {
  const [transactions, setTransactions] =
    useState<FinanceTransaction[]>(transactionsSeed);
  const [payouts, setPayouts] = useState<Payout[]>(payoutsSeed);

  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [method, setMethod] = useState<string | null>(null);

  const [viewItem, setViewItem] = useState<FinanceTransaction | null>(null);
  const [editItem, setEditItem] = useState<FinanceTransaction | null>(null);
  const [addOpen, setAddOpen] = useState(false);

  const summary = useMemo(
    () => computeFinanceSummary(transactions, payouts),
    [transactions, payouts]
  );

  const filtered = useMemo(() => {
    return transactions.filter((t) => {
      const matchQ =
        !q ||
        t.userName.toLowerCase().includes(q.toLowerCase()) ||
        t.courseTitle.toLowerCase().includes(q.toLowerCase()) ||
        t.id.toLowerCase().includes(q.toLowerCase());
      const matchStatus = !status || t.status === status;
      const matchMethod = !method || t.method === method;
      return matchQ && matchStatus && matchMethod;
    });
  }, [transactions, q, status, method]);

  function upsertTransaction(next: FinanceTransaction) {
    setTransactions((prev) => {
      const idx = prev.findIndex((p) => p.id === next.id);
      if (idx === -1) return [next, ...prev];
      const copy = [...prev];
      copy[idx] = next;
      return copy;
    });
  }

  function addTransaction(payload: Omit<FinanceTransaction, "id">) {
    const id = `trx_${Math.random().toString(36).slice(2, 8)}`;
    upsertTransaction({ id, ...payload });
  }

  function markPayoutPaid(id: string) {
    setPayouts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "paid" } : p))
    );
  }

  return (
    <Container size="xl">
      <Stack gap="lg">
        <Title order={2}>Keuangan</Title>

        {/* ===== SUMMARY CARDS ===== */}
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md">
              <Group justify="space-between" align="center">
                <Group>
                  <IconReportMoney size="2rem" color="teal" />
                  <div>
                    <Text size="sm" c="dimmed">
                      Total Pendapatan
                    </Text>
                    <Text size="xl" fw={700}>
                      {rupiah(summary.totalRevenue)}
                    </Text>
                  </div>
                </Group>
                <Badge
                  color={summary.growthPct >= 0 ? "teal" : "red"}
                  variant="light"
                >
                  {summary.growthPct >= 0 ? "+" : ""}
                  {summary.growthPct}%
                </Badge>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md">
              <Group>
                <IconTrendingUp size="2rem" color="blue" />
                <div>
                  <Text size="sm" c="dimmed">
                    Total Order
                  </Text>
                  <Text size="xl" fw={700}>
                    {summary.totalOrders}
                  </Text>
                </div>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md">
              <Group>
                <IconCash size="2rem" color="orange" />
                <div>
                  <Text size="sm" c="dimmed">
                    Rerata Order
                  </Text>
                  <Text size="xl" fw={700}>
                    {rupiah(summary.avgOrder)}
                  </Text>
                </div>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Card padding="md" radius="md">
              <Group>
                <IconCash size="2rem" color="grape" />
                <div>
                  <Text size="sm" c="dimmed">
                    Payout Pending
                  </Text>
                  <Text size="xl" fw={700}>
                    {rupiah(summary.pendingPayouts)}
                  </Text>
                </div>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>

        {/* ===== TRANSAKSI ===== */}
        <Paper p="md" radius="md" withBorder>
          <Group justify="space-between" align="center" mb="md">
            <Title order={3}>Transaksi</Title>
            <Button
              leftSection={<IconPlus size={16} />}
              className="btn-primary"
              onClick={() => setAddOpen(true)}
            >
              Tambah Transaksi
            </Button>
          </Group>

          {/* FILTER */}
          <Grid gutter="md" mb="md">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <TextInput
                placeholder="Cari id/user/kursus..."
                value={q}
                onChange={(e) => setQ(e.currentTarget.value)}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 3 }}>
              <Select
                placeholder="Status"
                data={["paid", "pending", "failed"]}
                value={status}
                onChange={setStatus}
                clearable
              />
            </Grid.Col>
            <Grid.Col span={{ base: 6, md: 3 }}>
              <Select
                placeholder="Metode"
                data={["Midtrans", "Xendit", "Manual"]}
                value={method}
                onChange={setMethod}
                clearable
              />
            </Grid.Col>
          </Grid>

          {/* TABLE TRANSAKSI */}
          <Table withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr style={{ backgroundColor: "#1E386A" }}>
                <Table.Th style={{ color: "white" }}>Tanggal</Table.Th>
                <Table.Th style={{ color: "white" }}>Transaksi</Table.Th>
                <Table.Th style={{ color: "white" }}>User</Table.Th>
                <Table.Th style={{ color: "white" }}>Kursus</Table.Th>
                <Table.Th style={{ color: "white" }}>Metode</Table.Th>
                <Table.Th style={{ color: "white" }}>Status</Table.Th>
                <Table.Th style={{ color: "white" }} align="right">
                  Jumlah
                </Table.Th>
                <Table.Th style={{ color: "white" }}>Aksi</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filtered.map((t, idx) => (
                <Table.Tr
                  key={t.id}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#D3D8E2" : "#FFFFFF",
                  }}
                >
                  <Table.Td>
                    {new Date(t.date).toLocaleString("id-ID")}
                  </Table.Td>
                  <Table.Td>{t.id}</Table.Td>
                  <Table.Td>{t.userName}</Table.Td>
                  <Table.Td>{t.courseTitle}</Table.Td>
                  <Table.Td>{t.method}</Table.Td>
                  <Table.Td>
                    <Badge
                      color={
                        t.status === "paid"
                          ? "teal"
                          : t.status === "pending"
                          ? "yellow"
                          : "red"
                      }
                      variant="light"
                    >
                      {t.status}
                    </Badge>
                  </Table.Td>
                  <Table.Td align="right">{rupiah(t.amount)}</Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <Button
                        size="xs"
                        variant="light"
                        leftSection={<IconEye size={14} />}
                        onClick={() => setViewItem(t)}
                      >
                        Lihat
                      </Button>
                      <Button
                        size="xs"
                        variant="subtle"
                        leftSection={<IconPencil size={14} />}
                        onClick={() => setEditItem(t)}
                      >
                        Edit
                      </Button>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>

        {/* ===== PAYOUT ===== */}
        <Paper p="md" radius="md" withBorder>
          <Group justify="space-between" mb="md">
            <Title order={3}>Payout Instruktur</Title>
          </Group>

          <Table withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr style={{ backgroundColor: "#1E386A" }}>
                <Table.Th style={{ color: "white" }}>Tanggal</Table.Th>
                <Table.Th style={{ color: "white" }}>ID</Table.Th>
                <Table.Th style={{ color: "white" }}>Instruktur</Table.Th>
                <Table.Th style={{ color: "white" }}>Status</Table.Th>
                <Table.Th style={{ color: "white" }} align="right">
                  Jumlah
                </Table.Th>
                <Table.Th style={{ color: "white" }}>Aksi</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {payouts.map((p, idx) => (
                <Table.Tr
                  key={p.id}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#D3D8E2" : "#FFFFFF",
                  }}
                >
                  <Table.Td>
                    {new Date(p.date).toLocaleDateString("id-ID")}
                  </Table.Td>
                  <Table.Td>{p.id}</Table.Td>
                  <Table.Td>{p.instructorName}</Table.Td>
                  <Table.Td>
                    <Badge
                      color={p.status === "paid" ? "teal" : "yellow"}
                      variant="light"
                    >
                      {p.status}
                    </Badge>
                  </Table.Td>
                  <Table.Td align="right">{rupiah(p.amount)}</Table.Td>
                  <Table.Td>
                    {p.status === "pending" && (
                      <Button
                        size="xs"
                        variant="light"
                        onClick={() => markPayoutPaid(p.id)}
                      >
                        Tandai Dibayar
                      </Button>
                    )}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>

        {/* ===== MODAL LIHAT ===== */}
        <Modal
          opened={!!viewItem}
          onClose={() => setViewItem(null)}
          title="Detail Transaksi"
          centered
        >
          {viewItem && (
            <Stack gap="xs">
              <Text fw={600}>{viewItem.courseTitle}</Text>
              <Text size="sm" c="dimmed">
                {viewItem.userName} •{" "}
                {new Date(viewItem.date).toLocaleString("id-ID")}
              </Text>
              <Divider />
              <Group justify="space-between">
                <Text>Metode</Text>
                <Text>{viewItem.method}</Text>
              </Group>
              <Group justify="space-between">
                <Text>Status</Text>
                <Badge
                  color={
                    viewItem.status === "paid"
                      ? "teal"
                      : viewItem.status === "pending"
                      ? "yellow"
                      : "red"
                  }
                >
                  {viewItem.status}
                </Badge>
              </Group>
              <Group justify="space-between">
                <Text>Jumlah</Text>
                <Text fw={700}>{rupiah(viewItem.amount)}</Text>
              </Group>
            </Stack>
          )}
        </Modal>

        {/* ===== MODAL EDIT ===== */}
        <Modal
          opened={!!editItem}
          onClose={() => setEditItem(null)}
          title="Edit Transaksi"
          centered
        >
          {editItem && (
            <EditTransactionForm
              initial={editItem}
              onSubmit={(next) => {
                upsertTransaction(next);
                setEditItem(null);
              }}
            />
          )}
        </Modal>

        {/* ===== MODAL TAMBAH ===== */}
        <Modal
          opened={addOpen}
          onClose={() => setAddOpen(false)}
          title="Tambah Transaksi"
          centered
        >
          <AddTransactionForm
            onSubmit={(payload) => {
              addTransaction(payload);
              setAddOpen(false);
            }}
          />
        </Modal>
      </Stack>
    </Container>
  );
}

/* ========= FORMS ========= */
function EditTransactionForm({
  initial,
  onSubmit,
}: {
  initial: FinanceTransaction;
  onSubmit: (next: FinanceTransaction) => void;
}) {
  const [method, setMethod] = useState<string | null>(initial.method);
  const [status, setStatus] = useState<string | null>(initial.status);
  const [amount, setAmount] = useState<number | string>(initial.amount);

  return (
    <Stack>
      <TextInput label="User" value={initial.userName} readOnly />
      <TextInput label="Kursus" value={initial.courseTitle} readOnly />
      <NumberInput
        label="Jumlah (IDR)"
        value={amount}
        onChange={setAmount}
        thousandSeparator
      />
      <Select
        label="Metode"
        data={["Midtrans", "Xendit", "Manual"]}
        value={method}
        onChange={setMethod}
      />
      <Select
        label="Status"
        data={["paid", "pending", "failed"]}
        value={status}
        onChange={setStatus}
      />
      <Group justify="end" mt="sm">
        <Button
          className="btn-primary"
          onClick={() =>
            onSubmit({
              ...initial,
              amount: Number(amount || 0),
              method:
                (method as FinanceTransaction["method"]) || initial.method,
              status:
                (status as FinanceTransaction["status"]) || initial.status,
            })
          }
        >
          Simpan
        </Button>
      </Group>
    </Stack>
  );
}

function AddTransactionForm({
  onSubmit,
}: {
  onSubmit: (payload: Omit<FinanceTransaction, "id">) => void;
}) {
  const [userName, setUserName] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [amount, setAmount] = useState<number | string>(0);
  const [method, setMethod] = useState<string | null>("Midtrans");
  const [status, setStatus] = useState<string | null>("paid");

  return (
    <Stack>
      <TextInput
        label="Nama User"
        placeholder="Nama user"
        value={userName}
        onChange={(e) => setUserName(e.currentTarget.value)}
      />
      <TextInput
        label="Judul Kursus"
        placeholder="Nama kursus"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.currentTarget.value)}
      />
      <NumberInput
        label="Jumlah (IDR)"
        value={amount}
        onChange={setAmount}
        thousandSeparator
      />
      <Select
        label="Metode"
        data={["Midtrans", "Xendit", "Manual"]}
        value={method}
        onChange={setMethod}
      />
      <Select
        label="Status"
        data={["paid", "pending", "failed"]}
        value={status}
        onChange={setStatus}
      />
      <Group justify="end" mt="sm">
        <Button
          className="btn-primary"
          onClick={() =>
            onSubmit({
              date: new Date().toISOString(),
              userId: "u_local",
              courseId: "c_local",
              userName,
              courseTitle,
              amount: Number(amount || 0),
              method: (method as FinanceTransaction["method"]) || "Manual",
              status: (status as FinanceTransaction["status"]) || "paid",
            })
          }
        >
          Tambah
        </Button>
      </Group>
    </Stack>
  );
}
