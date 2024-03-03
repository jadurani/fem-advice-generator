import { useEffect, useState } from "react";

type Response = {
  id: string;
  advice: string;
} | null;

const URL = "https://api.adviceslip.com/advice";

export const useAdviceFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [adviceData, setAdviceData] = useState<Response>(null);

  const getAdvice = async () => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setAdviceData(data.slip);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAdvice();
  }, []);

  return { loading, error, adviceData, getAdvice };
};
