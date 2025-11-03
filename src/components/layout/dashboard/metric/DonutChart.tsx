interface DonutChartProps {
  percentage: number;
}

export function DonutChart({ percentage }: DonutChartProps) {
  const safePercentage = Math.min(Math.max(percentage, 0), 100);

  const colorPrincipal = "#C30011";
  const colorFundo = "#F8F4F2";

  const gradient = `
    conic-gradient(
      ${colorPrincipal} 0% ${safePercentage}%,
      ${colorFundo} ${safePercentage}% 100%
    )
  `;

  return (
    <>
      <div className="w-[200px] h-[200px] top-[14px] left-[13px] ">
        <div
          className="relative size-[200px] rounded-full flex items-center justify-center"
          style={{ background: gradient }}
        >
          <div className="absolute bg-white rounded-full size-[140px]" />
        </div>
      </div>
      <div className="flex flex-col w-[102px] h-[92px] gap-[12px] ">
        <span className="w-[92px] h-[20px] font-medium text-[14px] leading-[20px] space-y-[14px] tracking-[0] align-middle mx-auto text-[#403E3D] ">
          Total Vendido
        </span>
        <span className="w-[102px] h-[60px] font-semibold text-[48px] leading-[60px] space-y-[48px] tracking-[-2%] align-middle mx-auto text-[#1A1717] ">
          {safePercentage}%
        </span>
      </div>
    </>
  );
}
