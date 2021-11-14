import Head from 'next/head'
import { FormEvent, useState } from 'react'

import styles from '../styles/home.module.scss'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }

    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <form onSubmit={handleSubmit} className={styles.container}>
        <input 
          type="email"
          placeholder="Email"
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha"
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />

        <button type="submit">
          Entrar
        </button>
      </form>
    </>
  )
}
