import GuideCard from '@/components/guides/GuideCard';
import { Guide } from '@/constants/guides';
import { fetchAllGuides } from '@/lib/guides';
import { useLoaderData } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
	const guides = await fetchAllGuides({
		sort: { by: 'date', order: 'desc' },
	});
	return { guides };
}

const Guides = () => {
	const { guides } = useLoaderData() as { guides: Guide[] };

	return (
		<div className='p-4 md:p-16 bg-[url(/images/bg-lines.png)] min-h-[60vh]'>
			<section className='w-full'>
				<div className='w-full max-w-5xl 2xl:max-w-7xl mx-auto'>
					<h1 className='text-2xl lg:text-4xl text-center font-bold'>
						Guides to help you get started with Touchgrass.
					</h1>
				</div>
			</section>
			<section className='mt-8 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8 max-w-5xl 2xl:max-w-7xl mx-auto'>
				{guides.map((guide) => (
					<GuideCard key={`guides-${guide.url}`} guide={guide} />
				))}
			</section>
		</div>
	);
};

export default Guides;
