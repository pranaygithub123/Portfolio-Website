
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> =
    document.querySelectorAll(".para");

  const titles: NodeListOf<ParaElement> =
    document.querySelectorAll(".title");

  const TriggerStart =
    window.innerWidth <= 1024 ? "top 60%" : "20% 60%";

  const ToggleAction = "play pause resume reverse";

  // =========================
  // PARA ANIMATION
  // =========================

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");

    if (para.anim) {
      para.anim.progress(1).kill();
    }

    if (para.split) {
      para.split.revert();
    }

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    // ✅ Fix: store in variable and check before using
    const words = para.split?.words;
    if (!words || words.length === 0) return;

    para.anim = gsap.fromTo(
      words,
      {
        autoAlpha: 0,
        y: 80,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.02,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para.parentElement?.parentElement || para,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // =========================
  // TITLE ANIMATION
  // =========================

  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }

    if (title.split) {
      title.split.revert();
    }

    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    // ✅ Fix: store in variable and check before using
    const chars = title.split?.chars;
    if (!chars || chars.length === 0) return;

    title.anim = gsap.fromTo(
      chars,
      {
        autoAlpha: 0,
        y: 80,
        rotate: 10,
      },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: title.parentElement?.parentElement || title,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  ScrollTrigger.refresh();
}