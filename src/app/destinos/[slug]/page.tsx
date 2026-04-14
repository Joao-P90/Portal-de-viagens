import Layout from "@/components/Layout";
import { destinos } from "@/data/destinos";
import styles from "./DetalheDestino.module.css";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function DestinoDetalhePage({ params }: PageProps) {
  const destino = destinos.find((item) => item.slug === params.slug);

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