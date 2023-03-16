import { useEffect, useRef, useState } from "react";
import { useFetchLaunche } from "../../hooks/useFetchLaunche";
import { MessageError } from "../MessageError/MessageError";
import { MessageLoading } from "../MessageLoading/MessageLoading";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import {
  StyledContainer,
  StyledContainerSocial,
  StyledContainerTimer,
} from "./LaunchCountdown.styles";

const urlShare = "https://nalancay-app-launches.netlify.app/";

interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const LaunchCountdown = () => {
  const { launche, isLoading, errorState } = useFetchLaunche();
  const [timer, setTimer] = useState<TimeState>();
  const dataUTC = launche ? launche.date_utc : "";

  let interval = useRef();

  const startTimer = () => {
    let date_utc = Date.parse(dataUTC);
    const countdownDate = new Date(date_utc).getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        setTimer({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval.current);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    let someref = interval.current;
    return () => {
      clearInterval(someref);
    };
  });

  return (
    <>
      {errorState.hasError && (
        <MessageError messageError={errorState.message} />
      )}
      {!errorState.hasError && isLoading && <MessageLoading />}
      {launche && (
        <StyledContainer>
          <h2 className="info_title">Launch Upcoming:{launche.name}</h2>
          <StyledContainerTimer>
            <div>
              <p>{timer ? timer.days : "00"}</p>
              <p className="info_data">DAYS</p>
            </div>
            <div>
              <p>{timer ? timer.hours : "00"}</p>
              <p className="info_data">HOURS</p>
            </div>
            <div>
              <p>{timer ? timer.minutes : "00"}</p>
              <p className="info_data">MINUTES</p>
            </div>
            <div>
              <p>{timer ? timer.seconds : "00"}</p>
              <p className="info_data">SECONDS</p>
            </div>
          </StyledContainerTimer>

          <StyledContainerSocial>
            <p>Compartir por:</p>
            <div className="social_share_redes">
              <FacebookShareButton
                url={urlShare}
                quote={"React app Launch Next"}
                hashtag="#Next Launch"
              >
                <FacebookIcon round={true} size="5ex"></FacebookIcon>
              </FacebookShareButton>
            </div>
            <div className="social_share_redes">
              <WhatsappShareButton title="Sharing Content" url={urlShare}>
                <WhatsappIcon round={true} size="5ex"></WhatsappIcon>
              </WhatsappShareButton>
            </div>
          </StyledContainerSocial>
        </StyledContainer>
      )}
    </>
  );
};

export default LaunchCountdown;
