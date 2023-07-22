import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTreeState, incrementLetterCount, resetLetterCount } from '../autumnTree/autumnTreeSlice';
import { RootState } from '../../app/store';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import initialTreeImage from '../../assets/treeImg/MainTree.png';
import styled from 'styled-components';
import { formatDistance, subDays } from 'date-fns'; 
import "./Home.css"
import { addLetter } from '../letters/LettersSlice';
import LettersList from '../letters/LettersList';
// 나무 이미지 파일 import
import MapleTree from '../../assets/treeImg/MapleMainTree.png';
import GinkgoTree from '../../assets/treeImg/GinkgoMainTree.png';
// 캐릭터 이미지 파일 import
import MapleCharacter from '../../assets/charImg/maple-small-big2.png';
import GinkgoCharacter from '../../assets/charImg/ginkgo-small-big2.png';
// 단풍나무 이미지 파일 import
import MapleTreeFragment1 from '../../assets/mapleTreeFragment/MapleTreeFragment1.png';
import MapleTreeFragment2 from '../../assets/mapleTreeFragment/MapleTreeFragment2.png';
import MapleTreeFragment3 from '../../assets/mapleTreeFragment/MapleTreeFragment3.png';
import MapleTreeFragment4 from '../../assets/mapleTreeFragment/MapleTreeFragment4.png';
import MapleTreeFragment5 from '../../assets/mapleTreeFragment/MapleTreeFragment5.png';
import MapleTreeFragment6 from '../../assets/mapleTreeFragment/MapleTreeFragment6.png';
import MapleTreeFragment7 from '../../assets/mapleTreeFragment/MapleTreeFragment7.png';
import MapleTreeFragment8 from '../../assets/mapleTreeFragment/MapleTreeFragment8.png';
import MapleTreeFragment9 from '../../assets/mapleTreeFragment/MapleTreeFragment9.png';
import MapleTreeFragment10 from '../../assets/mapleTreeFragment/MapleTreeFragment10.png';
import MapleTreeFragment11 from '../../assets/mapleTreeFragment/MapleTreeFragment11.png';
import MapleTreeFragment12 from '../../assets/mapleTreeFragment/MapleTreeFragment12.png';
import MapleTreeFragment13 from '../../assets/mapleTreeFragment/MapleTreeFragment13.png';
import MapleTreeFragment14 from '../../assets/mapleTreeFragment/MapleTreeFragment14.png';
import MapleTreeFragment15 from '../../assets/mapleTreeFragment/MapleTreeFragment15.png';
import MapleTreeFragment16 from '../../assets/mapleTreeFragment/MapleTreeFragment16.png';
import MapleTreeFragment17 from '../../assets/mapleTreeFragment/MapleTreeFragment17.png';
import MapleTreeFragment18 from '../../assets/mapleTreeFragment/MapleTreeFragment18.png';
import MapleTreeFragment19 from '../../assets/mapleTreeFragment/MapleTreeFragment19.png';
import MapleTreeFragment20 from '../../assets/mapleTreeFragment/MapleTreeFragment20.png';
import MapleTreeFragment21 from '../../assets/mapleTreeFragment/MapleTreeFragment21.png';
import MapleTreeFragment22 from '../../assets/mapleTreeFragment/MapleTreeFragment22.png';
import MapleTreeFragment23 from '../../assets/mapleTreeFragment/MapleTreeFragment23.png';
import MapleTreeFragment24 from '../../assets/mapleTreeFragment/MapleTreeFragment24.png';
import MapleTreeFragment25 from '../../assets/mapleTreeFragment/MapleTreeFragment25.png';
import MapleTreeFragment26 from '../../assets/mapleTreeFragment/MapleTreeFragment26.png';
import MapleTreeFragment27 from '../../assets/mapleTreeFragment/MapleTreeFragment27.png';
import MapleTreeFragment28 from '../../assets/mapleTreeFragment/MapleTreeFragment28.png';
import MapleTreeFragment29 from '../../assets/mapleTreeFragment/MapleTreeFragment29.png';
import MapleTreeFragment30 from '../../assets/mapleTreeFragment/MapleTreeFragment30.png';


// 은행나무 이미지 파일 import
import GinkgoTreeFragment1 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment1.png';
import GinkgoTreeFragment2 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment2.png';
import GinkgoTreeFragment3 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment3.png';
import GinkgoTreeFragment4 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment4.png';
import GinkgoTreeFragment5 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment5.png';
import GinkgoTreeFragment6 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment6.png';
import GinkgoTreeFragment7 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment7.png';
import GinkgoTreeFragment8 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment8.png';
import GinkgoTreeFragment9 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment9.png';
import GinkgoTreeFragment10 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment10.png';
import GinkgoTreeFragment11 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment11.png';
import GinkgoTreeFragment12 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment12.png';
import GinkgoTreeFragment13 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment13.png';
import GinkgoTreeFragment14 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment14.png';
import GinkgoTreeFragment15 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment15.png';
import GinkgoTreeFragment16 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment16.png';
import GinkgoTreeFragment17 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment17.png';
import GinkgoTreeFragment18 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment18.png';
import GinkgoTreeFragment19 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment19.png';
import GinkgoTreeFragment20 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment20.png';
import GinkgoTreeFragment21 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment21.png';
import GinkgoTreeFragment22 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment22.png';
import GinkgoTreeFragment23 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment23.png';
import GinkgoTreeFragment24 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment24.png';
import GinkgoTreeFragment25 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment25.png';
import GinkgoTreeFragment26 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment26.png';
import GinkgoTreeFragment27 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment27.png';
import GinkgoTreeFragment28 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment28.png';
import GinkgoTreeFragment29 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment29.png';
import GinkgoTreeFragment30 from '../../assets/ginkgoTreeFragment/GinkgoTreeFragment30.png';



const Button = styled.button`
  font-family: 'LeeSeoyun';
  width: 200px; // 버튼 너비를 조정
  height: 35px; // 버튼 높이를 조정
  padding: 10px; // 내부 패딩을 조정
  background:rgb(255, 178, 34);
  color: black;
  border-radius: 15px;
  font-size: 17px; 
  border: 1px transparent; // 테두리 색상을 투명
  position: relative;
  z-index: 2;
  &:active { // 버튼이 눌렸을 때의 스타일
      background: rgb(255, 157, 0); // 눌렸을 때의 배경색을 변경
  }
`;
  
  const CenteredWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const TextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 0.2;  // 글자 간격
`;

const ModalTextsStyle = styled.div`
  font-family: 'LeeSeoyun';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  font-size: 15px;
  height: 10%; 
`;

const ModalTextsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;


// 캐릭터 이미지 위치 스타일링 (위치 변경 시 이 부분을 수정)
const CharImage = styled.img`
  position: absolute;
  z-index: 2;
  top: 77%; // top offset from tree image
  right: 25%; // right offset from tree image
`;

const TreeImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const TextBox = styled.div`
  font-family: 'LeeSeoyun';
  margin:2em auto;
  padding:2em;
  border:solid 2px #A5A19A;
`

// 가상의 API 호출 함수
// 실제 구현시에는 이 부분을 실제 API 호출 함수로 교체해야 합니다.
const fetchDailyLetterCount = async () => {
  // API 호출을 통해 당일 받은 편지 수를 가져옵니다.
  // 이 부분은 실제 백엔드 API에 맞게 수정해야 합니다.
  return await fetch('/api/dailyLetterCount').then(res => res.json());
};

function OwnerHome() {
  const dispatch = useDispatch();

  // 나무 상태와 편지 수에 대한 정보를 가져옴
  const treeState = useSelector((state: RootState) => state.autumnTree.treeState);
  const letterCount = useSelector((state: RootState) => state.autumnTree.letterCount);
  const senderName = useSelector((state: RootState) => state.autumnTree.senderName);
  const letterContent = useSelector((state: RootState) => state.autumnTree.letterContent);

  // 모달 상태에 대한 상태변수들
  const [isReadModalOpen, setReadModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true); 
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);

  // 당일 받은 편지 수를 저장하는 상태입니다.
  const [dailyLetterCount, setDailyLetterCount] = useState(0);

  // 선택한 나무와 캐릭터에 대한 정보를 가져옴
  const selectedTree = useSelector((state: RootState) => state.selectedTreeCharacter?.tree);
  const selectedCharacter = useSelector((state: RootState) => state.selectedTreeCharacter?.character);

  // 편지 상태를 가져옵니다.
  const letters = useSelector((state: RootState) => state.letters) || [];
  console.log(letters);

  // 링크가 복사되었는지 여부를 저장하는 상태입니다.
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  // 나무 상태를 변경하는 함수
  const getNextTreeState = (currentTreeState: string) => {
    return currentTreeState;
  };

  useEffect(() => {
    // 매일 한 번 API를 호출하여 당일 받은 편지 수를 가져옵니다.
    const fetchAndSetDailyLetterCount = async () => {
      const count = await fetchDailyLetterCount();
      setDailyLetterCount(count);
    };

    fetchAndSetDailyLetterCount();

    // 다음 날을 위해 타이머를 설정합니다.
    const timer = setTimeout(() => {
      fetchAndSetDailyLetterCount();
    }, 24 * 60 * 60 * 1000); // 24시간 후

    // 컴포넌트가 언마운트될 때 타이머를 해제합니다.
    return () => clearTimeout(timer);
  }, []);

  /*
  // 나무 이미지를 결정하는 함수입니다.
  const getTreeImage = (tree: string, day: number) => {
    if (day <= 0 || dailyLetterCount < 5) {
      // 첫째날이거나 당일 받은 편지 수가 5개 미만이면 기본 이미지를 반환합니다.
      return initialTreeImage;
    } else {
      // 당일 받은 편지 수가 5개 이상이면 해당하는 나무 이미지를 반환합니다.
      const imageIndex = Math.min(day, 30); // 이미지 인덱스는 1부터 30까지입니다.
     //return 어쩌고
    }
  };
*/
  
  // 선택한 나무에 따라 이미지를 가져오는 함수
  const getTreeTypeImage = (tree: string) => {
    switch (tree) {
    case 'Maple Tree':
        return MapleTree; // 단풍나무 이미지
    case 'Ginkgo Tree':
        return GinkgoTree; // 은행나무 이미지
    default:
        return initialTreeImage; // 기본 나무 이미지
    }
  };
  

  // 선택한 캐릭터에 따라 이미지를 가져오는 함수
  const getCharacterImage = (character: string) => {
    switch (character) {
    case 'Maple Character':
        return MapleCharacter; // 캐릭터1 이미지
    case 'Ginkgo Character':
        return GinkgoCharacter; // 캐릭터2 이미지
    default:
        return MapleCharacter; // 기본 캐릭터 이미지
    }
  };


  // 편지 수를 증가시키고, 필요하다면 나무 상태를 변경하는 함수
  const handleTreeStateChange = () => {
    if (letterCount < 5) {
      const nextTreeState = getNextTreeState(treeState);
      dispatch(changeTreeState(nextTreeState));
      dispatch(incrementLetterCount());
    }
  };

  // 편지를 확인하는 함수
  const handleReadLetters = () => {
    if (letters.length >= 0) { //if (letters.length >= 5) {
      setReadModalOpen(true);
    } else {
        const startDate = new Date(); // 편지를 받기 시작한 날짜
        const endDate = subDays(new Date(), 30); // 30일 이전의 날짜
  
        if (startDate <= endDate) {
          setReadModalOpen(true);
        } else {
          alert(`편지는 ${formatDistance(startDate, endDate)} 후에 열람 가능합니다.`);
        }
    }
  };
  

  // 링크 공유 함수
  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href) // 현재 페이지의 URL을 클립보드에 복사합니다.
      .then(() => {
        setIsLinkCopied(true); // 링크가 복사되었음을 표시합니다.
        setShareModalOpen(true);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  // 서비스 설명 함수
  const handleServiceDescription = () => {
    setServiceModalOpen(true);
  };

  

  return (
    <>
        {isMenuOpen && <Menu onLogout={() => {}} onServiceDescription={handleServiceDescription} />}
        <CenteredWrapper>
            <TextsStyle>
            <h3>가을을 기다리며,</h3>
            <h1>김단풍의 단풍나무</h1>
            <br/>
            <p>당신의 따뜻한 마음으로 나무를 물들여봐요.</p>
            </TextsStyle>

            <TreeImageWrapper>
              <img className= "treeimg" src={getTreeTypeImage(selectedTree)} alt="Selected Tree" width="300px" height="300px" />
              <CharImage src={getCharacterImage(selectedCharacter)} alt="Selected Character"/>
            </TreeImageWrapper>

            <br/> 
            <Button onClick={handleReadLetters}>편지 확인하기</Button>
            <br/> 
            <Button onClick={handleShareLink}>링크 공유하기</Button>
        

            {/* 편지 읽는 모달을 추가합니다 */}
            <Modal isOpen={isReadModalOpen} onClose={() => setReadModalOpen(false)}>
              <LettersList/>
            </Modal>

            <Modal isOpen={isShareModalOpen} onClose={() => setShareModalOpen(false)}>
              <ModalTextsWrapper>
              <ModalTextsStyle>주변 사람에게 나무의 위치를 알려주세요!</ModalTextsStyle>
              <ModalTextsStyle>{isLinkCopied ? "링크가 복사되었습니다!" : "링크 복사에 실패했습니다."}</ModalTextsStyle>
              <ModalTextsStyle>{window.location.href}</ModalTextsStyle> {/*나중에 지울거임 백엔드와 연결할 때 테스트용 */}
              </ModalTextsWrapper>
              
            </Modal>

            <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
                <h3>가을을 기다리며, 단풍우편함</h3>
                <p>
                하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
                <br/>
                어쩌구 저쩌구
                </p>
            </Modal>
      </CenteredWrapper>
    </>
  );
}

export default OwnerHome;