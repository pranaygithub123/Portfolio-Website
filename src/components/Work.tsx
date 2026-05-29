import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Global Travels",
    category: "Full Stack · Travel & Tourism",
    tools: "React, Tailwind CSS, MongoDB, Express & Node.js",
    image: "/images/globaltravels.png"
  },
  {
    name: "Urbanhaven Website",
    category: "Full Stack · Interior Design",
    tools: "Next.js , Firebase , Github & Vercel",
    image: "/images/Urbanhaven.png"
  },
  {
    name: "Urbanhaven CRM",
    category: "Full Stack · CRM Platform",
    tools: "Next.js, Tailwind CSS, Supabase, Webhook and Vercel",
    image: "/images/crm.png"
  },
  {
    name: "Admin Panel Revamping",
    category: "Full Stack · Web App",
    tools: "React.js, FIrebase, Node.js, Tailwind CSS and Github",
    image: "/images/bca.png"
  },
  {
    name: "Ecommerce App",
    category: "Full Stack · E Commerce",
    tools: "React.js, JavaScript, MongoDB, REST APIs",
    image: "/images/ecommerce.webp"
  },
  {
    name: "Music Listening App",
    category: "Freelance · Frontend",
    tools: "React.js, TypeScript, GSAP, Three.js",
    image: "/images/portfolio.webp"
  }
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work"
      }
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none"
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
