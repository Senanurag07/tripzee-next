import TripSlider from "../sliders/trip-slider";
import { tripsData } from "../cards/trip-cards";

interface CustomLabelProps {
  label: string;
  width?: number;
}

const CustomLabel = ({ label}: CustomLabelProps) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-[26px] md:text-3xl text-black lg:text-4xl font-extrabold">
      {label}
    </h2>
  </div>
);

interface TripSectionProps {
  title: string;
  width?: number;
}

async function TripSection({ title, width = 20 }: TripSectionProps) {
  const result = { data: tripsData };

  if (!result?.data?.length) return null;

  return (
    <main className="overflow-hidden bg-white" >

    <section className="lg:py-8 max-container  pt-10 md:py-10  relative">
      <div className="flex justify-between items-center mb-5">
        <CustomLabel label={title} width={width} />
      </div>

      <TripSlider data={result.data} />
    </section>
    </main>

  );
}

export default TripSection;
