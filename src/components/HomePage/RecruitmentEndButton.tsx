import { useRecoilState } from "recoil";
import { isRecruitmentEndState } from "../../recoil/filter/filterdPost";
import st from "./FilterBarST";

function RecruitmentEndButton() {
  // 모집 마감 게시글을 포함할지 상태 (기본값 false)
  const [isRecruitmentEnd, setIsRecruitMentEnd] = useRecoilState(
    isRecruitmentEndState
  );

  // 모집 마감 토글 버튼을 클릭했을 때
  const handleToggleButtonClick = () => {
    setIsRecruitMentEnd(!isRecruitmentEnd);
  };
  return (
    <st.IsRecruitButton
      type="button"
      onClick={handleToggleButtonClick}
      data-active={isRecruitmentEnd}
    >
      모집 중
    </st.IsRecruitButton>
  );
}

export default RecruitmentEndButton;
