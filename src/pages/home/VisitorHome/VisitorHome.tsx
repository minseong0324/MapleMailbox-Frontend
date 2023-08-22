// 필요한 모듈들을 import 합니다.
import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import VisitorMenu from '../../../components/VisitorMenu/VisitorMenu';
import Modal from '../../../components/Modal/Modal';
import ServiceModal from 'src/components/ServiceModal/ServiceModal';
import initialTreeImage from '../../../assets/treeImg/MainTree.png';
import {s} from './style'
import MapleCharImg from "../../../assets/charImg/maple-small.png";
import GinkgoCharImg from "../../../assets/charImg/ginkgo-small.png";
import BlackCharImg from "../../../assets/charImg/black-small.png";
import BlueCharImg from "../../../assets/charImg/blue-small.png";
import BrownCharImg from "../../../assets/charImg/brown-small.png";
import GrayCharImg from "../../../assets/charImg/gray-small.png";
import PurpleCharImg from "../../../assets/charImg/purple-small.png";
import SkyBlueCharImg from "../../../assets/charImg/skyblue-small.png";
import VioletCharImg from "../../../assets/charImg/violet-small.png";
import YellowCharImg from "../../../assets/charImg/yellow-small.png";
import ErrorModal from "src/components/ErrorModal/ErrorModal";
import {useToken}  from '../../../contexts/TokenProvider/TokenProvider'

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
  const { accessToken, refreshToken } = useToken();
  const OwnerUserId = localStorage.getItem('userId');
  // 상태를 관리하는 useState 훅을 사용합니다.
  const [isSendModalOpen, setSendModalOpen] = useState(false);  // "보내기" 모달의 보임/안보임을 관리하는 상태
  const [senderName, setSenderName] = useState('');  // 보내는 사람 이름을 관리하는 상태
  const [letterContent, setLetterContent] = useState('');  // 편지 내용을 관리하는 상태
  const [userName, setUserName] = useState('김은행'); // 기본 이름 설정
  const [treeType, setTreeType] = useState(null);
  const [characterType, setCharacterType] = useState(null);
  const [treeFragmentImages, setTreeFragmentImages] = useState<string[]>(Array(30).fill(false));
  const [mapleTreeImages, setMapleTreeImages] = useState<string[]>([]);
  const [ginkgoTreeImages, setGinkgoTreeImages] = useState<string[]>([]);
  const [treeGrowthStage, setTreeGrowthStage] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(true); // 메뉴의 보임/안보임을 관리하는 상태
  const [isServiceModalOpen, setServiceModalOpen] = useState(false); // "서비스 설명" 모달의 보임/안보임을 관리하는 상태
  const [lettersOverFive, setLettersOverFive] = useState<boolean[]>(Array(30).fill(false));
  const [nowDate, setNowDate] = useState<number | null>(0); // 회원가입 한지 며칠이 되었는가.
  const [reloadUserInfo, setReloadUserInfo] = useState(false);//편지를 보낼 때 마다 상대방 정보를 업데이트 하기 위해 생선한 상태변수, 이유는 상대방 페이지에서 5개의 편지를 쓰면 실시간으로 나무가 물들게 하기 위해.

  const { userId } = useParams<{ userId: string }>(); // URL에서 userId 값을 추출

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); //로그인 유무를 확인하는 상태
  const [showLoginAlertModal, setShowLoginAlertModal] = useState(false); //로그인 상태가 아니면 모달창을 띄위기 위한 상태
  
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  // 사용자의 나무와 캐릭터 정보를 가져오는 함수입니다.
const getUserInfoFromServer = async (userId: string) => {
  const accessToken = localStorage.getItem('accessToken');
  

  try {
    // 백엔드 서버에 GET 요청을 보냅니다.
    const response = await axios.get(`http://localhost:8080/api/users/${userId}`, {
      headers: {
        'authorization': `${accessToken}`
      }
    });

    // 응답에서 사용자 정보를 추출합니다.
    const userInfo = response.data;

    // 사용자의 나무와 캐릭터 정보를 반환합니다.
    return {
      treeType: userInfo.treeType, //사용자 나무 종류
      characterType: userInfo.characterType, // 사용자 캐릭터 종류
      userName: userInfo.userName, // 사용자 이름을 추가합니다.
      nowDate: userInfo.nowDate, // startDate 값을 추가했습니다.
      lettersOverFive: userInfo.lettersOverFive // 5개를 넘었는지 여부. boolean
    };
    
  } catch (error: unknown) { //에러 일 경우
    if (error instanceof AxiosError) {
        const status = error?.response?.status;
        console.error('Failed to fetch user info:', error);
        setModalErrorContent(
          <s.ErrorCenterModalWrapper>
              <s.ErrorModalTextsWrapper2>유저의 정보를</s.ErrorModalTextsWrapper2>
              <s.ErrorModalTextsWrapper2>불러오지 못했어요.</s.ErrorModalTextsWrapper2>
              <s.ModalButton onClick={handleNavigateHome}>돌아가기</s.ModalButton>
          </s.ErrorCenterModalWrapper>
      );
        if (status === 404) {
            // 리소스를 찾을 수 없음
        } else if (status === 500) {
            // 서버 내부 오류
        } else {
            // 기타 상태 코드 처리
        }
    } 
    setErrorModalOpen(true);
    return null;
  }
};

const handleNavigateHome = () => { 
  navigate(`/`);    
}

  // 컴포넌트가 마운트될 때 사용자 정보를 가져옵니다.
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) {
        const userInfo = await getUserInfoFromServer(userId);
        setTreeFragmentImages([]); // 유저 정보를 새로 불러올 때마다 초기화

        setTreeType(userInfo?.treeType); //사용자 나무 종류를 상태 변수에 저장합니다.
        setCharacterType(userInfo?.characterType);  // 사용자 캐릭터 종류를 상태 변수에 저장합니다.
        setUserName(userInfo?.userName); // 사용자 이름을 상태 변수에 저장합니다.
        setNowDate(userInfo?.nowDate); 
        setLettersOverFive(userInfo?.lettersOverFive);
        console.log(userInfo?.nowDate)
      }
    };
    fetchUserInfo();
  }, [userId, reloadUserInfo]);

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

  //로그인 상태 확인을 위함.
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(accessToken !== null);  // accessToken의 값에 따라 로그인 상태를 설정
  }, []);  // 컴포넌트가 마운트될 때만 실행

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
  if (nowDate !== null && typeof nowDate === 'number'&& lettersOverFive[nowDate - 1] === true) { 
    // 편지가 5개 이상일 때마다 나무의 성장 단계를 업데이트하고 새로운 이미지를 추가합니다.
    setTreeGrowthStage(prevStage => {
      const newStage = nowDate - 1;
      getTreeImageByGrowthStage(treeType, newStage).then(newImage => {
        if (newImage) { // newImage가 null이 아닐 때만 이미지를 추가합니다.
          setTreeFragmentImages(prevImages => [...(prevImages || []), newImage]);
        }
      });
      return newStage;
    });
  
}
}, [nowDate, lettersOverFive, getTreeImageByGrowthStage, treeType]);

  // api를 통해 받아온 유저 정보에서 캐릭터 이미지를 가져오는 함수입니다.
  const getCharacterImage = (characterType: string | null) => {
    if (!characterType) {
      return MapleCharImg; // treeType이 null이거나 undefined일 때 기본 나무 이미지를 반환합니다.
    }

    switch (characterType) {
    case 'Maple Character':
        return MapleCharImg;
    case 'Ginkgo Character':
        return GinkgoCharImg;
    case 'Black Character':
        return BlackCharImg;
    case 'Blue Character':
        return BlueCharImg;  
    case 'Brown Character':
        return BrownCharImg;  
    case 'Gray Character':
        return GrayCharImg;
    case 'Purple Character':
        return PurpleCharImg;
    case 'SkyBlue Character':
        return SkyBlueCharImg;
    case 'Violet Character':
        return VioletCharImg;  
    case 'Yellow Character':
        return YellowCharImg;       
    default:
        return MapleCharImg; // 기본 캐릭터 이미지
    }
  };

  // 편지를 보내는 함수입니다.
const handleSendLetter = async (event: React.FormEvent) => {
  if (isLoggedIn === true) {
    setSendModalOpen(true)
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
      const response = await axios.post(`http://localhost:8080/api/users/${userId}/letters`, letterData, {
        headers: {
          'authorization': `${accessToken}`
        }
      });
      if(response.status===200) {
        // 입력 필드를 초기화합니다.
        setSenderName('');
        setLetterContent('');

        // 모달을 닫습니다.
        setSendModalOpen(false);
      }
      setReloadUserInfo(prevState => !prevState);  // 상태를 반대로 토글합니다.

      
    } catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
          const status = error?.response?.status;
          console.error('Failed to fetch user info:', error);
          setModalErrorContent(
              <s.ErrorCenterModalWrapper>
                  <s.ErrorModalTextsWrapper2>편지를 보내는</s.ErrorModalTextsWrapper2>
                  <s.ErrorModalTextsWrapper2>데에 실패했어요.</s.ErrorModalTextsWrapper2>
                  <s.ModalButton onClick={handleErrorModalClose}>닫기</s.ModalButton>
              </s.ErrorCenterModalWrapper>
          );
          if (status === 404) {
              // 리소스를 찾을 수 없음
          } else if (status === 500) {
              // 서버 내부 오류
          } else {
              // 기타 상태 코드 처리
          }
      } 
      setErrorModalOpen(true);
      return null;
    }
  }
};

const handleErrorModalClose = () => {
  setErrorModalOpen(false);
}

  // 이름을 작성하는 함수입니다.
  const writeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // senderName의 길이가 10자를 넘지 않는 경우에만 상태 업데이트
    if (value.length <= 10) {
      setSenderName(value);
    }
  }

  // 편지를 작성하는 함수입니다.
  const writeLetter = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    // letterContent의 길이가 200자를 넘지 않는 경우에만 상태 업데이트
    if (value.length <= 200) {
      setLetterContent(value);
    }
  }

  // 페이지 이동을 위한 함수입니다.
  const navigate = useNavigate();

  // 서비스 설명 함수
  const handleServiceDescription = () => {
    setServiceModalOpen(true);
  };

  // 내 나무 보러가기 버튼 클릭 후 자신의 홈으로 이동하기 위한 함수
  const handleShareLink = () => {
    if (isLoggedIn === true) {
      //navigate('/OwnerHome'); //이거 바꿔야 함. 자신의 url로.
      navigate(`/home/${OwnerUserId}`, { replace: true });
    } else {
      setShowLoginAlertModal(true);
    }
  };

  const handleCloseAlertModal = () => {
    setShowLoginAlertModal(false);
    localStorage.setItem('returnUrl', window.location.pathname); //다른 사람의 홈에 방문했지만 로그인이 안된 사람들을 위해서 로컬스토리지에 저장
    navigate('/');
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
        {treeFragmentImages && treeFragmentImages.map((image, index) => (
          <s.TreeFragmentImg
            key={index}
            src={image}
            alt={`Tree at stage ${index + 1}`}
          />
        ))}
        <s.CharImage src={getCharacterImage(characterType)} alt="Selected Character"/>
      </s.TreeImageWrapper>
      <s.ButtonWrapper>
      <s.Break/>
      <s.Button onClick={handleSendLetter}>단풍잎 물들이기</s.Button>
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
          <s.CheckTextLength>{senderName.length}/10</s.CheckTextLength>
          <s.LetterArea
            placeholder="전하고 싶은 말을 쓰세요."
            value={letterContent}
            onChange={writeLetter}
          />
          <s.CheckTextLength>{letterContent.length}/200</s.CheckTextLength>
          <s.SendButton 
          type="submit"
          >
            물들이기
          </s.SendButton>
        </s.Form>
        </s.ModalCenterWrapper>
      </Modal>
      
      <ServiceModal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}/>

      <Modal isOpen={showLoginAlertModal} onClose={() => setShowLoginAlertModal(false)}>
        <s.ModalCenterWrapper>
          <s.TextsStyle>로그인을 하셔야 </s.TextsStyle>
          <s.TextsStyle>이용가능해요!</s.TextsStyle>
          <s.ModalButton onClick={handleCloseAlertModal}>확인</s.ModalButton>
        </s.ModalCenterWrapper>
        
      </Modal>
      <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
        {modalErrorContent}
      </ErrorModal>
    </s.CenteredWrapper>
    </>
  );
}

export default VisitorHome;