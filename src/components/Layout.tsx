import Link from "next/link";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Portal de Viagens</div>

        <nav className={styles.nav}>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© 2026 Portal de Viagens - Projeto acadêmico</p>
      </footer>
    </div>
  );
}