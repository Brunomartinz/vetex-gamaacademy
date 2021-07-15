const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = document.getElementById('email').value;

  let data = {
    email,
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData); 

  let contetn = document.getElementById('content-form')

  let carregando = `<p> Carregando...</p>`

  let pronto = `<p> Cadastrado com Sucesso!</p>`


  contetn.innerHTML = carregando

  setTimeout(() => {
    contetn.innerHTML = pronto
  }, 1000)

})
  