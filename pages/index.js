// Content
import { createClient } from '../common/contentful';

// Styles
import globalStyle from '../_global.scss';

// Components
import { HeadCommon } from '../components/seo';
import { Stars } from '../components/common';

const Index = () => (
	<div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
		<HeadCommon title={'Page Title'} description={'Page Description'} />
		<Stars count={100} />
	</div>
);

// Index.getInitialProps = async () => {
// 	const client = createClient();
// 	const projects = await client.getEntries({
// 		content_type: 'project'
// 	});
// 	console.log(projects);
// 	return { projects };
// };

export default Index;
