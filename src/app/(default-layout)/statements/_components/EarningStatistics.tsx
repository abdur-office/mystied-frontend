"use client";

import { cn } from "@/lib/utils";
import { ArrowUp2, Calculator } from "iconsax-reactjs";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const earningRows = [
  { label: "Subscriptions", color: "#8253F2" },
  { label: "Tips", color: "#0B6976" },
  { label: "Posts", color: "#812B49" },
  { label: "Messages", color: "#8A432E" },
  { label: "Messages", color: "#564673" },
  { label: "Streams", color: "#8A5B0C" },
];

const timelineLabels = [
  "26 OCT 25",
  "26 OCT 25",
  "26 OCT 25",
  "26 OCT 25",
  "26 OCT 25",
];

const chartData = [
  { label: "26 OCT 25", value: 8 },
  { label: "26 OCT 25", value: 28 },
  { label: "26 OCT 25", value: 14 },
  { label: "26 OCT 25", value: 26 },
  { label: "26 OCT 25", value: 16 },
];

export default function EarningStatistics() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 border-b border-black/10 px-[18px] pt-2 pb-2.5 dark:border-white/10">
        <h2 className="font-primary text-sm font-medium text-black/80 uppercase dark:text-white/70">
          earnings
        </h2>
        <p className="font-primary line-clamp-1 text-xs text-black/80 lowercase dark:text-white/70">
          date/time shown in local time (UTC +06: 00)
        </p>
      </div>

      <div className="px-3 pt-4 pb-6 sm:px-[18px]">
        <div className="rounded-xl border border-black/10 p-2 md:p-4 dark:border-white/20">
          {/* Top filter row */}
          <div className="mb-3 flex items-center justify-between">
            <p className="font-primary text-xs text-black dark:text-white">
              All Time
            </p>
            <div className="flex items-center gap-2">
              <p className="font-primary text-xs text-black/60 dark:text-white/60">
                $0.86
              </p>
              <button>
                <ArrowUp2
                  size={16}
                  variant="Broken"
                  className="size-4 text-black/60 dark:text-white/60"
                />
              </button>
            </div>
          </div>

          {/* Chart */}
          <div className="select-none">
            <div className="relative h-28 overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between">
                {Array.from({ length: 4 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-px w-full bg-black/10 dark:bg-white/10"
                  />
                ))}
              </div>

              <ResponsiveContainer
                height="100%"
                width="80%"
                className="mx-auto focus-visible:outline-none!"
              >
                <AreaChart
                  data={chartData}
                  margin={{ top: 12, right: 12, left: 12, bottom: 0 }}
                  className="focus-visible:outline-none!"
                >
                  <defs>
                    <linearGradient
                      id="earningAreaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#8D72FF"
                        stopOpacity={0.35}
                      />
                      <stop offset="100%" stopColor="#8D72FF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="earningLineGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#8D72FF" />
                      <stop offset="100%" stopColor="#B38CFF" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                    stroke="transparent"
                  />
                  <XAxis dataKey="label" hide />
                  <YAxis hide domain={[0, "dataMax + 10"]} />
                  <Tooltip
                    cursor={{
                      stroke: "#8D72FF",
                      strokeWidth: 1,
                      strokeOpacity: 0.5,
                    }}
                    contentStyle={{
                      backgroundColor: "#1A1C1E",
                      border: "1px solid #3B3849",
                      borderRadius: 10,
                      color: "#fff",
                      padding: "8px 10px",
                      fontSize: "12px",
                    }}
                    formatter={(value: number) => [
                      `$${value.toFixed(2)}`,
                      "Amount",
                    ]}
                    labelFormatter={() => "Earnings"}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="url(#earningLineGradient)"
                    strokeWidth={3}
                    fill="url(#earningAreaGradient)"
                    dot={{
                      r: 3.5,
                      stroke: "#DACBFF",
                      strokeWidth: 1,
                      fill: "#8D72FF",
                    }}
                    activeDot={{
                      r: 5,
                      stroke: "#DACBFF",
                      strokeWidth: 1,
                      fill: "#8D72FF",
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="font-primary border-theme-purple mx-auto mt-8 line-clamp-1 flex items-center justify-between border-t px-4 pt-2 text-xs text-[11px] font-medium tracking-[0.08em] whitespace-nowrap text-black/60 uppercase md:w-[80%] dark:text-white/60">
              {timelineLabels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>

            <div className="relative mx-auto mt-3 rounded-full border border-black/20 p-2 text-center md:w-[80%] dark:border-white/10">
              <Calculator
                size={16}
                variant="Broken"
                className="text-theme-purple absolute top-1/2 left-3.5 hidden -translate-y-1/2 md:block"
              />
              <p className="font-primary text-xs text-black/60 dark:text-white/60">
                From{" "}
                <span className="text-black dark:text-white">oct 26,2025</span>{" "}
                to{" "}
                <span className="text-black dark:text-white">oct 26, 2025</span>
              </p>
            </div>
          </div>

          <div className="pt-4">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[380px] border-collapse">
                <tbody className="divide-y divide-black/10 dark:divide-white/10">
                  {earningRows.map((row, index) => (
                    <tr key={index} className="text-left">
                      {/* Label */}
                      <td className="px-1 py-1.5 sm:px-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-1 w-1 rounded-full"
                            style={{ backgroundColor: row.color }}
                          />
                          <span
                            className={cn(
                              "font-primary text-xs font-semibold tracking-[0.08em] text-black capitalize dark:text-white/60",
                              row.label === "Subscriptions" &&
                                "dark:text-white",
                            )}
                          >
                            {row.label}
                          </span>
                        </div>
                      </td>

                      {/* Gross */}
                      <td className="px-1 py-1.5 text-center sm:px-2">
                        <span className="font-primary text-xs font-semibold text-black dark:text-white">
                          $0.00
                        </span>
                      </td>

                      {/* Net */}
                      <td className="px-1 py-1.5 text-right sm:px-2">
                        <span className="font-primary text-xs font-semibold text-black dark:text-white">
                          $0.00
                        </span>
                      </td>
                    </tr>
                  ))}

                  {/* Total row */}
                  <tr className="">
                    <td className="border-theme-purple border-t px-2 pt-3 sm:px-3">
                      <span className="font-primary text-xs font-semibold tracking-[0.08em] text-black uppercase dark:text-white">
                        Total
                      </span>
                    </td>

                    <td className="border-theme-purple border-t px-2 pt-3 text-center sm:px-3">
                      <div className="flex items-center justify-center gap-2">
                        <p className="text-xs font-medium tracking-[0.08em] text-black/60 uppercase dark:text-white/50">
                          Gross
                        </p>
                        <p className="font-primary text-sm font-semibold text-black dark:text-white">
                          $0.00
                        </p>
                      </div>
                    </td>

                    <td className="border-theme-purple border-t px-2 pt-3 text-right sm:px-3">
                      <div className="flex items-center justify-end gap-2">
                        <p className="text-xs font-medium tracking-[0.08em] text-black/60 uppercase dark:text-white/50">
                          Net
                        </p>
                        <p className="font-primary text-sm font-semibold text-black dark:text-white">
                          $0.00
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
