import styles from './DiferentialsBox.module.css'

function DiferentialsBox({text, description}) {

  return (
    <div className={styles.box}>
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  )
}

export default DiferentialsBox