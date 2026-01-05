function save(){
  const name = document.getElementById('name').value;
  sessionStorage.setItem('username', name);
}

function load(){
  const name = sessionStorage.getItem('username');
  document.getElementById('result').innerText =
    name ? 'Hello, ' + name : 'No data found';
}
