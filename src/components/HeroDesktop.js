import React from 'react'
import ReactPlayer from 'react-player'
import CallToAction from './CallToAction'
import HeroText from './HeroText'
import Mint from './Mint'
import { useTranslation, Trans } from 'react-i18next'

const lngs = {
    en: {nativeName: 'English', flag: '🇺🇸'},
    es: {nativeName: 'Spanish', flag: '🇪🇸'},
}

function HeroDesktop(props) {
    const { t } = useTranslation();
  return (
      <>
        <div className='hidden w-[100vw] bg-center  bg-[url("/public/images/fondo2.png")] items-center bg-cover h-[70vh] justify-center md:flex'>
            <div className='flex-col w-[30%]'>
                {<img className='h-full w-full' src='./images/gyatsoRMA.png' />}
                {/*<h1 className='leading-tight mt-14 font-[fontMstryTitle]  text-[5rem] text-white text-center'>
                    Gyatso NFT<br/> Collection x RMA
                </h1>*/}

                
                <p className={props.cA ? 'hidden' : 'text-white font-extrabold mt-4 text-4xl mb-10 text-center'}>{t('heroText')}</p>
                <form action="https://monasterynft.us8.list-manage.com/subscribe/post?u=f7008c544caa2ef5d5d99950e&amp;id=bd15e4e84a" method="post" className={props.cA ? 'hidden' : 'mt-6 flex w-full'}>
                    <input className='text-left pl-4 w-[20vw] block mr-3' type='email' id='email' name='email' placeholder='Enter your email' />
                    <button type='submit' className='w-[20vw] font-bold h-10 bg-[#B2FF97]'> Get early access now</button>
                </form>
                <Mint cA={props.cA} pA={props.pA} />
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
        <div className='hidden md:block'>
            <div className='h-20'/>
            <h1 className='text-white text-[3rem] mb-8 font-extrabold'>
                <Trans i18nKey="title2"/>
                
            </h1>
            <div className='h-20'/>
            <div className='flex justify-center'>
                <ReactPlayer className='' width={800} height={450} style={{ margin: '' }}  light='' controls url='https://monastery-nft.s3.amazonaws.com/resources/oculusVrFinal.mp4'/>

            </div>
        </div>
      </>
  )
}

export default HeroDesktop



// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://monasterynft.us8.list-manage.com/subscribe/post?u=f7008c544caa2ef5d5d99950e&amp;id=bd15e4e84a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// 	<div id="mce-responses" class="clear foot">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f7008c544caa2ef5d5d99950e_bd15e4e84a" tabindex="-1" value=""></div>
//         <div class="optionalParent">
//             <div class="clear foot">
//                 <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
//                 <p class="brandingLogo"><a href="http://eepurl.com/h0MM19" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
//             </div>
//         </div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// <!--End mc_embed_signup--></link>