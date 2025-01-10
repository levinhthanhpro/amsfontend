import Login from '~/pages/Login';
import User from '~/pages/User';
import Dashboard from '~/pages/Dashboard';
import Location from '~/pages/Location';
import LocationAdd from '~/pages/Location/Add';
import LocationUpdate from '~/pages/Location/Update';
import AssetType from '~/pages/AssetType';
import Department from '~/pages/Department';
import DepartmentAdd from '~/pages/Department/Add';
import DepartmentUpdate from '~/pages/Department/Update';
import Category from '~/pages/Category';
import CategoryAdd from '~/pages/Category/Add';
import CategoryUpdate from '~/pages/Category/Update';

//Public routes
const publicRoutes = [
    { path: '/', component: Login, layout: null },
    { path: '/user', component: User },
    { path: '/dashboard', component: Dashboard },
    { path: '/location', component: Location },
    { path: '/location-add', component: LocationAdd },
    { path: '/location-update/:id', component: LocationUpdate },
    { path: '/department', component: Department },
    { path: '/department-add', component: DepartmentAdd },
    { path: '/department-update/:id', component: DepartmentUpdate },
    { path: '/category', component: Category },
    { path: '/category-add', component: CategoryAdd },
    { path: '/category-update/:id', component: CategoryUpdate },
    { path: '/assetType', component: AssetType, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
