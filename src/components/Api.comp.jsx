import React, { useEffect, useState } from "react";

export function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!request.ok) throw new Error("Api fetch failed");

        const result = await request.json();

        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return(
  <>
  <div>  
    <ul>

        {data.map((item)=>{
            return  <li key={item.id}>{item.name}</li>
        })} 

    </ul>
  </div>
  </>
  );
}
