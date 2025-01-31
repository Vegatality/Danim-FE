import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { filterList, isSearchClicked } from "../../recoil/filter/filterdPost";
import Post from "./Post";
import st from "./PostsST";
import { lastRefState } from "../../recoil/scroll/scroll";

function PostContainer({ posts, lastPostRef, postName }: any) {
  // 키워드(맛집탐방,투어 등) state
  const [allFilterList] = useRecoilState(filterList);
  // 검색 게시글들의 마지막 게시글 ref
  const [searchedLastRef, setSearchedLastRef] = useRecoilState(lastRefState);
  // 검색을 누른 상태인지에 대한 토글 state
  const [isSearched] = useRecoilState(isSearchClicked);

  useEffect(() => {
    if (postName === "searchedPost") {
      setSearchedLastRef(() => lastPostRef.current);
    }
  }, [postName, lastPostRef, searchedLastRef]);

  return posts.length !== 0 ? (
    <st.postsContainer>
      {posts.map((post: any, index: number) => (
        <Post
          lastPostRef={index === posts.length - 1 ? lastPostRef : undefined}
          key={post.id}
          post={post}
          allFilterList={allFilterList}
        />
      ))}
    </st.postsContainer>
  ) : (
    <st.noPostContainer>
      {isSearched
        ? "조건에 맞는 게시글이 존재하지 않습니다."
        : "게시글이 존재하지 않습니다."}
    </st.noPostContainer>
  );
}

export default PostContainer;
