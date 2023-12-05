import ServicesData from "./assets/services.json";
import Card from "@/app/components/card";

export default function Services() {
  return (
    <>
      <div className="grid grid-cols-12 gap-8">
        {ServicesData.map((service, index) => (
          <div key={index} className="lg:col-span-4 md:col-span-6 col-span-12">
            <Card
              titleIcon={service.titleIcon}
              title={service.title}
              description={service.description}
              feature={service.feature}
              buttonText="Learn more"
            />
          </div>
        ))}
      </div>
    </>
  );
}
