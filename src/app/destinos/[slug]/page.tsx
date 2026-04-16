import Layout from "@/components/Layout";
import { destinos } from "@/data/destinos";
import { notFound } from "next/navigation";
import styles from "./DetalheDestino.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinoDetalhePage({ params }: PageProps) {
  const { slug } = await params;

  const destino = destinos.find((item) => item.slug === slug);

  if (!destino) {
    notFound();
  }

  return (
    <Layout>
      <article className={styles.container}>
        <img
          src={destino.imagem}
          alt={destino.nome}
          className={styles.imagem}
        />

        <div className={styles.conteudo}>
          <h1>{destino.nome}</h1>
          <p className={styles.localizacao}>{destino.localizacao}</p>
          <p>{destino.descricao}</p>
        </div>
      </article>
    </Layout>
  );
}