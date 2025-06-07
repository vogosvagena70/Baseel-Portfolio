import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

type ThrowArcBoxProps = {
  text: string;
  setClicked: () => void;
  show: boolean;
};

export default function ThrowArcBox({ text  }: ThrowArcBoxProps) {
  const controls = useAnimation();
  const [test, setTest] = useState(true);

  const handleClick = () => {
    setTest(false);
  };

  useEffect(() => {
    controls.start({ y: 0, opacity: 1 });
    if (!test) {
      // controls.start({
      //   rotate: 1200,
      //   x: 500,
      //   y: 500,
      //   opacity: 1,
      //   transition: {
      //     x: { duration: 2.5 },
      //     y: {
      //       duration: 2.5,
      //       ease: [0.1, -2, 1, 1], // mimic a parabolic arc
      //     },
      //     rotate: { duration: 3 },
      //     opacity: { duration: 3 },
      //   },
      // });
    }
  }, [controls, test]);

  return (
    <>
      <AnimatePresence>
        {test == true && (
          <motion.div
            animate={controls}
            onClick={handleClick}
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            exit={{
              rotate: 1200,
              x: 500,
              y: 500,
              opacity: 1,
              transition: {
                x: { duration: 2.5 },
                y: {
                  duration: 2.5,
                  ease: [0.1, -2, 1, 1], // mimic a parabolic arc
                },
                rotate: { duration: 3 },
                opacity: { duration: 3 },
              },
            }}
            style={{
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              borderRadius: 20,
            }}
          >
            <a className="font-extrabold header-href">{text}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
