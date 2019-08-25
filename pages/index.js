import Wrench from "../components/wrench";
import Page from "../components/page";
import style from "./index.css";
import Link from 'next/link';

function Home() {
  const links = <Link href='/about'><a className={style.a}>About</a></Link>;
  return (
    <Page includeBlobs={true} links={links}>
      <div className={style.text_container}>
        <h1 className={style.h1}>
          R O S E
          <br className={style.rwd_break} />
          &middot; C &middot;
          <br className={style.rwd_break} />O R S O
        </h1>
        <h2 className={style.h2}>SITE UNDER CONSTRUCTION</h2>
        <div className={style.wrench}>
          <Wrench />
        </div>
      </div>
    </Page>
  );
}

export default Home;
