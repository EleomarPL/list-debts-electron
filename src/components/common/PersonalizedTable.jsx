import styled from 'styled-components'

const PersonalizedTable = styled.table`
  width: 100%;
  text-align: center;
  color: var(--text-primary);
  & tr{ border: 1px solid var(--text-primary); }
  & td{ padding: 10px 0 !important; }
  & th{ border: 1px solid var(--text-primary); }
`

export default PersonalizedTable
