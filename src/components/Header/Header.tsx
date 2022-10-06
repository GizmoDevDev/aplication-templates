import React from 'react'
import classnames from './Header.module.css'
import { ImgLoader, Menu } from '../layouts'
import { useLocationsQuery } from '../../api/useLocationsQuery'
import logo from '../../icons/selina_logo.svg'
import Link from "next/link";

export const Header = () => {
  const locationsQuery = useLocationsQuery()
  const locations = locationsQuery.data ?? []
  return (
    <header className={classnames.header}>
      <Link href="/">
        <ImgLoader src={logo} alt="logo" className={classnames.logo} />
      </Link>
      <Menu locations={locations} />
    </header>
  )
}
