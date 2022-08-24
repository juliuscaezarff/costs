import { useNavigate } from 'react-router-dom'

import styles from './Newproject.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {

  const navigate = useNavigate()

  function createPost(project) {

    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(project),

    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //redirect
      navigate('/projects', {message: 'Projeto criado com sucesso!'})
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.newProjectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
     <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
    </div>
  )
}

export default NewProject