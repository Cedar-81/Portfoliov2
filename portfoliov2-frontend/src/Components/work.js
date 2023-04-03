import React, { useEffect, useState } from "react";
import Workcard from "./workcard";
import { project_query } from "../utils/data";
import { client } from "../client";

const Work = () => {
  const [works, setWorks] = useState(null);
  const [loadamt, setLoadamt] = useState(3);

  useEffect(() => {
    const query = project_query();
    client.fetch(query).then((data) => {
      console.log(data);
      if (data.length > 0) {
        let arr = [];
        let count = 0;
        data?.forEach((val) => {
          arr.push(val);
          count++;
          if (count === loadamt || count == data.length) return setWorks(arr);
        });
      }
    });
  }, [loadamt]);

  return (
    <div id="work" className="px-[5%] pt-12 pb-8 md:px-[8%]">
      <h3 className="text-xl font-medium md:text-2xl">Works</h3>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-8 md:justify-between mt-10 md:mt-[4rem]">
        {works?.map((work) => (
          <Workcard key={work._id} data={work} />
        ))}
      </div>

      {works?.length > 3 && (
        <div className="w-full flex justify-center mt-3 md:mt-10">
          <button
            onClick={() => setLoadamt((prev) => prev + 3)}
            className="px-5 py-3 hover:bg-orange hover:text-white transition rounded-full border-2 border-orange text-orange md:px-8"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
