import React from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/blog.module.css'
import { handleJSONfiles } from '@/utils/functions/jsonHandler'
import Image from 'next/image'

export default function blog({posts}) {
  console.log(posts)
  return (
    <>
      <Navbar />
      <h1>Blog</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <ul className={styles['exemplo-list']}>
        {posts && posts.map((post,i) => (
          <a target="_blank" href={`${post.linkedin}`} className={styles["link"]} key={i}>
            <div>
              <Image
                src={`${post.imagem}`}
                width={500}
                height={500}
                alt="Post"
              />
            </div>
            <div className={styles["card"]}>
              <span >{post.texto}</span>
            </div>
          </a>
        ))}
      </ul>
      <Footer />
    </> 
  );
}

export async function getStaticProps(){
  const posts = handleJSONfiles("./content/posts");
  return {
    props: { posts },
  };
}