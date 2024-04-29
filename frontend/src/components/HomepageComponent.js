//assets
import hero from '../assets/hero.png';
import Secure from '../assets/Secure.png';
import protect from '../assets/protect.png';
import encryption from '../assets/encryption.png';
import privacy from '../assets/privacy.png';
import security from '../assets/security.png';
import endtoend from '../assets/endtoend.png';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

const HomepageComponent = () => {

  return (
    <>
      <div className="homepage-container">
        <div id="particles-js"></div>
        <div id="hero">
          <br /><br /><br /><br />
          <p1>The Next</p1><br />
          <p2>Revolutionary</p2><br />
          <p1>Password Manager</p1><br /><br />
          <p3>Welcome to the realm of digital tranquility, 
            where <br />the chaos of forgotten passwords 
            fades into obscurity.</p3>
        </div>
        <div id="hero2">
          <br /><img src={hero} alt="Hero" style={{ width: '100%', height: 'auto' }}/>
        </div>

        <div id="infinity">
          <div id="infinity-box">
            <p4>∞ PASSWORDS STORAGE</p4>
          </div>
          <div id="infinity-box">
            <p4>∞ PASSWORDS GENERATIONS</p4>
          </div>
          <div id="infinity-box">
            <p4>∞ PASSWORDS SECURITY</p4>
          </div>
        </div>

        <div id="organize">
          <p1>Organize. Encrypt. Protect. It starts with our 
          password manager.</p1><br /><br />
          <p3>Let us guide you through the intricacies of digital 
          protection, offering <br />not just a tool, but a philosophy 
          one that champions organization,<br /> encryption, and 
          unwavering dedication to your online safety.</p3>
          <br /><br />
        </div>
        <div id="organize2">
          <div id="organize-box">
            <span class="material-symbols-outlined">lock</span>
            <div class="text-content">
              <p4>End-to-end encryption</p4><br />
              <p3>From your device to our servers, your passwords
              are shielded from prying eyes.</p3>
            </div>
          </div>
          <div id="organize-box">
            <span class="material-symbols-outlined">shield</span>
            <div class="text-content">
              <p4>100% Secured</p4><br />
              <p3>Your passwords are protected by ever-changing 
                  codes, making them virtually impossible to crack</p3>
            </div>
          </div>
          <div id="organize-box">
            <span class="material-symbols-outlined">visibility_lock</span>
            <div class="text-content">
              <p4>Private by design</p4><br />
              <p3>Built with privacy as the main priority, 
                  no one can see the contents of your vaults, 
                  not even Sentinelle.</p3>
            </div>
          </div>
        </div>

        <div id="secure">
          <img src={Secure} alt="Secure" />
        </div>
        <div id="secure2">
          <p1>Say Goodbye to Forgetfulness, <br />Hello to Security!</p1><br /><br />
          <p3>Gone are the days of frantic password resets and 
          vulnerability fears. <br /> Here, every login is a triumph 
          of organization, every encryption a fortress of protection. 
          Welcome to a world where security meets simplicity - welcome 
          to our password manager.</p3>
        </div>

        <div id="protect">
          <p1>Protect all your passwords in a few easy steps.</p1><br /><br />
          <p3>Experience the liberation of streamlined security with 
            our <br />password manager, where complexity is distilled into 
            simplicity <br /> and vulnerability fades into oblivion.</p3>
        </div>
        <div id="protect2">
        <img src={protect} alt="protect" />
        </div>

        <div id="people">
          <p1>What People are saying about us</p1>
        </div>
        <div id="people2"><br /><br /><br />
          <p3>Empower Your Digital Life One Secure Password at <br />a Time. 
            Elevate Your Security!</p3>
        </div>

        <div id="quotes">
          <div id="quote-box">
            <span class="material-symbols-outlined"> format_quote </span><br /><br />
            <p>Impressed with the security and reliability of this 
              password manager. It's become an essential tool for me, 
              and I feel much safer knowing my accounts are protected.</p><br /><br />
          </div>
          <div id="quote-box">
            <span class="material-symbols-outlined"> format_quote </span><br /><br />
            <p>Finally found a password manager I can trust with my 
              sensitive data. The zero-knowledge architecture gives me 
              peace of mind knowing my information is encrypted and secure.</p><br /><br />
          </div>
          <div id="quote-box">
            <span class="material-symbols-outlined"> format_quote </span><br /><br />
            <p>This password manager has simplified my digital life. It's easy
               to use, keeps my passwords organized, and the cross-device 
               syncing feature is a lifesaver.</p><br /><br />
          </div>
        </div>

        <div id="figures">
          <div id="figures2">
            <img src={encryption} alt="encryption" />
          </div>
          <div id="figures2">
            <img src={privacy} alt="privacy" />
          </div>
          <div id="figures2">
            <img src={security} alt="security" />
          </div>
          <div id="figures2">
            <img src={endtoend} alt="endtoend" />
          </div>
        </div>
        
        <div id="fortify">
          <p1>Fortify Your Digital Fortress Now!</p1><br /><br />
          <p3>Join us on the frontier of security innovation 
            and unlock the future today</p3>
        </div>

        <div id="footer">
          Copyright Ⓒ 2024 Sentinelle. All Rights Reserved.
        </div>

      </div>
    </>
  )
}

export default HomepageComponent