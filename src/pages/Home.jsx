import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header/Header";
import NewsArticle from "../components/NewsArticle/NewsArticle";

const Home = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Главная" />
        <main>
          <ul className={'list-reset' + ' ' + styles.list}>
            <li className={styles.item} style={{order: 1}}>
              <h2 className={styles.subtitle}>Личный кабинет</h2>
              <Link to="/profile" className={'text-md' + ' ' + styles.link}>Перейти в личный кабинет</Link>
            </li>
            <li className={styles.item} style={{order: 3}}>
              <h2 className={styles.subtitle}>Отчёты</h2>
              <Link to="/reports/public" className={'text-md' + ' ' + styles.link}>Создать общедоступный отчет</Link>
              <Link to="/reports/personal" className={'text-md' + ' ' + styles.link}>Создать индивидуальный отчет</Link>
            </li>
            <li className={styles.item + ' ' + styles.activeItem} style={{order: 2}}>
              <h2 className={styles.subtitle}>Новости</h2>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22" className={styles.article}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
              <Link to="/news" className={'text-md' + ' ' + styles.link}>Перейти ко всем новостям</Link>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}

export default Home
