import News from '../News'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import ClipLoader from 'react-spinners/ClipLoader'

interface IInformationProps {
  new: {
    title: string
    thumbnail_url: string
    lead: string
    share_url: string
    publish_time: number
  }
  news: {
    title: string
    thumbnail_url: string
    lead: string
    share_url: string
    publish_time: number
  }[]
}
function Information(): JSX.Element {
  const [news, setNews] = useState<IInformationProps['news']>([])
  const [loading, setLoading] = useState<boolean>(true)
  const getNews = async () => {
    const newsData = await axios.get(
      'https://gw.vnexpress.net/ar/get_rule_2?category_id=1004692&limit=16&data_select=title,share_url,thumbnail_url,publish_time,lead,article_category'
    )
    setNews(newsData.data.data['1004692'].data)
    setLoading(false)
  }
  useEffect(() => {
    getNews()
  }, [])

  const dateTime = (publishTime: number) => {
    return new Date(publishTime * 1000)
  }

  const renderNews: () => JSX.Element | JSX.Element[] = () => {
    return loading ? (
      <div className="loading">
        <ClipLoader color="#D78536" loading={loading} size={60} />
      </div>
    ) : (
      news.map((n: IInformationProps['new'], index: number) => (
        <div key={index} className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={n.thumbnail_url} alt="Error..." />
            <div className="card-body">
              <a href={n.share_url} className="card-title hidden-title">
                {n.title}
              </a>
              <p className="card-text hidden-line">{n.lead}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">
                {dateTime(n.publish_time).getDay() + 1 === 1
                  ? 'Chủ nhật'
                  : `Thứ ${dateTime(n.publish_time).getDay() + 1}`}
                , {dateTime(n.publish_time).toLocaleDateString('vi')}
              </small>
            </div>
          </div>
          <News />
        </div>
      ))
    )
  }
  return (
    <div className="container">
      <div className="row">{renderNews()}</div>
    </div>
  )
}

export default Information
