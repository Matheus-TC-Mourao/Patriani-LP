import { HeaderStatus } from "@/components/layout/header/HeaderStatus";
import { HeaderTitle } from "@/components/layout/header/HeaderTitle";
import { HeadingBody } from "@/components/layout/dashboard/heading/HeadingBody";
import { Calendar } from "@/components/layout/dashboard/heading/Calendar";
import {
  Info,
  InfoCards,
} from "@/components/layout/dashboard/infoCards/InfoCards";
import { Dashboard } from "@/components/layout/dashboard/Dashboard";
import { Header } from "@/components/layout/header/Header";
import { PageHeader } from "@/components/layout/pageHeader/PageHeader";
import {
  ChartContent,
  Metric,
  UnitsMetricContent,
  StateCardContent,
  DonutContent,
} from "@/components/layout/dashboard/metric/Metric";
import { StatCard } from "@/components/layout/dashboard/metric/StateCard";
import { UnitsChart } from "@/components/layout/dashboard/metric/UnitsChart";
import { DonutChart } from "@/components/layout/dashboard/metric/DonutChart";
import { Works } from "@/components/layout/dashboard/works/Works";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#FAFAFA]">
      <Header>
        <HeaderTitle title="Splendor Jardim" />
        <HeaderStatus
          status="Em Construção"
          iconTrailing
          iconTrailingName="compass"
        />
      </Header>
      <PageHeader />
      <Dashboard>
        <HeadingBody
          title="Splendor Jardim"
          address="Rua Doutor Rubens Awada, 33, Tamanduateí 3 - Santo André"
        >
          <Calendar day="01" month="10" year="2028" />
        </HeadingBody>
        <Info>
          <InfoCards icon="user" title="Compradores" value={156} />
          <InfoCards icon="award" title="Eventos" value={3} />
          <InfoCards icon="file" title="Documentos" value={4} />
          <InfoCards icon="receipt" title="Conexões" value={10} />
        </Info>
        <Metric>
          <UnitsMetricContent>
            <ChartContent>
              <UnitsChart disponiveis={30} reservados={40} vendidos={156} />
            </ChartContent>

            <StateCardContent>
              <StatCard
                heading="Disponíveis"
                value={30}
                background="grayLight"
              />
              <StatCard heading="Reservados" value={40} background="primary" />
              <StatCard
                heading="Vendidos"
                value={156}
                background="primaryDark"
              />
            </StateCardContent>
          </UnitsMetricContent>
          <DonutContent>
            <DonutChart percentage={80} />
          </DonutContent>
        </Metric>
        <Works />
      </Dashboard>
    </div>
  );
}
