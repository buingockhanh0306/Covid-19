import React, { useState, useEffect } from 'react'
import './style.css'
import covidAPI from '../../../axios/covidAPI'
import 'moment/locale/vi'
import moment from 'moment'
import { numberWithCommas } from '../Tag'
import ClipLoader from 'react-spinners/ClipLoader'
import { useTranslation } from 'react-i18next'

interface ITableProps {
  covid: {
    name: string
    cases: number
    death: number
    casesToday: number
  }
  search: string
  setSearch: (search: string) => void
  setCovid: (value: ITableProps['covid'][]) => void

  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
type Search = Pick<ITableProps, 'search'>
type Covid = Pick<ITableProps, 'covid'>

const Table: React.FC = () => {
  const [covid, setCovid] = useState<Covid['covid'][]>([])
  const [search, setSearch] = useState<Search['search']>('')
  const [loading, setLoading] = useState<boolean>(true)
  const { t, i18n } = useTranslation()
  moment.locale(`${t('language')}`)

  const getCovids: () => Promise<void> = async () => {
    const covids = await covidAPI.getAll()
    setCovid(covids.data.detail)
    setLoading(false)
  }

  useEffect(() => {
    getCovids()
  }, [])

  const renderCovid: () => ('' | JSX.Element)[] = () => {
    return covid.map((cv: ITableProps['covid'], index: number) =>
      cv.name.toLowerCase().includes(search.toLowerCase().trim(), 0) ? (
        <tr key={index}>
          <th className="pc" scope="row">
            {index + 1}
          </th>
          <td>{cv.name}</td>
          <td>{numberWithCommas(cv.cases)}</td>
          <td>{numberWithCommas(cv.death)}</td>
          <td>{numberWithCommas(cv.casesToday)}</td>
        </tr>
      ) : (
        ''
      )
    )
  }
  return loading ? (
    <div className="loading">
      <ClipLoader color="#D78536" loading={loading} size={60} />
    </div>
  ) : (
    <div>
      <div className="search-bar">
        <span className="date">
          {t('updateDate')} {moment().format('LL')}
        </span>
        <input
          className="input-search"
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder={`${t('search')}`}
        />
      </div>
      <table className="table center">
        <thead className="table-dark">
          <tr>
            <th className="pc" scope="col">
              {t('number')}
            </th>
            <th scope="col">{t('name')}</th>
            <th scope="col">{t('cases')}</th>
            <th scope="col">{t('deaths')}</th>
            <th scope="col">{t('casesToday')}</th>
          </tr>
        </thead>
        <tbody>{renderCovid()}</tbody>
      </table>
    </div>
  )
}

export default Table
