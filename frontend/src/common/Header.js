import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetSearchKeyword } from "../redux/searchSlice";
import api from "../api";
import { setBoardLists } from "../redux/boardListSlice";

function Header() {
    const dispatch = useDispatch();

    const handleReloadBoardList = () => {
      dispatch(resetSearchKeyword()); // 검색어 초기화
      api.get("/normal/list")
      .then(response => {
        dispatch(setBoardLists(response.data.entries));
        // do something with response.data.entries if needed
      })
      .catch(error => {
        console.error('API 요청 에러:', error);
      });
    };

  return (
    
    <div>
        <button>
            <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1n2KE9iWPb_CKLzQ3adFwE9aPfJrOXMXYn1lFo8&s" alt="Logo"></img>
            </Link>
        </button>

        <button onClick={handleReloadBoardList}>
          <Link to="/normal/list"> 상시 경매 리스트 </Link>     
        </button>

        {/* 로그인 유저 판별해서 로그인 회원가입을 만들지,마이페이지 로그아웃을 만들지 결정 */}
        <button>
            라이브 경매 리스트
        </button>

        <button>
            로그인
        </button>

        <button>
            회원가입
        </button>

    </div>

  );
}

export default Header;