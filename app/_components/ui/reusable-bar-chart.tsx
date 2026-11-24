"use client";

import * as React from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type BarChartDatum = Record<string, string | number>;

interface ReusableBarChartProps {
  data: BarChartDatum[];
  dataKeyX: string;
  dataKeyY: string;
  color?: string;
  height?: number;
  showGrid?: boolean;
  barRadius?: number;
}

function ReusableBarChartComponent({
  data,
  dataKeyX,
  dataKeyY,
  color = "var(--color-primary)",
  height = 220,
  showGrid = false,
  barRadius = 6,
}: ReusableBarChartProps) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          barCategoryGap="22%"
        >
          {showGrid ? (
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-border)"
            />
          ) : null}
          <XAxis
            dataKey={dataKeyX}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-muted)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--color-muted)", fontSize: 12 }}
            allowDecimals={false}
          />
          <Tooltip
            cursor={{ fill: "var(--color-secondary)" }}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid var(--color-border)",
              background: "var(--color-background)",
              fontSize: 12,
            }}
          />
          <Bar
            dataKey={dataKeyY}
            fill={color}
            radius={[barRadius, barRadius, 0, 0]}
            maxBarSize={40}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={color}
                fillOpacity={0.85}
              />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export const ReusableBarChart = React.memo(ReusableBarChartComponent);
