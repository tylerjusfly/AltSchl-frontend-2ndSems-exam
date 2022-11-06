import { Navbar } from "./Navbar";
import warnSign from "../assets/imgs/warningsign.svg";

export const FallBackError = ({ error }) => {
  return (
    <>
      <Navbar />
      <main className="flex-middle">
        <h2 className="text-xl font-ty font-bold mb-4">Something went wrong:</h2>
        <img src={warnSign} alt="warning signLogo" width={200} />
        <p className="font-bold font-ty mt-5 overflow-hidden p-4" style={{ color: "red" }}>
          {error.message}
        </p>
        <p className="mt-5 text-l font-ty" style={{ color: "red" }}>
          Click on web Icon and refresh to go back to home page.
        </p>
      </main>
    </>
  );
};
