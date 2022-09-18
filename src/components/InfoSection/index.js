import { Container, Button } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSecElements';
import { Link } from 'react-router-dom';

const InfoSection = ({lightBg, imgStart, lightTopLine, lightHeading, lightDescr, primary, topline, headLine, description, buttonLabel, img, alt, start}) => {
    return (
        <>
        <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}> {topline} </TopLine>
                            <Heading lightHeading={lightHeading}> {headLine} </Heading>
                            <Subtitle lightDescr={lightDescr}> {description} </Subtitle>
                            <Link to="/sign-up">
                                
                                <Button big fontBig primary> {buttonLabel} </Button>
                            </Link>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
        </InfoSec>
        </>
    );
}
 
export default InfoSection;