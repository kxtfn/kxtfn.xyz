function HomePage() {
  return (
    <main>
    <h1>Welcome!</h1>
    <p>You've landed on my personal page — a place where I showcase side projects, 
    fun features, and random things I'm working on.</p>
    <h1>About me</h1>
    <p>I’m an aspiring front-end developer with a growing passion for web technologies and user interface design. Although I’m just beginning my journey in programming, I already have a basic understanding of modern tools like React and TypeScript, and I’m actively improving my skills by working on personal projects.</p>
    <p>Beyond coding, I’ve always had a strong interest in computer hardware and networking. I enjoy exploring how different components interact, learning how to customize systems, and understanding the logic behind how things work on both a software and hardware level.</p>
    <p>I also consider myself a creative individual. In the past, I created custom texture packs for Minecraft, combining artistic vision with technical execution. I even ran a few newsgroups and communities, which gave me experience in communication, content creation, and coordination.</p>
    <p>Now, I’m fully focused on leveling up my development skills and combining my tech knowledge with creativity to build engaging and meaningful projects.</p>
    <h1>Developing</h1>
    <p>In the near future, I plan to improve a virtual laboratory dedicated to exploring the architecture of personal computers.
      This project will serve as an interactive educational tool where users can visually examine the internal components of a PC — including the CPU, RAM, motherboard, GPU, and more — as well as understand how these elements interact.
      The goal is to make learning about hardware and system structure more accessible and engaging, especially for beginners and tech enthusiasts.</p>
    <img src={require('./img/lab.png')} className="image" alt="Virtual Laboratory"/>
    <div className="section-divider"></div>
  </main>
  );
}

export default HomePage;
