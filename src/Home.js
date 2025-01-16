import { HomeMain } from './Components/Styled/HomeStyled';
import myImage from './Assets/Images/me.jpg';
import bgPatern from './Assets/Images/Frame.svg';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';
import { motion } from 'framer-motion';
import pdf from './Assets/CV/SasiniPerera_Resume.pdf';
import { Link } from 'react-scroll';

const Home = () => {
   const myLinks = {
      initial: { opacity: 0, y: 15 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 1,
            type: 'easeIn',
         },
      },
      hover: {
         scale: 1.1,
      },
      tap: {
         scale: 0.9,
      },
   };

   const variants = {
      initial: { opacity: 0, scale: 0.9, y: 0, x: 0 },
      visible: (i) => ({
         opacity: 1,
         scale: 1,
         y: 0,
         x: 0,
         transition: {
            delay: i * 0.4,
            type: 'easeIn',
         },
      }),
      hover: { scale: 1.06 },
      tap: { scale: 0.9 },
   };

   const pimgMotion = {
      initial: { opacity: 0, y: 24 },
      animate: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 1,
            type: 'easeIn',
         },
      },
      hover: {
         scale: 1.05,
      },
      tap: {
         scale: 0.9,
      },
   };

   return (
      <HomeMain>
         <div className="headerLine">
            <div className="container-1350">
               <div className="heroCont">
                  <span className="link-left">❤</span>
                  <span className="link-next">Welcome to my portfolio</span>
                  <nav className="links-right">
                     <ul>
                        <li>
                           <Link className="pointer" to="about" smooth={true} duration={800}>
                              About
                           </Link>
                        </li>
                        <li>
                           <Link className="pointer" to="skills" smooth={true} duration={800}>
                              Skills
                           </Link>
                        </li>
                        <li>
                           <Link className="pointer" to="projects" smooth={true} duration={800}>
                              Projects
                           </Link>
                        </li>
                        <li>
                           <Link className="pointer" to="publications" smooth={true} duration={800}>
                              Publications
                           </Link>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="borderBottom"></div>
            </div>
            <div className="hero-section">
               <div className="heading">
                  <motion.img
                     initial={{ opacity: 0 }}
                     animate={{
                        opacity: 1,
                        transition: {
                           duration: 1,
                           type: 'easeIn',
                        },
                     }}
                     className="img-me"
                     src={myImage}
                     alt=""
                     style={{ borderRadius: '50%',width: '170px',  // Adjust the width as needed
                        height: '180px',
                      }}
                  />
                  <motion.a initial="initial" animate="visible" whileHover="hover" whileTap="tap">
                     <h1>Sasini Perera</h1>
                     <p>Fresh Graduate at SLIIT / Software Engineering Enthusiast</p>
                  </motion.a>

                  <div className="my-liks">
                     <motion.a initial="initial" animate="visible" whileHover="hover" whileTap="tap" variants={myLinks} target="blank" href="https://linkedin.com/in/sasiniperera/">
                        <BsLinkedin />
                     </motion.a>
                     <motion.a initial="initial" animate="visible" whileHover="hover" whileTap="tap" variants={myLinks} target="blank" href="https://github.com/chamalka123">
                        <BsGithub />
                     </motion.a>
                     <motion.a initial="initial" animate="visible" whileHover="hover" whileTap="tap" variants={myLinks} target="blank" href="https://twitter.com/sasiniperera_?fbclid=IwAR3mgmtcz4o3dJmTs8_khGCN9hM10v_Xhxa_trpG-xiG_jTV9hiPhituKoY">
                        <BsTwitter />
                     </motion.a>
                     <motion.a initial="initial" animate="visible" whileHover="hover" whileTap="tap" variants={myLinks} target="blank" href="https://www.facebook.com/sasini.perera.526">
                        <BsFacebook />
                     </motion.a>
                     <motion.a initial="initial" animate="visible" whileHover="hover" whileTap="tap" variants={myLinks} target="blank" href="https://medium.com/@sasiniperera">
                        <FaBlogger />
                     </motion.a>
                  </div>
                  <button style={{ padding: '0px', height: '5px' }}>
   <a href={pdf} style={{ textDecoration: 'none' }}>Download My CV</a>
</button>
               </div>
            </div>
            <div className="fluid-container">
               <div className="sec-1">
                  <div className="container">
                     <div className="tech-info">
                        <div className="tech-stack" id="about">
                           <h2 className="sub-head">About Me</h2>
                           <motion.div className="heading about-heading" custom={1} initial="initial" animate="visible" variants={variants}>
                              <h2> Self motivated, hardworking undergraduate student in Software Engineering. An individual who likes to work with a team and constantly learn new things. I seek an internship position that will allow me to explore career options in the field of Software Engineering.</h2>
                           </motion.div>
                        </div>
                     </div>
                  </div>
                  <div className="container-ash-bg">
                     <div style={{ marginBottom: '0px' }} className="tech-info tech-info-bg">
                        <div className="tech-stack" id="skills">
                           <h2 className="sub-head">Skills</h2>
                           <div className="ts-grid pb-40">
                              <motion.div className="ts-list" custom={1} initial="initial" animate="visible" variants={variants}>
                                 <h3>Languages</h3>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4.png`)} alt="" />
                                    <label>HTML</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-1.png`)} alt="" />
                                    <label>CSS</label>
                                 </div>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-2.png`)} alt="" />
                                    <label>SASS</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-3.png`)} alt="" />
                                    <label>Javascript</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/mern.png`)} alt="" />
                                    <label>MERN Stack</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/java.png`)} alt="" />
                                    <label>Java</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/c++.png`)} alt="" />
                                    <label>C++</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/c.png`)} alt="" />
                                    <label>C</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/python.png`)} alt="" />
                                    <label>Python</label>
                                 </div>
                              </motion.div>

                              <motion.div className="ts-list" custom={2} initial="initial" animate="visible" variants={variants}>
                                 <h3>Frameworks</h3>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-9.png`)} alt="" />
                                    <label>React JS</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-18.png`)} alt="" />
                                    <label>Angular</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-10.png`)} alt="" />
                                    <label>Next JS</label>
                                 </div>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-13.png`)} alt="" />
                                    <label>Jquery</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-11.png`)} alt="" />
                                    <label>Bootstrap</label>
                                 </div>
                              </motion.div>

                              <motion.div className="ts-list" custom={3} initial="initial" animate="visible" variants={variants}>
                                 <h3>Libraries</h3>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-14.png`)} alt="" />
                                    <label>Framer Motion(React)</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-15.png`)} alt="" />
                                    <label>React Spring</label>
                                 </div>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-19.png`)} alt="" />
                                    <label>Styled Components</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-16.png`)} alt="" />
                                    <label>Tailwind CSS</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-17.png`)} alt="" />
                                    <label>React Material UI</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-18.png`)} alt="" />
                                    <label>Angular Material</label>
                                 </div>
                              </motion.div>

                              <motion.div className="ts-list" custom={4} initial="initial" animate="visible" variants={variants}>
                                 <h3>Cloud Platforms</h3>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-20.png`)} alt="" />
                                    <label>
                                       Firebase <span>(Auth, Firetore)</span>
                                    </label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-21.png`)} alt="" />
                                    <label>Git</label>
                                 </div>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-21.png`)} alt="" />
                                    <label>Github Pages</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-22.png`)} alt="" />
                                    <label>Netlify</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-23.png`)} alt="" />
                                    <label>Heroku</label>
                                 </div>
                              </motion.div>

                              <motion.div className="ts-list" custom={5} initial="initial" animate="visible" variants={variants}>
                                 <h3>Design & Prototyping</h3>
                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-4.png`)} alt="" />
                                    <label>Figma</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/xd.jpg`)} alt="" />
                                    <label>Adobe XD</label>
                                 </div>

                                 <div className="ls-li">
                                    <img src={require(`./Assets/Images/tech-ico/image 4-7.png`)} alt="" />
                                    <label>Adobe Photoshop</label>
                                 </div>
                              </motion.div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="container">
                     <h2 className="sub-head" id="projects">
                        Recent Projects
                     </h2>
                  </div>
               </div>
               <div className="sec-2">
                  <div className="container">
                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>POKÉMON GO Cards</h4>
                           <div>
                              <p>I've created this to practice how to work with API's and HTTP requests and responses</p>
                              <p>Pokemon API to fetch all the details of this Pokemons</p>
                              <p>Technologies - HTML, CSS, Vanilla JS</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="https://chamalka123.github.io/Pokemon_Go_cards/">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f1.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Salon Management System using MERN Stack</h4>
                           <div className="mb-5">
                              <p>Real-Life Project for the Client Salon Winray</p>
                              <p>Users can do all the crud operations and all the data will be saved in the MongoDB database</p>
                              <p>Technologies - MERN Stack</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="#">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f2.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Online Transport System using Java Servlets</h4>
                           <div>
                              <p>JSP Servlets Based Web Application Developed using Eclipse IDE</p>
                              <p>Users can do all the crud operations </p>
                              <p>Technologies - Java Servlets, MySQL</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="#">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f3.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Salon Mobile Application</h4>
                           <div>
                              <p>Android mobile application using Java</p>
                              <p>Users can do all the crud operations</p>
                              <p>Technologies - Android Studio with JAVA, Firebase for DB</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="#">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f10.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Starbucks Coffee Clone</h4>
                           <div>
                              <p>I've created this to practice basic HTML/CSS and how to create mobile friendly interfaces </p>
                              <p>Static website clone</p>
                              <p>Technologies - HTML, CSS, JavaScript</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="https://chamalka123.github.io/Starbucks_Home/">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f4.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Progress Steps using JS</h4>
                           <div>
                              <p>I've created this to practice basic JavaScript concepts and how the DOM works behind the scene</p>
                              <p>These progress steps are moving when we click those buttons with a little animation</p>
                              <p>Technologies - HTML, CSS, JavaScript</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="https://chamalka123.github.io/Progress_Bar/">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f5.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>HULU Website Clone</h4>
                           <div>
                              <p>I've created this to practice basic HTML/CSS and how to create mobile friendly interfaces </p>
                              <p>Static website clone</p>
                              <p>Technologies - HTML, CSS, JavaScript</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="https://chamalka123.github.io/hulu_webpage/">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f6.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Phono - Headphone Landing Page</h4>
                           <div>
                              <p>I've created this to practice how to deal with CSS frameworks. In this case I've used Sass to create this mobile friendly web page</p>
                              <p>Static website</p>
                              <p>Technologies - HTML, Sass, JavaScript</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="https://chamalka123.github.io/Headphone_landing-page/">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f7.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Loruki Cloud Hosting Website</h4>
                           <div>
                              <p>I've created this to practice basic HTML/CSS and how to create mobile friendly interfaces </p>
                              <p>Static website</p>
                              <p>Technologies - HTML, CSS, JavaScript</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="https://chamalka123.github.io/Cloud_hosting_site/">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f8.png`)} alt="" />
                           </a>
                        </div>
                     </div>

                     <div className="pr-sec" style={{ paddingTop: '0px' }}>
                        <div className="ps-info" style={{ paddingTop: '0px' }}>
                           <h4>Zero to Coder - Book Promoting Site</h4>
                           <div>
                              <p>I've created this to practice Bootstrap and how it works under the hood</p>
                              <p>Static website clone</p>
                              <p>Technologies - Bootstrap 5</p>
                              <span className="mt-5">
                                 <label className="prev-link">Click below image to see a live preview</label>
                              </span>
                           </div>
                           <a target="blank" href="https://chamalka123.github.io/bootstrap_website/">
                              <motion.img className="proj-img" initial="initial" animate="animate" whileHover="hover" whileTap="tap" variants={pimgMotion} src={require(`./Assets/Images/projects/f9.png`)} alt="" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <h4 className="soon-text">More projects will be available soon...</h4>
               </div>
            </div>
         </div>
         <div className="footerLine"></div>
      </HomeMain>
   );
};

export default Home;
