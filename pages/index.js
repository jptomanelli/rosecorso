import Page from "../components/page";
import style from "./index.css";
import Link from 'next/link';

function Home() {
  const links = <Link href='/about'><a className={style.a_head}>About</a></Link>;
  return (
    <Page includeBlobs={true} animate={true} links={links}>
      <div className={style.text_container}>
        <h1 className={style.h1}>
           R O S E C O R S O
        </h1>
        <br />
        {/* <h2 className={style.h2}>POEMS</h2> */}
        <ul className={style.ul}>
          <li className={style.li}>
            <Link href="/poem-untitled"><a className={`${style.a} ${style.list_item}`}>Untitled</a></Link>
            <br/>
            <Link href="/poem-transition"><a className={`${style.a} ${style.list_item}`}>Transition</a></Link>
          </li>
        </ul>
      </div>
    </Page>
  );
}

export default Home;
