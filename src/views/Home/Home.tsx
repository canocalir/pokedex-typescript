import { FC, useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { HomePageContainer } from "./Home.styled";
import { useGetPokemonListQuery } from "../../services/pokemonApi";
import Navbar from "../../components/Navbar/Navbar";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import type { AllResult } from "../../types/types";

const Home:FC = () => {
  const [offsetNumber, setOffsetNumber] = useState(0);
  const { data, isFetching } = useGetPokemonListQuery(offsetNumber);

  //Get coordinates on window for InfiniteScroll
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setOffsetNumber(offsetNumber + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [offsetNumber, isFetching]);
  
  return (
    <>
      <Navbar />
      <HomePageContainer>
        {data?.results?.map((pokemon: AllResult, index: number) => {
          const { name, url } = pokemon ?? {};
          return <PokeCard key={index} name={name} url={url} />;
        })}
        {!isFetching && <LoadingBar />}
      </HomePageContainer>
    </>
  );
};

export default Home;
