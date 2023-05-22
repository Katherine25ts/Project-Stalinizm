// получаем ссылки на элементы 
const loginContainer = document.querySelector('.login-container'); 
const profileContainer = document.querySelector('.profile-container'); 
const bookListContainer = document.querySelector('.book-list-container'); 
const bookInfoContainer = document.querySelector('.book-info-container'); 
const headerLinkProfile = document.querySelector('.header-link-profile'); 
const bookList = bookListContainer.querySelector('.book-list'); 
const bookmarkButtons = bookList.querySelectorAll('.bookmark'); 
const readStatuses = bookList.querySelectorAll('.status.read');

// устанавливаем обработчик на форму авторизации 
loginContainer.querySelector('form').addEventListener('submit', function(evt) { evt.preventDefault();

// скрываем форму авторизации и показываем страницу профиля пользователя 
loginContainer.classList.add('hide'); 
profileContainer.classList.remove('hide'); });

// устанавливаем обработчик на ссылку профиля в хедере 
headerLinkProfile.addEventListener('click', function(evt) { evt.preventDefault();
// скрываем список книг и страницу с информацией о книге и показываем страницу профиля пользователя 
bookListContainer.classList.add('hide'); 
bookInfoContainer.classList.add('hide'); 
profileContainer.classList.remove('hide'); });

// устанавливаем обработчики на кнопки закладок для добавления в прочитанные книги 
bookmarkButtons.forEach(function(button) { button.addEventListener('click', function(evt) { evt.preventDefault(); 
// меняем статус книги на "прочитано" и скрываем кнопку закладки 
const statusElement = button.parentNode.querySelector('.status'); 
statusElement.textContent = 'Прочитано'; 
statusElement.classList.remove('unread'); 
statusElement.classList.add('read'); 
button.classList.add('hide'); }); });

// устанавливаем обработчики на статусы книг для показа страницы с информацией о книге 
readStatuses.forEach(function(status) { status.addEventListener('click', function(evt) { evt.preventDefault(); 
// скрываем список книг и показываем страницу с информацией о книге 
bookListContainer.classList.add('hide'); 
bookInfoContainer.classList.remove('hide'); }); });