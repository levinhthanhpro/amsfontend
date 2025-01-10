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
            name: 'Category 1',
            status: 'Deactive',
            description: 'Description Category 1',
            createdDate: '2021-09-01',
        },
        {
            id: 2,
            name: 'Category 2',
            status: 'Deactive',
            description: 'Description Category 2',
            createdDate: '2021-09-01',
        },
        {
            id: 3,
            name: 'Category 3',
            status: 'Deactive',
            description: 'Description Category 3',
            createdDate: '2021-09-01',
        },
        {
            id: 4,
            name: 'Category 4',
            status: 'Deactive',
            description: 'Description Category 4',
            createdDate: '2021-09-01',
        },
        {
            id: 5,
            name: 'Category 1',
            status: 'Deactive',
            description: 'Description Category 5',
            createdDate: '2021-09-01',
        },
    ];
    return data;
};
export const CategoryService = {
    getStatus,
    getData,
};
