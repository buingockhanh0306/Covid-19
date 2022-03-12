import React, { useState, useEffect, ChangeEvent } from 'react';
import './style.css'
import covidAPI from '../../axios/covidAPI'


export interface IProps{
    covid:{
        name: string,
        cases: number,
        death: number,
        casesToday: number
    }[],
    search: string,
}
function Table() {
    const [covid, setCovid] = useState<IProps["covid"]>([])
    const [search, setSearch] = useState<IProps["search"]>("")

    const getCovids = async () => {
        const covids = await covidAPI.getAll()
        setCovid(covids.data.detail)
    }

    useEffect(() => { getCovids() }, [])

    const renderCovid = () => {
        return covid.map((cv, index) => cv.name.toLowerCase().includes(search.toLowerCase().trim(), 0) ? (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{cv.name}</td>
                <td>{cv.cases}</td>
                <td>{cv.death}</td>
                <td>{cv.casesToday}</td>
            </tr>
        ):"")
    }
    return (
        <div>
            <input className='input-search' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)} type="text" placeholder='Nhập tên tỉnh/thành phố...'/>
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