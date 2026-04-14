import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1>Bem-vindo ao Portal de Viagens</h1>
        <p>
          Explore destinos turísticos incríveis do Brasil e descubra mais sobre
          cada lugar.
        </p>

        <Link href="/destinos" className={styles.botao}>
          Ver destinos
        </Link>
      </section>
    </Layout>
  );
}