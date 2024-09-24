import "./App.css";
import cole from "../img/colegio.jpg"
import academia from "../img/academia.jpg";
import uni from "../img/universidad.png";
import sena from "../img/sena.jpg";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";



export default function App() {
  return (
    <div className="todo">
      <div className="cuadro-a">
        <div className="redondo">
          <h1 className="jf">JF</h1>
        </div>

        <div className="edu">
          <div>
            <h1 className="letra-porta">Hi, I'm JuanFe 👋</h1>
            <h1>
              Software Developer with strong focus on user experience, design
              and quality code
            </h1>
          </div>

          <div className="div-educ">
            <h1 className="educa">Educations</h1>
          </div>

          <div className="las-educaciones">
            <div>
              <img className="ima-cole" src={cole} alt="" />
            </div>
            <div>
              <h2 className="titulos">high-school student/graduate</h2>
            </div>
          </div>

          <div className="las-educaciones">
            <div>
              <img className="ima-cole" src={academia} alt="" />
            </div>
            <div>
              <h2 className="titulos">Frontend React Junior</h2>
            </div>
          </div>

          <div className="las-educaciones">
            <div>
              <img className="ima-cole" src={uni} alt="" />
            </div>
            <div>
              <h2 className="titulos"> Systems Engineering</h2>
            </div>
          </div>

          <div className="las-educaciones">
            <div>
              <img className="ima-cole" src={sena} alt="" />
            </div>
            <div>
              <h2 className="titulos">Computer Literacy</h2>
            </div>
          </div>

          <div className="las-educaciones">
            <div>
              <img className="ima-cole" src={sena} alt="" />
            </div>
            <div>
              <h2 className="titulos">Basic Excel Handling</h2>
            </div>
          </div>

          <div>
            <div className="div-educ">
              <h1 className="letra-skills">Skills</h1>
            </div>
            <div>
              <h1 className="los-skills">-Node.js</h1>
            </div>
            <div>
              <h1 className="los-skills">-TypeScript</h1>
            </div>
            <div>
              <h1 className="los-skills">-Python</h1>
            </div>
            <div>
              <h1 className="los-skills">-Next.js</h1>
            </div>
            <div>
              <h1 className="los-skills">-Firebase</h1>
            </div>
            <div>
              <h1 className="los-skills">-Javascript</h1>
            </div>
            <div>
              <h1 className="los-skills">-JQuery</h1>
            </div>
            <div>
              <h1 className="los-skills">-MySQL</h1>
            </div>
            <div>
              <h1 className="los-skills">-Wordpress</h1>
            </div>
            <div>
              <h1 className="los-skills">-Css</h1>
            </div>
            <div>
              <h1 className="los-skills">-Html5</h1>
            </div>
            <div>
              <h1 className="los-skills">-Figma</h1>
            </div>
            <div>
              <h1 className="los-skills">-Bootsrap</h1>
            </div>
          </div>

        </div>
      </div>

      <div className="portafolio">
        <div className="titulo-portafolio">
          <h1 className="letra-porta">Portafolio</h1>
          <h2>
            Featured Projects I've worked on a variety of projects, from simple
            websites to complex web applications. Here are a few of my
            favorites.
          </h2>
        </div>

        <div>
          <div>
            <h1 className="nombre-paginas">Fronted Store</h1>
          </div>

          <div className="separaciones">
            <div>
              <img className="image" src={img1} alt="" />
            </div>
            <div>
              <img className="image" src={img2} alt="" />
            </div>
            <div>
              <img className="image" src={img3} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="nombre-paginas">Clon Pinterest</h1>
          </div>

          <div className="separaciones">
            <div>
              <img className="image" src={img4} alt="" />
            </div>
            <div>
              <img className="image" src={img5} alt="" />
            </div>
            <div>
              <img className="image" src={img6} alt="" />
            </div>
            <div>
              <img className="image" src={img7} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="nombre-paginas">Proyect Page Pokemons</h1>
          </div>

          <div className="separaciones">
            <div>
              <img className="image" src={img8} alt="" />
            </div>
            <div>
              <img className="image" src={img9} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="nombre-paginas">Proyect FreeLancer</h1>
          </div>

          <div className="separaciones">
            <div>
              <img className="image" src={img10} alt="" />
            </div>
            <div>
              <img className="image" src={img11} alt="" />
            </div>
            <div>
              <img className="image" src={img12} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="nombre-paginas">Proyect Tokners</h1>
          </div>

          <div className="separaciones">
            <div>
              <img className="image" src={img13} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="nombre-paginas">Proyect Page Pokemons</h1>
          </div>

          <div className="separaciones">
            <div>
              <img className="image1" src={img14} alt="" />
            </div>
            <div>
              <img className="image1" src={img15} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
