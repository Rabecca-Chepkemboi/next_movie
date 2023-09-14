'use client';
import Movies from './components/getMovies';
import Navbar from './components/navbar/navbar';
export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <Movies/>
      </div>
    </main>
  )
}