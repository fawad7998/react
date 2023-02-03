import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section id="section-02">
        <section>
          <div id="bold-text">
            Build your next project faster with SB UI Kit Pro
          </div>
          <div id="sub-text">
            Welcome to SB UI Kit Pro ,a toolkit for building beautiful web
            interfaces, created by the development team at start Bootstrap
          </div>
          <section id="span">
            <div id="section-02-buttom">
              <a id="anchor" href="/">
                View Pages
              </a>
            </div>
            <div id="doc">
              <a id="anchor" href="/">
                Documentation
              </a>
            </div>
          </section>
        </section>
        <img id="img-one" src="/one.png" alt="" />
      </section>
      <section className="section-02-but">
        <div id="section-02-buttom-02">
          <button id="anchor-02" onClick={() => navigate("/second")} >
            Next Pages
          </button>
        </div>
      </section>   
    </>
  );
};
export default FirstPage;
