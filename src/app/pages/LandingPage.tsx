import LoginButton from '../../features/auth/AuthButton'
import '../../styles/LandingPage.scss';

const LandingPage: React.FC = () => {
  return (
    <div className='landing-page-container'>
      <div className='logo-text'>
        <h2>An Entirely</h2>
        <h1>Typical</h1>
        <h3>Reddit App</h3>
        <p>Next generation Reddit API app that allows you to view your selected subreddits, here, instead of on Reddit!</p>
        <LoginButton />
      </div>
      <div className='logo-img'>
        <img src='../../../resources/logo/landingLogo.png' />
      </div>

    </div>
  )
}

export default LandingPage