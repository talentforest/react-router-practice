// id로 표현되는 주소
import { useParams } from 'react-router-dom';

export default function Profile(props) {
	// params를 이용하여 id를 가져오는 방식
	const params = useParams();
  const id = params.id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile 페이지입니다.</h2>
      {id && <p>id는 {id}입니다.</p>}
    </div>
  );
}