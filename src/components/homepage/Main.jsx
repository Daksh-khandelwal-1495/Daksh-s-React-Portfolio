import "../css/homepage/Main.css"
import MyComponent from '../homepage/typed';
function Main(){



    return(
    <main>
      <section className="firstSection">
        <div className="leftSection">
          Hi, my name is <br></br>
          <span className="purple">Daksh </span>
          <div>and I am a passionate</div>

          <MyComponent></MyComponent>

          <a href="https://harlequin-emlynne-45.tiiny.site/">
          <button className="btn">Download Resume</button>
        </a>
        <a href="https://github.com/Daksh-khandelwal-1495">
          <button className="btn">Visit Github</button>
        </a>  
        
        </div>
        <div className="RightSection">
          <img src="/images/developer_png.png" alt="developer-img" />
        </div>
      </section>
      <hr />
      <div id="middle">
      <section className="secondSection">
        <span className="text-grey">Work I have done so far</span>
        <h1>Experience So Far</h1>

        <div className="box">
          <div className="vertical">
            <img className="image-top" src="/images/cbse.png" alt="" />
            <div className="vertical-title">Class XII CBSE (2022)</div>
            <div className="vertical-desc">
              Completed my 12th grade education in Lawrence and Mayo Public
              School in Ajmer,Rajasthan. Secured a good 94.4%.
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="/images/vit.png" alt="" />
            <div className="vertical-title">VIT Vellore(2022)</div>
            <div className="vertical-desc">
              Pursuing B.Tech Computer Science and Engineering. Scored 9.36 CGPA
              in my first semester.
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="/images/imun.png" alt="" />
            <div className="vertical-title">IMUN Campus Ambassador</div>
            <div className="vertical-desc">
              I served as a campus ambassador for VIT Vellore. Learnt Social
              Media Marketing and networking skills.
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="/images/figma.png" alt="" />
            <div className="vertical-title">Graphic Design</div>
            <div className="vertical-desc">
              Started with graphic design using canva and figma. Made projects
              for clubs and chapters.
            </div>
          </div>
          <div className="vertical">
            <img className="image-top" src="/images/solidity.png" alt="" />
            <div className="vertical-title">WEB3 solidity</div>
            <div className="vertical-desc">
              Learning basics of Solidity programming language and made smart
              contract.
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
    );
}

export default Main;