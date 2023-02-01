import React from "react";
import Header from "./components/Header";
import FirstPage from "./sections/Firstpage.js";
import SecondPage from "./sections/SecondPage";

function App() {
  return (
    <>
      <Header />
      <FirstPage />
      <SecondPage />
      {/* <!-- section 05 --> */}

      <section id="section-05">
        <section id="nav-color-04"></section>
        <section id="sec-05-back"></section>
        {/* <!-- box --> */}
        <section id="sec-05-box">
          <div id="box-01">
            <div id="tag-free">Free</div>
            <div id="num">
              <span>$</span>
              <span> 0/mo</span>
            </div>
            <div id="items">
              <div className="box-items">1 user</div>
              <div className="box-items">Community support</div>
              <div className="box-items">Style customizer</div>
              <div className="box-items">Custom components</div>
              <div className="box-items">Expanded utilities</div>
              <div className="box-items">Third-party integration</div>
              <div className="box-items">Layout options</div>
            </div>
          </div>
        </section>
        <section id="sec-05-box-02"></section>

        {/* <!-- section 06 --> */}
        <section id="nav-color-05"></section>

        {/* <!-- what is sb kit --> */}
        <section id="flex">
          <div id="circle">
            <i className="bi bi-question-lg"></i>
          </div>
          <section id="circle-item">
            <div>What Is SB UI Kit Pro?</div>
            <div id="div-2">
              SB Ui Kit Pro is a fully coded, responsive, Bootstrap based UI
              toolkit for developers.
            </div>
          </section>
        </section>
        {/* <!-- ......................... --> */}
        <section className="max-content">
          <div id="get">Get started</div>
        </section>
        <section className="max-content" id="max-content-id">
          <div id="text-dec">Save Time With SB UI Kit Pro</div>
        </section>
        <section className="max-content" id="max-content-id-02">
          <div id="text-dec-02">
            start Bootstrap premium UI Kit beautifully and intuitively extends
            the Bootstraps frameworks making it easy to build your next project!
          </div>
        </section>
        <section id="button-05">
          <div id="buy-now">
            <a href="/">Buy Now</a>
          </div>
          {/* <!-- <div className="nav-items" id="button-1"><a href="/">Buy Now</a></div> --> */}
        </section>
      </section>

      {/* <!-- section 07 --> */}

      <section id="section-07">
        <section id="sec-07">
          <section id="sec-item-01">
            <div id="google">Google</div>
            <div>
              "Stripe Billingenabled us to Launch our subscription product. eero
              plus, on schedule and with billing fully integrated. "
            </div>
            <div> Mark Sirglock</div>
            <div>Head of Business Operations</div>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
