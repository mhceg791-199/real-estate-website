import ServiceCard from "../../components/Services/ServiceCard";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";

export default function Services() {
  const paragraphs = [
    "Mosaic Real Estate acquires, partners and develops across the asset lifecycle. We are focused on transactions and development activity that respect design, enhance cities, and deliver strong returns. Below are our core service offerings.",
  ];
  return (
    <>
      <FirstSectionByVideo title="Services" />
      <DescriptionAbout
        id="services-real-estate"
        firstWord="Services"
        secondWord=""
        paragraphs={paragraphs}
        particleColors={["#e0e0d4", "#e0e0d4"]}
        height="h-[22vh] md:h-[35vh]"
      />
      <ServiceCard />
    </>
  );
}
