"use client";

import * as React from "react";
import {
  Area,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface ReusableSparklineProps {
  data: number[];
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: number;
}

function ReusableSparklineComponent({
  data,
  color = "var(--color-primary)",
  width = 100,
  height = 48,
  fillOpacity = 0.15,
}: ReusableSparklineProps) {
  const chartData = React.useMemo(
    () => data.map((value, index) => ({ value, index })),
    [data],
  );

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          data={chartData}
          margin={{ top: 4, right: 2, left: 2, bottom: 4 }}
        >
          <defs>
            <linearGradient id="sparklineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            cursor={{ stroke: color, strokeDasharray: "3 3" }}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid var(--color-border)",
              background: "var(--color-background)",
              fontSize: 12,
              padding: "4px 8px",
            }}
            labelFormatter={() => ""}
            formatter={(value) => [value, ""]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill="url(#sparklineGradient)"
            dot={false}
            activeDot={{ r: 3, fill: color }}
            isAnimationActive={false}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export const ReusableSparkline = React.memo(ReusableSparklineComponent);
