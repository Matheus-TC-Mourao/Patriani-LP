
interface HeaderProps{
  children:React.ReactNode
}

export function Header({children}:HeaderProps) {
  return (
    <header className="bg-[#ffffff] flex flex-row items-center w-full h-[88px] border-b border-[#D7D2CF] justify-between py-[24px] px-[70px] ">
      {children}
    </header>
  );
}
