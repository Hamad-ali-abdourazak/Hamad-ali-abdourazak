document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!username || !password || !confirmPassword) {
    alert('Tous les champs sont obligatoires.');
    return;
  }

  if (password.length < 8) {
    alert('Le mot de passe doit contenir au moins 8 caractères.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.find(u => u.username === username)) {
    alert('Cet utilisateur existe déjà.');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Compte créé avec succès');
  window.location.href = 'connexion.html';  // Rediriger vers la page de connexion
});