import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import  Portfolio  from "../pages/portfolio";
import Portraits from '../pages/portfolio/Portraits';
import Product from '../pages/portfolio/Product';
import NatureLandscapes from '../pages/portfolio/NatureLandscapes';
import Fashion from '../pages/portfolio/Fashion';
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/portraits" element={<Portraits />} />
        <Route path="/portfolio/product" element={<Product />} />
        <Route path="/portfolio/nature-landscapes" element={<NatureLandscapes />} />
        <Route path="/portfolio/fashion" element={<Fashion />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
    </div>
  );
}

export default AppRoutes;
