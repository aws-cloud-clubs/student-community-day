import React from "react";

interface useAnimationProps {
  refs: React.RefObject<any>[] | React.RefObject<any>;
  animationClassName: string;
}

export const useAnimation = ({ refs, animationClassName }: useAnimationProps) => {
  const refsArray = React.useMemo(() => {
    if (Array.isArray(refs)) {
      return refs;
    }
    return [refs];
  }, [refs]);

  React.useEffect(() => {
    if (typeof window === "undefined" || refsArray.some((ref) => !ref.current)) return;

    const observers = refsArray.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animationClassName);
            }, index * 500); // Add delay based on index
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        },
      );
    });

    refsArray.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      refsArray.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, [animationClassName, refsArray]);
};
