
interface DashboardProps{
  children:React.ReactNode
}

export function Dashboard({children}:DashboardProps) {
  return (
    <main className="flex flex-col w-full pt-[32px] pb-[64px] pr-[150px] pl-[70px] gap-[24px]">

      {children}

    </main>
  );
}
