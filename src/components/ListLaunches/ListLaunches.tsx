import { useEffect, useState } from "react";
import { useFetchList } from "../../hooks/useFetchList";
import { MessageError } from "../MessageError/MessageError";
import { Spinner } from "../Spinner/Spinner";
import Launch from "./Launch";
import {
  StyledContainer,
  StyledContainerLaunches,
} from "./ListLaunches.styles";

export interface favoritesStateProps {
  id: number;
}

const ListLaunches = () => {
  const {
    entities: launchesUpcomingList,
    isLoading,
    errorState,
  } = useFetchList();

  const [favorites, setfavorites] = useState<favoritesStateProps[]>([]);

  const addOrRemoveFavs = (e: any) => {
    let favInLocalStorage =
      JSON.parse(localStorage.getItem("favoritesLaunch") || "0") || [];

    const btnFavorite = e.currentTarget;
    const launchData = { id: btnFavorite.dataset["launchId"] };

    const launchIsArray = favInLocalStorage.find(
      (launch: favoritesStateProps) => launch?.id === launchData.id
    );

    if (!launchIsArray) {
      favInLocalStorage.push(launchData);
      localStorage.setItem(
        "favoritesLaunch",
        JSON.stringify(favInLocalStorage)
      );
      setfavorites(favInLocalStorage);
    } else {
      let launchLeft = favInLocalStorage.filter(
        (launch: favoritesStateProps) => launch.id !== launchData.id
      );
      localStorage.setItem("favoritesLaunch", JSON.stringify(launchLeft));
      setfavorites(launchLeft);
    }
  };

  useEffect(() => {
    const parseFavArray =
      JSON.parse(localStorage.getItem("favoritesLaunch") || "0") || [];
    let favInLocalStorage = parseFavArray || [];
    setfavorites(favInLocalStorage);
  }, []);

  return (
    <>
      {errorState.hasError && (
        <MessageError messageError={errorState.message} />
      )}
      {!errorState.hasError && isLoading && <Spinner />}
      {!errorState.hasError && !isLoading && (
        <StyledContainer>
          <h2 className="info_title">Upcoming - Next Launches</h2>
          <StyledContainerLaunches className="launches__container">
            <div className="table__row">
              <div className="table_col">
                <span>Mission</span>
              </div>
              <div className="table_col">
                <span>Date (UTC)</span>
              </div>
              <div className="table_col">
                <span>Launchpad</span>
              </div>
              <div className="table_col">
                <span>Favorite</span>
              </div>
            </div>
            {launchesUpcomingList.map((launch) => {
              const idLaunche = launch.id;
              return (
                <Launch
                  key={idLaunche}
                  launch={launch}
                  addOrRemoveFavs={addOrRemoveFavs}
                  favorites={favorites}
                />
              );
            })}
          </StyledContainerLaunches>
        </StyledContainer>
      )}
    </>
  );
};

export default ListLaunches;
