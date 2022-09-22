import styles from './Company.module.css'

import LinkButton from '../layout/LinkButton'


function Company() {

  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1>Gerencie da melhor maneira seus projetos!</h1>
        <p>Invista na <span>costs</span> melhore seus projetos em 100%</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </div>

      <div>
        aa
      </div>
    </div>
  )
}

export default Company