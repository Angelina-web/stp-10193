document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('js-cookies');
  const btnAccept = document.getElementById('js-acceptCookies');
  const btnDecline = document.getElementById('js-declineCookies');

  if (banner && btnAccept && btnDecline) {
    const cookiesStatus = localStorage.getItem('cookiesAccepted');
    if (cookiesStatus !== null) {
      banner.style.display = 'none';
    }
    btnAccept.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true'); 
      banner.style.display = 'none';
    });
    btnDecline.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'false'); 
      banner.style.display = 'none';
    });
  }
});
