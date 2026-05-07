import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const certifications = [
  {
    title: "Claude Certified Architect",
    category: "Foundations Certification",
    tools: "Anthropic Education",
    image: "/images/claude.png",
    link: "https://verify.skilljar.com/c/i9kcstpmc2sv",
    // badgeEmbed: (
    //   <a href="https://www.credly.com/badges/b8df78ee-3401-4076-8c5b-5e44eeca6a3f/public_url" target="_blank" rel="noopener noreferrer">
    //     <img
    //       src="https://images.credly.com/size/340x340/images/0fcf7a48-1c7d-4a3e-8b7b-7c8e6e8b8c7e/image.png"
    //       alt="AWS Certified Solutions Architect Badge"
    //       style={{ width: 120, height: 120, borderRadius: 8 }}
    //     />
    //   </a>
    // ),
  },
  {
    title: "Microsoft 365 Certified",
    category: "Microsoft 365 & AI Certification",
    tools: "Microsoft 365 and Copilot administration, AI agents",
    image: "/images/M365.png",
    link: "https://learn.microsoft.com/en-us/users/namansinghal-2509/credentials/1ca5e0e0528a8b5e",
  },
  {
    title: "AWS Partner: Agentic AI Essentials",
    category: "AWS Cloud",
    tools: "AWS, Lambda, SageMaker, AI services",
    image: "/images/AWS AI.png",
    link: "#",
  },
];

const Certification = () => {
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
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="certification">
      <div className="work-container section-container">
        <h2>
          My <span>Certification</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous certification"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next certification"
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
              {certifications.map((cert, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{cert.title}</h4>
                        <p className="carousel-category">
                          {cert.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Skills & Topics</span>
                          <p>{cert.tools}</p>
                        </div>
                        {/* Credly Badge Embed */}
                        {/* {cert.badgeEmbed && (
                          <div className="credly-badge-wrapper" style={{ marginTop: 16 }}>{cert.badgeEmbed}</div>
                        )} */}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={cert.image}
                        alt={cert.title}
                        link={cert.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to certification ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>

        {/* After the carousel, add a button to view all badges on Credly */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="https://www.credly.com/users/naman-singhal.6bba5dc3"
            target="_blank"
            rel="noopener noreferrer"
            className="credly-profile-btn"
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
                <circle cx="12" cy="12" r="10" fill="#fff" stroke="#1976d2" strokeWidth="2" />
                <path d="M8 12l2.5 2.5L16 9" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View all badges on Credly
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certification;
