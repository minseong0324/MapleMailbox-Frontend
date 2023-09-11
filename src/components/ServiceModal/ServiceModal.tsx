import React from 'react';
import { s } from './style';
import Modal from '../../components/Modal/Modal'

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
  

            <s.ModalTextsWrapper>
                <s.HorizontalContainer>
                    <s.MapleLeafImage/>
                    <s.TitleWrapper>
                        <s.SubTitle>가을을 기다리며,</s.SubTitle>
                        <s.Title>단풍 우편함</s.Title>
                    </s.TitleWrapper>
                    <s.MapleLeafImageTransform/>
                </s.HorizontalContainer>
                <s.HorizontalContainer2>
                    <s.MapleLeafImageSmall/>
                    <s.SubSubTitle>단풍우편함 이용방법</s.SubSubTitle>
                </s.HorizontalContainer2>
                <s.HorizontalContainer3>
                    <s.GinkgoLeafImageSmall/>
                    <s.Text>내 나무를 심고 링크를 공유해요.</s.Text>
                </s.HorizontalContainer3>
                <s.HorizontalContainer3>
                    <s.GinkgoLeafImageSmall/>
                    <s.Text>주변인에게 편지를 받을 수 있어요.</s.Text>
                </s.HorizontalContainer3>
                <s.HorizontalContainer3>
                    <s.GinkgoLeafImageSmall/>
                    <s.Text>하루에 편지 5장 이상을 받으면 나무가 물들어요.</s.Text>
                </s.HorizontalContainer3>
                <s.HorizontalContainer3>
                    <s.GinkgoLeafImageSmall/>
                    <s.Text>하지만, 하루에 편지 5장 이상을 받지 못하면 30일 뒤에 편지를 열람할 수 있어요.
                        그래도 우울해하지 말아요. 위로의 편지를 단풍나라 친구들이 보내줄거니까요.
                    </s.Text>
                </s.HorizontalContainer3>
                
                
                    <s.HorizontalContainer2>
                        <s.MapleLeafImageSmall/>
                        <s.SubSubTitle>우표 컬렉션을 모아봐요!</s.SubSubTitle>
                    </s.HorizontalContainer2>
                    <s.HorizontalContainer3>
                        <s.GinkgoLeafImageSmall/>
                        <s.Text>가을과 관련된 귀여운 우표들을 다양한 미션을 통해 모아봐요!</s.Text>
                    </s.HorizontalContainer3>
                    <s.CollectionImg/>

                    <s.HorizontalContainer2>
                        <s.MapleLeafImageSmall/>
                        <s.SubSubTitle>단풍 우편함</s.SubSubTitle>
                        <s.InstagramImg/>
                    </s.HorizontalContainer2>
                    <s.HorizontalContainer3>
                        <s.GinkgoLeafImageSmall/>
                        <s.Text>단풍 우편함은 동국대, 삼육대, 숙명여대 학생 5명에서 만든 편지 교환 서비스입니다.</s.Text>
                    </s.HorizontalContainer3>
                    <s.HorizontalContainer3>
                        <s.GinkgoLeafImageSmall/>
                        <s.Text>단풍 우편함은 수익을 창출하지 않는 비영리 서비스입니다.</s.Text>
                    </s.HorizontalContainer3>
                    
                
                
            </s.ModalTextsWrapper>
            

    </Modal>
  );
}

export default ServiceModal;
