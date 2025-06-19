import { FaChartLine, FaMoneyBillWave, FaCheckCircle, FaUsers, FaGlobe } from "react-icons/fa";
import './KeyFigures.scss';

export default function KeyFigures() {
  const figures = [
    {
      icon: <FaChartLine />,
      number: "30 ans",
      label: "d'expérience"
    },
    {
      icon: <FaMoneyBillWave />,
      number: "250M€",
      label: "de projets financés"
    },
    {
      icon: <FaCheckCircle />,
      number: "20 à 40",
      label: "agréments fiscaux par an"
    },
    {
      icon: <FaUsers />,
      number: "300",
      label: "investisseurs nous font confiance"
    },
    {
      icon: <FaGlobe />,
      number: "+100",
      label: "exploitants ultramarins aidés"
    }
  ];

  return (
    <section className="keyFigures">
      <h2></h2>
      <div className="figuresGrid">
        {figures.map((fig, i) => (
          <div className="figureCard" key={i}>
            <div className="icon">{fig.icon}</div>
            <div className="number">{fig.number}</div>
            <div className="label">{fig.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
