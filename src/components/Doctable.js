import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import data from '../blogdata/tabledata.json';

const Doctable = () => {
    const [columns, setColumns] = useState([]);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setColumns([
                {
                    name: 'ID',
                    selector: 'name',
                    sortable: true,
                },
                {
                    name: 'Hooks/Function/Functionality',
                    selector: 'allitem',
                    sortable: true,
                },
                {
                    name: 'React',
                    selector: 'email',
                    //sortable: true,
                },
                {
                    name: 'Company',
                    selector: 'company',
                }
            ]);
            setPending(false);
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div id="wrapper">
                <section id="one">
                    <div class="inner topcontent">
                        <div class="row doctable">
                            <div class="col-12 col-12-small">
                                <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Use React Hooks and Functionalities</h2>
                            </div>
                            <div class="col-12 col-12-small">
                                <div class="table-wrapper">
                                    <DataTable
                                        title="React Functionalities"
                                        columns={columns}
                                        data={data}
                                        pagination
                                        highlightOnHover
                                        progressPending={pending}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Doctable
