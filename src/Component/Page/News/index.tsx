import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import './style.scss'
import ClipLoader from 'react-spinners/ClipLoader'

// import { useNavigate } from 'react-router-dom'

interface INewsProps {
  news: {
    title: string
    thumbnail_url: string
    lead: string
    share_url: string
    publish_time: number
  }[]
  new: {
    title: string
    thumbnail_url: string
    lead: string
    share_url: string
    publish_time: number
  }
}
function News(): JSX.Element {
  const [news, setNews] = useState<INewsProps['news']>([])
  const [loading, setLoading] = useState<boolean>(true)
  const getNews: () => Promise<void> = async () => {
    const newsData = await axios.get(
      'https://gw.vnexpress.net/bt?site_id=1000000&category_id=1000000&showed_area=pageview:20&limit=20&data_select=title,share_url,thumbnail_url,publish_time,lead'
    )
    setNews(newsData.data.data.pageview.data)
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
      news.map((n: INewsProps['new'], index: number) => (
        <div key={index} className="col-md-3">
          <div className="card">
            <img className="card-img-top" src={n.thumbnail_url} alt="error..." />
            <div className="card-body">
              <a href={n.share_url} className="card-title hidden-title">
                {n.title}
              </a>
              <p className="card-text news__hidden-line">{n.lead}</p>
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

export default News
