import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideos(numberOfVideos, showFrom, scrollPositionRef) {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollLoading, setScrollLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let totalFetchData = 0;

    async function fetchData(startAtParameter, limitToFirstParameter) {
      const database = getDatabase();
      const videosReference = ref(database, "videos");
      const videosQuery = query(
        videosReference,
        orderByKey(),
        startAt(startAtParameter.toString()),
        limitToFirst(limitToFirstParameter),
      );

      try {
        // delay ;
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });

        const snapshot = await get(videosQuery);

        if (snapshot.exists() && isMounted) {
          const fetchData = Object.values(snapshot.val());

          totalFetchData += fetchData.length;

          setVideoList((prevVideoList) => {
            return [...prevVideoList, ...fetchData];
          });
          setLoading(false);
          setScrollLoading(false);
        } else {
          setLoading(false);
          setScrollLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData(showFrom, numberOfVideos);

    // scroll observer ;
    const observerDebounce = function (callBack, limit) {
      let isCalled = false;

      return function ([entry], observe) {
        if (!isCalled) {
          isCalled = true;
          callBack(entry, observe);
          setTimeout(() => {
            isCalled = false;
          }, limit);
        }
      };
    };

    let videoAlreadyFetch = 1;
    const observer = new IntersectionObserver(
      observerDebounce(async function (entry, observe) {
        if (entry.intersectionRatio) {
          videoAlreadyFetch += numberOfVideos;

          setScrollLoading(true);
          await fetchData(videoAlreadyFetch, numberOfVideos);

          if (videoAlreadyFetch > totalFetchData) {
            observe.unobserve(entry.target);
          }
        }
      }, 500),
    );

    if (scrollPositionRef.current) {
      observer.observe(scrollPositionRef.current);
    }

    return () => {
      observer.disconnect();
      isMounted = false;
    };
  }, [numberOfVideos, showFrom, scrollPositionRef]);

  return {
    videoList,
    loading,
    scrollLoading,
  };
}
