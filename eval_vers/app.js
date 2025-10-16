function renderBooks() {
  const tbody = document.getElementById('book-list');
  tbody.innerHTML = '';

  books.forEach((book, index) => {
    const tr = document.createElement('tr');

    const titleTd = document.createElement('td');
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement('td');
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    const actionsTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Modifier titre";
    editBtn.onclick = () => {
      // Remplace le contenu de la cellule titre par un input et des boutons
      titleTd.innerHTML = '';
      const input = document.createElement('input');
      input.type = 'text';
      input.value = book.title;
      titleTd.appendChild(input);

      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Enregistrer';
      saveBtn.onclick = () => {
        const v = input.value && input.value.trim();
        if (v) {
          book.title = v;
          renderBooks();
        } else {
          alert('Le titre ne peut pas être vide.');
        }
      };
      // bablabla je modifie des trucs pour faire le truc av les logs
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Annuler';
      cancelBtn.onclick = () => {
        renderBooks();
      };

      // Ajouter les boutons à la cellule actions (et masquer le bouton d'édition)
      actionsTd.appendChild(saveBtn);
      actionsTd.appendChild(cancelBtn);
      editBtn.style.display = 'none';
    };
    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
