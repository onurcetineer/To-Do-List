var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// "Ekle" butonuna tıklandığında yeni görev ekle
function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('task').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    // Eğer giriş boşsa hata mesajı göster
    var toast = document.querySelector('.toast.error');
    toast.classList.remove('hide');
    $(toast).toast('show');
  } else {
    // Eğer giriş geçerliyse listeye ekle ve başarı mesajı göster
    document.getElementById('list').appendChild(li);
    var toast = document.querySelector('.toast.success');
    toast.classList.remove('hide');
    $(toast).toast('show');
  }

  // Silme butonu oluştur
  var removeBtn = document.createElement("button");
  removeBtn.className = "close";
  removeBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
  
  // Silme butonuna tıklayınca görevi kaldır
  removeBtn.onclick = function () {
    removeElement(this);
  };
  
  li.appendChild(removeBtn);
}

// Görevi silen fonksiyon
function removeElement(btn) {
  var li = btn.parentElement; // Silme butonunun bağlı olduğu li elementini al
  li.remove(); // li elementini kaldır
}