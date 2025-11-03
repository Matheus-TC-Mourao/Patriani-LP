
interface DashboardProps{
  children:React.ReactNode
}

export function Dashboard({children}:DashboardProps) {
  return (
    <main className="flex flex-col w-[1423px] pt-[32px] pb-[64px] pr-[70px] pl-[150px] gap-[24px]">

      {children}

    </main>
  );
}
