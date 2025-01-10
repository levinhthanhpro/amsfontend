const getStatus = () => {
    var dataStatus = [
        { id: 1, name: 'Active' },
        { id: 2, name: 'Inactive' },
        { id: 3, name: 'Dissolved' },
    ];
    return dataStatus;
};

const getData = () => {
    var data = [
        {
            id: 1,
            name: 'Department 1',
            status: 'Deactive',
            description: 'Description Department 1',
            createdDate: '2021-09-01',
        },
        {
            id: 2,
            name: 'Department 2',
            status: 'Deactive',
            description: 'Description Department 2',
            createdDate: '2021-09-01',
        },
        {
            id: 3,
            name: 'Department 3',
            status: 'Deactive',
            description: 'Description Department 3',
            createdDate: '2021-09-01',
        },
        {
            id: 4,
            name: 'Department 4',
            status: 'Deactive',
            description: 'Description Department 4',
            createdDate: '2021-09-01',
        },
        {
            id: 5,
            name: 'Department 1',
            status: 'Deactive',
            description: 'Description Department 5',
            createdDate: '2021-09-01',
        },
    ];
    return data;
};
export const DepartmentService = {
    getStatus,
    getData,
};
