import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import { MovieList } from "../components/MovieList";
import useMovielist from "../hooks/useMovielist";
import useFavorites from "../hooks/useFavorites";
import InfoModal from "../components/InfoModal";
import useInfoModalStore from "../hooks/useInfoModalStore";
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Home() {
  const { data: movie = [] } = useMovielist();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <MovieList title="Hello" data={movie} />
      <MovieList title="My List" data={favorites} />
    </>
  );
}
