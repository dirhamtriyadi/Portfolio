import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Halo! Saya <span className="purple">Dirham Triyadi</span> dari
            <span className="purple"> Bekasi, Indonesia.</span>
            <br />
            Saat ini saya bekerja sebagai Software Developer di PT. Lintas
            Jaringan Nusantara.
            <br />
            Latar belakang akademik saya berasal dari Universitas Informatika
            dan Bisnis Indonesia dengan gelar Sarjana Komputer.
            <br />
            <br />
            Di luar ngoding, beberapa hal yang saya suka lakukan:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Main game
            </li>
            <li className="about-activity">
              <ImPointRight /> Scroll Engineer di Facebook
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing last forever we can change the future."
          </p>
          <footer className="blockquote-footer">Dirham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
