const send = document.querySelector('.form-container_btn');
send.addEventListener('click', (ev) => {
  ev.preventDefault();
  const b = async () => {
    // образ артикла
    const article = {
      type: 'text',
      title: document.querySelector('.form-container_title').value,
      user: document.querySelector('.form-container_user').value,
      date: Date.now(),
    };
    // отправка
    const socket = io();
    await socket.emit('test', JSON.stringify(article));
    console.log('sended:', article);
  };
  b();
});
