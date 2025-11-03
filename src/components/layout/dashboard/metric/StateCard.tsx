interface StateCardProps {
  heading: string;
  value: number;
  background: "grayLight" | "primary" | "primaryDark";
}

export function StatCard({ heading, value, background }: StateCardProps) {
  const backgrounds = {
    grayLight: "#F2F1F0",
    primary: "#C30011",
    primaryDark: "#9C000D",
  };

  const bg = backgrounds[background];

  return (
    <div className="flex flex-row justify-between w-[96px] h-[56px] gap-[9px] ">
      {/* icon */}
      <div className="flex flex-col items-center justify-center w-[10px] h-[14px] mt-[3px] ">
        <div style={{backgroundColor: bg}} className="w-[10px] h-[10px] rounded-full"></div>
      </div>
      {/* heading */}
      <div className="flex flex-col w-[77px] h-[56px] gap-[4px] ">
        <p className="w-[77px] h-[20px] font-medium text-[14px] leading-[20px] space-y-[14px] tracking-[0] text-[#403E3D]">
          {heading}
        </p>
        <p className="size-[32px] font-semibold text-[24px] leading-[32px] space-y-[24px] tracking-[0] ">
          {value}
        </p>
      </div>
    </div>
  );
}


