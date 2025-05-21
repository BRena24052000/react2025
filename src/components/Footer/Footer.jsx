import style from "./Footer.module.scss";
import { Link, NavLink } from "react-router";

function Footer() {
  return (
    <>
      <footer>
        <div class={style.footerLinks}>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
          <a href="#">Новости</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div class={style.copyright}>© 2025 MovieFinder. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
