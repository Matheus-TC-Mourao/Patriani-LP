
interface MetricProps {
  children: React.ReactNode;
}

export function Metric({ children }: MetricProps) {
  return (
    <div className="flex flex-row w-[1203px] h-[268px] gap-[12px] justify-between">
      {children}
    </div>
  );
}

export function UnitsMetricContent({ children }: MetricProps) {
  return (
    <div className="flex flex-col w-[564px] h-[268px] border rounded-[12px] p-[24px] gap-[12px] bg-[#FFFFFF] border-[#E2DEDC] [box-shadow:0px_2px_2px_rgba(16,24,40,0.06),0px_1px_3px_rgba(16,24,40,0.10)] ">
      <div className="flex flex-row items-center w-[516px] h-[220px] px-[24px] gap-[80px] ">
        {children}
      </div>
    </div>
  );
}

export function DonutContent({ children }: MetricProps) {
  return (
    <div className="flex flex-row items-center w-[564px] h-[268px] border rounded-[12px] py-[24px] px-[48px] gap-[80px] bg-[#FFFFFF] border-[#E2DEDC] [box-shadow:0px_2px_2px_rgba(16,24,40,0.06),0px_1px_3px_rgba(16,24,40,0.10)]  ">
      {children}
    </div>
  );
}

export function ChartContent({ children }: MetricProps) {
  return (
    <div className="flex flex-row w-[200px] h-[200px] gap-[16px] ">
      {children}
    </div>
  );
}

export function StateCardContent({ children }: MetricProps) {
  return (
    <div className="flex flex-col w-[98px] h-[216px] gap-[24px] ">
      {children}
    </div>
  );
}
