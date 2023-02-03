import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const SecondPage= ()=>{
  const navigate = useNavigate();



  return (
    <>
      <Header />
      <section id="section-03">
        <section id="first-box">
          <section id="item-box">
            <div id="rounded">
              <i className="bi bi-database"></i>
            </div>
          </section>
          <div id="box-text">Build for developers</div>
          <div id="box-sub-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            odit delectus sed architecto nihil, ipsam qui vitae molestiae
            consequuntur laborum error now day's.
          </div>
        </section>
        <section id="first-box">
          <section id="item-box">
            <div id="rounded">
              <i className="bi bi-phone"></i>
            </div>
          </section>
          <div id="box-text">Modern responsive design</div>
          <div id="box-sub-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            odit delectus sed architecto nihil, ipsam qui vitae molestiae
            consequuntur laborum error now day's.
          </div>
        </section>
        <section id="first-box">
          <section id="item-box">
            <div id="rounded">
              <i className="bi bi-database"></i>
            </div>
          </section>
          <div id="box-text">Complete documentation</div>
          <div id="box-sub-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            odit delectus sed architecto nihil, ipsam qui vitae molestiae
            consequuntur laborum error now day's.
          </div>
        </section>
      </section>
      <section id="section-dummy"></section>
      <section id="section-dummy"></section>
      {/* <!-- ............ --> */}

      {/* <!-- section 04 --> */}
      <section id="nav-back-color-02">
        <section id="sec-items">
          <img id="img-two" src="/two.png" alt="" />
          <section id="sec-text">
            <div id="text-one">Here's What You Get</div>
            <div id="text-two">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              aut labore minima consectetur cum, adipisci delectus at. Esse,
              repudiandae, atque enim voluptas necessitatibus inventore commodi
              suscipit odit architecto consequatur doloremque nam fuga quidem
              mollitia sed obcaecati molestias unde a eius.
            </div>

            {/* <!-- sec-boss --> */}
            <section id="sec-main-boss">
              <section id="sec-main">
                <section id="sec-01">
                  <section id="mini-texts">
                    <div className="text-03">landing Pages</div>
                    <div className="text-04">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis laborum nam laboriosam quae odio.
                    </div>
                    <div id="button-learn">
                      <a href="/"> Learn more</a>
                    </div>
                  </section>
                </section>
                <section id="sec-02">
                  <section id="mini-texts">
                    <div className="text-03">Layouts Pages</div>
                    <div className="text-04">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis laborum nam laboriosam quae odio.
                    </div>
                    <div id="button-learn">
                      <a href="/"> Learn more</a>
                    </div>
                  </section>
                </section>
              </section>
              <section id="sec-main-02">
                <section id="sec-01">
                  <section id="mini-texts">
                    <div className="text-03">Page Examples</div>
                    <div className="text-04">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis laborum nam laboriosam quae odio.
                    </div>
                    <div id="button-learn">
                      <a href="/"> Learn more</a>
                    </div>
                  </section>
                </section>
                <section id="sec-02">
                  <section id="mini-texts">
                    <div className="text-03">Modular Sections</div>
                    <div className="text-04">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis laborum nam laboriosam quae odio.
                    </div>
                    <div id="button-learn">
                      <a href="/"> Learn more</a>
                    </div>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section id="nav-color-03"></section>
        <section className="sec-end">
          <div>Simple Pricing</div>
        </section>
        <section className="sec-end-02">
          <div>Easy pricing means no surprises.</div>
        </section>
      </section>
      <section className="section-02-but">
        <div id="section-02-buttom-02">
          <button onClick={() => navigate("/third")} id="anchor-02-01">
            Next Pages
          </button>
        </div>
      </section>
    </>
  );
}
export default SecondPage;
