import React, { useEffect, useState } from 'react'
import './style.css'
import covidAPI from '../../../axios/covidAPI'

interface ITagProps {
  infected: number
  recovered: number
  deceased: number
  treated: number
}

export function numberWithCommas(x: number): string {
  let n: string = x.toString()
  const pattern = /(-?\d+)(\d{3})/
  while (pattern.test(n)) n = n.replace(pattern, '$1.$2')
  return n
}

const Tag: React.FC = () => {
  const [covid, setCovid] = useState<ITagProps>()

  const getCovids: () => Promise<void> = async () => {
    const covids = await covidAPI.getAll()
    setCovid(covids.data)
  }

  useEffect(() => {
    getCovids()
  }, [])

  const renderCovid: () => JSX.Element = () => (
    <div className="row justify-content-center over">
      <div className="col-md-3 col-sm-12 tag bg-warning bg-gradient">
        <p className="title">Tổng số ca nhiễm</p>
        <span className="number">{numberWithCommas(covid?.infected || 0)}</span>
      </div>

      <div className="col-md-3 col-sm-12 tag bg-success bg-gradient">
        <p className="title">Tổng số ca đã phục hồi</p>
        <span className="number">{numberWithCommas(covid?.recovered || 0)}</span>
      </div>

      <div className="col-md-3 col-sm-12 tag bg-danger bg-gradient">
        <p className="title">Tổng số ca không qua khỏi</p>
        <span className="number">{numberWithCommas(covid?.deceased || 0)}</span>
      </div>

      <div className="col-md-3 col-sm-12 tag bg-info bg-gradient">
        <p className="title">Tổng số ca đang điều trị</p>
        <span className="number">{numberWithCommas(covid?.deceased || 0)}</span>
      </div>
    </div>
  )
  return (
    <div className="container">
      <div className="row gx-5">{renderCovid()}</div>
    </div>
  )
}

export default Tag
