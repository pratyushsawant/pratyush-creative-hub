import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm a computer science student at Texas Tech. At Tigbourne Capital
          this summer, an audit found that over 95% of the North America
          oilfield records had no canonical source, and I led the rebuild. I
          also built the screening platform over 1,978 fields in 6 regions, and
          at Ericsson in 2025 a React/Node dashboard that cut incident response
          time by 35%.
        </p>
      </div>
    </div>
  );
};

export default About;
