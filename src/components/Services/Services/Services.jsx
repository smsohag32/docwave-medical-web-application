import { Tabs } from "flowbite-react";
import doctor from "../../../assets/image.webp";

const Services = () => {
  return (
    <div className="grid items-center pt-12 default-container md:grid-cols-2 gap-3">
      <div>
        <img src={doctor} alt="doctor" />
      </div>
      <div className="space-y-3">
        <h2 className="tex-3xl md:text-5xl text-center">Our Services</h2>
        <p className="ms-4 opacity-50"></p>

        <div>
          <Tabs.Group aria-label="Default tabs" style="default">
            <Tabs.Item active title="Profile">
              Profile content
            </Tabs.Item>
            <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
            <Tabs.Item title="Settings">Settings content</Tabs.Item>
            <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
            <Tabs.Item disabled title="Disabled">
              Disabled content
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
};

export default Services;
