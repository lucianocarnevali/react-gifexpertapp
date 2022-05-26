import { useState } from 'react';
import { AddCategory } from './compinents/AddCategory';
import { GifGried } from './compinents/GifGried';

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
	const [categories, setCategories] = useState(['Dragon Ball'])

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={ setCategories } />
			<hr />

			<ol>
				{ 
					categories.map((category) => (
						<GifGried
							key={ category }
							category={ category }
						/>
					))
				}
			</ol>
		</>
	);
}

export default GifExpertApp;