import React, { useRef } from 'react';
import { CategoryService } from '~/services';

import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    Page,
    CommandColumn,
    Sort,
    Search,
    Toolbar,
    Edit,
} from '@syncfusion/ej2-react-grids';

function Category() {
    const gridRef = useRef(null);

    //data
    const data = CategoryService.getData();
    //seting
    const filterSettings = { type: 'Menu' };
    const toolbar = ['Search', { text: 'Add New', prefixIcon: 'e-add', id: 'grid_custom' }];
    const pageSettings = { pageSize: 20 };

    const commands = [
        { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
        { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
        { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
        { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } },
    ];

    const rowDataBound = (args) => {
        const currentPage = gridRef.current.pageSettings.currentPage || 1;
        const pageSize = gridRef.current.pageSettings.pageSize;
        const rowIndex = args.row.getAttribute('aria-rowindex');
        const serialNumber = parseInt(rowIndex, 10) + 1 + (currentPage - 1) * pageSize;
        args.row.cells[0].innerHTML = serialNumber;
    };

    const handleToolbarClick = (args) => {
        if (args.item.id === 'grid_custom') {
            window.location.href = '/category-add';
        }
    };

    const handleCommandClick = (args) => {
        if (args.commandColumn.type === 'Edit') {
            window.location.href = '/category-update/' + args.rowData.Id;
        } else if (args.commandColumn.type === 'Delete') {
            alert('Delete');
        }
    };

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/dashboards">Dashboards</a>
                    </li>
                    <li className="breadcrumb-item active">Category</li>
                </ol>
            </nav>
            <div className="card">
                <div className="table-responsive text-nowrap">
                    <GridComponent
                        ref={gridRef}
                        dataSource={data}
                        gridLines="Both"
                        locale="en-US"
                        allowSorting={true}
                        allowFiltering={false}
                        filterSettings={filterSettings}
                        toolbar={toolbar}
                        allowPaging={true}
                        pageSettings={pageSettings}
                        rowDataBound={rowDataBound}
                        toolbarClick={handleToolbarClick}
                        commandClick={handleCommandClick}
                        editSettings={{ allowEditing: false, allowAdding: false, allowDeleting: false, mode: 'Normal' }}
                    >
                        <ColumnsDirective>
                            <ColumnDirective headerText="#" width="100" textAlign="Center" />
                            <ColumnDirective
                                field="Id"
                                headerText="ID"
                                width="100"
                                textAlign="center"
                                visible={false}
                            />
                            <ColumnDirective field="Name" headerText="Name" width="150" />
                            <ColumnDirective field="Description" headerText="Description" width="100" />
                            <ColumnDirective field="Status" headerText="Status" width="100" />
                            <ColumnDirective field="CreatedDate" headerText="CreatedDate" width="100" />
                            <ColumnDirective headerText="Action" textAlign="center" width="100" commands={commands} />
                        </ColumnsDirective>
                        <Inject services={[Page, CommandColumn, Sort, Search, Toolbar, Edit]} />
                    </GridComponent>
                </div>
            </div>
        </>
    );
}

export default Category;
