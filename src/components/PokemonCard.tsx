import React from "react";
import { Pokemon } from "@/types/PokemonData";
import Image from "next/image";
import Link from "next/link";
import styles from "./PokemonCard.module.css";

const PokemonCard: React.FC<Pokemon> = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{pokemon.name} (#{pokemon.number})</h2>
      <Image src={pokemon.image} alt={pokemon.name} width={128} height={128} className={styles.image} draggable={false}/>
      <div className={styles.details}>
        <div><strong className={styles.label}>Classification:</strong> {pokemon.classification}</div>
        <div><strong className={styles.label}>Types:</strong> {pokemon.types.join(", ")}</div>
        <div><strong className={styles.label}>Resistant:</strong> {pokemon.resistant.join(", ")}</div>
        <div><strong className={styles.label}>Weaknesses:</strong> {pokemon.weaknesses.join(", ")}</div>
        <div><strong className={styles.label}>Flee Rate:</strong> {pokemon.fleeRate}</div>
        <div><strong className={styles.label}>Max CP:</strong> {pokemon.maxCP}</div>
        <div><strong className={styles.label}>Max HP:</strong> {pokemon.maxHP}</div>
        <div><strong className={styles.label}>Weight:</strong> {pokemon.weight.minimum} - {pokemon.weight.maximum}</div>
        <div><strong className={styles.label}>Height:</strong> {pokemon.height.minimum} - {pokemon.height.maximum}</div> 
        <div><strong className={styles.label}>Fast Attacks:</strong></div>
        {pokemon.attacks.fast.map((attack, index) => (
            <div key={index} className="ml-4">
                <strong>{attack.name}</strong> ({attack.type}) - {attack.damage} DMG
            </div>
        ))}
        <div><strong className={styles.label}>Special Attacks:</strong></div>
        {pokemon.attacks.special.map((attack, index) => (
            <div key={index} className="ml-4">
                <strong>{attack.name}</strong> ({attack.type}) - {attack.damage} DMG
            </div>
        ))}

        {pokemon.evolutions && (
            <div>
                <strong className={styles.label}>Evolutions:</strong>
                {pokemon.evolutions.map((evolution) => (
                    <div key={evolution.id} className="ml-4">
                        <Link href={`/${evolution.name.toLowerCase()}`} className={styles.viewLink}>
                            <strong>{evolution.name}</strong> (#{evolution.number})
                        </Link>
                    </div>
                ))}
            </div>
        )}
        
      </div>
    </div>
  );
};

export default PokemonCard;