import React, { useState, useEffect, ChangeEvent } from 'react';
import './style.css'
import covidAPI from '../../../axios/covidAPI'
import { IProps } from '../Tag';
import 'moment/locale/vi'
import moment from 'moment'
import {numberWithCommas} from '../Tag';

moment.locale('vi')

type Detail = Pick<IProps, "detail">
type Search = Pick<IProps, "search">
// type Detail = Omit<IProps, "search" | "total">


function Table() {
    const [covid, setCovid] = useState<Detail["detail"]>([])
    const [search, setSearch] = useState<Search["search"]>("")

    const getCovids = async () => {
        const covids = await covidAPI.getAll()
        setCovid(covids.data.detail)
    }

    useEffect(() => { getCovids() }, [])

    const renderCovid = () => {
        return covid.map((cv, index:number) => cv.name.toLowerCase().includes(search.toLowerCase().trim(), 0) ? (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{cv.name}</td>
                <td>{numberWithCommas(cv.cases)}</td>
                <td>{numberWithCommas(cv.death)}</td>
                <td>{numberWithCommas(cv.casesToday)}</td>
            </tr>
        ) : "")
    }
    return (
        <div>
            <input className='input-search' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} type="text" placeholder='Nhập tên tỉnh/thành phố...' />
            <span className='date'>Cập nhật ngày {moment().format('LL')}</span>
            <table className="table center">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tỉnh/Thành phố</th>
                        <th scope="col">Số ca nhiễm</th>
                        <th scope="col">Số ca không qua khỏi</th>
                        <th scope="col">Số ca mắc mới trong ngày</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCovid()}
                </tbody>
            </table>
        </div>
    );
}

export default Table;