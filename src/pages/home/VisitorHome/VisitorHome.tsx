// 필요한 모듈들을 import 합니다.
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import VisitorMenu from '../../../components/VisitorMenu/VisitorMenu';
import Modal from '../../../components/Modal/Modal';
import initialTreeImage from '../../../assets/treeImg/MainTree.png';
import {s} from './style'
import { formatDistance, subDays } from 'date-fns'; 
import LettersList from '../../letters/LettersList/LettersList';
import MapleCharacter from '../../../assets/charImg/maple-small.png';
import GinkgoCharacter from '../../../assets/charImg/ginkgo-small.png';

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

function VisitorHome() {
  // 상태를 관리하는 useState 훅을 사용합니다.
  const [isSendModalOpen, setSendModalOpen] = useState(false);  // "보내기" 모달의 보임/안보임을 관리하는 상태
  const [senderName, setSenderName] = useState('');  // 보내는 사람 이름을 관리하는 상태
  const [letterContent, setLetterContent] = useState('');  // 편지 내용을 관리하는 상태
  const [userName, setUserName] = useState(null); //사용자의 이름을 저장하는 상태변수입니다.
  const [treeType, setTreeType] = useState(null);
  const [characterType, setCharacterType] = useState(null);
  const [treeFragmentImages, setTreeFragmentImages] = useState<string[]>([]);
  const [mapleTreeImages, setMapleTreeImages] = useState<string[]>([]);
  const [ginkgoTreeImages, setGinkgoTreeImages] = useState<string[]>([]);
  const [letters, setLetters] = useState<Letter[]>([]);
  const [treeGrowthStage, setTreeGrowthStage] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(true); // 메뉴의 보임/안보임을 관리하는 상태
  const [isServiceModalOpen, setServiceModalOpen] = useState(false); // "서비스 설명" 모달의 보임/안보임을 관리하는 상태


  const { userId } = useParams<{ userId: string }>(); // URL에서 userId 값을 추출

  // 컴포넌트가 마운트될 때 사용자 정보를 가져옵니다.
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) {
        const userInfo = await getUserInfoFromServer(userId);
        setTreeType(userInfo?.treeType); //사용자 나무 종류를 상태 변수에 저장합니다.
        setCharacterType(userInfo?.characterType);  // 사용자 캐릭터 종류를 상태 변수에 저장합니다.
        setUserName(userInfo?.userName); // 사용자 이름을 상태 변수에 저장합니다.
      }
    };
    fetchUserInfo();
  }, [userId]);

  // 컴포넌트가 마운트될 때 이미지를 가져옵니다.
  useEffect(() => {
    const fetchImages = async () => {
      const mapleImages = await importImages('MapleTreeFragment', 30);
      const ginkgoImages = await importImages('GinkgoTreeFragment', 30);
      setMapleTreeImages(mapleImages);
      setGinkgoTreeImages(ginkgoImages);
    };
    fetchImages();
  }, []);


  // 나무의 성장 단계에 따라 이미지를 가져오는 함수입니다.
  const getTreeImageByGrowthStage = useCallback(async (treeType: string | null, stage: number) => {
     // 편지가 5개 이상일 때마다 나무의 성장 단계를 업데이트하고 새로운 이미지를 추가합니다.
    if (!treeType) {
      return null; // treeType이 null이거나 undefined일 때 기본 나무 이미지를 반환합니다.
    // return mapleTreeImages[22]; // 테스트용입니다. initial tree위에 잘 얹어지는거 확인.
    }
    switch (treeType) {
      case 'Maple Tree':
        return mapleTreeImages[stage];
      case 'Ginkgo Tree':
        return ginkgoTreeImages[stage];
      default:
        return null; 
    }
  }, [mapleTreeImages, ginkgoTreeImages]);

  // 편지가 추가될 때마다 나무의 성장 단계를 업데이트합니다.
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
        return GinkgoCharacter; // 기본 캐릭터 이미지
    }
  };

  // 편지를 보내는 함수입니다.
const handleSendLetter = async (event: React.FormEvent) => {
  event.preventDefault();

  // 입력값을 검사합니다.
  if (!senderName.trim() || !letterContent.trim()) {
    // 이름이나 편지 내용이 비어있으면 경고 메시지를 표시하고 함수를 종료합니다.
    alert('글귀를 적어주세요!');
    return;
  }

  // 백엔드로 보낼 데이터를 정의합니다.
  const letterData = {
    senderName,
    letterContent,
  };

  try {
    // 백엔드로 편지 데이터를 보냅니다.
    // 엔드포인트 맞춰야 함
    await axios.post(`https://localhost:8080/users/${userId}/letters`, letterData);
    //await axios.post(`http://localhost:8080/board/writepro`, letterData);
    // 입력 필드를 초기화합니다.
    setSenderName('');
    setLetterContent('');

    // 모달을 닫습니다.
    setSendModalOpen(false);
  } catch (error) {
    console.error('네트워크 문제로 편지를 보내는 데에 실패했습니다.', error);
  }
};


  // 이름을 작성하는 함수입니다.
  const writeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderName(e.target.value)
  }

  // 편지를 작성하는 함수입니다.
  const writeLetter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLetterContent(e.target.value)
  }

  // 페이지 이동을 위한 함수입니다.
  const navigate = useNavigate();

  // 서비스 설명 함수
  const handleServiceDescription = () => {
    setServiceModalOpen(true);
  };

  // 내 나무 보러가기 버튼 클릭 후 자신의 홈으로 이동하기 위한 함수
  const handleShareLink = () => {
    navigate('/OwnerHome'); //이거 바꿔야 함. 자신의 url로.
  };

  return (
    <>
    {isMenuOpen && <VisitorMenu onLogout={() => {}} onServiceDescription={handleServiceDescription} />}
    <s.CenteredWrapper>
      <s.TextsStyle>
        <s.H3>가을을 기다리며,</s.H3>
        <s.H1>{userName}의 {treeType === 'Ginkgo Tree' ? '은행나무' : '단풍나무'}</s.H1>
        <s.P>당신의 따뜻한 마음으로 나무를 물들여봐요.</s.P>
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
        <s.CharImage src={getCharacterImage(characterType)} alt="character" />
      </s.TreeImageWrapper>
      <s.ButtonWrapper>
      <s.Break/>
      <s.Button onClick={() => setSendModalOpen(true)}>단풍잎 물들이기</s.Button>
      <s.Break/> 
      <s.Button onClick={handleShareLink}>내 나무 보러가기</s.Button>
      </s.ButtonWrapper>

      <Modal isOpen={isSendModalOpen} onClose={() => setSendModalOpen(false)}>
        <s.ModalCenterWrapper>
        <s.Form onSubmit={handleSendLetter}>
        <s.H2>단풍잎 물들이기</s.H2>
          <s.NameInput
            type="text"
            placeholder="이름을 입력하세요."
            value={senderName}
            onChange={writeName}
          />
          <s.LetterArea
            placeholder="전하고 싶은 말을 쓰세요."
            value={letterContent}
            onChange={writeLetter}
          />
          <s.SendButton 
          type="submit"
          >
            물들이기
          </s.SendButton>
        </s.Form>
        </s.ModalCenterWrapper>
      </Modal>
      
      <Modal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}>
                <s.H3>가을을 기다리며, 단풍우편함</s.H3>
                <s.P>
                하루에 5개 이상의 편지를 받으면 오늘의 편지를 열람할 수 있어요.
                <s.Break/>
                어쩌구 저쩌구
                </s.P>
            </Modal>
    </s.CenteredWrapper>
    </>
  );
}

export default VisitorHome;
