import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
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
      'https://gw.vnexpress.net/bt?site_id=1000000&category_id=1000000&showed_area=pageview:20&limit=20&data_select=article_id,article_type,title,share_url,thumbnail_url,publish_time,lead,privacy,original_cate,article_category'
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
        <a key={index} href={n.share_url} target="_blank" className="card" rel="noreferrer">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={n.thumbnail_url} className="img-fluid rounded-start" alt="API error" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{n.title}</h5>
                <p className="card-text">{n.lead}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {dateTime(n.publish_time).getDay() + 1 === 1
                      ? 'Chủ nhật'
                      : `Thứ ${dateTime(n.publish_time).getDay() + 1}`}
                    , {dateTime(n.publish_time).toLocaleDateString('vi')}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </a>
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
