import styles from "./Home.module.css"

export const Home = () => {
  const pokemon = "Carapuce"

  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div>Commence par créer ton premier pokemon: {pokemon}</div>
    </div>
  )
}
