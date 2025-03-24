import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <section className="dark">
        <div className="about-card-whole">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            About me
          </h1>

          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/340010633_167843632431493_6125514577273955000_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f_uX-tTG2TQQ7kNvgH1CT5o&_nc_oc=AdmgyvfaQOMxWYkHLxtB6VT-XDQv7AVOOkol1TbQ5g8uGzU_E2lXaFFU7hlFZxCKp4s&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=sYaHVOaxuY2Fa6cRQgf3qA&oh=00_AYGj9B5_OCa8iQ_hmSUg9W6wQb-ezokm6TBuh22lL1D6kA&oe=67E1EA27"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">Who am I?</a>
              </h1>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Hi, my name is Diego and I’m 26 years old, originally from
                Brazil, and I’ve been living in Canada for almost 6 years. From
                a young age, I’ve been passionate about computers, especially
                hardware. As I grew older, my curiosity shifted towards
                programming, which led me to pursue one year of programming
                studies in Brazil. Unfortunately, I couldn’t complete the course
                due to family plans related to our move to Canada. Upon arriving
                in Canada, I had to learn English from scratch while reigniting
                my passion for programming. Now, I’m committed to expanding my
                skills and knowledge in the tech field, always eager to take on
                new challenges and continue growing professionally.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png"
                    width={40}
                    height={25}
                  ></img>
                </li>
                <li className="tag__item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
                    width={40}
                    height={25}
                  ></img>
                </li>
                <li className="tag__item play blue">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default About;
