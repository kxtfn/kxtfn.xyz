function HomePage() {
  return (
    <main>
    <h1>Welcome!</h1>
    <p>You've landed on my personal page — a place where I showcase side projects, 
    fun features, and random things I'm working on.</p>
    <h1>About me</h1>
    <p>This is a simple React application.</p>
    <h1>Developing</h1>
    <p>In the near future, I plan to develop a virtual laboratory dedicated to exploring the architecture of personal computers.
      This project will serve as an interactive educational tool where users can visually examine the internal components of a PC — including the CPU, RAM, motherboard, GPU, and more — as well as understand how these elements interact.
      The goal is to make learning about hardware and system structure more accessible and engaging, especially for beginners and tech enthusiasts.</p>
    <img src={require('./img/lab.png')} className="lab-image" />
    <div className="section-divider"></div>
  </main>
  );
}

export default HomePage;
