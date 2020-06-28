import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
import NotFound from '@/pages/NotFound';
// start-import
// end-import

const routerConfig = [
   // start-routers
	{
		name: '/',
		path: '/',
		component: HeaderAsideLayout,
		children: []
	},
   // end-routers
   {
      path: '*',
      component: NotFound
   }
];

export default routerConfig;
