import React, { useEffect, useRef, useState } from "react";
import { impactStats } from "../data/mock";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const startTime = performance.now();
    let raf;
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setCount(end);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const ImpactReport = () => {
  return (
    <section
      className="py-16 md:py-20 relative bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 80%, rgba(236,0,140,0.04) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(236,0,140,0.04) 0%, transparent 40%)"
      }}
    >
      <div className="container-x">
        <h2 className="section-heading text-3xl md:text-4xl">Impact Report</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {impactStats.map((s) => (
            <div key={s.id} className="impact-card">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                <CountUp end={s.value} />
                <sup className="text-[#ec008c] text-xl">{s.suffix}</sup>
              </div>
              <div className="text-xs md:text-sm font-semibold text-[#ec008c] mt-3 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactReport;
