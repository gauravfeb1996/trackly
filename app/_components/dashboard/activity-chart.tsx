import { ReusableBarChart } from "@/app/_components/ui/reusable-bar-chart";
import { Card } from "@/app/_components/ui/card";

type BarData = {
  day: string;
  date: string;
  value: number;
};

export function ActivityChart({ data }: { data: BarData[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold tracking-tight">
        Application Activity
      </h3>
      <div className="mt-4">
        <ReusableBarChart
          data={data}
          dataKeyX="day"
          dataKeyY="value"
          height={240}
          showGrid
        />
      </div>
    </Card>
  );
}
