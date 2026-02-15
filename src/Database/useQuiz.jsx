import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuiz(videoID) {
  const [state, setState] = useState({
    quizList: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    let isMounted = true;
    
    async function fetchQuizData() {
      const database = getDatabase();
      const quizNode = ref(database, `quiz/${videoID}/questions`);
      const quizQuery = query(quizNode, orderByKey());
      
      try {
        const snapshot = await get(quizQuery);
        
        if (snapshot.exists() && isMounted) {
          console.log('Saleh')
          const fetchData = snapshot.val();

          setState((prevState) => ({
            ...prevState,
            quizList: fetchData,
            setLoading: false,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            loading: false,
            error: true,
          }));
        }
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
        }));
        console.log(error);
      }
    }
    fetchQuizData();

    return () => {
      isMounted = false;
    };
  }, [videoID]);

  return state;
}
