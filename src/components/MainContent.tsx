import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const MainContent = () => {
  const [post, setPost] = useState<any[]>([{}]);
  const [count, setCount] = useState(0);
  const [slug, setSlug] = useState<string>();
  const baseURL = `http://testess.atwebpages.com/api.php?n=10`;

  const chartData = [
    { year: "1950", population: 2.525 },
    { year: "1960", population: 3.018 },
    { year: "1970", population: 3.682 },
    { year: "1980", population: 4.44 },
    { year: "1990", population: 5.31 },
    { year: "2000", population: 6.127 },
    { year: "2010", population: 6.93 },
  ];
  const apiData: any = [];

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, [count]);
  useEffect(() => {
    const interval = setInterval(increment, 100000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-gray-150 p-10 flex-grow">
      <div className="my-10">
        <h3 className="text-2xl font-bold mb-5">Clima hoje</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
          <LargeCard title="Wind Status" num={7} desc="mph">
            <div className="flex justify-between space-x-5 items-center">
              <div className="bg-gray-500 rounded-full w-[30px] h-[30px] flex justify-center items-center">
                <i className="fas fa-location-arrow"></i>
              </div>
              <p className="text-gray-150 text-sm">WSW</p>
            </div>
          </LargeCard>

          <LargeCard
            title="Umidade"
            num={post[count] === undefined ? "ops" : post[count].umidade}
            desc="%"
          >
            <div className="self-stretch text-gray-250 text-xs space-y-1">
              <div className="flex justify-between space-x-5 items-center px-1">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div
                  className="bg-[#FFEC65] h-2"
                  style={{ width: `${post[count].umidade}%` }}
                ></div>
              </div>
              <p className="text-right">%</p>
            </div>
          </LargeCard>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
