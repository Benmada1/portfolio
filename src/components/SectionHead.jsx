import Reveal from './Reveal.jsx';

export default function SectionHead({ number, label, id, title, intro }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">
        <span className="eyebrow__num">{number}</span>
        <span>{label}</span>
      </p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </Reveal>
  );
}
