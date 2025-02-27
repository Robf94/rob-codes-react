import { useState, useEffect } from "react";
import ClickSpark from "../Animations/ClickSpark/ClickSpark.jsx";
import supabase from "../utils/supabaseClient.js";
import { motion } from "motion/react";

function HighFive() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchHighFiveCount = () => {
      supabase
        .from("high_fives")
        .select("high_five_count")
        .single()
        .then(({ data, error }) => {
          if (error) {
            setIsError(true);
            return;
          }
          setCount(data.high_five_count);
        })
        .catch((err) => {
          setIsError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchHighFiveCount();
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    supabase
      .from("high_fives")
      .upsert({ id: 1, high_five_count: newCount }, { onConflict: ["id"] })
      .then(({ error }) => {
        if (error) {
          setIsError(error.message);
          return;
        }
        setCount(newCount);
      })
      .catch((err) => {
        setIsError(err.message);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.3, once: true}}
      className="relative mt-2 flex w-full flex-col items-center justify-center md:mt-0 md:w-1/2"
    >
      <h1 className="mb-2 w-full text-4xl md:text-center">High five?</h1>

      {isError ? (
        <p>Error loading high fives</p>
      ) : (
        <div className="relative h-96 w-full max-w-lg overflow-hidden rounded-lg md:h-full">
          <ClickSpark
            sparkColor="black"
            sparkSize={20}
            sparkRadius={30}
            sparkCount={12}
            duration={200}
            incSlaps={handleClick}
            count={count}
            isLoading={isLoading}
          />
        </div>
      )}
    </motion.section>
  );
}

export default HighFive;
