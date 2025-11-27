import DocItem from '@theme-original/DocItem';
import { ReactCusdis } from 'react-cusdis';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <ReactCusdis
        lang="zh-cn" //中文
        attrs={{
          host: 'https://cusdis.com',
          appId: '3ae124ed-37d0-46c0-84f8-e1feec7bee8a',
          pageId: props.content.metadata.permalink,
          pageTitle: props.content.metadata.title,
          pageUrl: 'https://lizhenyu.top/' + props.content.metadata.permalink,
        }}
      />

    </>
  );
}
