const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    alert('Service Worker not supported in the browser');
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
