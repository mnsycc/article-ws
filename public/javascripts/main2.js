const el = document.querySelector('.article_box');
const send = document.querySelector('.form-container_btn');


send.addEventListener('click', (ev) => {
  ev.preventDefault();
  const b = async () => {
    // remover`s form
    const remover = {
      type: 'text',
      title: document.querySelector('.form-container_title').value,
      date: Date.now(),
    };
    // socket emit
    const socket = io();
    await socket.emit('remove', JSON.stringify(remover), (data) => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      // visualization
      const html = parsedData.map((value) => {
        return `<div class="box off"><h2>${value.title}</h2><h3> username : ${value.author.username}</h3></div>`;
      }).join();
      el.innerHTML = html;
    });
    console.log('remove:', remover);
  };
  b();
});
