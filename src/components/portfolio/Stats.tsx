import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Years in Android & Flutter" },
  { value: 30, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.4, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, mv, to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
  }, [rounded, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="card-surface grid grid-cols-2 gap-8 p-8 sm:p-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
