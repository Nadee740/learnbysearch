import ReactPDF from "@react-pdf/renderer";
import MyDocument from "./document";
ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
const PdfGenerator = () => {
  return (
    <div className="genereator">
      <h1>ds</h1>
    </div>
  );
};

export default PdfGenerator;
