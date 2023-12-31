import React from "react"
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css'

export async function getStaticProps () {
  const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

export default function Home({pokemon}) {
  return (
    <div className={styles.container}>
      <h2>Pokemon</h2>
      <div>
        <div className={styles.grid}>
          {pokemon.map((pokemon) => (
            <div className={styles.card} key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                  width={200}
                  height={200}
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
