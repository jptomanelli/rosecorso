import Page from "../components/page";
import Link from 'next/link';
import style from "./index.css";

function PoemTransition() {

  const links = <Link href='/'><a className={style.a_head}>R&middot;C</a></Link>;

  return (
    <Page  links={links}>
       <div className={style.absolute_box} style={{ height: '60vw', background: '#75632b', borderRadius: '50%' }}></div>
       <div className={style.absolute_box_two}></div>
       <div className={style.absolute_box_three}></div>
      <div className={style.poem_container_alt} style={{ background: 'rgb(255, 255, 255, 0.85)', padding: 15, width: 'fit-content', margin: '20vh auto 0 auto' }}>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >After the knife</p>
        <br />
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Moving of muscle</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Death of organ</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Death of nerve</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Then birth of blood</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Then birth of flesh</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Your modern entrance </p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;so sterile</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >My antiquated pain</p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;(dragging by the cord into delirium)</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Found downstream,</p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;then</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >Autumn arrived</p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;with delay</p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;harmonious surrender</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >I prayed </p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;palms pressed to the rot</p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;My impure eyes lifted</p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;to a pure mirror </p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >I was,</p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >I am</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >A holy rage</p>
        <br/>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >You wept in innocence </p>
        <p className={style.poem_p_alt} style={{ opacity: 1 }} >&emsp;haloed </p>
      </div>
    </Page>
  );
}

export default PoemTransition;
