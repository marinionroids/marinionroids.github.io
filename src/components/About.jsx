import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hi, I'm Marin Menkshi, a backend developer with 3+ years of
          programming experience. My expertise lies in Java, Python and backend
          development, but I've also worked on a variety of projects including
          frontend applications and frameworks like React and Vite.
        </p>
        <br /><br />
        <p>
          I developed an interest in Computer Science at the age of 16 by
          programming various Discord and Telegram bots that would come in handy
          to hundreds of people. My focus quickly shifted towards learning Java
          and Python. After a few months I completed the <a href="https://java-programming.mooc.fi/" className="textLink">Java programming course </a>
          from the University of Helsinki and a lot of Udemy courses focused on
          backend RESTful APIs and Databases.
        </p>
        <br /><br />
        <p>
          Throughout the journey as a developer, I have been working on a wide
          range of projects. I have build an online lootbox casino that has
          integrated crypto wallet user authentication. Additionally, I have
          been working and completing tasks as a freelancer on the side using
          Java, SpringBoot and React.
        </p>
        <br /><br />
        <p>
            I am currently studying Computer
          Information and Systems at <a href="https://www.hvcc.edu/" className="textLink">HVCC</a>.
        </p>
        
      </div>
    </section>
  );
};

export default About;
