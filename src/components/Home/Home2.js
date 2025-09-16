import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              IZINKAN SAYA <span className="purple"> MEMPERKENALKAN </span> DIRI
            </h1>
            <p className="home-about-body">
              Saya jatuh cinta dengan pemrograman dan sudah banyak belajar
              berbagai hal… 🤷‍♂️
              <br />
              <br />
              Saya menguasai bahasa pemrograman seperti
              <i>
                <b className="purple">
                  {" "}
                  TypeScript, JavaScript, PHP, Python, dan Go.{" "}
                </b>
              </i>
              <br />
              <br />
              Ketertarikan saya terutama pada pengembangan &nbsp;
              <i>
                <b className="purple">Teknologi Produk Web dan mobile </b> serta
                bidang yang berkaitan dengan{" "}
                <b className="purple">Sistem Operasi Linux.</b>
              </i>
              <br />
              <br />
              Jika memungkinkan, saya menyalurkan passion saya dalam
              mengembangkan produk dengan <b className="purple">Node.js</b> dan
              <i>
                <b className="purple">
                  {" "}
                  Ekosistem Library & Framework Modern JavaScript
                </b>
              </i>
              &nbsp; seperti
              <i>
                <b className="purple"> React.js, AdonisJS dan Express</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-5"
                alt="Foto profil Dirham Triyadi"
                width={200}
                height={200}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TEMUKAN SAYA</h1>
            <p>
              Silakan <span className="purple">terhubung </span>dengan saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dirhamtriyadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/dirhamtriyadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dirham-triyadi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/triyadidirham"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
