import React, { useState } from 'react'
import './index.css'
import logo from './assets/logo.png'

const App = () => {
  const [nome, setNome] = useState('')
  const [matricula, setMatricula] = useState('')
  const [servico, setServico] = useState('')
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Agendamento realizado com sucesso!\n
      Nome: ${nome}
      Matrícula: ${matricula}
      Serviço: ${servico}
      Data: ${data}
      Hora: ${hora}`)
  }

  return (
    <div className="container">
      <img src={logo} alt="Logo Anhanguera" className="logo" />
      <h1>Agendamento de Serviços</h1>
      <p>Preencha os dados abaixo para agendar um atendimento na Faculdade Anhanguera.</p>

      <form onSubmit={handleSubmit}>
        <label>Nome completo</label>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />

        <label>Matrícula</label>
        <input type="text" value={matricula} onChange={e => setMatricula(e.target.value)} required />

        <label>Serviço</label>
        <select value={servico} onChange={e => setServico(e.target.value)} required>
          <option value="">Selecione</option>
          <option>Atendimento Financeiro</option>
          <option>Secretaria Acadêmica</option>
          <option>Orientação Pedagógica</option>
          <option>Assuntos Gerais</option>
        </select>

        <label>Data</label>
        <input type="date" value={data} onChange={e => setData(e.target.value)} required />

        <label>Hora</label>
        <input type="time" value={hora} onChange={e => setHora(e.target.value)} required />

        <button type="submit">Agendar</button>
      </form>
    </div>
  )
}

export default App