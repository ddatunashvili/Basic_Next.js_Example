import { server } from "@/config/index";
import styles from "@/styles/Home.module.css"; // Import the CSS module
import Link from "next/link";

export default function Home({ arts }) {
  return (
    <div className={styles.homeContainer}>
      {arts.map((art) => (
        <Link key={art.id} href={`/article/${art.id}`} className={styles.articleContainer}>
          <div>
            <h2 className={styles.articleTitle}>{art.title}</h2>
            <p className={styles.articleBody}>{art.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${server}/api/articles`);
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    const arts = await res.json();
    return {
      props: { arts },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      props: { arts: [] },
    };
  }
}
