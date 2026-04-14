import Link from "next/link";
import { Destino } from "@/types/destino";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <img
        src={destino.imagem}
        alt={destino.nome}
        className={styles.imagem}
      />

      <div className={styles.conteudo}>
        <h2>{destino.nome}</h2>
        <p>{destino.resumo}</p>

        <Link href={`/destinos/${destino.slug}`} className={styles.botao}>
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}