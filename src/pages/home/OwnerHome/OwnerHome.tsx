import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Menu from '../../../components/Menu/Menu';
import Modal from '../../../components/Modal/Modal';
import initialTreeImage from '../../../assets/treeImg/MainTree.png';
import {s} from './style'
import { formatDistance, subDays } from 'date-fns'; 
import LettersList from '../../letters/LettersList/LettersList';
import MapleCharacter from '../../../assets/charImg/maple-small-big2.png';
import GinkgoCharacter from '../../../assets/charImg/ginkgo-small-big2.png';

// 편지 정보를 저장할 타입을 정의합니다.
type Letter = {
  date: string;
  senderName: string;
  letterContent: string;
};

// 사용자의 나무와 캐릭터 정보를 가져오는 함수입니다.
const getUserInfoFromServer = async (userId: string) => {
  if (!userId) {
    // userId가 undefined일 경우의 처리 로직을 여기에 작성합니다.
    // 예를 들어, 에러 메시지를 표시하거나, null을 반환하는 등의 처리를 할 수 있습니다.
    console.error('userId is undefined');
    return null;
  }
  try {
    // 백엔드 서버에 GET 요청을 보냅니다.
    const response = await axios.get(`https://localhost:8080/api/users/${userId}`);

    // 응답에서 사용자 정보를 추출합니다.
    const userInfo = response.data;

    // 사용자의 나무와 캐릭터 정보를 반환합니다.
    return {
      treeType: userInfo.treeType, //사용자 나무 종류
      characterType: userInfo.characterType, // 사용자 캐릭터 종류
      userName: userInfo.userName, // 사용자 이름을 추가합니다.
    };
  } catch (error) {
    // 요청이 실패하면 오류를 출력하고 null을 반환합니다.
    console.error('Failed to fetch user info:', error);
    return null;
  }
};
// 이미지를 동적으로 가져오는 함수 1~30까지
const importImages = async (prefix: string, count: number) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    const image = await import(`../../../assets/${prefix}/${prefix}${i}.png`);
    images.push(image.default);
  }
  return images;
};

function OwnerHome() {
  // 모달 상태에 대한 상태변수들입니다.
  const [isReadModalOpen, setReadModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true); 
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);

  //사용자의 이름을 저장하는 상태변수입니다.
  const [userName, setUserName] = useState(null);

  //사용자의 나무, 캐릭터 종류를 저장하는 상태변수입니다.
  const [treeType, setTreeType] = useState(null);
  const [characterType, setCharacterType] = useState(null);

  // 나무가 물들어가는 이미지를 저장하는 상태변수입니다.
  const [treeFragmentImages, setTreeFragmentImages] = useState<string[]>([]);

  // 단풍나무 이미지와 은행나무 이미지를 저장하는 상태 변수입니다.
  const [mapleTreeImages, setMapleTreeImages] = useState<string[]>([]);
  const [ginkgoTreeImages, setGinkgoTreeImages] = useState<string[]>([]);

   // 사용자가 받은 편지 목록을 저장하는 상태 변수입니다.
   const [letters, setLetters] = useState<Letter[]>([]);

  // 나무의 성장 단계를 저장하는 상태 변수입니다.
  const [treeGrowthStage, setTreeGrowthStage] = useState(0);

  // 링크가 복사되었는지 여부를 저장하는 상태입니다.
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) { // userId가 undefined가 아닐 때만 API 호출을 실행합니다.
        const userInfo = await getUserInfoFromServer(userId);
        setTreeType(userInfo?.treeType);
        setCharacterType(userInfo?.characterType);
        setUserName(userInfo?.userName); // 사용자 이름을 상태 변수에 저장합니다.
      }
    };
  
    fetchUserInfo();
  }, [userId]);
  
  useEffect(() => {
    // 컴포넌트가 마운트될 때 이미지 데이터를 가져옵니다.
    const fetchImages = async () => {
      const mapleImages = await importImages('MapleTreeFragment', 30);
      const ginkgoImages = await importImages('GinkgoTreeFragment', 30);
      setMapleTreeImages(mapleImages);
      setGinkgoTreeImages(ginkgoImages);
    };

    fetchImages();
  }, []);


  useEffect(() => {
    // 컴포넌트가 마운트될 때 편지 데이터를 가져옵니다.
    const fetchLetters = async () => {
      try {
        const response = await axios.get('https://localhost:8080/api/users/${userId}/letters');
        setLetters(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLetters();
  }, []);

  
  
  // 나무의 성장 단계에 따라 나무 이미지를 반환하는 함수입니다.
  const getTreeImageByGrowthStage = useCallback(async (treeType: string | null, stage: number) => {
    // 편지가 5개 이상일 때마다 나무의 성장 단계를 업데이트하고 새로운 이미지를 추가합니다.
      if (!treeType) {
        return null; // treeType이 null이거나 undefined일 때 기본 나무 이미지를 반환합니다.
      // return mapleTreeImages[22]; // 테스트용입니다. initial tree위에 잘 얹어지는거 확인.
      }
      switch (treeType) {
        case 'Maple Tree':
          return mapleTreeImages[stage]; // 단풍나무 이미지
        case 'Ginkgo Tree':
          return ginkgoTreeImages[stage]; // 은행나무 이미지
        default:
          return null; 
      }
    
  }, [mapleTreeImages, ginkgoTreeImages]);

  useEffect(() => {
    // 편지가 5개 이상일 때마다 나무의 성장 단계를 업데이트하고 새로운 이미지를 추가합니다.
    if (letters.length % 5 === 0) {
      setTreeGrowthStage(prevStage => {
        const newStage = prevStage + 1;
        getTreeImageByGrowthStage(treeType, newStage).then(newImage => {
          if (newImage) { // newImage가 null이 아닐 때만 이미지를 추가합니다.
            setTreeFragmentImages(prevImages => [...prevImages, newImage]);
          }
        });
        return newStage;
      });
    }
  }, [letters, treeType, getTreeImageByGrowthStage]);
  

  // api를 통해 받아온 유저 정보에서 캐릭터 이미지를 가져오는 함수입니다.
  const getCharacterImage = (characterType: string | null) => {
    if (!characterType) {
      return MapleCharacter; // treeType이 null이거나 undefined일 때 기본 나무 이미지를 반환합니다.
    }

    switch (characterType) {
    case 'Maple Character':
        return MapleCharacter; // 캐릭터1 이미지
    case 'Ginkgo Character':
        return GinkgoCharacter; // 캐릭터2 이미지
    default:
        return MapleCharacter; // 기본 캐릭터 이미지
    }
  };

  // 편지를 확인하는 함수
  const handleReadLetters = () => {
    if (letters.length >= 0) { //작동하는지 확인할려고 0으로 임시로 지정한 것. 테스트용.
    //if (letters.length >= 5) { // 편지가 5개 이상일 때만 편지 확인 모달을 엽니다.
      setReadModalOpen(true);
    } else if (letters.length > 0) { // 편지가 1개 이상 있을 때만 첫 번째 편지의 날짜를 확인합니다.
      const startDate = new Date(letters[0].date); // 첫 번째 편지를 받은 날짜
      const endDate = new Date(); // 현재 날짜
  
      if (startDate <= subDays(endDate, 30)) { // 첫 번째 편지를 받은 날짜가 30일 이전인지 확인합니다.
        setReadModalOpen(true);
      } else {
        alert(`편지는 ${formatDistance(startDate, endDate)} 후에 열람 가능합니다.`);
      }
    } else { // 편지가 없을 때는 경고 메시지를 표시합니다.
      alert('편지가 없습니다.');
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
        <s.CenteredWrapper>
            <s.TextsStyle>
              <s.StyledH3>가을을 기다리며,</s.StyledH3>
              <s.StyledH1>{userName}의 {treeType === 'Ginkgo Tree' ? '은행나무' : '단풍나무'}</s.StyledH1>
              <s.StyledP>당신의 따뜻한 마음으로 나무를 물들여봐요.</s.StyledP>
            </s.TextsStyle>

            <s.TreeImageWrapper>
            <s.TreeImg src={initialTreeImage} alt="Initial Tree" />
            {treeFragmentImages.map((image, index) => (
              <s.TreeFragmentImg
                key={index}
                src={image}
                alt={`Tree at stage ${index + 1}`}
              />
            ))} 
            <s.CharImage src={getCharacterImage(characterType)} alt="Selected Character"/>
            </s.TreeImageWrapper>

            <br/> 
            <s.Button onClick={handleReadLetters}>편지 확인하기</s.Button>
            <br/> 
            <s.Button onClick={handleShareLink}>링크 공유하기</s.Button>
        
            {/* 편지 읽는 모달을 추가합니다 */}
            <Modal isOpen={isReadModalOpen} onClose={() => setReadModalOpen(false)}>
              <LettersList/>
            </Modal>

            <Modal isOpen={isShareModalOpen} onClose={() => setShareModalOpen(false)}>
              <s.ModalTextsWrapper>
              <s.ModalTextsStyle>주변 사람에게 나무의 위치를 알려주세요!</s.ModalTextsStyle>
              <s.ModalTextsStyle>{isLinkCopied ? "링크가 복사되었습니다!" : "링크 복사에 실패했습니다."}</s.ModalTextsStyle>
              <s.ModalTextsStyle>{window.location.href}</s.ModalTextsStyle> {/*나중에 지울거임 백엔드와 연결할 때 테스트용 */}
              </s.ModalTextsWrapper>
              
            </Modal>

            <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
                <s.StyledH3>가을을 기다리며, 단풍우편함</s.StyledH3>
                <s.StyledP>
                하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
                <br/>
                어쩌구 저쩌구
                </s.StyledP>
            </Modal>
      </s.CenteredWrapper>
    </>
  );
}

export default OwnerHome;