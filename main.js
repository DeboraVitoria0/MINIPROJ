let editingIndex = null;

const FormulárioAnimal = document.getElementById('FormulárioAnimal');
const ListaAnimal = document.getElementById('ListaAnimal');
const animals = [];

FormulárioAnimal.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const species = document.getElementById('species').value;

    if (editingIndex !== null) {
        animals[editingIndex] = { name, species };
        editingIndex = null;
    } else {
        animals.push({ name, species });
    }

    updateListaAnimal();
    FormulárioAnimal.reset();
});

function updateListaAnimal() {
    ListaAnimal.innerHTML = '';
    animals.forEach((animal, index) => {
        const li = document.createElement('li');
        li.textContent = `${animal.name} (${animal.species})`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => editarAnimal(index));
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => deleteAnimal(index));
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        ListaAnimal.appendChild(li);
    });
}

function editarAnimal(index) {
    const animal = animals[index];
    document.getElementById('name').value = animal.name;
    document.getElementById('species').value = animal.species;
    editingIndex = index;
}

function deleteAnimal(index) {
    animals.splice(index, 1);
    updateListaAnimal();
}
