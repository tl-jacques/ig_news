import Head from "next/head";
import styles from "./styles.module.scss";
export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="dakjsdka">
            <time>27 de abril de 2021</time>
            <strong>
              How To Deal With Annoying Neighbors Without Creating Enemies
            </strong>
            <p>
              I’ve lived in my current house for more than 10 years now. My
              neighborhood is in a prime location in South Tampa. The real
              estate value has been going up rapidly. Consequently, people are
              coming and going, moving in and out all the time. It’s made for an
              interesting experience — and a couple of annoying neighbors along
              the way.
            </p>
          </a>
          <a href="dakjsdka">
            <time>27 de abril de 2021</time>
            <strong>
              How To Deal With Annoying Neighbors Without Creating Enemies
            </strong>
            <p>
              I’ve lived in my current house for more than 10 years now. My
              neighborhood is in a prime location in South Tampa. The real
              estate value has been going up rapidly. Consequently, people are
              coming and going, moving in and out all the time. It’s made for an
              interesting experience — and a couple of annoying neighbors along
              the way.
            </p>
          </a>
          <a href="dakjsdka">
            <time>27 de abril de 2021</time>
            <strong>
              How To Deal With Annoying Neighbors Without Creating Enemies
            </strong>
            <p>
              I’ve lived in my current house for more than 10 years now. My
              neighborhood is in a prime location in South Tampa. The real
              estate value has been going up rapidly. Consequently, people are
              coming and going, moving in and out all the time. It’s made for an
              interesting experience — and a couple of annoying neighbors along
              the way.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
