import { server } from "@/config";
import styles from "@/styles/Article.module.css";
import Link from "next/link";
import { Meta } from '@/components/Meta';

const ArticlePage = ({ art }) => {
  if (!art) {
    return <p>Article not found</p>;
  }

  return (
    <div className={styles.container}>
      <Meta title={art.title} />
      <h1 className={styles.title}>{art.title}</h1>
      <p className={styles.body}>{art.body}</p>
      <Link href="/" className={styles.goBack}>Go Back</Link>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`${server}/api/articles/${params.id}`);
    if (!res.ok) {
      return { notFound: true };
    }
    const art = await res.json();
    return {
      props: { art },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return { notFound: true };
  }
}

export default ArticlePage;
