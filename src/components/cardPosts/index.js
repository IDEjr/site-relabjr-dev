import Link from 'next/link'
import Image from 'next/image'
import styles from './cardPosts.module.css'

export default function cardPosts({ titulo, data, previa }) {
  return (
    <>
      <Link href="/blog" target="_blank" className={styles['link']}>
        <div className={styles.card}>
              <h2 className={styles.title}>{titulo}</h2>
              <hr className={styles.line} />
              <p className={styles.description}>{previa}</p>
              <div className={styles.footer}>
                  <span className={styles.date}>{data}</span>
                  <span className={styles.readMore}>Saiba mais</span>
              </div>
          </div>
      </Link>
    </>
  );
}