import {
  MonthlyRevenue,
  RoleDistribution,
  FinanceTransaction,
  Payout,
} from "../../types";

export const monthlyRevenue: MonthlyRevenue[] = [
  { month: "2025-02", revenue: 12000000, orders: 120 },
  { month: "2025-03", revenue: 15000000, orders: 150 },
  { month: "2025-04", revenue: 18000000, orders: 170 },
  { month: "2025-05", revenue: 16500000, orders: 160 },
  { month: "2025-06", revenue: 21000000, orders: 190 },
  { month: "2025-07", revenue: 24000000, orders: 220 },
  { month: "2025-08", revenue: 27500000, orders: 245 },
  { month: "2025-09", revenue: 26000000, orders: 230 },
];

export const roleDistribution: RoleDistribution[] = [
  { role: "admin", value: 3 },
  { role: "instructor", value: 14 },
  { role: "user", value: 352 },
];

export const transactionsSeed: FinanceTransaction[] = [
  {
    id: "trx_001",
    date: "2025-09-01T08:12:00Z",
    userId: "u_301",
    userName: "Rian Student",
    courseId: "c_scratch_01",
    courseTitle: "Scratch Dasar",
    amount: 150000,
    method: "Midtrans",
    status: "paid",
  },
  {
    id: "trx_002",
    date: "2025-09-02T10:25:00Z",
    userId: "u_302",
    userName: "Sinta",
    courseId: "c_roblox_01",
    courseTitle: "Roblox Starter",
    amount: 200000,
    method: "Xendit",
    status: "paid",
  },
  {
    id: "trx_003",
    date: "2025-09-03T14:02:00Z",
    userId: "u_303",
    userName: "Andre",
    courseId: "c_scratch_02",
    courseTitle: "Scratch Intermediate",
    amount: 180000,
    method: "Midtrans",
    status: "pending",
  },
  {
    id: "trx_004",
    date: "2025-09-03T17:41:00Z",
    userId: "u_304",
    userName: "Nadia",
    courseId: "c_roblox_02",
    courseTitle: "Roblox OOP",
    amount: 220000,
    method: "Manual",
    status: "failed",
  },
  {
    id: "trx_005",
    date: "2025-09-04T09:10:00Z",
    userId: "u_305",
    userName: "Bagas",
    courseId: "c_scratch_01",
    courseTitle: "Scratch Dasar",
    amount: 150000,
    method: "Midtrans",
    status: "paid",
  },
];

export const payoutsSeed: Payout[] = [
  {
    id: "pout_001",
    instructorId: "i_101",
    instructorName: "Budi Santoso",
    amount: 2500000,
    date: "2025-09-02T06:00:00Z",
    status: "paid",
  },
  {
    id: "pout_002",
    instructorId: "i_102",
    instructorName: "Sari W",
    amount: 1800000,
    date: "2025-09-05T06:00:00Z",
    status: "pending",
  },
];

export function computeFinanceSummary(
  trx: FinanceTransaction[],
  payouts: Payout[]
) {
  const paid = trx.filter((t) => t.status === "paid");
  const totalRevenue = paid.reduce((s, t) => s + t.amount, 0);
  const totalOrders = paid.length;
  const avgOrder = totalOrders ? Math.round(totalRevenue / totalOrders) : 0;
  const totalPayouts = payouts.reduce((s, p) => s + p.amount, 0);
  const pendingPayouts = payouts
    .filter((p) => p.status === "pending")
    .reduce((s, p) => s + p.amount, 0);

  const lastTwo = monthlyRevenue.slice(-2);
  const thisMonth = lastTwo[1]?.revenue ?? 0;
  const prevMonth = lastTwo[0]?.revenue ?? 0;
  const growthPct = prevMonth
    ? Math.round(((thisMonth - prevMonth) / prevMonth) * 100)
    : 0;

  return {
    totalRevenue,
    totalOrders,
    avgOrder,
    totalPayouts,
    pendingPayouts,
    growthPct,
  };
}
