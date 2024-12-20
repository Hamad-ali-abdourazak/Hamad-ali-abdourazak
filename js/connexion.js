document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Tous les champs sont obligatoires.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.username === username);

  if (!user) {
    alert('Utilisateur inexistant. Veuillez vous inscrire d\'abord.');
    return;
  }

  if (user.password !== password) {
    alert('Nom d\'utilisateur ou mot de passe incorrect.');
    return;
  }

  localStorage.setItem('loggedInUser', username); // Stocker l'état de connexion
  alert('Connexion réussie');
  window.location.href = 'index.html';  // Rediriger vers la page d'accueil
});