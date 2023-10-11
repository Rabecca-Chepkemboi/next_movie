'use client';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Movies from './components/getMovies';
import Navbar from './components/navbar/navbar';
// import Carousel from './components/caurosel/caurosel';
import Footer from './components/footer/footer';
import HeroSection from './components/hero/hero';
import Category from './components/movieCategory/category';

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <HeroSection/>
        <Category/>
        {/* <Carousel/> */}
        <Movies/>
        <Footer/>
      </div>
    </main>
  )
}