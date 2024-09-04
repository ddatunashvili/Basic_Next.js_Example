import { Meta } from '../components/Meta'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Meta title="About Us" />
      
      <header className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
      </header>
      
      <section className={styles.content}>
        <p className={styles.paragraph}>
          Welcome to our website! We are a team of passionate individuals dedicated to providing the best experience in POOPING. Our mission is to TO SHIT ON PEOPLE. 
        </p>
        <p className={styles.paragraph}>
          Our team consists of experts in various areas, including POOPING. We strive to stay at the forefront of industry trends and innovations to deliver top-notch services and solutions to our clients.
        </p>
        <p className={styles.paragraph}>
          Whether you're looking for SHIT, or simply want to learn more about our work, we invite you to explore our site and get in touch with us. We value your feedback and look forward to connecting with you!
        </p>
      </section>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} LTD GELA . All rights reserved.</p>
      </footer>
    </div>
  )
}
