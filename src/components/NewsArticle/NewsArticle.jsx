import styles from "./NewsArticle.module.scss";

const NewsArticle = (props) => {
  return (
    <article className={props.className}>
      <header className={styles.header}>
        <h3 className={'text-md' + ' ' + styles.title}>{props.title}</h3>
        <time dateTime={props.datetime} className={'text-xs' + ' ' + styles.date}>{props.date}</time>
      </header>
      <p className={'text-md' + ' ' + styles.text}>
        {props.children}
      </p>
    </article>
  )
}

export default NewsArticle
