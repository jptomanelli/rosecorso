import Page from "../components/page";
import style from "./index.css";
import Link from 'next/link';

function Home() {
  const links = <Link href='/about'><a className={style.a_head}>About</a></Link>;
  return (
    <Page includeBlobs={true} animate={true} links={links}>
      <div className={style.text_container}>
        <h1 className={style.h1}>
          R O S E
          <br className={style.rwd_break} /> &middot; C &middot; <br className={style.rwd_break} />
          O R S O
        </h1>
        <br />
        <ul className={style.ul}>
          <li className={style.li}>
            <Link href="/untitled-poem"><a className={style.a}>Untitled poem</a></Link>
          </li>

        </ul>
      </div>
    </Page>
  );
}

export default Home;
