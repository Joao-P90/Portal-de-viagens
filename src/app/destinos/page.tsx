import Layout from "@/components/Layout";
import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export default function DestinosPage() {
  return (
    <Layout>
      <section>
        <h1 className={styles.titulo}>Destinos Turísticos</h1>
        <p className={styles.subtitulo}>
          Conheça alguns dos principais destinos para a sua próxima viagem.
        </p>

        <div className={styles.grid}>
          {destinos.map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
        </div>
      </section>
    </Layout>
  );
}