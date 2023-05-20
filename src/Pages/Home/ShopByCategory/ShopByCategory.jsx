import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";

const ShopByCategory = () => {
  return (
    <div className="my-16 mx-2">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          Shop By Category
        </h2>
        <div className="w-1/2 md:w-1/3 h-1 mx-auto bg-gradient-to-r from-purple-700 to-indigo-300 mb-16"></div>
      </div>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Toy Cars</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Sports Car</Tab>
              <Tab>Truck</Tab>
              <Tab>Regular Car</Tab>
              <Tab>Mini Fire Truck</Tab>
              <Tab>Mini Police Car</Tab>
            </TabList>
            <TabPanel>
              <p>Car Card 1</p>
              <img src="placeholder-image-url" alt="" />
            </TabPanel>
            <TabPanel>
              <p>Car Card 2</p>
              <img src="placeholder-image-url" alt="" />
            </TabPanel>
            <TabPanel>
              <p>Car Card 3</p>
              <img src="placeholder-image-url" alt="" />
            </TabPanel>
            <TabPanel>
              <p>Car Card 4</p>
              <img src="placeholder-image-url" alt="" />
            </TabPanel>
            <TabPanel>
              <p>Car Card 5</p>
              <img src="placeholder-image-url" alt="" />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
