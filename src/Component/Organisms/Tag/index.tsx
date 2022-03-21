import React, { useEffect, useState } from 'react';
import './style.css'
import covidAPI from '../../../axios/covidAPI';

export interface IProps {
    total: {
        infected: number,
        recovered: number,
        deceased: number,
        treated: number
    },
    detail: {
        name: string,
        cases: number,
        death: number,
        casesToday: number
    }[],
    new: {
        title: string,
        thumbnail_url: string,
        lead: string,
        share_url: string,
        publish_time: number
    }[]
    search: string
}

export function numberWithCommas(x:number):string {
    let n:string = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(n))
        n = n.replace(pattern, "$1.$2");
    return n;
}

function Tag() {
    const [covid, setCovid] = useState<IProps["total"]>()

    const getCovids = async () => {
        const covids = await covidAPI.getAll()
        setCovid(covids.data)
    }

    useEffect(() => { getCovids() }, [])

    const renderCovid = () => (
            <div className='row justify-content-center'>
                <div className="col-md-3 col-sm-12 tag bg-warning bg-gradient">
                    <p className='title'>Tổng số ca nhiễm</p>
                    <span className='number'>{numberWithCommas(covid?.infected || 0)}</span>
                </div>

                <div className="col-md-3 col-sm-12 tag bg-success bg-gradient">
                    <p className='title'>Tổng số ca đã phục hồi</p>
                    <span className='number'>{numberWithCommas(covid?.recovered || 0)}</span>
                </div>

                <div className="col-md-3 col-sm-12 tag bg-danger bg-gradient">
                    <p className='title'>Tổng số ca không qua khỏi</p>
                    <span className='number'>{numberWithCommas(covid?.deceased || 0)}</span>
                </div>

                <div className="col-md-3 col-sm-12 tag bg-info bg-gradient">
                    <p className='title'>Tổng số ca đang điều trị</p>
                    <span className='number'>{numberWithCommas(covid?.deceased || 0)}</span>
                </div>
            </div>
        
    )
    return (
        <div className="container">
            <div className="row gx-5">
                {renderCovid()}
            </div>
        </div>
    );
}

export default Tag;