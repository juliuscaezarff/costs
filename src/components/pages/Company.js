import styles from './Company.module.css'

import LinkButton from '../layout/LinkButton'
import DiferentialsBox from '../layout/DiferentialsBox'

//import DesignBoard from '../../img/design-board.png'

function Company() {
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1>Gerencie da melhor maneira seus projetos!</h1>
        <p>
          Invista na <span>costs</span> melhore seus projetos em 100%
        </p>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>

      <section className={styles.conquests}>
        <h1>
          Conquistas da <span>costs</span>
        </h1>
        <div className={styles.conquestsBox}>
          <DiferentialsBox text="+2.100" description="Empresas parceiras" />
          <DiferentialsBox text="+11.000" description="Projetos criados" />
          <DiferentialsBox text="+5" description="Anos no mercado" />
        </div>
      </section>

      <section className={styles.description}>
        <h1>
          Conte com <span>a gente</span>
        </h1>
        <div className={styles.descriptionTeam}>
        <img
          src="https://programathor.com.br/blog/wp-content/uploads/2019/03/adults-analysis-brainstorming-1661004-1-768x421.jpg"
          alt="Costs"
        />
        <h3>
          Conte com a nossa equipe com os melhores profissionais do mercado para fazer seu projeto o melhor!
        </h3>
        </div>
      </section>
    </div>
  )
}

export default Company
