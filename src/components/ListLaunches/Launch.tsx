import { favoritesStateProps } from "./ListLaunches";

interface LauncheProps {
  launch: {
    id: number;
    name: string;
    date_utc: string;
    launchpad: string;
  };
  addOrRemoveFavs: (e: any) => void;
  favorites: favoritesStateProps[];
}

const Launch = ({ launch, addOrRemoveFavs, favorites }: LauncheProps) => {
  const { id, name, date_utc, launchpad } = launch;

  return (
    <div className="table__row">
      <div className="table_col">
        <span>{name}</span>
      </div>
      <div className="table_col">
        <span>{new Date(date_utc).toDateString()}</span>
      </div>
      <div className="table_col">
        <span>{launchpad}</span>
      </div>
      <div className="table_col">
        <button
          className="favorite-btn"
          onClick={addOrRemoveFavs}
          data-launch-id={id}
          data-testid={id}
        >
          {favorites.some(
            (favorite: favoritesStateProps) => favorite.id === id
          ) ? (
            <span style={{ color: "#C0392B", fontSize: "20px" }}>
              ❤︎ <span>Delete</span>
            </span>
          ) : (
            <span style={{ fontSize: "20px" }}>❤︎ Add</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Launch;
