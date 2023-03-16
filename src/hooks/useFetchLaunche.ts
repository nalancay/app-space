import { useEffect, useState } from "react";
import ApiLaunches from "../api/launches";
interface LauncheStateProps {
  name: string;
  date_utc: string;
}

type ErrorStateProps = {
  hasError: boolean;
  message: string;
};

export const useFetchLaunche = () => {
  const [errorState, setErrorState] = useState<ErrorStateProps>({
    hasError: false,
    message: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [launche, setLaunche] = useState<LauncheStateProps>();

  useEffect(() => {
    setLoading(true);
    ApiLaunches.getNextLaunch()
      .then((data) => {
        const apiData = data;
        setLaunche(apiData);
        setLoading(false);
      })
      .catch((err) => setErrorState({ hasError: true, message: err.message }));
  }, []);

  return { launche, isLoading, errorState };
};
