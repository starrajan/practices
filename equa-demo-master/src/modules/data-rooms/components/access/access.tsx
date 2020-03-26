import * as React from 'react'
import DarioShea from '../../../../assets/image/dario-shea.png'
import MikeJohnson from '../../../../assets/image/mike-johnson.png'
import DarcyPrince from '../../../../assets/image/darcy-prince.png'
import ReefSharpe from '../../../../assets/image/reef-sharpe.png'
import {
    TableContainer,
    DataRoomTable,
    SideContent,
    Dots
} from '../../style'
import { MemberName } from './style'
const { useState } = React

const Access = () => {
    const [data] = useState([{
        imgSrc: MikeJohnson,
        name: 'Mike Johnson',
        role: 'Admin',
        email: 'rosinhab@gmail.com',
    },{
        imgSrc: DarcyPrince,
        name: 'Darcy Prince',
        role: 'Admin',
        email: 'hamptonrhene@gmail.com',
    },{
        imgSrc: DarioShea,
        name: 'Dario Shea',
        role: 'Admin',
        email: 'wesleyc@gmail.com',
    },
    {
        imgSrc: ReefSharpe,
        name: 'Reef Sharpe',
        role: 'Admin',
        email: 'jackson79@gmail.com',
    }])

    const renderNameWithPicture = (imgSrc: string, name: string) => {
        return (
            <MemberName>
                <img src = {imgSrc} alt = 'member' />
                <span>{name}</span>
            </MemberName>
        )
    }

    const renderTable = () => {
        return (
            
            <TableContainer>
                <DataRoomTable>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v, k) => (
                            <tr key={k}>
                                <td>{renderNameWithPicture(v.imgSrc, v.name)}</td>
                                <td>{v.role}</td>
                                <td>
                                    <SideContent>
                                        <div>
                                            {v.email}
                                        </div>
                                        <div>
                                            <Dots/>
                                            <Dots/>
                                            <Dots/>
                                        </div>
                                    </SideContent>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </DataRoomTable>
            </TableContainer>
        )
    }

    return (
        
            renderTable()
        
    )
}

export default Access