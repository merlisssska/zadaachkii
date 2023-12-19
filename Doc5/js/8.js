var password = prompt("Введите пароль\n\nПароль должен удовлетворять следующим условиям:\n- Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая 20).\n- Пароль должен содержать минимум 1 прописную (большую) букву.\n- Пароль должен содержать минимум 1 цифру.");
if (password.length >= 3 && password.length <= 20 && /[A-Z]/.test(password) && /\d/.test(password)) {
  alert("Пароль валидный.");
} else {
  alert("Пароль не удовлетворяет условиям!");
}
