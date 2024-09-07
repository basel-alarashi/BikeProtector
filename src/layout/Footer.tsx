import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled.div({ width: '100%', backgroundColor: '#161616' });

const FooterPart = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &.part-1 {
    background-color: #323232;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const LanguageSection = styled.div`
  label {
    color: gray;
    font-size: 14px;
    margin-right: 4px;
  }

  select {
    padding: 4px 12px;
    border-radius: 4px;
  }
`;

const Privacy = styled.div`
  p {
    font-size: 14px;
    color: gray;
  }

  a {
    color: #3489DB;
  }
`;

const SiteMap = styled.div`
  display: flex;
  flex: .8;

  h3 {
    margin-bottom: 4px;
    color: white;
  }

  a {
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    color: gray;
  }
`;

const sitemap = {
  'Bike Index': [
    'FAQ',
    'Blog',
    'Help',
    'About',
    'Where We Are',
    'Stolen Bike Recoveries',
    'Get your stolen bike back'
  ],
  'Support Us': ['Donate', 'Store', 'Ambassadors'],
  'Resources': [
    'API documentation',
    'Dev Resources',
    'Design & Logos',
    'Security',
    'Bike Manufacturer List',
    'Protect your bike',
    'Stolen Bike Map'
  ],
  'Who we serve': [
    'Bike Shops',
    'Schools and Universities',
    'Cities', 'Law Enforcement',
    'Community Groups',
    'Press inquiries'
  ]
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterPart className="part-1">
        <SiteMap>
          {Object.keys(sitemap).map((category, idx) => (
            <div key={idx} style={{ flex: 1 }}>
              <h3>{category}</h3>
              {sitemap[category as keyof typeof sitemap].map((link: string, index: number) => (
                <a href="#" key={index}>{link}</a>
              ))}
            </div>
          ))}
        </SiteMap>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'white' }}>
          <GitHubIcon style={{ cursor: 'pointer' }} />
          <FacebookIcon style={{ cursor: 'pointer' }} />
          <XIcon style={{ cursor: 'pointer' }} />
          <InstagramIcon style={{ cursor: 'pointer' }} />
        </div>
      </FooterPart>
      <FooterPart>
        <LanguageSection>
          <label>Language</label>
          <select>
            <option>English</option>
            <option>Dutch</option>
            <option>Norwegian</option>
          </select>
        </LanguageSection>
        <Privacy>
          <p><a href="#">Privacy Policy</a> and <a href="#">terms and conditions</a></p>
          <p>2024 © Bike Index, a 501(c)(3) nonprofit - EIN 81-4296194</p>
        </Privacy>
      </FooterPart>
    </FooterContainer>
  )
}

export default Footer