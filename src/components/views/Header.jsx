import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import Icon from '../common/Icon'
import SwitchColor from './SwitchColor'

const Header = ({ listNavbar }) => {
  return (
    <Nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <NormalLink className="navbar-brand" to="/">
          Tablero de operaciones
        </NormalLink>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon className="bi bi-list" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            { listNavbar &&
              listNavbar.map(({ text, link, icon }, index) => (
                <li key={ text } className="nav-item">
                  <NavLinkPersonalized className="nav-link" to={ link }
                    end={ index === 0 }
                  >
                    <Icon className={ `${icon}` } />
                    { text }
                  </NavLinkPersonalized>
                </li>
              ))
            }
          </ul>
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <SwitchColor />
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

Header.propTypes = {
  listNavbar: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
}

const Nav = styled.nav`
  border-bottom: 1px solid var(--border-primary);
  color: var(--text-primary);
  background-color: var(--bg-primary);
`
const NavLinkPersonalized = styled(NavLink)`
  color: var(--text-primary);
  &.active {
    color: var(--text-secondary);
    border-bottom: 1px solid var(--text-secondary);
  }
  &:hover {
    color: var(--text-secondary);
  }
`
const NormalLink = styled(Link)`
  color: var(--text-primary);
  &:hover {
    color: var(--text-primary);
  }
`

export default Header
