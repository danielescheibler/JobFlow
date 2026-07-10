import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";


function Footer() {

  return (
    <footer className="footer">

      <p>
        JobFlow © 2026
      </p>

      <p>
        Desenvolvido por Daniele Scheibler
      </p>


      <div className="footer-links">

        <a
          href="https://github.com/danielescheibler"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          
        </a>


        <a
          href="https://www.linkedin.com/in/danielescheibler/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          
        </a>


        <a
          href="mailto:danielescheibler@gmail.com"
        >
          <FaEnvelope />
          
        </a>

      </div>


      <small>
        Organize sua jornada profissional,
        uma candidatura de cada vez.   Boa Sorte!
      </small>


    </footer>
  );
}


export default Footer;