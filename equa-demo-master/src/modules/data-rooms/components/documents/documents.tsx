import * as React from 'react'
import {
    TableContainer,
    DataRoomTable,
    SideContent,
    Dots,
} from '../../style'
import { FileName } from './style'
const { useState } = React

const Documents = () => {
    const [documents] = useState([{
        fileName: 'Operating Agreement.pdf',
        category: 'Governmental',
        dateUploaded: '2019/4/19',
        lastEdited: '2019/4/20',
        fileSize: '32.5KB',
        uploadedBy: 'Michael Smith'
    },{
        fileName: 'Operating Agreement.pdf',
        category: 'Governmental',
        dateUploaded: '2019/4/19',
        lastEdited: '2019/4/20',
        fileSize: '32.5KB',
        uploadedBy: 'Michael Smith'
    },{
        fileName: 'Operating Agreement.pdf',
        category: 'Governmental',
        dateUploaded: '2019/4/19',
        lastEdited: '2019/4/20',
        fileSize: '32.5KB',
        uploadedBy: 'Michael Smith'
    },{
        fileName: 'Operating Agreement.pdf',
        category: 'Governmental',
        dateUploaded: '2019/4/19',
        lastEdited: '2019/4/20',
        fileSize: '32.5KB',
        uploadedBy: 'Michael Smith'
    },{
        fileName: 'Operating Agreement.pdf',
        category: 'Governmental',
        dateUploaded: '2019/4/19',
        lastEdited: '2019/4/20',
        fileSize: '32.5KB',
        uploadedBy: 'Michael Smith'
    }])

    const renderTable = () => {
        return (
            
            <TableContainer>
                <DataRoomTable>
                    <thead>
                        <tr>
                            <th>file name</th>
                            <th>category</th>
                            <th>date uploaded</th>
                            <th>last edited</th>
                            <th>file size</th>
                            <th>uploaded by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((v, k) => (
                            <tr key={k}>
                                <FileName>{v.fileName}</FileName>
                                <td>{v.category}</td>
                                <td>{v.dateUploaded}</td>
                                <td>{v.lastEdited}</td>
                                <td>{v.fileSize}</td>
                                <td>
                                <SideContent>
                                    <div>
                                        {v.uploadedBy}
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

export default Documents