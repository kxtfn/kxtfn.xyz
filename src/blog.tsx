export default function Blog() {
  return (
    <main>
      <div className="fade-in">
      <h1>Blog</h1>
      <h2>Completion of studies and obtaining a diploma (30.06.2025)</h2> 
      <p>In June 2025, I graduated from NUFT Sumy Professional College and received a professional junior bachelor's degree in Computer Engineering. During my studies I learned the basics of programming, worked with languages such as Python and Delphi, and gained basic skills in designing and configuring local computer networks.</p>

      <p>In September I plan to continue my studies at Sumy State University, specializing in Computer Science, to deepen my knowledge in software development, algorithms, network technologies and modern web programming. I strive for constant development, and entering the university is the next step in my professional growth as an IT specialist.</p>
      <img src={require('./img/diploma.png')} className="image" alt="Diploma"/>
      <div className="section-divider"></div>
      </div>
    </main>
  );
}

