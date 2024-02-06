fetch('https://v1.hitokoto.cn')
  .then((response) => response.json())
  .then((data) => {
    document
      .getElementById('wl-edit')
      .setAttribute('placeholder', data.hitokoto + '__' + data.from)
  })
  .catch(console.error)
