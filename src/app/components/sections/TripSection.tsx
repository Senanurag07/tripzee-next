import TripSlider from "../sliders/trip-slider";
import { tripsData } from "../cards/trip-cards";

interface CustomLabelProps {
  label: string;
  width?: number;
}

const CustomLabel = ({ label}: CustomLabelProps) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-2xl md:text-3xl text-black lg:text-4xl font-bold">
      {label}
    </h2>
    {/* <div
      style={{ width: `${width}rem` }}
      className="h-1.5 bg-[#FFE926] rounded-full"
    ></div> */}
  </div>
);

interface TripSectionProps {
  title: string;
  width?: number;
}

async function TripSection({ title, width = 20 }: TripSectionProps) {
  // In the future, you can replace this with an actual API call
  const result = { data: tripsData };

  if (!result?.data?.length) return null;

  return (
    <section className="lg:py-8 max-container bg-white relative">
      <div className="flex justify-between items-center mb-8">
        <CustomLabel label={title} width={width} />
      </div>

      <TripSlider data={result.data} />

      <div className="flex justify-center items-center md:hidden"></div>
    </section>
  );
}

export default TripSection;
