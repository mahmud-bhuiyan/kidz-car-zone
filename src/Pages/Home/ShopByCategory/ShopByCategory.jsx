import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [toyData, setToyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://kidz-car-server.vercel.app/toys");
        if (!response.ok) {
          throw new Error("Failed to fetch toy data");
        }
        const data = await response.json();
        setToyData(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch toy data");
      }
    };

    fetchData();
  }, []);

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
            {toyData.map((toy) => (
              <TabPanel key={toy._id}>
                <div>
                  <p>{toy.toyName}</p>
                  <img
                    src={toy.picture}
                    alt=""
                    className="rounded-xl w-60 h-auto transition-transform duration-300 transform hover:scale-105"
                  />
                  <Link to={`/toyDetails/${toy?._id}`}>
                    <button className="mr-2 px-3 py-2 bg-blue-600 rounded-lg text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
