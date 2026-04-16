import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "PayStream",
    category: "AI-Powered Code Analysis Platform",
    tools: "React, Node.js, Express 5, Claude Sonnet, Hedera SDK, SSE",
    image: "/images/paystream.png",
    link: "https://paystreamhbar.vercel.app/",
  },
  {
    title: "QCheck",
    category: "Decentralized Medicine Verification Protocol",
    tools: "Next.js, Solidity, Ethereum, Ethers.js, QR Code Generation",
    image: "/images/qcheck.png",
    link: "https://qcheck-ethdenver.vercel.app/",
  },
  {
    title: "Connectra",
    category: "Social Networking App",
    tools: "MongoDB, Express, React, Node.js",
    image: "/images/connectra.png",
    link: "https://connectra-nine.vercel.app/",
  },
  {
    title: "Nitro",
    category: "AI App Builder",
    tools: "React, Node.js, TypeScript, AI Integration",
    image: "/images/nitro.png",
    link: "https://nitroaiagent.vercel.app/",
  },
  {
    title: "Shawty",
    category: "AI Content Creator",
    tools: "React, Node.js, TypeScript, NLP, AI Integration",
    image: "/images/shawty.png",
    link: "https://github.com/pratyushsawant/Ai-Content-Creator",
  },
  {
    title: "Serenata",
    category: "Music Streaming Application",
    tools: "React, Node.js, Audio API, Playlist Management",
    image: "/images/serenata.jpg",
    link: "https://github.com/pratyushsawant/serenata",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper" style={index === 1 ? { transform: "translateX(-100px)" } : index >= 2 && index <= 4 ? { transform: "translateX(-100px)" } : undefined}>
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
