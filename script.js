import Toast from './Toast.js';

document.querySelector('button').addEventListener('click', () => {
  const toast = new Toast({
    position: 'top-right',
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    image: 'images/purchase-icon.svg',
    text: { header: 'Header', body: 'Body text' },
  });
});
