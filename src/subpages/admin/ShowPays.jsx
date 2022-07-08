import { useEffect, useState } from 'react'

import PersonalizedTable from '../../components/common/PersonalizedTable'
import SpinnerLoadingPage from '../../components/common/SpinnerLoadingPage'
import TitlePage from '../../components/common/TitlePage'
import Searcher from '../../components/views/Searcher'
import useRegisterPays from '../../hooks/useRegisterPays'

const ShowPays = () => {
  const [searcher, setSearcher] = useState('')
  const [listPays, setListPays] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { getRegisterPays } = useRegisterPays()

  useEffect(() => {
    setIsLoading(true)
    getRegisterPays({ value: searcher }).then(res => {
      setIsLoading(false)
      if (res) setListPays(res)
    })
  }, [searcher])

  return (
    <>
      <TitlePage>Lista de pagos exitosos</TitlePage>
      <Searcher setSearcher={ setSearcher } />
      { isLoading && <SpinnerLoadingPage /> }
      <PersonalizedTable>
        <thead>
          <tr>
            <th>Articulo</th>
            <th>Descripcion</th>
            <th>Deudor</th>
            <th>Total</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          { listPays &&
            listPays.map(pay => (
              <tr key={ pay.id }>
                <td>{ pay.article }</td>
                <td>{ pay.description }</td>
                <td>{ `${pay?.idDebtor?.name} ${pay?.idDebtor?.lastName}` }</td>
                <td>{ pay.total }</td>
                <td>{ pay.date }</td>
              </tr>
            ))
          }
        </tbody>
      </PersonalizedTable>
    </>
  )
}

export default ShowPays
