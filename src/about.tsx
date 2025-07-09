import Music from './Soundcloud';
import Games from './games';
import './animate.css';

export default function About() {
  return (
    <main>
      <div className="fade-in">
      <div>
        <h1>About</h1>
        <h2>👤 Main</h2>
        <p>I am Evil, also known as kxtfn or just Igor. I am 19 years old, currently living in Kyiv. I am an aspiring developer interested in frontend, web technologies and creating interactive interfaces. I am gradually learning React, TypeScript and everything that helps to build modern websites.</p>
        <h2>🎨 Creativity</h2>
        <div className="creativity-section">
          <div className="text-content">
          <p>Since childhood I was fond of drawing, mostly on an amateur level - just for the soul. 
          Later it turned into digital creativity: I created resource packs for Minecraft - my own textures, models and sounds. 
          This allowed me to combine visual art with technical realization.
          </p>
          </div>
          <img src={require('./img/rp.jpg')} className="image" alt="My resourcepack"/>
        </div>
        <h2>🎧 Music</h2>
        <p>I'm a music lover: I listen to a wide variety of genres, from laid-back electronica to hardcore rap. I come back to Chief Keef tracks especially often - he sets the right vibe and helps me focus.</p>
        <Music/>
        <h2>🎮 Games</h2>
        <p>I don't play that many games now, but I have a list of favorite titles that I always want to come back to:</p>
        <ul className="game-list">
        <Games/>
        </ul>
        <div className="section-divider"></div>
      </div>
      </div>
    </main>
  );
}


