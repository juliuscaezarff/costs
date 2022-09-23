import styles from './Company.module.css'

import LinkButton from '../layout/LinkButton'
import DiferentialsBox from '../layout/DiferentialsBox'


function Company() {

  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1>Gerencie da melhor maneira seus projetos!</h1>
        <p>Invista na <span>costs</span> melhore seus projetos em 100%</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </div>

      <section className={styles.diferentialsContainer}>
        <h1>Conquistas da <span>costs</span></h1>
        <div className={styles.box}>
        <DiferentialsBox text='+2.100' description='Empresas parceiras'/>
        <DiferentialsBox text='+11.000' description='Projetos criados'/>
        <DiferentialsBox text='+5' description='Anos no mercado'/>
        </div>
      </section>
    </div>
  )
}

export default Company