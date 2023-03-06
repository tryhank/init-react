import { lazy, Suspense, useState } from "react";
import classnames from "classnames";

import scssModule from "./App.module.scss";
import testJpg from "@/assets/imgs/test.jpeg";
import testJpg_10 from "@/assets/imgs/test_10.jpg";

import TestDecorator from "./pages/TestDecorator";
const LazyComponent = lazy(() => import("@/pages/LazyComponent"));

function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <h2 className={scssModule.mynerve}>Hello World</h2>
      <div className={scssModule.scssBox}>
        <div className={scssModule.box}>test scss</div>
      </div>
      <img className={scssModule.w50} src={testJpg} />
      <img className={scssModule.w50} src={testJpg_10} />
      <br />
      <i className={classnames("iconfont", "icon-all")}></i>
      <TestDecorator></TestDecorator>
      <button onClick={handleClick}>toggle</button>
      {show && (
        <Suspense fallback={<div>loading</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
}

export default App;
