import Botao from 'componentes/Botao';
import React from 'react';
import fotosPop from './fotos-populares.json';
import styles from './Populares.module.scss';

export default function Populares() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {fotosPop.map((ftpop) => {
          return (
            <li key={ftpop.id}>
              <img src={ftpop.path} alt={ftpop.alt} />
            </li>
          );
        })}
      </ul>
      <Botao> Ver mais fotos </Botao>
    </aside>
  );
}
