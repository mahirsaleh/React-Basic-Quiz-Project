import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useResult(videoID) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMount = true;

    (async function () {
      const database = getDatabase();
      try {
        const startCountRef = await ref(
          database,
          `answers/${videoID}/questions`,
        );

        onValue(startCountRef, (snapshot) => {
          const data = snapshot.val();
          if (data && isMount) {
            setLoading(false);
            setResult(data);
            return;
          } else {
            setLoading(false);
          }
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    })();

    return () => {
      isMount = false;
    };
  }, [videoID]);

  return {
    result,
    error,
    loading,
  };
}
