import React, { useEffect, useState } from 'react';
import './style.css'
import covidAPI from '../../axios/covidAPI';

interface IProps {
    covid: {
        infected: number,
        recovered: number,
        deceased: number,
        treated: number
    }[]
}
function Tag() {
    const [covid, setCovid] = useState<IProps["covid"]>([])

    const getCovids = async () => {
        const covids = await covidAPI.getAll()
        setCovid(covids.data)
    }

    useEffect(() => { getCovids() }, [])

    const renderCovid = () => {
        return covid.map((cv, index) => (
            <>
                <div className="col tag bg-warning bg-gradient">
                    <p className='title'>Tổng số ca nhiễm</p>
                    <span className='number'>5448935</span>
                </div>

                <div className="col tag bg-success bg-gradient">
                    <p className='title'>Tổng số ca đã phục hồi</p>
                    <span className='number'></span>

                </div>

                <div className="col tag bg-danger bg-gradient">
                    <p className='title'>Tổng số ca không qua khỏi</p>
                    <span className='number'></span>

                </div>

                <div className="col tag bg-info bg-gradient">
                    <p className='title'>Tổng số ca đang điều trị</p>
                    <span className='number'></span>

                </div>
            </>
        ))
    }
    return (
        <div className="container">
            <h1>Thông tin ca bệnh</h1>
            <div className="row gx-5">
                {renderCovid}
            </div>
        </div>
    );
}

export default Tag;