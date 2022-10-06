import React from 'react'
import { SelinaLocation } from '../../api/dto/SelinaLocation'
import classnames from './Menu.module.css'
import Link from "next/link";

export const MenuSubItem = (location: SelinaLocation) => {
  return (
    <Link key={location.id} href={`/location/${location.name}`}>
      <div className={classnames.subMenuItem}>{location.name}</div>
    </Link>
  )
}
