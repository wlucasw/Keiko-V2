import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"
          alt="pokemon carcha"
        ></img>
        <p>name : carcha</p>
      </div>
    </div>
  )
}
