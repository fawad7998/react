import Navbar from "../components/Navbar";
// import {useState}from 'react';

import { useNavigate } from "react-router-dom";
const FirstPage = () => {
  const navigate = useNavigate();

  // const[abbc, setabbc2] = useState("hello world");
  // setabbc2("765432")
  // // new Date.tolocaltimestring;
  //   let abc= "hello";
  // abc = "hello2";
  // console.log(abbc)

  // let a = 30;
  // function hello(){
  // let b = 20;
  // let c = a*b;
  // // console.log(c);
  // }
  // hello();

  // let d= a*b;
  // console.log(d);

  // function h1(){
  //   let a = 2;
  //   function h2(){
  //     let b = 22;
  //     function h3(){
  //       let c = 2;
  //       function h4(){
  //         let d = 4;
  //         function h5(){
  //           let e = a+b+c+d;
  //   console.log(e)
  //         }
  //         h5();

  //       }
  //       h4();

  //     }
  //     h3();

  //   }
  //   h2();

  // }
  // h1();
  // let data = "1";
  // console.log("1st", data);

  // data = "2";
  // function bound() {
  //   setTimeout(() => {
  //     console.log("time", data);
  //   }, 2000);
  // }
  // bound();

  // data = "3";

  // console.log("2nd", data);
  const cl = console.log;
function text2(){
let e = a+b;
cl(e);
cons
  let d = 3;
  
  function text(){
    let b = 2;
    function text3(){
      let a= 2;
      function text4(){
    let c = 3;

    // return console.log(a+b+c+d);
  }text4();
} text3();
  }
  text();
}
 text2(); 

  return (
    <>
      <Navbar />
      {/* {abc}/ */}

      {/* 
    <button onClick={()=>{
      abc = "hello3";
      console.log(abc)
    }}>

dasdjsadasdkjsad
    </button>
    {abbc}

    <button onClick={()=>{
      setabbc2("hello3");
    }}>

dasdjsadasdkjsad
    </button> */}
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
          <button id="anchor-02" onClick={() => navigate("/second")}>
            Next Pages
          </button>
        </div>
      </section>
    </>
  );
};

export default FirstPage;
