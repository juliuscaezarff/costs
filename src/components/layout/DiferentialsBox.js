import styles from './DiferentialsBox.module.css'

import { BsCheckLg } from 'react-icons/bs'

function DiferentialsBox({text, description}) {

  return (
    <div className={styles.box}>
      <h3>{text}</h3>
      <p>{description}</p>
      <BsCheckLg size={32}/>
    </div>
  )
}

export default DiferentialsBox