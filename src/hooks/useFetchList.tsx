import { useEffect, useState } from "react";
import ApiLaunches from "../api/launches";

interface EntitiesStateProps {
  id: number;
  name: string;
  date_utc: string;
  launchpad: string;
}

type ErrorStateProps = {
  hasError: boolean;
  message: string;
};

export const useFetchList = () => {
  const [errorState, setErrorState] = useState<ErrorStateProps>({
    hasError: false,
    message: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [entities, setEntities] = useState<EntitiesStateProps[] | []>([]);

  useEffect(() => {
    setLoading(true);
    ApiLaunches.getAllLaunchesUpcoming()
      .then((data) => {
        const apiData = data;
        setEntities(apiData);
        setLoading(false);
      })
      .catch((err) => setErrorState({ hasError: true, message: err.message }));
  }, []);

  return { entities, isLoading, errorState };
};
