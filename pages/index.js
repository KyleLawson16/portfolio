// Content
import { createClient } from '../common/contentful';

// Styles
import globalStyle from '../_global.scss';

// Components
import { HeadCommon } from '../components/seo';

const Index = () => (
	<div>
		<HeadCommon title={'Page Title'} description={'Page Description'} />
		Index
	</div>
);

// Index.getInitialProps = async () => {
// 	const client = createClient();
// 	const content = await client.getEntry('57frekDudOQYIqGG6AG2kc');
// 	return { page: content.fields };
// };

export default Index;
