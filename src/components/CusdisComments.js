
import { ReactCusdis } from 'react-cusdis';

export default function CusdisComments(props) {

  return (
    <div>
      <ReactCusdis
        id="cusdis-thread"
        lang='zh-cn'
        attrs={{
          host: "https://cusdis.com",
          appId: "3ae124ed-37d0-46c0-84f8-e1feec7bee8a",
          pageId: props.pageId,
          pageTitle: props.pageTitle,
          pageUrl: 'https://lizhenyu.top/'+props.pageUrl,
          //theme: "auto",
        }}
      />
    </div>
  );
}

