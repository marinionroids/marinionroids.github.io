import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        src={`${import.meta.env.BASE_URL}assets/profile.png`}
        alt="Profile Picture"
        className="profile-img"
      />
      <h1 className="name">Marin Menkshi</h1>
      <p className="subtitle">Backend Software Developer | New York, USA</p>

      <div className="social-links">
        <a
          href="https://github.com/marinionroids"
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/marinionroids--blue?logo=github&style=social"
            alt="GitHub"
          />
        </a>
        <a
          href="mailto:marin@menkshi.com"
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/MarinMenkshi-EA4335?style=flat&logo=gmail&logoColor=dfdfdf"
            alt="Email"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/marinmenkshi/"
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/MarinMenkshi-0077B5?style=flat&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2RmZGZkZiIgZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzdjLTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTItMi4wNjMgMi4wNjMtMi4wNjMgMS4xNCAwIDIuMDY0LjkyNSAyLjA2NCAyLjA2MyAwIDEuMTM5LS45MjUgMi4wNjUtMi4wNjQgMi4wNjV6bTEuNzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjMgMGguMDAyeiIvPjwvc3ZnPg=="
            alt="LinkedIn"
          />
        </a>

        <a
          href={`${import.meta.env.BASE_URL}assets/cvmarin.pdf`}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/Resume-grey?style=flat-square&logo=adobeacrobatreader"
            alt="Resume"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
