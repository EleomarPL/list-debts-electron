import { useState, useEffect } from 'react'
import styled from 'styled-components'

import PrimaryButton from '../components/buttons/PrimaryButton'
import PersonalizedInput from '../components/common/PersonalizedInput'
import ModalCreateAdmin from '../components/modals/ModalCreateAdmin'
import useInitialOperations from '../hooks/useInitialOperations'

const Index = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { isThereAdmin } = useInitialOperations()

  useEffect(() => {
    isThereAdmin()
  }, [])

  const handleLogin = (evt) => {
    evt.preventDefault()

    setIsLoading(true)
  }

  return (
    <Main>
      <Section className="card bg-transparent">
        <div className="row col-md-12 g-0">
          <div className="col-md-4 m-auto text-center">
            <h1>Control de Deudas</h1>
          </div>
          <div className="col-md-8 m-auto">
            <div className="card-body">
              <h5 className="card-title">Inicia Sesión</h5>
              <form className="w-100" onSubmit={ handleLogin }>
                <PersonalizedInput
                  className="bi bi-person-fill"
                  placeholder="Usuario"
                  type="text"
                />
                <PersonalizedInput
                  className="bi bi-lock-fill"
                  placeholder="Contraseña"
                  type="password"
                />
                <PrimaryButton className="w-100"
                  isLoading={ isLoading }
                  classNameIcon="bi bi-arrow-right-square-fill"
                >
                  Iniciar Sesión
                </PrimaryButton>
              </form>
              <p className="card-text"><small className="text-muted">Aplicación hecha con Electron JS</small></p>
            </div>
          </div>
        </div>
      </Section>
      <ModalCreateAdmin />
    </Main>
  )
}

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`
const Section = styled.section`
  width: 70%;
  margin: auto;
`

export default Index
