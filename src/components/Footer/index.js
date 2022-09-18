import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { FooterContainer, FooterSubscription, FooterSubheading, FooterSubtext, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from './Footerelements';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubheading>
                        Join our exclusive membership to receive the latest news and trends
                    </FooterSubheading>
                    <FooterSubtext>You can unsubscribe at any time</FooterSubtext>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                            <Button fontBig> Subscribe </Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/sign-up"> How it works </FooterLink>
                            <FooterLink to="/"> Testimonials </FooterLink>
                            <FooterLink to="/"> Careers </FooterLink>
                            <FooterLink to="/"> Investors </FooterLink>
                            <FooterLink to="/"> Terms of service </FooterLink>
                        </FooterLinksItems>
                        
                        <FooterLinksItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to="/sign-up"> Contact </FooterLink>
                            <FooterLink to="/"> Support </FooterLink>
                            <FooterLink to="/"> Destination </FooterLink>
                            <FooterLink to="/"> Sponsorship </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                        
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to="/sign-up"> Submit video </FooterLink>
                            <FooterLink to="/"> Ambassadors </FooterLink>
                            <FooterLink to="/"> Agency </FooterLink>
                            <FooterLink to="/"> Influencer </FooterLink>
                        </FooterLinksItems>
                        
                        <FooterLinksItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to="/sign-up"> Instagram </FooterLink>
                            <FooterLink to="/"> Facebook </FooterLink>
                            <FooterLink to="/"> Youtube </FooterLink>
                            <FooterLink to="/"> Twitter </FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon />
                            ULTRA
                        </SocialLogo>
                        <WebsiteRights>ULTRA 2022</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </>
    );
}
 
export default Footer;