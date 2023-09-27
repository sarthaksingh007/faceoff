
import './App.css';
import Icons from './assest/icons.png'
import Phy from './assest/physics.png'
import Clip from './assest/clipboard.png'
import Tele from './assest/telescope.png'
import Chart from './assest/chart-pie.png'
import One from './assest/one.png'
import Two from './assest/two.png'
import Three from './assest/three.png'
import image from './assest/back.png'
import image2 from './assest/footering.png'
import Home from './component/Home';
import Navbar from './component/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>

      <section className="middle">
        <div className="Sarticons">
          <img src={Icons} alt="icons" />
        </div>
        <div className="sartcontent">
          <div className="sartPara">
            Join our vibrant community of space enthusiasts where you can
          </div>
          <div className="sartIconss">
            <div className="sarthigher">
              <div className="sartcontain">
                <div className="SarthHak">  <img src={Phy} alt="phy" /></div>
                <h5>Astronomy 101</h5>
                <p>Dive into the basics of astronomy. Learn about stars,
                  planets, galaxies, and the tools astronomers
                  use to explore the universe.</p>
              </div>
              <div className="sartcontain">
                <div className="SarthHak"> <img src={Clip} alt="phy" /></div>
                <h5>Latest Discoveries</h5>
                <p>Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration.</p>
              </div>
            </div>
            <div className="sartbelow">
              <div className="sartcontain">
                <div className="SarthHak"> <img src={Tele} alt="phy" /></div>
                <h5>Space Exploration</h5>
                <p>Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations.</p>
              </div>
              <div className="sartcontain">
                <div className="SarthHak"><img src={Chart} alt="phy" /></div>
                <h5>Space Technology</h5>
                <p>Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", }} className="sartlower">
          <div className="sartspace">
            <p className="sartP">We are committed to making space science accessible to all. Explore our educational resources, including</p>
          </div>
          <div className="SarthakSpacing">
            <div className="sartText">
              <div style={{ padding: "1.5rem" }}>
                <img src={One} alt="" />
                <h5>Online free courses and tutorials</h5>
                <p>Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
              </div>
            </div>
            <div className="sartText">
              <div style={{ padding: "1.5rem" }}>
                <img src={Two} alt="" />
                <h5>Resources for teachers and educators</h5>
                <p>Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.</p>
              </div>
            </div>
            <div className="sartText">
              <div style={{ padding: "1.5rem" }}>
                <img src={Three} alt="" />
                <h5>Book recommendations and reviews</h5>
                <p>Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  >
        <div style={{ backgroundImage: `url(${image2})`, backgroundRepeat: "no-repeat", }} class="aadi-down">
          <p style={{
        fontWeight: "800",
        fontSize:" 64px",
        margin:"10px"
        }}>Join our Community</p>
          <p style={{
        fontWeight: "400",
        fontSize:" 18px",
        }}>of stargagers, explorers and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
          <br/>
            <div class="search">
              <input type="search" placeholder="Enter your email" id="aadi-search-bar"/>
                <button id="subs">Subscribe</button>
            </div>
        </div>
        <footer>
          <img src="my2.jpg" style={{height: "20px", maxWidth: "120px"}}/>
            <ul>
              <li>Stay Connected</li>
              <li>Education</li>
              <li>Community</li>
              <li>About Us</li>
            </ul>
            <ul >
              <li>Privacy Policy</li>
              <li>Terms & Agreements</li>
            </ul>
            <p>[contact@odyssey.com].</p>
        </footer>
      </section>

    </>
  );
}

export default App;
