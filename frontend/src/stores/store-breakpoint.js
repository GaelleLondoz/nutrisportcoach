import { readable } from "svelte/store";

const breakpointValues = {
  xs: 360,
  sm: 600,
  md: 1024,
  lg: 1280,
  xl: 1586,
};

const xs = {
  min: 0,
  max: breakpointValues.xs - 1,
  name: "xs",
};

const sm = {
  min: breakpointValues.xs,
  max: breakpointValues.sm - 1,
  name: "sm",
};

const md = {
  min: breakpointValues.sm,
  max: breakpointValues.md - 1,
  name: "md",
};

const lg = {
  min: breakpointValues.md,
  max: breakpointValues.lg - 1,
  name: "lg",
};

const xl = {
  min: breakpointValues.lg,
  max: breakpointValues.xl - 1,
  name: "xl",
};

const xxl = {
  min: breakpointValues.xl,
  max: Infinity,
  name: "xxl",
};

const breakpoints = { xs, sm, md, lg, xl, xxl };

export const breakpoint = readable(getBP(), (set) => {
  const isWindow = typeof window !== "undefined" || false;
  let BP = getBP();
  const updateBP = () => {
    const currentBP = getBP();
    if (!BP || currentBP.name !== BP.name) {
      BP = currentBP;
      set(currentBP);
    }
  };

  if (isWindow) {
    window.addEventListener("resize", updateBP);
  }

  return () => isWindow && window.removeEventListener("resize", updateBP);
});

function getBP() {
  if (typeof window !== "undefined") {
    const { innerWidth } = window;

    return Object.values(breakpoints).find(
      (bp) => bp.min <= innerWidth && bp.max >= innerWidth
    );
  }
}
