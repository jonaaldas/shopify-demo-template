import {
	CartProvider,
	FileRoutes,
	Router,
	ShopifyProvider,
} from '@shopify/hydrogen';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import { Suspense } from 'react';

function App({ routes }) {
	return (
		<Suspense fallback={null}>
			<ShopifyProvider>
				<CartProvider>
					<Router>
						<FileRoutes routes={routes} />
					</Router>
				</CartProvider>
			</ShopifyProvider>
		</Suspense>
	);
}

export default renderHydrogen(App);
