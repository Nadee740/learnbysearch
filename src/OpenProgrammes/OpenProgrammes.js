import Openprogramcard from "./openprogramescard";
import "./OpenProgrammes.css";
const OpenProgrammes = () => {
  return (
    <>
      <div className="openprograms">
        <h2>Open Programs</h2>
        <div className="cardholder">
          <Openprogramcard />
          <Openprogramcard />
          <Openprogramcard />
          <Openprogramcard />
          <Openprogramcard />
          <Openprogramcard />
        </div>
      </div>
    </>
  );
};

export default OpenProgrammes;
