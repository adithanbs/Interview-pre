import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const id =setInterval(() => {
      fetch("/api/data", { signal: controller.signal })
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
    }, 5000);
    return () => {
      clearInterval(id);
      controller.abort();
    };
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;