import { create } from '@syncfusion/ej2-react-grids';

const getStatus = () => {
    var dataStatus = [
        { id: 1, name: 'Active' },
        { id: 2, name: 'Deactive' },
        { id: 3, name: 'Decommissioned' },
    ];
    return dataStatus;
};

const getData = () => {
    var data = [
        {
            id: 1,
            name: 'Location 1',
            status: 'Deactive',
            description: 'Description Location 1',
            createdDate: '2021-09-01',
        },
        {
            id: 2,
            name: 'Location 2',
            status: 'Deactive',
            description: 'Description Location 2',
            createdDate: '2021-09-01',
        },
        {
            id: 3,
            name: 'Location 3',
            status: 'Deactive',
            description: 'Description Location 3',
            createdDate: '2021-09-01',
        },
        {
            id: 4,
            name: 'Location 4',
            status: 'Deactive',
            description: 'Description Location 4',
            createdDate: '2021-09-01',
        },
        {
            id: 5,
            name: 'Location 1',
            status: 'Deactive',
            description: 'Description Location 5',
            createdDate: '2021-09-01',
        },
    ];
    return data;
};
export const LocationService = {
    getStatus,
    getData,
};
