import { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { HomePageContainer } from "./Home.styled";
import { useGetPokemonListQuery } from "../../services/pokemonApi";
import Navbar from "../../components/Navbar/Navbar";
import LoadingBar from "../../components/LoadingBar/LoadingBar";

const Home = () => {
  const [offsetNumber, setOffsetNumber] = useState(0);
  const { data, isFetching } = useGetPokemonListQuery(offsetNumber);
  
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
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
        {data?.results?.map((pokemon: any, index:number) => {
          const { name, url } = pokemon ?? {};
          return <PokeCard key={index} name={name} url={url} />;
        })}
        {!isFetching && <LoadingBar/>}
      </HomePageContainer>
    </>
  );
};

export default Home;
