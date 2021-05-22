start = document.querySelector('.start');
applications = document.querySelector('.applications');
places = document.querySelector('.places');
system = document.querySelector('.system');
home = document.querySelector('.icon-container .home');
pictures = document.querySelector('.icon-container .pictures');
games = document.querySelector('.icon-container .games');
trash = document.querySelector('.icon-container .trash');
about = document.querySelector('.icon-container .about');
currDateTime = document.querySelector('.cur-dat-tim');

let curdate = new Date().toUTCString();
curdate = curdate.split(' ').slice(0, 5).join(' ');
currDateTime.innerText = curdate;

home.addEventListener('click', () => {
	new WinBox({
		title: 'Home',
		x: 'center',
		y: 'center',
		width: '50%',
		height: '50%'
	});
});
about.addEventListener('click', () => {
	new WinBox('About', {
		top: 50,
		right: 50,
		bottom: 0,
		left: 50,
		url: "https://github.com/Winay-Chowdary66"
	});
});

pictures.addEventListener('click', () => {
	new WinBox({
		title:'Pellichoopulu',
		html:`


<!DOCTYPE html>
<html lang="en" data-color-mode="dark" data-light-theme="light" data-dark-theme="dark">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-LIOdgMPCoEgaBOBpRHSdzMIXC0BQl+3B20hYRhyoDICAcS6GTJ4jRrobBZhDZWO4VGNzMZ56U9kllzZzrsc34Q==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-2c839d80c3c2a0481a04e06944749dcc.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-W/1pQbqXbVajYzB+B7A5hA/rxIKGbyTLs1PhryoWBKfSRr+SBQSplFKKy7rOAfdQhAZ4Xkcr+UmfVBcLc44r5g==" rel="stylesheet" href="https://github.githubassets.com/assets/behaviors-5bfd6941ba976d56a363307e07b03984.css" />
    
    
    
    <link crossorigin="anonymous" media="all" integrity="sha512-eUJW+59+FyVquFyVZmjTRjKUuu2czWjt52ouc2eoxldxpPCoTumZx1/nIU5QtTljXBkl4rYvttZ2abVyMFmVZA==" rel="stylesheet" href="https://github.githubassets.com/assets/github-794256fb9f7e17256ab85c956668d346.css" />

  <script crossorigin="anonymous" defer="defer" integrity="sha512-CzeY4A6TiG4fGZSWZU8FxmzFFmcQFoPpArF0hkH0/J/S7UL4eed/LKEXMQXfTwiG5yEJBI+9BdKG8KQJNbhcIQ==" type="application/javascript" src="https://github.githubassets.com/assets/environment-0b3798e0.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-T8/N7nmDoNCxkRmqgGphmx1Yygfx9lIZvPUQjfUpc6d//Q3bmgKz0sd62gAstmr6EJarvdbDpZ2p3AG7gwtG6g==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-frameworks-4fcfcdee.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-rAayX+tAGbFvAwJW7fDoX+NNhMtMEh/AERlttmVRsk3Vk4kl27vs8D6s8IEJs7dMixb+J1VNqDLcAjlssMguJw==" type="application/javascript" src="https://github.githubassets.com/assets/chunk-vendor-ac06b25f.js"></script>
  
  <script crossorigin="anonymous" defer="defer" integrity="sha512-o8t3W1nrlgoFZT6UMLF/yHNEDGmxaBh82tqioH9a/dHwpfhnPOqRI4w2XdbbJAahCid728t48CCDZz9F+Zm4wg==" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-a3cb775b.js"></script>
  
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VuP/2HeHlwuxYb9sV0y9/hgN869dWIQDX2WZrvh4VAQjo6tb7PXzbBz0nOYROez0xFLxRc/u6sVU6fuYgcpN8w==" type="application/javascript" data-module-id="./chunk-animate-on-scroll.js" data-src="https://github.githubassets.com/assets/chunk-animate-on-scroll-56e3ffd8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ct3QiK2mvpg7zor9R2psdWnNMM2K32RU4RGRB/7yA5FyZ8H4iY6SNynXc7UaJqzBx6NaReg3GsWJPwW3kgAAig==" type="application/javascript" data-module-id="./chunk-codemirror.js" data-src="https://github.githubassets.com/assets/chunk-codemirror-72ddd088.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-EKOvqJ9uTatAt87WxU+OSS4mi7gMUszFbGo4aPErQkjpWLXnrPSeZvK5ngU8OYoIoiVOq+v8dA3C6MF/z2d/kA==" type="application/javascript" data-module-id="./chunk-color-modes.js" data-src="https://github.githubassets.com/assets/chunk-color-modes-10a3afa8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-zkYZSjUFqSifB+Lt76jclFMrfqpcPqevT801RZcoBNCZHRTBKcFrW9OyJoPOzKFv+fZVDRnqdqGsuIv5KOIgZg==" type="application/javascript" data-module-id="./chunk-contributions-spider-graph.js" data-src="https://github.githubassets.com/assets/chunk-contributions-spider-graph-ce46194a.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-6j/oSF+kbW+yetNPvI684VzAu9pzug6Vj2h+3u1LdCuRhR4jnuiHZfeQKls3nxcT/S3H+oIt7FtigE/aeoj+gg==" type="application/javascript" data-module-id="./chunk-drag-drop.js" data-src="https://github.githubassets.com/assets/chunk-drag-drop-ea3fe848.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-VSSd+Yzi2iMS+pibY6hD/WdypxAEdob5F2RMKxuKcAHS2EpFYJPeTXoVxt0NXg03tfj2dka2mEtHS+vjpYSaDw==" type="application/javascript" data-module-id="./chunk-edit-hook-secret-element.js" data-src="https://github.githubassets.com/assets/chunk-edit-hook-secret-element-55249df9.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-N+ziqJjVMfWiqeVHdayDHpNRlG5HsF+cgV+pFnMDoTJuvBzgw+ndsepe4NcKAxIS3WMvzMaQcYmd2vrIaoAJVg==" type="application/javascript" data-module-id="./chunk-edit.js" data-src="https://github.githubassets.com/assets/chunk-edit-37ece2a8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-aiqMIGGZGo8AQMjcoImKPMTsZVVRl6htCSY7BpRmpGPG/AF+Wq+P/Oj/dthWQOIk9cCNMPEas7O2zAR6oqn0tA==" type="application/javascript" data-module-id="./chunk-emoji-picker-element.js" data-src="https://github.githubassets.com/assets/chunk-emoji-picker-element-6a2a8c20.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ejCT9r9E93nir+wK3PibZdMK0J3VXEkbwlgdnOnaUNoiJDI60BMtFt1QwjMU/rLXcjnH0xvgVFINGBFkzvTmRw==" type="application/javascript" data-module-id="./chunk-filter-input.js" data-src="https://github.githubassets.com/assets/chunk-filter-input-7a3093f6.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Z1wcyOFQHzyMSPqp5DLKrobr3DN2Q6Dz31cfPtw4b2vPs9PX0PrxyDXHpTbIlcZ9qT1M1BNAypHKKw8Lp6Yx/Q==" type="application/javascript" data-module-id="./chunk-insights-graph.js" data-src="https://github.githubassets.com/assets/chunk-insights-graph-675c1cc8.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Y+VVFzGHo9J5bf4Mrn+RGrh1+IExdybA3C1QqPha3UwkV9RZ75jZgV4DsujViAF0iT9OrLYYHvPk9V6QiXjp3g==" type="application/javascript" data-module-id="./chunk-invitations.js" data-src="https://github.githubassets.com/assets/chunk-invitations-63e55517.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-mMOvER8Uml4WMYbXv8BaahVq9eF1v5Hu7M9/3oPlOFPmTJGH+TmvcRPt8fddj86urb+Ri+vlqotFspA/4STDsQ==" type="application/javascript" data-module-id="./chunk-jump-to.js" data-src="https://github.githubassets.com/assets/chunk-jump-to-98c3af11.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Lo0j1owPfYM0txt85KwGzF1PQJLvLFGbRJoASd5ZKMQAV9ZSDg5bVm5UWBAz7glGzw1pkiUD2bCMs2wqyf+CEA==" type="application/javascript" data-module-id="./chunk-notification-list-focus.js" data-src="https://github.githubassets.com/assets/chunk-notification-list-focus-2e8d23d6.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-ma0OOy3nj0c1cqBx0BkcmIFsLqcSZ+MIukQxyEFM/OWTzZpG+QMgOoWPAHZz43M6fyjAUG1jH6c/6LPiiKPCyw==" type="application/javascript" data-module-id="./chunk-profile-pins-element.js" data-src="https://github.githubassets.com/assets/chunk-profile-pins-element-99ad0e3b.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-dmP0pnRItCP7ydEXVipp98lz/HaQtHyG00kfd8lMS5AoLbDwGfqXPjj7Q0qLGpPc7lBkySNNHIeEPF7NblctEA==" type="application/javascript" data-module-id="./chunk-readme-toc-element.js" data-src="https://github.githubassets.com/assets/chunk-readme-toc-element-7663f4a6.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-F0E2A5YYSz+7eA/RyQ/vYtJzeK2sjNyyneVBqru/CPoRXGBiAcJ2tpN2MWLxkNCqirt88h/BMCAF/7YTZ2qZJA==" type="application/javascript" data-module-id="./chunk-ref-selector.js" data-src="https://github.githubassets.com/assets/chunk-ref-selector-17413603.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-Zii9oRdZ6q2QDNjL5A+me7jwJjMLvs1NiQNHmajUZnn4t9shcBDb4F8l/PQZW26eYfe5065oM7lIOSmbMinA7Q==" type="application/javascript" data-module-id="./chunk-responsive-underlinenav.js" data-src="https://github.githubassets.com/assets/chunk-responsive-underlinenav-6628bda1.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-9WNXtB07IyWypiPmkuucspwog4mme9q5GKGMSgd7FI0DPimmg/pEw+aaAofFV1vuWMt9I8H5QpsVtlbHGg1YBA==" type="application/javascript" data-module-id="./chunk-runner-groups.js" data-src="https://github.githubassets.com/assets/chunk-runner-groups-f56357b4.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-fIq9Mn7jY/bHQXnsmh+VejpDnaO+d/FDxsp+4CuZtdNLrLuO+dQCjh+m6Yd8GCYD2Cy6DWbCEyM+mH2dkB2H9A==" type="application/javascript" data-module-id="./chunk-sortable-behavior.js" data-src="https://github.githubassets.com/assets/chunk-sortable-behavior-7c8abd32.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-WK8VXw3lfUQ/VRW0zlgKPhcMUqH0uTnB/KzePUPdZhCm/HpxfXXHKTGvj5C0Oex7+zbIM2ECzULbtTCT4ug3yg==" type="application/javascript" data-module-id="./chunk-toast.js" data-src="https://github.githubassets.com/assets/chunk-toast-58af155f.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-vgHJEmEJxNmHucGbVY8bEUoOYo5/ZwpQ69rU8Dld89daWJ54uad9lNptxq32F8pnbHhdngw9lohNEbMbjmj5AQ==" type="application/javascript" data-module-id="./chunk-tweetsodium.js" data-src="https://github.githubassets.com/assets/chunk-tweetsodium-be01c912.js"></script>
    <script crossorigin="anonymous" defer="defer" integrity="sha512-aSxfTHAZj9wv7n08DxgAKkNg7jhiTo4yKKbDqLGxcDxUk/al571Y2ZSsOmLJ0Vh8cuAL8tW+JgX1t0JeKfyfaA==" type="application/javascript" data-module-id="./chunk-user-status-submit.js" data-src="https://github.githubassets.com/assets/chunk-user-status-submit-692c5f4c.js"></script>
  
  <script crossorigin="anonymous" defer="defer" integrity="sha512-uCQCwCYVwLRGv2mWmK++56P6fr27WqWzW8XZTTV6BimDhoOpwWa9HE9pFSDIEJN3KJ6Bv9klVCd+hOLTmexa0A==" type="application/javascript" src="https://github.githubassets.com/assets/profile-b82402c0.js"></script>

  <meta name="viewport" content="width=device-width">
  
  <title>Winay-Chowdary66 (Annangi Vinay Chowdary)</title>
    <meta name="description" content="Student at RMD Engineering College, pursuing Electronics and Communation. 
Can reach me through mail 👉🏼👉🏼   
&lt;vinayannangi.123@gmail.com/&gt; - Winay-Chowdary66">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905" />
    <meta name="twitter:image:src" content="https://avatars.githubusercontent.com/u/64681172?v=4?s=400" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="Winay-Chowdary66 - Overview" /><meta name="twitter:description" content="Student at RMD Engineering College, pursuing Electronics and Communation. 
Can reach me through mail 👉🏼👉🏼   
&lt;vinayannangi.123@gmail.com/&gt; - Winay-Chowdary66" />
    <meta property="og:image" content="https://avatars.githubusercontent.com/u/64681172?v=4?s=400" /><meta property="og:image:alt" content="Student at RMD Engineering College, pursuing Electronics and Communation. 
Can reach me through mail 👉🏼👉🏼   
&lt;vinayannangi.123@gmail.com/&gt; - Winay-Chowdary66" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="profile" /><meta property="og:title" content="Winay-Chowdary66 - Overview" /><meta property="og:url" content="https://github.com/Winay-Chowdary66" /><meta property="og:description" content="Student at RMD Engineering College, pursuing Electronics and Communation. 
Can reach me through mail 👉🏼👉🏼   
&lt;vinayannangi.123@gmail.com/&gt; - Winay-Chowdary66" /><meta property="profile:username" content="Winay-Chowdary66" />



    

  <link rel="assets" href="https://github.githubassets.com/">
    <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/64681172/ws?session=eyJ2IjoiVjMiLCJ1Ijo2NDY4MTE3MiwicyI6Njk5MDg0Njc4LCJjIjozNjgyNDY4NTYxLCJ0IjoxNjIxNzA1NjA5fQ==--f2748ae950f957211e6dd9d4e42d51276ce3a852dea2d6104c7a8e2478997a20" data-refresh-url="/_alive" data-session-id="d382b57eaaa1ed01b723d73d4befab0cbab5d541e52a56dc654c1fd7b6d92923">
    <link rel="shared-web-socket-src" href="/socket-worker-3f088aa2.js">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="4E0A:15EF:D15558:E35B3E:60A94389" data-pjax-transient="true" /><meta name="html-safe-nonce" content="6d05d43ec3ddbbdabf3ae27e901f432f9c2f468cc1bbc16f15f878eaa041fa14" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9zZXR0aW5ncy9iaWxsaW5nL3BsYW5zIiwicmVxdWVzdF9pZCI6IjRFMEE6MTVFRjpEMTU1NTg6RTM1QjNFOjYwQTk0Mzg5IiwidmlzaXRvcl9pZCI6Ijc5Mzg1NTM3NDYwNjYzMDA1OTAiLCJyZWdpb25fZWRnZSI6ImFwLXNvdXRoLTEiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-pjax-transient="true" /><meta name="visitor-hmac" content="3b076207783ac78bd6350c83fe72131cf2ff6074e311f60eafc8c2fa6f06a478" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="" data-pjax-transient="true" />

  

  <meta name="selected-link" value="/Winay-Chowdary66" data-pjax-transient>

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-actor-id" content="64681172" /><meta name="octolytics-actor-login" content="Winay-Chowdary66" /><meta name="octolytics-actor-hash" content="88e959cc14a92274d9f6113d9c276ea98e0d0ff8ffc592a63bf5e3291193492c" />

  <meta name="analytics-location" content="/&lt;user-name&gt;" data-pjax-transient="true" />

  






  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="Winay-Chowdary66">


      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="ZTNlMWI2ZDk0ZmZkMDRiZThhZjkyZDI0NWU5MGJmNDJjODQyN2MyYzczNjg5OTM4MDEyMDJiZWU2MjExODg5Y3x7InJlbW90ZV9hZGRyZXNzIjoiMjIzLjIzOC40OC4yMTkiLCJyZXF1ZXN0X2lkIjoiNEUwQToxNUVGOkQxNTU1ODpFMzVCM0U6NjBBOTQzODkiLCJ0aW1lc3RhbXAiOjE2MjE3MDU2MDksImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS,AUTOCOMPLETE_EMOJIS_IN_MARKDOWN_EDITOR,GITHUB_TOKEN_PERMISSION,ACTIONS_CONCURRENCY_UI">

  <meta http-equiv="x-pjax-version" content="832768052d051ce1630cf4623856ff4a02f52d84f6f5285b3e017479702014b6">
  





  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <meta name="browser-optimizely-client-errors-url" content="https://api.github.com/_private/browser/optimizely_client/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">
<meta name="color-scheme" content="dark light" />


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

<meta name="enabled-homepage-translation-languages" content="ko">

  </head>

  <body class="logged-in env-production page-responsive page-profile mine" style="word-wrap: break-word;">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 color-bg-info-inverse color-text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span data-view-component="true" class="progress-pjax-loader width-full js-pjax-loader-bar Progress position-fixed">
    <span style="background-color: #79b8ff;width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar"></span>
</span>      
      


            <header class="Header js-details-container Details px-3 px-md-4 px-lg-5 flex-wrap flex-md-nowrap" role="banner" >
    <div class="Header-item mt-n1 mb-n1  d-none d-md-flex">
      <a class="Header-link " href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

    </div>

    <div class="Header-item d-md-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
          
  <div class="header-search flex-auto js-site-search position-relative flex-self-stretch flex-md-self-auto mb-3 mb-md-0 mr-0 mr-md-3 scoped-search site-scoped-search js-jump-to"
    role="combobox"
    aria-owns="jump-to-results"
    aria-label="Search or jump to"
    aria-haspopup="listbox"
    aria-expanded="false"
  >
    <div class="position-relative">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="User" data-scope-id="64681172" data-scoped-search-url="/users/Winay-Chowdary66/search" data-unscoped-search-url="/search" action="/users/Winay-Chowdary66/search" accept-charset="UTF-8" method="get">
        <label class="form-control input-sm header-search-wrapper p-0 js-chromeless-input-container header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center">
          <input type="text"
            class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
            data-hotkey="s,/"
            name="q"
            value=""
            placeholder="Search or jump to…"
            data-unscoped-placeholder="Search or jump to…"
            data-scoped-placeholder="Search or jump to…"
            autocapitalize="off"
            aria-autocomplete="list"
            aria-controls="jump-to-results"
            aria-label="Search or jump to…"
            data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
            spellcheck="false"
            autocomplete="off"
          >
          <input type="hidden" value="ac9VZ8vULmzCnGjXp3wqUI3lO+5hZybJaTwQlV+kc1QwzEmCJjFmvOtSUatamIlaXhd2ameRCkMetLcJn/Jr9A==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="suggestion">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this user">
        In this user
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="color-text-secondary">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="scoped_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this user">
        In this user
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-owner-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="owner_scoped_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in all of GitHub">
        Search
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="" data-item-type="global_search">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this user">
        In this user
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 color-bg-tertiary px-1 color-text-tertiary ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="32" height="32" class="m-3 anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
    </li>
</ul>

            </div>
        </label>
</form>    </div>
  </div>

        <nav class="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto" aria-label="Global">
      <a class="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
        Dashboard
</a>
    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
        Pull<span class="d-inline d-md-none d-lg-inline"> request</span>s
</a>
    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
      Issues
</a>
      <div class="d-flex position-relative">
        <a class="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
          Marketplace
</a>      </div>

    <a class="js-selected-navigation-item Header-link mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
      Explore
</a>
    <a class="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:workspaces context:user" data-selected-links="/codespaces /codespaces" href="/codespaces">
      Codespaces
</a>
      <a class="js-selected-navigation-item Header-link d-block d-md-none py-2 py-md-3 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:Sponsors" data-hydro-click="{&quot;event_type&quot;:&quot;sponsors.button_click&quot;,&quot;payload&quot;:{&quot;button&quot;:&quot;HEADER_SPONSORS_DASHBOARD&quot;,&quot;sponsorable_login&quot;:&quot;Winay-Chowdary66&quot;,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;,&quot;user_id&quot;:64681172}}" data-hydro-click-hmac="034321191bb337bc6d99efd0c6b728d43835620952f18cfdb94a2c5f83f7d731" data-selected-links=" /sponsors/accounts" href="/sponsors/accounts">Sponsors</a>

    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15" href="/settings/profile">
      Settings
</a>
    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15" href="/Winay-Chowdary66">
      <img class="avatar avatar-user" src="https://avatars.githubusercontent.com/u/64681172?s=40&amp;v=4" width="20" height="20" alt="@Winay-Chowdary66" />
      Winay-Chowdary66
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="idbtqbHL8Fit02hp+jTwWQgI9DeSinLgPzDd+ZYnWPcAJVZGuYz1UNhMrOE2KIiF8JKVskqVMK2cZcHi92CDiA==" />
      <button type="submit" class="Header-link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15 d-md-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
        <a class="Header-link " href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

    </div>

    <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
        


      <notification-indicator
        class="js-socket-channel"
        data-test-selector="notifications-indicator"
        data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6NjQ2ODExNzIiLCJ0IjoxNjIxNzA1NjA5fQ==--d735c8b3e1493245c180732b738c8f1f1374bb705ac281fb0c1b7d8eb358ee1d">
        <a href="/notifications"
          class="Header-link notification-indicator position-relative tooltipped tooltipped-sw"
          
          aria-label="You have no unread notifications"
          data-hotkey="g n"
          data-ga-click="Header, go to notifications, icon:read"
          data-target="notification-indicator.link">
          <span class="mail-status  " data-target="notification-indicator.modifier"></span>
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-bell">
    <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
</svg>
        </a>
      </notification-indicator>

    </div>


    <div class="Header-item position-relative d-none d-md-flex">
        <details class="details-overlay details-reset js-header-promo-toggle">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-plus">
    <path fill-rule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
</svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <a role="menuitem" class="dropdown-item" href="/new/project" data-ga-click="Header, create new project">
    New project
  </a>

  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-md-flex">
        
  <details class="details-overlay details-reset js-header-promo-toggle js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/Winay-Chowdary66/feature_preview/indicator_check">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img src="https://avatars.githubusercontent.com/u/64681172?s=60&amp;v=4" alt="@Winay-Chowdary66" size="20" data-view-component="true" height="20" width="20" class="avatar-user avatar avatar-small"></img>
      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 1px;" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw" style="width: 180px" 
      src="/users/64681172/menu" preload>
      <include-fragment>
        <p class="text-center mt-3" data-hide-on-error>
          <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="32" height="32" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
        </p>
        <p class="ml-1 mb-2 mt-2 color-text-primary" data-show-on-error>
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
          Sorry, something went wrong.
        </p>
      </include-fragment>
  </details-menu>
</details>

    </div>
    
</header>

            
    </div>

  <div id="start-of-content" class="show-on-focus"></div>





    <div data-pjax-replace id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  {{ className }}">
  <div class=" px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    
      <div>{{ message }}</div>

  </div>
</div>
  </template>
</div>


    

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>




  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
      <main id="js-pjax-container" data-pjax-container>
        <div
  class="mt-4 position-sticky top-0 d-none d-md-block color-bg-primary width-full border-bottom
    color-border-secondary"
  style="z-index:3;"
>
  <div class="container-xl px-3 px-md-4 px-lg-5">
      <div data-view-component="true" class="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
    <div data-view-component="true" class="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0">          <div class="user-profile-sticky-bar">
            <div class="user-profile-mini-vcard d-table">
              <span class="user-profile-mini-avatar d-table-cell v-align-middle lh-condensed-ultra pr-2">
                <img class="rounded-1 avatar-user" src="https://avatars.githubusercontent.com/u/64681172?s=64&amp;v=4" width="32" height="32" alt="@Winay-Chowdary66" />
              </span>
              <span class="d-table-cell v-align-middle lh-condensed">
                <strong>Winay-Chowdary66</strong>
                

              </span>
            </div>
          </div>
</div>

  <div data-view-component="true" class="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">          <div
            class="UnderlineNav width-full box-shadow-none hx_UnderlineNav-with-profile-color-modes-banner"
          >
            <nav class="UnderlineNav-body" data-pjax aria-label="User profile">
  <a aria-current="page" class="UnderlineNav-item selected" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_OVERVIEW&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="4785f6f2476177a678903f1f8765c0ef1d788a90f6ae8352863642a31ec5c031" href="/Winay-Chowdary66">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-book UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
</svg>
    Overview
</a>
  <a class="UnderlineNav-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_REPOSITORIES&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="bfa9a016f2b43d491ccf136dc8477050a4b09186a14b017b15e9a16737ad8155" href="/Winay-Chowdary66?tab=repositories">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
    Repositories
    <span title="18" data-view-component="true" class="Counter">18</span>
</a>
  <a class="UnderlineNav-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_PROJECTS&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="70e3db2a8723db71bb490ef412c4d30bd5ff3bb5be57cd09e6c0f5cec010a1af" href="/Winay-Chowdary66?tab=projects">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-project UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
</svg>
    Projects
    <span title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>
</a>
    <a class="UnderlineNav-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_PACKAGES&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="cc743b3723c13a0fb13d64e062369cee608d95382c0fb997b29c4dcff0af08d8" href="/Winay-Chowdary66?tab=packages">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-package UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
</svg>
      Packages
</a>
</nav>
  
<div class="js-header-promo-hide" >
</div>


          </div>
</div>

</div>  </div>
</div>
<div class="container-xl px-3 px-md-4 px-lg-5">
  <div data-view-component="true" class="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
    <div data-view-component="true" class="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0">      <div
        class="h-card mt-md-n5"
        data-acv-badge-hovercards-enabled
        itemscope
        itemtype="http://schema.org/Person"
      >
        <div class="user-profile-sticky-bar js-user-profile-sticky-bar d-none d-md-block">
          <div class="user-profile-mini-vcard d-table">
            <span class="user-profile-mini-avatar d-table-cell v-align-middle lh-condensed-ultra pr-2">
              <img class="rounded-1 avatar-user" src="https://avatars.githubusercontent.com/u/64681172?s=64&amp;v=4" width="32" height="32" alt="@Winay-Chowdary66" />
            </span>
            <span class="d-table-cell v-align-middle lh-condensed">
              <strong>Winay-Chowdary66</strong>
              

            </span>
          </div>
        </div>

          <div class="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
  <div
    class="position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0"
    style="z-index:4;"
  >
      <a class="tooltipped tooltipped-s d-block" aria-label="Change your avatar" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;EDIT_AVATAR&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="c4102ccafe7f8125965a3700a89d8fe1c3ebcea4300a6d9ed5b89205c355c271" href="https://github.com/account"><img style="height:auto;" alt="" width="260" height="260" class="avatar avatar-user width-full border color-bg-primary" src="https://avatars.githubusercontent.com/u/64681172?v=4" /></a>
    
  <div class="user-status-container position-relative hide-sm hide-md">
    
    <div
      class="f5 js-user-status-context user-status-circle-badge-container"
      data-url="/users/status?circle=1&amp;compact=0&amp;link_mentions=1&amp;truncate=0"
    >
      
<div class="js-user-status-container user-status-circle-badge d-inline-block lh-condensed-ultra p-2 user-status-busy border color-border-warning"
  
  data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block Link--secondary no-underline js-toggle-user-status-edit toggle-user-status-edit "
       data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="01efbe11e531ab3e30ceea7dc23f5e7732b3b7c41b3f60084b28c65d9f0c2db9">
      <div class="d-flex flex-items-center flex-items-stretch">
        <div class="f6 lh-condensed user-status-header d-inline-flex">
          <div class="user-status-emoji-container flex-shrink-0 mr-2 d-flex flex-items-center flex-justify-center ">
            <div><g-emoji class="g-emoji" alias="heavy_heart_exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2763.png">❣️</g-emoji></div>
          </div>
        </div>
        <div class="
           ws-normal
           user-status-message-wrapper f6 min-width-0"
          >
          <div class="css-truncate css-truncate-target width-fit color-text-primary">
              <div class="color-text-primary text-bold f6">
              </div>
                <span><div>Working from home</div></span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?circle=1&amp;compact=0&amp;link_mentions=1&amp;truncate=0" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="C1+CkOB/jxe3t1nAzY0vvbRtTJl8Gel4L/JwYVocqgvbjOOj5rYYDJI/Cjqmhi7A4UnV1mLhf5KDuzm5XmHDPQ==" />
        <div class="Box-header color-bg-tertiary border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
          </button>
          <h3 class="Box-title f5 text-bold color-text-primary">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value=":heavy_heart_exclamation:">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 color-text-primary">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden><div><g-emoji class="g-emoji" alias="heavy_heart_exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2763.png">❣️</g-emoji></div></span>
                  <span class="js-user-status-custom-emoji"><div><g-emoji class="g-emoji" alias="heavy_heart_exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2763.png">❣️</g-emoji></div></span>
                  <span class="js-user-status-no-emoji-icon" hidden>
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-smiley">
    <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path>
</svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value="Working from home"
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-false-compact-false" id="limited-availability-truncate-false-compact-false" checked>
                <label class="d-block f5 color-text-primary mb-1" for="limited-availability-truncate-false-compact-false">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-false-compact-false">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="btn btn-sm v-align-baseline" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2021-05-22T23:46:49+05:30">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2021-05-23T00:16:49+05:30">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2021-05-23T03:16:49+05:30">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2021-05-22T23:59:59+05:30">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2021-05-23T23:59:59+05:30">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit"  class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button"  class="width-full js-clear-user-status-button btn ml-2 js-user-status-exists">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

    </div>
  </div>

  </div>

  <div
    class="vcard-names-container float-left col-12 py-3 js-sticky js-user-profile-sticky-fields"
  >
    <h1 class="vcard-names ">
      <span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">
        Annangi Vinay Chowdary
      </span>
      <span class="p-nickname vcard-username d-block" itemprop="additionalName">
        Winay-Chowdary66
      </span>
    </h1>
  </div>
</div>

  <div class="mb-2 user-status-container d-md-none">
    
<div class="js-user-status-container rounded-1 px-2 py-1 mt-2 user-status-busy border color-border-warning"
  
  data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block Link--secondary no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="01efbe11e531ab3e30ceea7dc23f5e7732b3b7c41b3f60084b28c65d9f0c2db9">
      <div class="d-flex flex-items-center flex-items-stretch">
        <div class="f6 lh-condensed user-status-header d-inline-flex">
          <div class="user-status-emoji-container flex-shrink-0 mr-2 d-flex flex-items-center flex-justify-center ">
            <div><g-emoji class="g-emoji" alias="heavy_heart_exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2763.png">❣️</g-emoji></div>
          </div>
        </div>
        <div class="
          
           user-status-message-wrapper f6 min-width-0"
           style="line-height: 20px;" >
          <div class="css-truncate css-truncate-target width-fit color-text-primary text-left">
              <div class="color-text-primary text-bold f6">
              </div>
                <span><div>Working from home</div></span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?circle=0&amp;compact=1&amp;link_mentions=1&amp;truncate=0" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="4vQYsET9TtyKEtqWGkLGxks0hFumb4K0rV3cwfLcFNEyJ3mDQjTZx6+aiWxxSce7HhAdFLiXFF4BFJUZ9qF95w==" />
        <div class="Box-header color-bg-tertiary border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
          </button>
          <h3 class="Box-title f5 text-bold color-text-primary">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value=":heavy_heart_exclamation:">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 color-text-primary">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden><div><g-emoji class="g-emoji" alias="heavy_heart_exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2763.png">❣️</g-emoji></div></span>
                  <span class="js-user-status-custom-emoji"><div><g-emoji class="g-emoji" alias="heavy_heart_exclamation" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2763.png">❣️</g-emoji></div></span>
                  <span class="js-user-status-no-emoji-icon" hidden>
                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-smiley">
    <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path>
</svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value="Working from home"
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link Link--secondary no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-false-compact-true" id="limited-availability-truncate-false-compact-true" checked>
                <label class="d-block f5 color-text-primary mb-1" for="limited-availability-truncate-false-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-false-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="btn btn-sm v-align-baseline" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2021-05-22T23:46:49+05:30">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2021-05-23T00:16:49+05:30">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2021-05-23T03:16:49+05:30">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2021-05-22T23:59:59+05:30">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2021-05-23T23:59:59+05:30">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit"  class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button"  class="width-full js-clear-user-status-button btn ml-2 js-user-status-exists">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

  </div>


<div class="d-flex flex-column">
  <div class="flex-order-1 flex-md-order-none">
      <div class="d-flex flex-lg-row flex-md-column">
      </div>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form hidden="hidden" class="position-relative flex-auto js-profile-editable-form" action="/users/Winay-Chowdary66" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="303DF2rsqMfC08QVI2bB5Hx/O39PxDdpGlycvkeg79Pa94oyiRKvFM5bEgWUCOlWlVxAZTSr9frwE6PeqlTAQQ==" />

  <div class="js-length-limited-input-container">
    <textarea
      class="form-control js-length-limited-input mb-1 width-full js-user-profile-bio-edit"
      name="user[profile_bio]"
      placeholder="Add a bio"
      aria-label="Add a bio"
      rows="3"
      data-input-max-length="160"
      data-warning-text="{{remaining}} remaining">Student at RMD Engineering College, pursuing Electronics and Communation. 
Can reach me through mail 👉🏼👉🏼   
&lt;vinayannangi.123@gmail.com/&gt;</textarea>
    <div class="d-none js-length-limited-input-warning user-profile-bio-message text-right m-0"></div>
  </div>

      <div class="color-text-tertiary mt-2 d-flex flex-items-center">
        <svg style="width: 16px;" class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
        <input class="ml-2 form-control flex-auto input-sm" placeholder="Company" aria-label="Company" name="user[profile_company]" value="Student">
      </div>

  <div class="color-text-tertiary mt-2 d-flex flex-items-center">
    <svg style="width: 16px;" class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
    <input class="ml-2 form-control flex-auto input-sm" placeholder="Location" aria-label="Location" name="user[profile_location]" value="Guntur,Andhra Pradesh">
  </div>


  <div class="color-text-tertiary mt-2 d-flex flex-items-center">
    <svg style="width: 16px;" class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
    <input class="ml-2 form-control flex-auto input-sm" placeholder="Website" aria-label="Website" name="user[profile_blog]" value="">
  </div>

  <div class="color-text-tertiary mt-2 d-flex flex-items-center" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" height="16" width="16"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg>

    <input
      class="ml-2 form-control flex-auto input-sm"
      placeholder="Twitter username"
      aria-label="Twitter username"
      name="user[profile_twitter_username]"
      value=""
      >
  </div>

  <div class="my-3">
    <div class="js-profile-editable-error color-text-danger my-3"></div>
    <button type="submit" class="btn btn-sm btn-primary">Save</button>
    <button type="reset" class="btn btn-sm js-profile-editable-cancel">Cancel</button>
  </div>
</form>
  </div>

  
<div class="js-profile-editable-area d-flex flex-column d-md-block">
  <div class="p-note user-profile-bio mb-3 js-user-profile-bio f4"
    ><div>Student at RMD Engineering College, pursuing Electronics and Communation. 
Can reach me through mail 👉🏼👉🏼   
&lt;vinayannangi.123@gmail.com/&gt;</div></div>

    <div class="mb-3">
        <button name="button" type="button" class="btn btn-block js-profile-editable-edit-button" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;INLINE_EDIT_BUTTON&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="145492998d14395023e74baba23472ef1dc3078e98dc2f08d416f5bc8a514fa9">Edit profile</button>

    </div>

    <div class="flex-order-1 flex-md-order-none mt-2 mt-md-0">
      <div class="mb-3">
        <a class="Link--secondary no-underline no-wrap" href="https://github.com/Winay-Chowdary66?tab=followers">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-people text-icon-tertiary">
    <path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
</svg>
          <span class="text-bold color-text-primary" >1</span>
          follower
</a>        &middot; <a class="Link--secondary no-underline no-wrap" href="https://github.com/Winay-Chowdary66?tab=following">
          <span class="text-bold color-text-primary" >3</span>
          following
</a>        &middot; <a class="Link--secondary no-underline no-wrap" href="https://github.com/Winay-Chowdary66?tab=stars">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star text-icon-tertiary">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
          <span class="text-bold color-text-primary">8</span>
</a>      </div>
    </div>

  <ul class="vcard-details">
        <li class="vcard-detail pt-1 css-truncate css-truncate-target hide-sm hide-md" itemprop="worksFor" show_title="false" aria-label="Organization: Student"><svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
          <span class="p-org"><div>Student</div></span>
</li>
      <li class="vcard-detail pt-1 css-truncate css-truncate-target hide-sm hide-md" itemprop="homeLocation" show_title="false" aria-label="Home location: Guntur,Andhra Pradesh"><svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        <span class="p-label">Guntur,Andhra Pradesh</span>
</li>

    
    
  </ul>
</div>

</div>

    
  
  
  
  

      </div>
</div>

  <div data-view-component="true" class="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">      <div
        class="UnderlineNav user-profile-nav d-block d-md-none position-sticky top-0 pl-3 ml-n3
          mr-n3 pr-3 color-bg-primary"
        style="z-index:3;"
      >
        <nav class="UnderlineNav-body" data-pjax aria-label="User profile">
  <a aria-current="page" class="UnderlineNav-item selected" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_OVERVIEW&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="4785f6f2476177a678903f1f8765c0ef1d788a90f6ae8352863642a31ec5c031" href="/Winay-Chowdary66">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-book UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
</svg>
    Overview
</a>
  <a class="UnderlineNav-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_REPOSITORIES&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="bfa9a016f2b43d491ccf136dc8477050a4b09186a14b017b15e9a16737ad8155" href="/Winay-Chowdary66?tab=repositories">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
    Repositories
    <span title="18" data-view-component="true" class="Counter">18</span>
</a>
  <a class="UnderlineNav-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_PROJECTS&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="70e3db2a8723db71bb490ef412c4d30bd5ff3bb5be57cd09e6c0f5cec010a1af" href="/Winay-Chowdary66?tab=projects">
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-project UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path>
</svg>
    Projects
    <span title="0" hidden="hidden" data-view-component="true" class="Counter">0</span>
</a>
    <a class="UnderlineNav-item" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TAB_PACKAGES&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="cc743b3723c13a0fb13d64e062369cee608d95382c0fb997b29c4dcff0af08d8" href="/Winay-Chowdary66?tab=packages">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-package UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>
</svg>
      Packages
</a>
</nav>
  
<div class="js-header-promo-hide" >
</div>


      </div>
      <div>


        <div class="position-relative">
          
      

<div class="mt-4">
  <div class="js-pinned-items-reorder-container">
    <details
      class="details-reset details-overlay details-overlay-dark"
      id="choose-pinned-repositories"
      
    >
      <summary class="btn-link Link--muted float-right mt-1 pinned-items-setting-link" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;CUSTOMIZE_PINS_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="584ab0c41a0227be7f4a2ac0c5e29d6cd07280684bef2c7002e973885832ce32">Customize your pins</summary>
      <details-dialog
        class="anim-fade-in fast Box Box--overlay d-flex flex-column"
        src="/users/Winay-Chowdary66/pinned_items_modal"
        preload>
        <include-fragment class="py-5 text-center" tabindex="0" autofocus>
          <div data-hide-on-error>
            <svg aria-label="Loading" style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="32" height="32" class="anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
          </div>
          <div data-show-on-error hidden>
            Something went wrong.
            <button data-retry-button class="btn-link" type="submit">Retry.</button>
          </div>
        </include-fragment>
      </details-dialog>
    </details>
  <h2 class="f4 mb-2 text-normal">
      Pinned
    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="16" height="16" class="spinner pinned-items-spinner js-pinned-items-spinner v-align-text-bottom ml-1 anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>
    <span
      class="ml-2 color-text-secondary f6 js-pinned-items-reorder-message"
      role="status"
      aria-live="polite"
      data-error-text="Something went wrong."
      data-success-text="Order updated."
    ></span>
  </h2>

      <form class="js-pinned-items-reorder-form" id="user-64681172-pinned-items-reorder-form" action="/users/Winay-Chowdary66/reorder_pinned_items" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Al3O5k+FI3MjqpPg7ToDWA1X8ryZGZ/n2C7+K3I1dvExgcrf+0gJ2+zIkDYG7BHgSgyUOWsGbfTWevzfb3x7NQ==" />
        <ol
  class="d-flex flex-wrap list-style-none gutter-condensed mb-4 js-pinned-items-reorder-list"
  
>
      <li
  class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6"
>
  <div
    class="Box d-flex pinned-item-list-item p-3 width-full js-pinned-item-list-item public sortable-button-item source reorderable"
    
  >
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
        <a class="text-bold flex-auto min-width-0 " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="7a5272311921852ef17cdbc53022961367d55619afbfb070b17d72cd88724bc7" href="/Winay-Chowdary66/Quiz-App">
<span class="repo" title="Quiz-App">Quiz-App</span>
</a>        
          <input type="hidden" name="pinned_item_ids[]" id="pinned-item-reorder-MDEwOlJlcG9zaXRvcnkyOTk1NzUxNzA=" value="MDEwOlJlcG9zaXRvcnkyOTk1NzUxNzA=" class="form-control" />
          <span class="pinned-item-handle js-pinned-item-reorder pl-2" title="Drag to reorder">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-grabber">
    <path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
          </span>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="up"
          >
            <svg aria-label="Move Quiz-App up" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-up">
    <path fill-rule="evenodd" d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"></path>
</svg>
          </button>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="down"
          >
            <svg aria-label="Move Quiz-App down" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-down">
    <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path>
</svg>
          </button>
      </div>


      <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
        Quiz app using Java Script
      </p>

      <p class="mb-0 f6 color-text-secondary">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #f1e05a"></span>
  <span itemprop="programmingLanguage">JavaScript</span>
</span>

          <a
            href="/Winay-Chowdary66/Quiz-App/stargazers"
            class="pinned-item-meta Link--muted "
          >
            <svg aria-label="star" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

      <li
  class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6"
>
  <div
    class="Box d-flex pinned-item-list-item p-3 width-full js-pinned-item-list-item public sortable-button-item source reorderable"
    
  >
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
        <a class="text-bold flex-auto min-width-0 " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="7a5272311921852ef17cdbc53022961367d55619afbfb070b17d72cd88724bc7" href="/Winay-Chowdary66/CountDown-Timer">
<span class="repo" title="CountDown-Timer">CountDown-Timer</span>
</a>        
          <input type="hidden" name="pinned_item_ids[]" id="pinned-item-reorder-MDEwOlJlcG9zaXRvcnkyNjA2Mzg2NDI=" value="MDEwOlJlcG9zaXRvcnkyNjA2Mzg2NDI=" class="form-control" />
          <span class="pinned-item-handle js-pinned-item-reorder pl-2" title="Drag to reorder">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-grabber">
    <path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
          </span>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="up"
          >
            <svg aria-label="Move CountDown-Timer up" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-up">
    <path fill-rule="evenodd" d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"></path>
</svg>
          </button>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="down"
          >
            <svg aria-label="Move CountDown-Timer down" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-down">
    <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path>
</svg>
          </button>
      </div>


      <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
        
      </p>

      <p class="mb-0 f6 color-text-secondary">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #e34c26"></span>
  <span itemprop="programmingLanguage">HTML</span>
</span>

          <a
            href="/Winay-Chowdary66/CountDown-Timer/stargazers"
            class="pinned-item-meta Link--muted "
          >
            <svg aria-label="star" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

      <li
  class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6"
>
  <div
    class="Box d-flex pinned-item-list-item p-3 width-full js-pinned-item-list-item public sortable-button-item source reorderable"
    
  >
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
        <a class="text-bold flex-auto min-width-0 " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="7a5272311921852ef17cdbc53022961367d55619afbfb070b17d72cd88724bc7" href="/Winay-Chowdary66/hamBurger-Menu">
<span class="repo" title="hamBurger-Menu">hamBurger-Menu</span>
</a>        
          <input type="hidden" name="pinned_item_ids[]" id="pinned-item-reorder-MDEwOlJlcG9zaXRvcnkyOTcyMzczNTg=" value="MDEwOlJlcG9zaXRvcnkyOTcyMzczNTg=" class="form-control" />
          <span class="pinned-item-handle js-pinned-item-reorder pl-2" title="Drag to reorder">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-grabber">
    <path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
          </span>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="up"
          >
            <svg aria-label="Move hamBurger-Menu up" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-up">
    <path fill-rule="evenodd" d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"></path>
</svg>
          </button>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="down"
          >
            <svg aria-label="Move hamBurger-Menu down" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-down">
    <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path>
</svg>
          </button>
      </div>


      <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
        creating begginner javaScript Projects 
      </p>

      <p class="mb-0 f6 color-text-secondary">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #563d7c"></span>
  <span itemprop="programmingLanguage">CSS</span>
</span>

          <a
            href="/Winay-Chowdary66/hamBurger-Menu/stargazers"
            class="pinned-item-meta Link--muted "
          >
            <svg aria-label="star" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

      <li
  class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6"
>
  <div
    class="Box d-flex pinned-item-list-item p-3 width-full js-pinned-item-list-item public sortable-button-item source reorderable"
    
  >
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
        <a class="text-bold flex-auto min-width-0 " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="7a5272311921852ef17cdbc53022961367d55619afbfb070b17d72cd88724bc7" href="/Winay-Chowdary66/Modal-or-Pop-Up">
<span class="repo" title="Modal-or-Pop-Up">Modal-or-Pop-Up</span>
</a>        
          <input type="hidden" name="pinned_item_ids[]" id="pinned-item-reorder-MDEwOlJlcG9zaXRvcnkyNjIwMzk5MDc=" value="MDEwOlJlcG9zaXRvcnkyNjIwMzk5MDc=" class="form-control" />
          <span class="pinned-item-handle js-pinned-item-reorder pl-2" title="Drag to reorder">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-grabber">
    <path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
          </span>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="up"
          >
            <svg aria-label="Move Modal-or-Pop-Up up" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-up">
    <path fill-rule="evenodd" d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"></path>
</svg>
          </button>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="down"
          >
            <svg aria-label="Move Modal-or-Pop-Up down" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-down">
    <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path>
</svg>
          </button>
      </div>


      <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
        Creating the new repo
      </p>

      <p class="mb-0 f6 color-text-secondary">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #563d7c"></span>
  <span itemprop="programmingLanguage">CSS</span>
</span>

          <a
            href="/Winay-Chowdary66/Modal-or-Pop-Up/stargazers"
            class="pinned-item-meta Link--muted "
          >
            <svg aria-label="star" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

      <li
  class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6"
>
  <div
    class="Box d-flex pinned-item-list-item p-3 width-full js-pinned-item-list-item public sortable-button-item source reorderable"
    
  >
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
        <a class="text-bold flex-auto min-width-0 " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="7a5272311921852ef17cdbc53022961367d55619afbfb070b17d72cd88724bc7" href="/Winay-Chowdary66/TodoApp">
<span class="repo" title="TodoApp">TodoApp</span>
</a>        <span class="Label Label--secondary v-align-middle ">Template</span>
          <input type="hidden" name="pinned_item_ids[]" id="pinned-item-reorder-MDEwOlJlcG9zaXRvcnkzMDI0Mjg2NjA=" value="MDEwOlJlcG9zaXRvcnkzMDI0Mjg2NjA=" class="form-control" />
          <span class="pinned-item-handle js-pinned-item-reorder pl-2" title="Drag to reorder">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-grabber">
    <path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
          </span>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="up"
          >
            <svg aria-label="Move TodoApp up" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-up">
    <path fill-rule="evenodd" d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"></path>
</svg>
          </button>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="down"
          >
            <svg aria-label="Move TodoApp down" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-down">
    <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path>
</svg>
          </button>
      </div>


      <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
        A Todo App that stores your todo's where one can search and delete
      </p>

      <p class="mb-0 f6 color-text-secondary">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #563d7c"></span>
  <span itemprop="programmingLanguage">CSS</span>
</span>

          <a
            href="/Winay-Chowdary66/TodoApp/stargazers"
            class="pinned-item-meta Link--muted "
          >
            <svg aria-label="star" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

      <li
  class="mb-3 d-flex flex-content-stretch col-12 col-md-6 col-lg-6"
>
  <div
    class="Box d-flex pinned-item-list-item p-3 width-full js-pinned-item-list-item public sortable-button-item source reorderable"
    
  >
    <div class="pinned-item-list-item-content">
      <div class="d-flex width-full flex-items-center position-relative">
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg>
        <a class="text-bold flex-auto min-width-0 " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;PINNED_REPO&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="7a5272311921852ef17cdbc53022961367d55619afbfb070b17d72cd88724bc7" href="/Winay-Chowdary66/Calculator">
<span class="repo" title="Calculator">Calculator</span>
</a>        
          <input type="hidden" name="pinned_item_ids[]" id="pinned-item-reorder-MDEwOlJlcG9zaXRvcnkzMDI5MTczMTM=" value="MDEwOlJlcG9zaXRvcnkzMDI5MTczMTM=" class="form-control" />
          <span class="pinned-item-handle js-pinned-item-reorder pl-2" title="Drag to reorder">
            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-grabber">
    <path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
</svg>
          </span>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="up"
          >
            <svg aria-label="Move Calculator up" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-up">
    <path fill-rule="evenodd" d="M3.22 9.78a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0l4.25 4.25a.75.75 0 01-1.06 1.06L8 6.06 4.28 9.78a.75.75 0 01-1.06 0z"></path>
</svg>
          </button>
          <button
            type="button"
            class="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
            data-direction="down"
          >
            <svg aria-label="Move Calculator down" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-chevron-down">
    <path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path>
</svg>
          </button>
      </div>


      <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
        Basic Calculator using javaScript
      </p>

      <p class="mb-0 f6 color-text-secondary">
          <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #f1e05a"></span>
  <span itemprop="programmingLanguage">JavaScript</span>
</span>

          <a
            href="/Winay-Chowdary66/Calculator/stargazers"
            class="pinned-item-meta Link--muted "
          >
            <svg aria-label="star" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-star">
    <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg>
            1
          </a>
      </p>
    </div>
  </div>
</li>

</ol>

</form></div>

</div>

<div class="mt-4 position-relative">
    

<div class="js-yearly-contributions">
  
<div class="position-relative">

  

      
<details class="details-reset details-overlay dropdown float-right mt-1">
  <summary class="pinned-items-setting-link Link--muted ">
    Contribution settings
    <div class="dropdown-caret"></div>
  </summary>

  <details-menu class="dropdown-menu dropdown-menu-sw contributions-setting-menu">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="edit_user" action="/users/Winay-Chowdary66/set_private_contributions_preference" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="UtKu3x0KVhdj/fjCMYZMkNX6Mck++xj+8ILI/mBdAclPu76vM26jXLRCQosqCJVln4T3X3LB41VPXvg7sS02AA==" />
      <input type="hidden" name="return_to" id="return_to" value="profile" class="form-control" />
      <button name="user[show_private_contribution_count]" value="1" type="submit" class="dropdown-item ws-normal btn-link text-left pl-5 " role="menuitem">
        <div class="text-bold">Private contributions</div>
        <span class="f6 mt-1">
            Turning on private contributions will show anonymized
            private activity on your profile.
        </span>
      </button>
</form>    <div role="none" class="dropdown-divider"></div>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="edit_user" action="/users/Winay-Chowdary66/set_activity_overview_preference" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="vRNxUIgRCiddxlqHndhM4n4Ngvq/+xQPZPDya0bwOyHiVz2sWylNOmgrCwPry/AaOv5kv3eRFmakIgbyBHbciQ==" />
      <button type="submit" name="user[activity_overview_enabled]" value="1" class="dropdown-item ws-normal btn-link text-left pl-5 " role="menuitem">
        <div class="d-flex flex-items-center text-bold">
          Activity overview
        </div>
        <span class="f6 mt-1">
            Turning on the activity overview will show an overview of your activity
            across organizations and repositories.
        </span>
      </button>
</form>  </details-menu>
</details>


    <h2 class="f4 text-normal mb-2">
      128
      contributions
        in the last year
    </h2>

    <div class="border py-2 graph-before-activity-overview">
      <div class="js-calendar-graph mx-md-2 mx-3 d-flex flex-column flex-items-end flex-xl-items-center overflow-hidden pt-1 is-graph-loading graph-canvas ContributionCalendar height-full text-center"
          data-graph-url="/users/Winay-Chowdary66/contributions?to=2021-05-22"
          data-url="/Winay-Chowdary66"
          data-from="2020-05-17 00:00:00 +0530"
          data-to="2021-05-22 23:59:59 +0530"
          data-org=""
          >
        
<svg width="828" height="128" class="js-calendar-graph-svg">
  <g transform="translate(10, 20)" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="b62ffaf711f477fc52dd5dd5c4810189659221bf079186b02be2b6abc00034e4">
      <g transform="translate(0, 0)">
          <rect width="11" height="11" x="16" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-17" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-18" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-19" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-20" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-21" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-22" data-level="0"></rect>
          <rect width="11" height="11" x="16" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-23" data-level="0"></rect>
      </g>
      <g transform="translate(16, 0)">
          <rect width="11" height="11" x="15" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-24" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-25" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-26" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-27" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-28" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-29" data-level="0"></rect>
          <rect width="11" height="11" x="15" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-30" data-level="0"></rect>
      </g>
      <g transform="translate(32, 0)">
          <rect width="11" height="11" x="14" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-05-31" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-01" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-02" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-03" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-04" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-05" data-level="0"></rect>
          <rect width="11" height="11" x="14" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-06" data-level="0"></rect>
      </g>
      <g transform="translate(48, 0)">
          <rect width="11" height="11" x="13" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-07" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-08" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-09" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-10" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-11" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-12" data-level="0"></rect>
          <rect width="11" height="11" x="13" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-13" data-level="0"></rect>
      </g>
      <g transform="translate(64, 0)">
          <rect width="11" height="11" x="12" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-14" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-15" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-16" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-17" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-18" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-19" data-level="0"></rect>
          <rect width="11" height="11" x="12" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-20" data-level="0"></rect>
      </g>
      <g transform="translate(80, 0)">
          <rect width="11" height="11" x="11" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-21" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-22" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-23" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-24" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-25" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-26" data-level="0"></rect>
          <rect width="11" height="11" x="11" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-27" data-level="0"></rect>
      </g>
      <g transform="translate(96, 0)">
          <rect width="11" height="11" x="10" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-28" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-29" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-06-30" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-01" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-02" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-03" data-level="0"></rect>
          <rect width="11" height="11" x="10" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-04" data-level="0"></rect>
      </g>
      <g transform="translate(112, 0)">
          <rect width="11" height="11" x="9" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-05" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-06" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-07" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-08" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-09" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-10" data-level="0"></rect>
          <rect width="11" height="11" x="9" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-11" data-level="0"></rect>
      </g>
      <g transform="translate(128, 0)">
          <rect width="11" height="11" x="8" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-12" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-13" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-14" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-15" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-16" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-17" data-level="0"></rect>
          <rect width="11" height="11" x="8" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-18" data-level="0"></rect>
      </g>
      <g transform="translate(144, 0)">
          <rect width="11" height="11" x="7" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-19" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-20" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-21" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-22" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-23" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-24" data-level="0"></rect>
          <rect width="11" height="11" x="7" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-25" data-level="0"></rect>
      </g>
      <g transform="translate(160, 0)">
          <rect width="11" height="11" x="6" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-26" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-27" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-28" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-29" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-30" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-07-31" data-level="0"></rect>
          <rect width="11" height="11" x="6" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-01" data-level="0"></rect>
      </g>
      <g transform="translate(176, 0)">
          <rect width="11" height="11" x="5" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-02" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-03" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-04" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-05" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-06" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-07" data-level="0"></rect>
          <rect width="11" height="11" x="5" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-08" data-level="0"></rect>
      </g>
      <g transform="translate(192, 0)">
          <rect width="11" height="11" x="4" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-09" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-10" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-11" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-12" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-13" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-14" data-level="0"></rect>
          <rect width="11" height="11" x="4" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-15" data-level="0"></rect>
      </g>
      <g transform="translate(208, 0)">
          <rect width="11" height="11" x="3" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-16" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-17" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-18" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-19" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-20" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-21" data-level="0"></rect>
          <rect width="11" height="11" x="3" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-22" data-level="0"></rect>
      </g>
      <g transform="translate(224, 0)">
          <rect width="11" height="11" x="2" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-23" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-24" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-25" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-26" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-27" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-28" data-level="0"></rect>
          <rect width="11" height="11" x="2" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-29" data-level="0"></rect>
      </g>
      <g transform="translate(240, 0)">
          <rect width="11" height="11" x="1" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-30" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-08-31" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-01" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-02" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-03" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-04" data-level="0"></rect>
          <rect width="11" height="11" x="1" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-05" data-level="0"></rect>
      </g>
      <g transform="translate(256, 0)">
          <rect width="11" height="11" x="0" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-06" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-07" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-08" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-09" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-10" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-11" data-level="0"></rect>
          <rect width="11" height="11" x="0" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-12" data-level="0"></rect>
      </g>
      <g transform="translate(272, 0)">
          <rect width="11" height="11" x="-1" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-13" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-14" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-15" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-16" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-17" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-18" data-level="0"></rect>
          <rect width="11" height="11" x="-1" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-19" data-level="0"></rect>
      </g>
      <g transform="translate(288, 0)">
          <rect width="11" height="11" x="-2" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-20" data-level="0"></rect>
          <rect width="11" height="11" x="-2" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2020-09-21" data-level="1"></rect>
          <rect width="11" height="11" x="-2" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2020-09-22" data-level="1"></rect>
          <rect width="11" height="11" x="-2" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="10" data-date="2020-09-23" data-level="2"></rect>
          <rect width="11" height="11" x="-2" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2020-09-24" data-level="1"></rect>
          <rect width="11" height="11" x="-2" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2020-09-25" data-level="1"></rect>
          <rect width="11" height="11" x="-2" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2020-09-26" data-level="1"></rect>
      </g>
      <g transform="translate(304, 0)">
          <rect width="11" height="11" x="-3" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-27" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-28" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2020-09-29" data-level="1"></rect>
          <rect width="11" height="11" x="-3" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-09-30" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-01" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-02" data-level="0"></rect>
          <rect width="11" height="11" x="-3" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="5" data-date="2020-10-03" data-level="1"></rect>
      </g>
      <g transform="translate(320, 0)">
          <rect width="11" height="11" x="-4" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-04" data-level="0"></rect>
          <rect width="11" height="11" x="-4" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-05" data-level="0"></rect>
          <rect width="11" height="11" x="-4" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2020-10-06" data-level="1"></rect>
          <rect width="11" height="11" x="-4" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-07" data-level="0"></rect>
          <rect width="11" height="11" x="-4" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2020-10-08" data-level="1"></rect>
          <rect width="11" height="11" x="-4" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2020-10-09" data-level="1"></rect>
          <rect width="11" height="11" x="-4" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="14" data-date="2020-10-10" data-level="2"></rect>
      </g>
      <g transform="translate(336, 0)">
          <rect width="11" height="11" x="-5" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="3" data-date="2020-10-11" data-level="1"></rect>
          <rect width="11" height="11" x="-5" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-12" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-13" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2020-10-14" data-level="1"></rect>
          <rect width="11" height="11" x="-5" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-15" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-16" data-level="0"></rect>
          <rect width="11" height="11" x="-5" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-17" data-level="0"></rect>
      </g>
      <g transform="translate(352, 0)">
          <rect width="11" height="11" x="-6" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-18" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-19" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-20" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-21" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-22" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-23" data-level="0"></rect>
          <rect width="11" height="11" x="-6" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-24" data-level="0"></rect>
      </g>
      <g transform="translate(368, 0)">
          <rect width="11" height="11" x="-7" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-25" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-26" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-27" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-28" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-29" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-30" data-level="0"></rect>
          <rect width="11" height="11" x="-7" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-10-31" data-level="0"></rect>
      </g>
      <g transform="translate(384, 0)">
          <rect width="11" height="11" x="-8" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-01" data-level="0"></rect>
          <rect width="11" height="11" x="-8" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="4" data-date="2020-11-02" data-level="1"></rect>
          <rect width="11" height="11" x="-8" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-03" data-level="0"></rect>
          <rect width="11" height="11" x="-8" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-04" data-level="0"></rect>
          <rect width="11" height="11" x="-8" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-05" data-level="0"></rect>
          <rect width="11" height="11" x="-8" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2020-11-06" data-level="1"></rect>
          <rect width="11" height="11" x="-8" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-07" data-level="0"></rect>
      </g>
      <g transform="translate(400, 0)">
          <rect width="11" height="11" x="-9" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-08" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-09" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-10" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-11" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-12" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-13" data-level="0"></rect>
          <rect width="11" height="11" x="-9" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-14" data-level="0"></rect>
      </g>
      <g transform="translate(416, 0)">
          <rect width="11" height="11" x="-10" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-15" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-16" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-17" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-18" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-19" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-20" data-level="0"></rect>
          <rect width="11" height="11" x="-10" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-21" data-level="0"></rect>
      </g>
      <g transform="translate(432, 0)">
          <rect width="11" height="11" x="-11" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-22" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-23" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-24" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-25" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-26" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-27" data-level="0"></rect>
          <rect width="11" height="11" x="-11" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-28" data-level="0"></rect>
      </g>
      <g transform="translate(448, 0)">
          <rect width="11" height="11" x="-12" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-11-29" data-level="0"></rect>
          <rect width="11" height="11" x="-12" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="6" data-date="2020-11-30" data-level="1"></rect>
          <rect width="11" height="11" x="-12" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2020-12-01" data-level="1"></rect>
          <rect width="11" height="11" x="-12" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-02" data-level="0"></rect>
          <rect width="11" height="11" x="-12" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="2" data-date="2020-12-03" data-level="1"></rect>
          <rect width="11" height="11" x="-12" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-04" data-level="0"></rect>
          <rect width="11" height="11" x="-12" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-05" data-level="0"></rect>
      </g>
      <g transform="translate(464, 0)">
          <rect width="11" height="11" x="-13" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-06" data-level="0"></rect>
          <rect width="11" height="11" x="-13" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-07" data-level="0"></rect>
          <rect width="11" height="11" x="-13" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-08" data-level="0"></rect>
          <rect width="11" height="11" x="-13" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-09" data-level="0"></rect>
          <rect width="11" height="11" x="-13" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-10" data-level="0"></rect>
          <rect width="11" height="11" x="-13" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-11" data-level="0"></rect>
          <rect width="11" height="11" x="-13" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-12" data-level="0"></rect>
      </g>
      <g transform="translate(480, 0)">
          <rect width="11" height="11" x="-14" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-13" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-14" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="1" data-date="2020-12-15" data-level="1"></rect>
          <rect width="11" height="11" x="-14" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-16" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-17" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-18" data-level="0"></rect>
          <rect width="11" height="11" x="-14" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-19" data-level="0"></rect>
      </g>
      <g transform="translate(496, 0)">
          <rect width="11" height="11" x="-15" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-20" data-level="0"></rect>
          <rect width="11" height="11" x="-15" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-21" data-level="0"></rect>
          <rect width="11" height="11" x="-15" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-22" data-level="0"></rect>
          <rect width="11" height="11" x="-15" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-23" data-level="0"></rect>
          <rect width="11" height="11" x="-15" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-24" data-level="0"></rect>
          <rect width="11" height="11" x="-15" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-25" data-level="0"></rect>
          <rect width="11" height="11" x="-15" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-26" data-level="0"></rect>
      </g>
      <g transform="translate(512, 0)">
          <rect width="11" height="11" x="-16" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-27" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-28" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-29" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-30" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2020-12-31" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-01" data-level="0"></rect>
          <rect width="11" height="11" x="-16" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-02" data-level="0"></rect>
      </g>
      <g transform="translate(528, 0)">
          <rect width="11" height="11" x="-17" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-03" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-04" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-05" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-06" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-07" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-08" data-level="0"></rect>
          <rect width="11" height="11" x="-17" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-09" data-level="0"></rect>
      </g>
      <g transform="translate(544, 0)">
          <rect width="11" height="11" x="-18" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-10" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-11" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-12" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-13" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-14" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-15" data-level="0"></rect>
          <rect width="11" height="11" x="-18" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-16" data-level="0"></rect>
      </g>
      <g transform="translate(560, 0)">
          <rect width="11" height="11" x="-19" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-17" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-18" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-19" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-20" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-21" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-22" data-level="0"></rect>
          <rect width="11" height="11" x="-19" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-23" data-level="0"></rect>
      </g>
      <g transform="translate(576, 0)">
          <rect width="11" height="11" x="-20" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-24" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-25" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-26" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-27" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-28" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-29" data-level="0"></rect>
          <rect width="11" height="11" x="-20" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-30" data-level="0"></rect>
      </g>
      <g transform="translate(592, 0)">
          <rect width="11" height="11" x="-21" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-01-31" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-01" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-02" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-03" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-04" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-05" data-level="0"></rect>
          <rect width="11" height="11" x="-21" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-06" data-level="0"></rect>
      </g>
      <g transform="translate(608, 0)">
          <rect width="11" height="11" x="-22" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-07" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-08" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-09" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-10" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-11" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-12" data-level="0"></rect>
          <rect width="11" height="11" x="-22" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-13" data-level="0"></rect>
      </g>
      <g transform="translate(624, 0)">
          <rect width="11" height="11" x="-23" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-14" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-15" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-16" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-17" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-18" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-19" data-level="0"></rect>
          <rect width="11" height="11" x="-23" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-20" data-level="0"></rect>
      </g>
      <g transform="translate(640, 0)">
          <rect width="11" height="11" x="-24" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-21" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-22" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-23" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-24" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-25" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-26" data-level="0"></rect>
          <rect width="11" height="11" x="-24" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-27" data-level="0"></rect>
      </g>
      <g transform="translate(656, 0)">
          <rect width="11" height="11" x="-25" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-02-28" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-01" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-02" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="9" data-date="2021-03-03" data-level="2"></rect>
          <rect width="11" height="11" x="-25" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-04" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-05" data-level="0"></rect>
          <rect width="11" height="11" x="-25" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-06" data-level="0"></rect>
      </g>
      <g transform="translate(672, 0)">
          <rect width="11" height="11" x="-26" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-07" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-08" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-09" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-10" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-11" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-12" data-level="0"></rect>
          <rect width="11" height="11" x="-26" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-13" data-level="0"></rect>
      </g>
      <g transform="translate(688, 0)">
          <rect width="11" height="11" x="-27" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-14" data-level="0"></rect>
          <rect width="11" height="11" x="-27" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-15" data-level="0"></rect>
          <rect width="11" height="11" x="-27" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-16" data-level="0"></rect>
          <rect width="11" height="11" x="-27" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-17" data-level="0"></rect>
          <rect width="11" height="11" x="-27" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-18" data-level="0"></rect>
          <rect width="11" height="11" x="-27" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-19" data-level="0"></rect>
          <rect width="11" height="11" x="-27" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-20" data-level="0"></rect>
      </g>
      <g transform="translate(704, 0)">
          <rect width="11" height="11" x="-28" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-21" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-22" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-23" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-24" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-25" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-26" data-level="0"></rect>
          <rect width="11" height="11" x="-28" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-27" data-level="0"></rect>
      </g>
      <g transform="translate(720, 0)">
          <rect width="11" height="11" x="-29" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-28" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-29" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-30" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-03-31" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-01" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-02" data-level="0"></rect>
          <rect width="11" height="11" x="-29" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-03" data-level="0"></rect>
      </g>
      <g transform="translate(736, 0)">
          <rect width="11" height="11" x="-30" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-04" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-05" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-06" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-07" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-08" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-09" data-level="0"></rect>
          <rect width="11" height="11" x="-30" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-10" data-level="0"></rect>
      </g>
      <g transform="translate(752, 0)">
          <rect width="11" height="11" x="-31" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-11" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-12" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-13" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-14" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-15" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-16" data-level="0"></rect>
          <rect width="11" height="11" x="-31" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-17" data-level="0"></rect>
      </g>
      <g transform="translate(768, 0)">
          <rect width="11" height="11" x="-32" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-18" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-19" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-20" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-21" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-22" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-23" data-level="0"></rect>
          <rect width="11" height="11" x="-32" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-24" data-level="0"></rect>
      </g>
      <g transform="translate(784, 0)">
          <rect width="11" height="11" x="-33" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-25" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-26" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-27" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-28" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-29" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-04-30" data-level="0"></rect>
          <rect width="11" height="11" x="-33" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-01" data-level="0"></rect>
      </g>
      <g transform="translate(800, 0)">
          <rect width="11" height="11" x="-34" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-02" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-03" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-04" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-05" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-06" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-07" data-level="0"></rect>
          <rect width="11" height="11" x="-34" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-08" data-level="0"></rect>
      </g>
      <g transform="translate(816, 0)">
          <rect width="11" height="11" x="-35" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-09" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-10" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-11" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="31" data-date="2021-05-12" data-level="4"></rect>
          <rect width="11" height="11" x="-35" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-13" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-14" data-level="0"></rect>
          <rect width="11" height="11" x="-35" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-15" data-level="0"></rect>
      </g>
      <g transform="translate(832, 0)">
          <rect width="11" height="11" x="-36" y="0" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-16" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="15" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-17" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="30" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-18" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="45" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-19" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="60" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-20" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="75" class="ContributionCalendar-day" rx="2" ry="2" data-count="0" data-date="2021-05-21" data-level="0"></rect>
          <rect width="11" height="11" x="-36" y="90" class="ContributionCalendar-day" rx="2" ry="2" data-count="12" data-date="2021-05-22" data-level="2"></rect>
      </g>
      <text x="16" y="-8" class="ContributionCalendar-label">May</text>
      <text x="61" y="-8" class="ContributionCalendar-label">Jun</text>
      <text x="121" y="-8" class="ContributionCalendar-label">Jul</text>
      <text x="181" y="-8" class="ContributionCalendar-label">Aug</text>
      <text x="256" y="-8" class="ContributionCalendar-label">Sep</text>
      <text x="316" y="-8" class="ContributionCalendar-label">Oct</text>
      <text x="376" y="-8" class="ContributionCalendar-label">Nov</text>
      <text x="451" y="-8" class="ContributionCalendar-label">Dec</text>
      <text x="511" y="-8" class="ContributionCalendar-label">Jan</text>
      <text x="586" y="-8" class="ContributionCalendar-label">Feb</text>
      <text x="646" y="-8" class="ContributionCalendar-label">Mar</text>
      <text x="706" y="-8" class="ContributionCalendar-label">Apr</text>
      <text x="766" y="-8" class="ContributionCalendar-label">May</text>
    <text text-anchor="start" class="ContributionCalendar-label" dx="-10" dy="8" style="display: none;">Sun</text>
    <text text-anchor="start" class="ContributionCalendar-label" dx="-10" dy="25">Mon</text>
    <text text-anchor="start" class="ContributionCalendar-label" dx="-10" dy="32" style="display: none;">Tue</text>
    <text text-anchor="start" class="ContributionCalendar-label" dx="-10" dy="56">Wed</text>
    <text text-anchor="start" class="ContributionCalendar-label" dx="-10" dy="57" style="display: none;">Thu</text>
    <text text-anchor="start" class="ContributionCalendar-label" dx="-10" dy="85">Fri</text>
    <text text-anchor="start" class="ContributionCalendar-label" dx="-10" dy="81" style="display: none;">Sat</text>
</g></svg>

        <div class="width-full f6 px-0 px-md-5 py-1">
          <div class="float-left">


            <a href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile" class="Link--muted">
              Learn how we count contributions</a>
          </div>
          <div class="float-right color-text-secondary" title="A summary of pull requests, issues opened, and commits to the default and gh-pages branches.">
            Less
              <svg width="10" height="10" class="d-inline-block">
                <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="0"></rect>
              </svg>
              <svg width="10" height="10" class="d-inline-block">
                <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="1"></rect>
              </svg>
              <svg width="10" height="10" class="d-inline-block">
                <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="2"></rect>
              </svg>
              <svg width="10" height="10" class="d-inline-block">
                <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="3"></rect>
              </svg>
              <svg width="10" height="10" class="d-inline-block">
                <rect width="10" height="10" class="ContributionCalendar-day" rx="2" ry="2" data-level="4"></rect>
              </svg>
            More
          </div>
        </div>
      </div>

    </div>
</div>


</div>


  <div id="js-contribution-activity" class="activity-listing contribution-activity" data-pjax-container>
    
    
<div class="d-none d-lg-block">
  <div style="top: 74px;" class="js-profile-timeline-year-list color-bg-primary js-sticky float-right col-2 pl-5" >
    <ul class="filter-list small">
        <li>
          <a id="year-link-2021" class="js-year-link filter-item px-3 mb-2 py-2 selected " aria-label="Contribution activity in 2021" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;CONTRIBUTION_YEAR_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="cc7e0b8f5bbf4d05726ed762eca05f529ff45999b2aa8aaea283d3a5c3db1caf" href="/Winay-Chowdary66?tab=overview&amp;from=2021-05-01&amp;to=2021-05-22">2021</a>
        </li>
        <li>
          <a id="year-link-2020" class="js-year-link filter-item px-3 mb-2 py-2 " aria-label="Contribution activity in 2020" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;CONTRIBUTION_YEAR_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="cc7e0b8f5bbf4d05726ed762eca05f529ff45999b2aa8aaea283d3a5c3db1caf" href="/Winay-Chowdary66?tab=overview&amp;from=2020-12-01&amp;to=2020-12-31">2020</a>
        </li>
    </ul>
  </div>
</div>


  <h2 class="f4 text-normal mt-4 mb-3">
    Contribution activity
  </h2>

  
<div class="contribution-activity-listing float-left col-12 col-lg-10">
  <div class="width-full pb-4">
    <h3 class="h6 pr-2 py-1 border-bottom mb-3" style="height: 14px;" >
      <span class="color-bg-canvas pl-2 pr-3">May <span class="color-text-secondary">2021</span></span>
    </h3>

    
  <div data-view-component="true" class="TimelineItem">
  
  <div data-view-component="true" class="TimelineItem-badge"><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo-push">
    <path fill-rule="evenodd" d="M1 2.5A2.5 2.5 0 013.5 0h8.75a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V1.5h-8a1 1 0 00-1 1v6.708A2.492 2.492 0 013.5 9h3.25a.75.75 0 010 1.5H3.5a1 1 0 100 2h5.75a.75.75 0 010 1.5H3.5A2.5 2.5 0 011 11.5v-9zm13.23 7.79a.75.75 0 001.06-1.06l-2.505-2.505a.75.75 0 00-1.06 0L9.22 9.229a.75.75 0 001.06 1.061l1.225-1.224v6.184a.75.75 0 001.5 0V9.066l1.224 1.224z"></path>
</svg></div>
  <div data-view-component="true" class="TimelineItem-body">      <details open="open" data-view-component="true" class="Details-element details-reset">
  <summary role="button" data-view-component="true" class="btn-link f4 Link--muted no-underline lh-condensed width-full">          <span class="color-text-primary ws-normal text-left">
            Created 39
            commits in
            4
            repositories
          </span>
          <span class="d-inline-block float-right color-icon-secondary">
            <span class="Details-content--open float-right" aria_label="Collapse" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_CATEGORY_ROLLUP_COLLAPSE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="1ed8b6226b8dcfd007f12b7e413654fedfff976bac9da216c797a5175b086c70"><svg class="octicon octicon-fold" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M10.896 2H8.75V.75a.75.75 0 00-1.5 0V2H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 2zM8.75 15.25a.75.75 0 01-1.5 0V14H5.104a.25.25 0 01-.177-.427l2.896-2.896a.25.25 0 01.354 0l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25zm-6.5-6.5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path></svg></span>
            <span class="Details-content--closed float-right" aria_label="Expand" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_CATEGORY_ROLLUP_EXPAND&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="bfa6b01550a94c2708b8cb1b080197851d5749aea86cf1639412b519b8f4de84"><svg class="octicon octicon-unfold" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8.177.677l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25a.75.75 0 01-1.5 0V4H5.104a.25.25 0 01-.177-.427L7.823.677a.25.25 0 01.354 0zM7.25 10.75a.75.75 0 011.5 0V12h2.146a.25.25 0 01.177.427l-2.896 2.896a.25.25 0 01-.354 0l-2.896-2.896A.25.25 0 015.104 12H7.25v-1.25zm-5-2a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path></svg></span>
          </span>
</summary>
  <div data-view-component="true">          <ul class="list-style-none mt-1" data-repository-hovercards-enabled>
            
  <li class="ml-0 py-1 d-flex">
    <div class="col-8 css-truncate css-truncate-target lh-condensed width-fit flex-auto min-width-0">
      <a data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/Prime-Numbers-in-given-range/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/Prime-Numbers-in-given-range">Winay-Chowdary66/Prime-Numbers-in-given-range</a>
      <a class="f6 Link--muted ml-lg-1 mt-1 mt-lg-0 d-block d-lg-inline " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_COMMIT_RANGE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88ccd19e93d724684a3495f7707e307757cfe8448f150d4781d7b09b18d8ce3b" href="/Winay-Chowdary66/Prime-Numbers-in-given-range/commits?author=Winay-Chowdary66&amp;since=2021-04-30&amp;until=2021-05-22">
        12 commits
</a>    </div>

    <div class="col-3 flex-shrink-0">
      <div class="Progress mt-1 tooltipped tooltipped-n color-bg-primary"
           aria-label="31% of commits in May were made to Winay-Chowdary66/Prime-Numbers-in-given-range ">
        <span class="Progress-item rounded-2" style="width: 31%;background-color: #40c463"></span>
      </div>
    </div>
  </li>
  <li class="ml-0 py-1 d-flex">
    <div class="col-8 css-truncate css-truncate-target lh-condensed width-fit flex-auto min-width-0">
      <a data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/python-program-convert-numbers-to-words/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/python-program-convert-numbers-to-words">Winay-Chowdary66/python-program-convert-numbers-to-words</a>
      <a class="f6 Link--muted ml-lg-1 mt-1 mt-lg-0 d-block d-lg-inline " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_COMMIT_RANGE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88ccd19e93d724684a3495f7707e307757cfe8448f150d4781d7b09b18d8ce3b" href="/Winay-Chowdary66/python-program-convert-numbers-to-words/commits?author=Winay-Chowdary66&amp;since=2021-04-30&amp;until=2021-05-22">
        12 commits
</a>    </div>

    <div class="col-3 flex-shrink-0">
      <div class="Progress mt-1 tooltipped tooltipped-n color-bg-primary"
           aria-label="31% of commits in May were made to Winay-Chowdary66/python-program-convert-numbers-to-words ">
        <span class="Progress-item rounded-2" style="width: 31%;background-color: #40c463"></span>
      </div>
    </div>
  </li>
  <li class="ml-0 py-1 d-flex">
    <div class="col-8 css-truncate css-truncate-target lh-condensed width-fit flex-auto min-width-0">
      <a data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/Certifications/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/Certifications">Winay-Chowdary66/Certifications</a>
      <a class="f6 Link--muted ml-lg-1 mt-1 mt-lg-0 d-block d-lg-inline " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_COMMIT_RANGE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88ccd19e93d724684a3495f7707e307757cfe8448f150d4781d7b09b18d8ce3b" href="/Winay-Chowdary66/Certifications/commits?author=Winay-Chowdary66&amp;since=2021-04-30&amp;until=2021-05-22">
        11 commits
</a>    </div>

    <div class="col-3 flex-shrink-0">
      <div class="Progress mt-1 tooltipped tooltipped-n color-bg-primary"
           aria-label="29% of commits in May were made to Winay-Chowdary66/Certifications ">
        <span class="Progress-item rounded-2" style="width: 29%;background-color: #40c463"></span>
      </div>
    </div>
  </li>
  <li class="ml-0 py-1 d-flex">
    <div class="col-8 css-truncate css-truncate-target lh-condensed width-fit flex-auto min-width-0">
      <a data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/Take-me-top/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/Take-me-top">Winay-Chowdary66/Take-me-top</a>
      <a class="f6 Link--muted ml-lg-1 mt-1 mt-lg-0 d-block d-lg-inline " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_COMMIT_RANGE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88ccd19e93d724684a3495f7707e307757cfe8448f150d4781d7b09b18d8ce3b" href="/Winay-Chowdary66/Take-me-top/commits?author=Winay-Chowdary66&amp;since=2021-04-30&amp;until=2021-05-22">
        4 commits
</a>    </div>

    <div class="col-3 flex-shrink-0">
      <div class="Progress mt-1 tooltipped tooltipped-n color-bg-primary"
           aria-label="11% of commits in May were made to Winay-Chowdary66/Take-me-top ">
        <span class="Progress-item rounded-2" style="width: 11%;background-color: #9be9a8"></span>
      </div>
    </div>
  </li>

          </ul>
</div>
</details></div>
</div>


    
  <div data-view-component="true" class="TimelineItem">
  
  <div data-view-component="true" class="TimelineItem-badge"><svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo">
    <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
</svg></div>
  <div data-view-component="true" class="TimelineItem-body">      <details open="open" data-view-component="true" class="Details-element details-reset">
  <summary role="button" data-view-component="true" class="btn-link f4 Link--muted no-underline lh-condensed width-full">          <span class="float-left ws-normal text-left color-text-primary">
            Created
              4
            
            repositories
          </span>
          <span class="d-inline-block float-right">
            <span class="Details-content--open float-right" aria_label="Collapse" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_ROLLUP_COLLAPSE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="0a07ebf1b49106ec061326ebcbf432f1d6effc6a9bcd955fe461c00032a12160"><svg class="octicon octicon-fold" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M10.896 2H8.75V.75a.75.75 0 00-1.5 0V2H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0l2.896-2.896A.25.25 0 0010.896 2zM8.75 15.25a.75.75 0 01-1.5 0V14H5.104a.25.25 0 01-.177-.427l2.896-2.896a.25.25 0 01.354 0l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25zm-6.5-6.5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path></svg></span>
            <span class="Details-content--closed float-right" aria_label="Expand" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_ROLLUP_EXPAND&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="2b901225ae45d6e812f2e66cdbfcbbd3409ea4657ab6705d56f295ce4f796873"><svg class="octicon octicon-unfold" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8.177.677l2.896 2.896a.25.25 0 01-.177.427H8.75v1.25a.75.75 0 01-1.5 0V4H5.104a.25.25 0 01-.177-.427L7.823.677a.25.25 0 01.354 0zM7.25 10.75a.75.75 0 011.5 0V12h2.146a.25.25 0 01.177.427l-2.896 2.896a.25.25 0 01-.354 0l-2.896-2.896A.25.25 0 015.104 12H7.25v-1.25zm-5-2a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 016 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 8a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0112 8zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"></path></svg></span>
          </span>
</summary>
  <div data-view-component="true">          <ul class="list-style-none mt-1" data-repository-hovercards-enabled>
              <li class="d-flex py-1" >
                <span class="col-8">
                  <span class="width-fit css-truncate css-truncate-target">
                        <svg class="octicon octicon-repo-forked v-align-middle color-text-tertiary mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                    <a class="mr-2 " data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/180030416_s5/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/180030416_s5">Winay-Chowdary66/180030416_s5</a>
                  </span>
                </span>
                <span class="col-2 f6 color-text-secondary d-block mt-1 d-lg-inline mt-lg-0">
                    <span class="ml-0">
  <span class="repo-language-color" style="background-color: #b07219"></span>
  <span itemprop="programmingLanguage">Java</span>
</span>

                </span>
                <time title="This contribution was made on May 22"
                      class="col-2 text-right f6 color-text-tertiary pt-1">
                  May 22
                </time>
              </li>
              <li class="d-flex py-1" >
                <span class="col-8">
                  <span class="width-fit css-truncate css-truncate-target">
                        <svg class="octicon octicon-repo v-align-middle color-text-tertiary mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                    <a class="mr-2 " data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/Take-me-top/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/Take-me-top">Winay-Chowdary66/Take-me-top</a>
                  </span>
                </span>
                <span class="col-2 f6 color-text-secondary d-block mt-1 d-lg-inline mt-lg-0">
                    <span class="ml-0">
  <span class="repo-language-color" style="background-color: #e34c26"></span>
  <span itemprop="programmingLanguage">HTML</span>
</span>

                </span>
                <time title="This contribution was made on May 12"
                      class="col-2 text-right f6 color-text-tertiary pt-1">
                  May 12
                </time>
              </li>
              <li class="d-flex py-1" >
                <span class="col-8">
                  <span class="width-fit css-truncate css-truncate-target">
                        <svg class="octicon octicon-repo v-align-middle color-text-tertiary mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                    <a class="mr-2 " data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/Prime-Numbers-in-given-range/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/Prime-Numbers-in-given-range">Winay-Chowdary66/Prime-Numbers-in-given-range</a>
                  </span>
                </span>
                <span class="col-2 f6 color-text-secondary d-block mt-1 d-lg-inline mt-lg-0">
                    <span class="ml-0">
  <span class="repo-language-color" style="background-color: #e34c26"></span>
  <span itemprop="programmingLanguage">HTML</span>
</span>

                </span>
                <time title="This contribution was made on May 12"
                      class="col-2 text-right f6 color-text-tertiary pt-1">
                  May 12
                </time>
              </li>
              <li class="d-flex py-1" >
                <span class="col-8">
                  <span class="width-fit css-truncate css-truncate-target">
                        <svg class="octicon octicon-repo v-align-middle color-text-tertiary mr-1" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                    <a class="mr-2 " data-hovercard-type="repository" data-hovercard-url="/Winay-Chowdary66/python-program-convert-numbers-to-words/hovercard" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_REPO_LINK&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="88904eee297f4e99aa329ba31b10bea81068b377d4c8b5f8fb5441c23fabf197" href="/Winay-Chowdary66/python-program-convert-numbers-to-words">Winay-Chowdary66/python-program-convert-numbers-to-words</a>
                  </span>
                </span>
                <span class="col-2 f6 color-text-secondary d-block mt-1 d-lg-inline mt-lg-0">
                    <span class="ml-0">
  <span class="repo-language-color" style="background-color: #3572A5"></span>
  <span itemprop="programmingLanguage">Python</span>
</span>

                </span>
                <time title="This contribution was made on May 12"
                      class="col-2 text-right f6 color-text-tertiary pt-1">
                  May 12
                </time>
              </li>
          </ul>
</div>
</details></div>
</div>



    


    




    


    

    


    





    

  </div>
</div>


<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="ajax-pagination-form js-ajax-pagination js-show-more-timeline-form col-lg-10 col-12" data-title="Winay-Chowdary66 (Annangi Vinay Chowdary) / April 2021" data-year="2021" data-url="/Winay-Chowdary66?tab=overview&amp;from=2021-04-01&amp;to=2021-04-30" data-from="2021-05-01" data-to="2021-05-22" action="/Winay-Chowdary66?tab=overview&amp;from=2021-04-01&amp;to=2021-04-30&amp;include_header=no" accept-charset="UTF-8" method="get">

    <svg style="box-sizing: content-box; color: var(--color-icon-primary);" viewBox="0 0 16 16" fill="none" data-view-component="true" width="64" height="64" class="width-full contribution-activity-spinner my-5 anim-rotate">
  <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" />
  <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke" />
</svg>

    <button name="button" type="submit" class="ajax-pagination-btn btn btn-outline width-full f6 mt-0 py-2 contribution-activity-show-more " data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:64681172,&quot;target&quot;:&quot;TIMELINE_SHOW_MORE&quot;,&quot;user_id&quot;:64681172,&quot;originating_url&quot;:&quot;https://github.com/Winay-Chowdary66&quot;}}" data-hydro-click-hmac="2a3ce6cab789250ed7dd730c8e4a7c3559a1ccdf9894b7e7f95b95bd4a2b8113" data-disable-with="Loading...">Show more activity</button>

  <p class="color-text-secondary f6 mt-4">
    Seeing something unexpected? Take a look at the
    <a href="https://docs.github.com/categories/setting-up-and-managing-your-github-profile">GitHub profile guide</a>.
  </p>
</form>


  </div>

</div>

  <div id="pinned-items-modal-wrapper"></div>


        </div>
      </div>
</div>

</div></div>

      </main>
  </div>

          
<div class="footer container-xl width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 color-text-secondary border-top color-border-secondary ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2021 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://www.githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:Docs" href="https://docs.github.com">Docs</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a href="https://support.github.com" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 color-text-tertiary"></span>
  </div>

  
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
    </button>
    You can’t perform that action at this time.
  </div>

  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-alert">
    <path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
</svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
    <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default color-text-primary hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;">
  </div>
</div>

    <template id="snippet-clipboard-copy-button">
  <div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w">
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-clippy js-clipboard-clippy-icon m-2">
    <path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>
</svg>
      <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
  </div>
</template>



  

  </body>
</html>
`
	});
});
