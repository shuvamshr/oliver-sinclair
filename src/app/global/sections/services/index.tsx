import ServicesData from "./assets/services.json";
import Card from "@/app/components/card";

export default function Services() {
  return (
    <>
      <div className="container-fluid bg-white px-6 lg:px-0 pb-14 lg:pb-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-evenly gap-y-8">
            {ServicesData.map((service, index) => (
              <Card
                titleIcon={service.titleIcon}
                title={service.title}
                description={service.description}
                feature={service.feature}
                buttonText="Learn more"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}