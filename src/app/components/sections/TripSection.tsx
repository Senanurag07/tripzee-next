import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";
import TripSlider from "../sliders/trip-slider";
import { tripsData } from "../cards/trip-cards";

interface CustomLabelProps {
  label: string;
  width?: number;
}

const CustomLabel = ({ label, width = 24 }: CustomLabelProps) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-2xl md:text-3xl text-black lg:text-4xl font-bold">{label}</h2>
    <div className={`w-${width} h-1.5 bg-[#FFE926]  rounded-full`}></div>
  </div>
);

async function TripSection() {
  // In the future, you can replace this with an actual API call
  const result = { data: tripsData };

  if (!result?.data?.length) return null;

  return (
    <section className="lg:py-10 bg-white relative">
      <MaxWidthContainer>
        <div className="flex justify-between items-center mb-8">
          <CustomLabel label="Trending Destinations" width={28} />
          {/* <Link
            href={`/upcoming-trips`}
            className="hidden md:block text-black primary-btn"
          >
            Explore All
          </Link> */}
        </div>
        <TripSlider data={result.data} />
        <div className="flex justify-center items-center py-8 md:hidden">
          {/* <Link href={`/upcoming-trips`} className="md:hidden bg-black primary-btn">
            Explore All
          </Link> */}
        </div>
      </MaxWidthContainer>
    </section>
  );
}

export default TripSection;
