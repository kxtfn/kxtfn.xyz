import './animate.css';

export default function Projects() {
  return (
    <main>
      <div className="fade-in">
      <h1>Projects</h1>
      <h2>🛠 Virtual PC Architecture Lab</h2>
      <div className="project-description">
        <p>
        I previously participated in the development of an educational virtual laboratory focused on exploring the architecture of personal computers. While the original version fulfilled its academic purpose, I now have a strong desire to rebuild it from the ground up — implementing a more modern design, improving interactivity, and introducing a variety of new features that enhance both usability and educational value.
        </p>
        <p>
        The lab is divided into four core modules, each aimed at helping users grasp key computer science concepts:</p>
        <p>- "Комп’ютерні компоненти" — A visual breakdown of the internal components of a PC: CPU, RAM, GPU, motherboard, storage, and their interactions. <p></p>
        <img src={require('./img/lab1.png')} className="image" alt="Virtual Laboratory"/>
        </p>
        <p>
        - "Периферійні пристрої" — An interactive showcase of input/output devices such as keyboards, mice, printers, and monitors.
        <img src={require('./img/lab2.png')} className="image" alt="Virtual Laboratory"/>
        </p>
        <p>
        - "Лабораторія конвертування систем числення" — A hands-on tool for converting between binary, decimal, octal, and hexadecimal systems.
        </p>
        <p>
        - "Лабораторія конвертування машинного коду в асемблер" — An educational module demonstrating how machine code translates into basic assembly instructions, helping users understand low-level programming logic.
        </p>
        <img src={require('./img/lab3.png')} className="image" alt="Virtual Laboratory"/>
      </div>
      <div className="section-divider"></div>
      </div>
    </main>
  );
}

