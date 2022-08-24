import styles from './Newproject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {

  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
     <ProjectForm btnText="Criar projeto"/>
    </div>
  )
}

export default NewProject