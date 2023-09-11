import { useState, useEffect, useCallback, useContext } from 'react';
import axios, { AxiosError } from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../../../components/Menu/Menu';
import Modal from '../../../components/Modal/Modal';
import ServiceModal from 'src/components/ServiceModal/ServiceModal';
import initialTreeImage from '../../../assets/treeImg/MainTree.png';
import {s} from './style';
import LettersList from '../../letters/LettersList/LettersList';
import StampList from 'src/pages/stamp/StampList/StampList';
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
import SmallModal from "src/components/SmallModal/SmallModal";
import {useToken}  from '../../../contexts/TokenProvider/TokenProvider';


type ImageModule = {
  default: string;
};
// 이미지를 동적으로 가져오는 함수 1~30까지
const importImages = async (prefix: string, count: number) => {
  const promises: Promise<ImageModule>[] = [];

  for (let i = 1; i <= count; i++) {
    const promise = import(`../../../assets/${prefix}/${prefix}${i}.png`);
    promises.push(promise);
  }

  const images = await Promise.all(promises);

  return images.map(image => image.default);
};




function OwnerHome() {
  const { accessToken, refreshToken } = useToken();
  // 모달 상태에 대한 상태변수들입니다.
  const [isReadModalOpen, setReadModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true); 
  const [isServiceModalOpen, setServiceModalOpen] = useState(false);
  const [isStampModalOpen, setStampModalOpen] = useState(false); // 스탬프 모달 상태 변수 추가

  //사용자의 이름을 저장하는 상태변수입니다.
  const [userName, setUserName] = useState<string>('김단풍'); // 기본 이름 설정

  //사용자의 나무, 캐릭터 종류를 저장하는 상태변수입니다.
  const [treeType, setTreeType] = useState<string | null>(null);
  const [characterType, setCharacterType] = useState<string | null>(null);
  const [lettersOverFive, setLettersOverFive] = useState<boolean[]>(Array(30).fill(false));

  // 나무가 물들어가는 이미지를 저장하는 상태변수입니다.
  const [treeFragmentImages, setTreeFragmentImages] = useState<string[]>(Array(30).fill(null));

  // 단풍나무 이미지와 은행나무 이미지를 저장하는 상태 변수입니다.
  const [mapleTreeImages, setMapleTreeImages] = useState<(string | null)[]>([]);
  const [ginkgoTreeImages, setGinkgoTreeImages] = useState<(string | null)[]>([]);


  // 나무의 성장 단계를 저장하는 상태 변수입니다.
  const [treeGrowthStage, setTreeGrowthStage] = useState<number>(0);

  // 링크가 복사되었는지 여부를 저장하는 상태입니다.
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  // D-day를 계산하는 상태 변수입니다.
  const [dday, setDday] = useState<number | null>(null);
  
  // D-day를 계산하기 위해 필요한 상태 변수입니다. 회원가입 한지 며칠이 되었는가.
  const [nowDate, setNowDate] = useState<number | null>(0);

  const { userId } = useParams<{ userId: string }>(); //userId를 url에서 떼오기 코드

  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.

  const navigate = useNavigate(); // useNavigate hook 사용
  

  localStorage.setItem(`userName_${userId}`, userName);
  //const userId = localStorage.getItem("userId");

// 사용자의 나무와 캐릭터 정보를 가져오는 함수입니다.
  const getUserInfoFromServer = async (userId: string) => {
    try {
      // 백엔드 서버에 GET 요청을 보냅니다.
      const response = await axios.get(`https://maplemailbox.com/api/users/${userId}`, {
        headers: {
          'authorization': `${accessToken}`
        }
      });
      if(response.status===200) {
        // 응답에서 사용자 정보를 추출합니다.
        const userInfo = response.data;

        // 사용자의 나무와 캐릭터 정보를 반환합니다.if (nowDate !== null && typeof nowDate === 'number'&& lett
        return {
          treeType: userInfo.treeType, //사용자 나무 종류
          characterType: userInfo.characterType, // 사용자 캐릭터 종류
          userName: userInfo.userName, // 사용자 이름을 추가합니다.
          nowDate: userInfo.nowDate, // startDate 값을 추가했습니다.
          lettersOverFive: userInfo.lettersOverFive // 5개를 넘었는지 여부. boolean
        };
      }
    } catch (error: unknown) { //에러 일 경우
      if (error instanceof AxiosError) {
          const status = error?.response?.status;
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
      navigate(`/`); //모달창 바깥을 눌러 모달을 끄고, 메뉴버튼을 클릭해서 1일차 보상 수령에 문제가 발생할 수도 있어서 navigate 
      return null;
    }
};

const handleNavigateHome = () => { 
  navigate(`/`);    
}

   // 컴포넌트가 마운트될 때 사용자 정보를 가져옵니다.
   useEffect(() => {
    const userId = localStorage.getItem("userId");
    
    const fetchUserInfo = async () => {
      if (userId) {
        const userInfo = await getUserInfoFromServer(userId);
        setTreeFragmentImages([]); // 유저 정보를 새로 불러올 때마다 초기화

        //const userInfo = testUserInfo; // 테스트용 데이터 사용
        setTreeType(userInfo?.treeType);
        setCharacterType(userInfo?.characterType);
        setUserName(userInfo?.userName);
        setNowDate(userInfo?.nowDate);
        setLettersOverFive(userInfo?.lettersOverFive);
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
        if (typeof nowDate === 'number') {
          const ddayValue = 30 - nowDate; // 30일 기준에서 D-day를 계산합니다.
          setDday(ddayValue);
        } else {
          setDday(30);
        }
  }, [nowDate]);
  
  // 나무의 성장 단계에 따라 나무 이미지를 반환하는 함수입니다.
  const getTreeImageByGrowthStage = useCallback(async (treeType: string | null, stage: number) => {
    // 편지가 5개 이상일 때마다 나무의 성장 단계를 업데이트하고 새로운 이미지를 추가합니다.
      if (!treeType) {
        return null; // treeType이 null이거나 undefined일 때 기본 나무 이미지를 반환합니다.
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
    if (nowDate && typeof nowDate === 'number'&& lettersOverFive[nowDate - 1] === true) { 
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

  // 편지를 확인하는 함수 
  const handleReadLetters = () => {
      setReadModalOpen(true);
  };

  // 링크 공유 함수
  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href) // 현재 페이지의 URL을 클립보드에 복사합니다.
      .then(() => {
        setIsLinkCopied(true); // 링크가 복사되었음을 표시합니다.
        setShareModalOpen(true);
      })
      .catch(err => {
        //console.error('Could not copy text: ', err);
      });
  };

  // 서비스 설명 함수
  const handleServiceDescription = () => {
    setServiceModalOpen(true);
  };

  const handleCloseLinkCopyClose = () => {
    setShareModalOpen(false)
  }

  return (
    <>
        {isMenuOpen && <Menu nowDate={nowDate} onLogout={() => {}} onServiceDescription={handleServiceDescription} />}
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
              <s.StampCollectionButton onClick={() => setStampModalOpen(true)} />
              <s.SpeechBubble />
            </s.TreeImageWrapper>
            <s.ButtonWrapper>
              <s.Break/> 
              <s.LetterOpenButton onClick={handleReadLetters}>편지 확인하기</s.LetterOpenButton>
              <s.DdayCount>D-{dday}</s.DdayCount>
              <s.Break/> 
              <s.Button onClick={handleShareLink}>링크 공유하기</s.Button>
            </s.ButtonWrapper>
            {/* 편지 읽는 모달을 추가합니다 */}
            <Modal isOpen={isReadModalOpen} onClose={() => setReadModalOpen(false)}>
              <LettersList/>
            </Modal>

            <SmallModal isOpen={isShareModalOpen} onClose={() => setShareModalOpen(false)}>
              <s.ErrorCenterModalWrapper>
                <s.LinkModalTextsStyle1>주변 사람에게 나무의 위치를 알려주세요!</s.LinkModalTextsStyle1>
                <s.Break/>
                <s.LinkModalTextsStyle2>{isLinkCopied ? "링크가 복사되었습니다!" : "링크 복사에 실패했습니다."}</s.LinkModalTextsStyle2>
                <s.ModalButton onClick={handleCloseLinkCopyClose}>확인</s.ModalButton>
              </s.ErrorCenterModalWrapper>
            </SmallModal>

            <ServiceModal isOpen={isServiceModalOpen} onClose={() => setServiceModalOpen(false)}/>

            <Modal isOpen={isStampModalOpen} onClose={() => setStampModalOpen(false)} >
              <StampList nowDate={nowDate}/>
              {/*<StampList nowDate={2} /> {/* 테스트용 */}
            </Modal>
            <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
                {modalErrorContent}
            </ErrorModal>
      </s.CenteredWrapper>
    </>
  );
}

export default OwnerHome;