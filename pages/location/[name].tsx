import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {LocationPage} from "../../src/pages/LocationPage/LocationPage";

const Location: NextPage = () => {
  const {name} = useRouter().query
  if (typeof name !== 'string') {
    return null;
  }
  return (
    <LocationPage name={name} />
  )
}

export default Location