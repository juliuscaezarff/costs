import { useState } from 'react'
import { useEffect } from 'react'

import styles from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]) // eles começam como um array vazio(esperando a resposta da api)
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

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="categoryId"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm
