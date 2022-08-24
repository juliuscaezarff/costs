import { useState } from 'react'
import { useEffect } from 'react'

import styles from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]) // eles começam como um array vazio(esperando a resposta da api)
  const [ project, setProject ] = useState(projectData || {})
//se não usar esse hook ele vai consultar a api milhões de vezes
  useEffect(() => {
      //fazendo um request (de get) utilizando a "fecth api do js"
  fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json' // determinando o tipod a comunicação(recebendo json) (uma promisses)
    }
  })
    .then(resp => resp.json()) // o que eu receber de dado vira json
    .then(data => {
      setCategories(data)
    })
    .catch(err => console.log(err)) // tratando erro, imprimindo o erro caso haja algo no request
  }, [])

  const submit = (e) => {
    e.preventDefault()
    //console.log(project)
    handleSubmit(project)
  }

  function handleChange(e) { // reaproveitar em outros forulários
    setProject({...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) { // reaproveitar em outros forulários
    setProject({...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectIndex].text,
     },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select
        name="categoryId"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm
