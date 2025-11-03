interface UnitsChartProps {
  disponiveis: number;
  reservados: number;
  vendidos: number;
}


export function UnitsChart({
  disponiveis,
  reservados,
  vendidos,
}: UnitsChartProps) {

  const total = disponiveis + reservados + vendidos;

  // Calcula porcentagens relativas ao total
  const disponiveisPct = (disponiveis / total) * 100;
  const reservadosPct = (reservados / total) * 100;
  const vendidosPct = (vendidos / total) * 100;

  // Define as cores
  const colorDisponiveis = "#F4F1EF";
  const colorReservados = "#B22222";
  const colorVendidos = "#800000";

  // Cria o gradiente circular
  const gradient = `
    conic-gradient(
      ${colorVendidos} 0% ${vendidosPct}%,
      ${colorReservados} ${vendidosPct}% ${vendidosPct + reservadosPct}%,
      ${colorDisponiveis} ${vendidosPct + reservadosPct}% 100%
    )
  `;

  return (

      <div
        className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center"
        style={{ background: gradient }}
      >
        <div className="absolute bg-[#F8F4F2] rounded-full size-[150px] flex flex-col items-center justify-center">
          <p className="w-[64px] h-[20px] font-semibold text-[14px] leading-[20px] space-y-[14px] tracking-[0] align-middle  text-[#504D4C] mx-auto">Unidades</p>
          <p className="w-[67px] h-[44px] text-[36px] leading-[44px] space-y-[36px] tracking-[-2%] mx-auto align-middle font-semibold">{total}</p>
        </div>
      </div>

  );
}

