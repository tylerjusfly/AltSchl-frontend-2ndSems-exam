import { Navbar } from "./Navbar";
import warnSign from "../assets/imgs/warningsign.svg";

export const FallBackError = ({ error }) => {
  return (
    <>
      <Navbar />
      <main className="flex-middle">
        <h2 className="text-2xl font-ty font-bold">Something went wrong:</h2>
        <img src={warnSign} alt="warning signLogo" width={340} />
        <pre className="font-bold font-ty text-2xl mt-5" style={{ color: "red" }}>
          {error.message}
        </pre>
        <p className="mt-5 text-xl font-ty" style={{ color: "red" }}>
          Click on web Icon and refresh to go back to home page.
        </p>
      </main>
    </>
  );
};
