'use client';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Movies from './components/getMovies';
import Carousel from './components/caurosel/caurosel';
import Footer from './components/footer/footer';
import Category from './components/movieCategory/category';
// import SearchBar from './components/search/search';

export default function Home() {
  return (
    <main>
      <div>
        {/* <SearchBar/> */}
        <Carousel/>
        <Category/>
        <Movies/>
        <Footer/>
      </div>
    </main>
  )
}