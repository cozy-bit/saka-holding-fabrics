
import Slider from "./slide/slide";
import Boxes from "./boxes/Boxes";
import FabricSelector from "./types/Types";
import Cert from "./certs/Cets";
import Season from "./season/Season";
import LeadFormHero from "./LeadFormHero";

export function HomePage() {
  return (
    <div>
      <Slider />
      <Boxes />
      <FabricSelector />
      <Cert />

      <Season text="Актуальная палитра “Saka Tekstil” 
из 45+ цветов – поможет решить любые задачи, стоящие перед вами" />
      <Season text="Сезонная палитра" />
      <LeadFormHero />
    </div>
  );
}
