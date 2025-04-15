const pets = [
        {
            id: 1,
            name: "Luna",
            type: "dog",
            breed: "Golden Retriever",
            age: "2 years",
            gender: "Female",
            image: "/imgs/dog-6.avif",
            description: "Luna is a friendly and energetic Golden Retriever."
        },
        {
            id: 2,
            name: "Max",
            type: "cat",
            breed: "Tabby",
            age: "1 year",
            gender: "Male",
            image: "/imgs/cat-6.avif",
            description: "Max is a curious and playful tabby cat who enjoys window watching."
        },
        {
            id: 3,
            name: "Bella",
            type: "dog",
            breed: "Husky",
            age: "3 years",
            gender: "Female",
            image: "/imgs/dog-7.avif",
            description: "Bella is a beautiful husky with lots of energy and love to give."
        },
        {
            id: 4,
            name: "Oliver",
            type: "cat",
            breed: "Persian",
            age: "4 years",
            gender: "Male",
            image: "/imgs/cat-2.png",
            description: "Oliver is a gentle Persian cat who loves to be pampered."
        },
        {
            id: 5,
            name: "Rocky",
            type: "dog",
            breed: "German Shepherd",
            age: "2 years",
            gender: "Male",
            image: "/imgs/dog-8.avif",
            description: "Rocky is a smart and loyal German Shepherd."
        },
        {
            id: 6,
            name: "Simba",
            type: "cat",
            breed: "Siamese",
            age: "2 years",
            gender: "Male",
            image: "/imgs/cat-3.png",
            description: "Simba is a sleek Siamese cat who loves attention."
        },
        {
            id: 7,
            name: "Coco",
            type: "cat",
            breed: "Maine Coon",
            age: "5 years",
            gender: "Female",
            image: "/imgs/cat-7.avif",
            description: "Coco is a fluffy Maine Coon with a loving personality."
        },
        {
            id: 8,
            name: "Milo",
            type: "cat",
            breed: "British Shorthair",
            age: "3 years",
            gender: "Male",
            image: "/imgs/cat-8.jpg",
            description: "Milo is a calm and chubby British Shorthair who enjoys naps."
        },
        {
            id: 9,
            name: "Charlie",
            type: "dog",
            breed: "Beagle",
            age: "1.5 years",
            gender: "Male",
            image: "/imgs/dog-9.jpg",
            description: "Charlie is a cheerful Beagle who loves outdoor adventures."
        },
        {
            id: 10,
            name: "Daisy",
            type: "dog",
            breed: "Poodle",
            age: "3 years",
            gender: "Female",
            image: "/imgs/dog-10.jpg",
            description: "Daisy is a stylish and smart Poodle with a calm demeanor."
        },
        {
            id: 11,
            name: "Bruno",
            type: "dog",
            breed: "Boxer",
            age: "4 years",
            gender: "Male",
            image: "/imgs/dog-5.png",
            description: "Bruno is a strong and affectionate Boxer who enjoys playtime."
        },
        {
            id: 12,
            name: "Kiwi",
            type: "bird",
            breed: "Parakeet",
            age: "1 year",
            gender: "Female",
            image: "/imgs/bird-1.jpg",
            description: "Kiwi is a colorful parakeet who loves to chirp and sing."
        },
        {
            id: 13,
            name: "Sky",
            type: "bird",
            breed: "Lovebird",
            age: "2 years",
            gender: "Male",
            image: "/imgs/bird-2.jpg",
            description: "Sky is a sweet lovebird who enjoys flying around freely."
        }
    ];


let filteredPets = [...pets];


const petsContainer = document.querySelector('.pets-container');
const animalTypeSelect = document.getElementById('animal-type');
const breedSelect = document.getElementById('breed');
const ageSelect = document.getElementById('age-range');
const genderSelect = document.getElementById('gender');
const applyFiltersBtn = document.querySelector('.apply-filters-btn');


const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


function applyFilters() {
    const animalType = animalTypeSelect.value;
    const breed = breedSelect.value;
    const age = ageSelect.value;
    const gender = genderSelect.value;

    filteredPets = pets.filter(pet => {
        const typeMatch = animalType === 'all' || pet.type === animalType;
        const breedMatch = breed === 'all' || pet.breed === breed;
        const ageMatch = age === 'all' || pet.age.includes(age);
        const genderMatch = gender === 'all' || pet.gender === gender;

        return typeMatch && breedMatch && ageMatch && genderMatch;
    });

    renderPets();
}
animalTypeSelect.addEventListener('change', () => {
    const selectedType = animalTypeSelect.value;
    const breeds = [...new Set(pets
        .filter(pet => selectedType === 'all' || pet.type === selectedType)
        .map(pet => pet.breed))];

    breedSelect.innerHTML = '<option value="all">All Breeds</option>' +
        breeds.map(breed => `<option value="${breed}">${breed}</option>`).join('');
});

applyFiltersBtn.addEventListener('click', applyFilters);

function renderPets() {
    petsContainer.innerHTML = filteredPets.map(pet => `
        <div class="pet-card">
            <div class="pet-image-container">
                <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            </div>
            <div class="pet-info">
                <h3 class="pet-name">${pet.name}</h3>
                <div class="pet-details">
                    <div class="pet-detail">
                        <strong>Breed:</strong> ${pet.breed}
                    </div>
                    <div class="pet-detail">
                        <strong>Age:</strong> ${pet.age}
                    </div>
                    <div class="pet-detail">
                        <strong>Gender:</strong> ${pet.gender}
                    </div>
                </div>
                <p class="pet-description">${pet.description}</p>
                <button class="primary-btn meet-btn" onclick="viewPet(${pet.id})">Meet ${pet.name}</button>
            </div>
        </div>
    `).join('');
}

function viewPet(petId) {
    window.location.href = `/html/pet.php?id=${petId}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const petType = urlParams.get('petType') || 'all';
    const location = urlParams.get('location') || '';
    const age = urlParams.get('age') || 'all';

    animalTypeSelect.value = petType;
    ageSelect.value = age;

    animalTypeSelect.dispatchEvent(new Event('change'));

    if (petType !== 'all' || age !== 'all' || location) {
        applyFilters();
    } else {
        renderPets();
    }
});