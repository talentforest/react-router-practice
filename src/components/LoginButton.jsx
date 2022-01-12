// 방법 1 - HOC : 바로 아래가 아닌 더 아래에 있는 컴포넌트라도 그냥 바로 연결해주는 것.
import { useHistory } from 'react-router-dom';
// import {withRouter} from 'react-router-dom';

// export default withRouter(function LoginButton(props) {
//   function login() {
//     setTimeout(()=> {
//       // 홈페이지로 이동
//       props.history.push("/");
//     }, 1000);
//   }

//   return <button onClick={login}>로그인하기</button>
// });


export default function LoginButton(props) {
  const history = useHistory();
  function login() {
    setTimeout(()=> {
      // 홈페이지로 이동
      history.push("/");
    }, 1000);
  }

  return <button onClick={login}>로그인하기</button>
}