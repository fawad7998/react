const Header = () => {
  return (
    <>
      <section id="nav_back_color">
        <section id="navbar">
          <div className="site-name">SITE NAME</div>
          <section id="nav-item">
            <section id="navbar-1">
              <div className="nav-items">
                <a href="/"> Home</a>
                {/* <!-- fontawesome icon -->
							<!-- <i className="fa-regular fa-angle-right"></i> --> */}
              </div>
              <div className="nav-items">
                <a href="/"> Landings</a>
              </div>
              <div className="nav-items">
                <a href="/"> Pages</a>
              </div>
              <div className="nav-items">
                <a href="/"> Documentation</a>
              </div>
            </section>
            <div className="nav-items" id="button-1">
              <a href="/">Buy Now</a>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Header;
