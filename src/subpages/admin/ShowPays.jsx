import { useState } from 'react'

import PersonalizedTable from '../../components/common/PersonalizedTable'
import TitlePage from '../../components/common/TitlePage'
import Searcher from '../../components/views/Searcher'

const ShowPays = () => {
  const [searcher, setSearcher] = useState('')
  const [listPays, setListPays] = useState([])

  return (
    <>
      <TitlePage>Lista de pagos exitosos</TitlePage>
      <Searcher setSearcher={ setSearcher } />
      <PersonalizedTable>
        <thead>
          <tr>
            <th>Articulo</th>
            <th>Descripcion</th>
            <th>Deudor</th>
            <th>Total</th>
          </tr>
        </thead>
      </PersonalizedTable>
    </>
  )
}

export default ShowPays
