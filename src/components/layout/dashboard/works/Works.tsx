import { WorksImages } from "./WorksImages";
import { WorksProgress } from "./WorksProgress";

export function Works() {
  return (
    <div className="flex flex-row justify-between w-[1203px] h-[330px] gap-[12px] ">
      <WorksImages title="Imagens" />

      <WorksProgress title="Andamento da Obra" />

    </div>
  );
}
