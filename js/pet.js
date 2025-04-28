const petData = {
    1: {
        name: "Luna",
        type: "Dog",
        breed: "Golden Retriever",
        age: "2 years",
        gender: "Female",
        images: ["../imgs/dog-1.avif"],
        description: "Luna is a friendly and energetic Golden Retriever who loves to play fetch. She's great with children and other pets, making her the perfect addition to any family. Luna is fully trained and enjoys long walks and cuddles.",
        characteristics: [
            { icon: "🏃‍♂️", label: "High Energy" },
            { icon: "🐕", label: "Good with Dogs" },
            { icon: "👶", label: "Kid Friendly" },
            { icon: "🎾", label: "Playful" }
        ]
    },
    2: {
        name: "Max",
        type: "Cat",
        breed: "Tabby",
        age: "1 year",
        gender: "Male",
        images: ["../imgs/cat-6.avif"],
        description: "Max is a curious and playful tabby cat who enjoys window watching.",
        characteristics: [
            { icon: "🔍", label: "Curious" },
            { icon: "🐾", label: "Playful" },
            { icon: "🌞", label: "Sunbather" }
        ]
    },
    3: {
        name: "Bella",
        type: "Dog",
        breed: "Husky",
        age: "3 years",
        gender: "Female",
        images: ["../imgs/dog-7.avif"],
        description: "Bella is a beautiful husky with lots of energy and love to give.",
        characteristics: [
            { icon: "❄️", label: "Cold Weather Lover" },
            { icon: "🐺", label: "Energetic" },
            { icon: "❤️", label: "Loving" }
        ]
    },
    4: {
        name: "Oliver",
        type: "Cat",
        breed: "Persian",
        age: "4 years",
        gender: "Male",
        images: ["../imgs/cat-2.png"],
        description: "Oliver is a gentle Persian cat who loves to be pampered.",
        characteristics: [
            { icon: "🛋️", label: "Lap Cat" },
            { icon: "🧼", label: "Well Groomed" },
            { icon: "😺", label: "Gentle" }
        ]
    },
    5: {
        name: "Rocky",
        type: "Dog",
        breed: "German Shepherd",
        age: "2 years",
        gender: "Male",
        images: ["../imgs/dog-8.avif"],
        description: "Rocky is a smart and loyal German Shepherd.",
        characteristics: [
            { icon: "🧠", label: "Intelligent" },
            { icon: "🛡️", label: "Loyal" },
            { icon: "🏃", label: "Energetic" }
        ]
    },
    6: {
        name: "Simba",
        type: "Cat",
        breed: "Siamese",
        age: "2 years",
        gender: "Male",
        images: ["../imgs/cat-3.png"],
        description: "Simba is a sleek Siamese cat who loves attention.",
        characteristics: [
            { icon: "🎯", label: "Attention Seeker" },
            { icon: "👑", label: "Graceful" },
            { icon: "😸", label: "Vocal" }
        ]
    },
    7: {
        name: "Coco",
        type: "Cat",
        breed: "Maine Coon",
        age: "5 years",
        gender: "Female",
        images: ["../imgs/cat-7.avif"],
        description: "Coco is a fluffy Maine Coon with a loving personality.",
        characteristics: [
            { icon: "🧸", label: "Fluffy" },
            { icon: "❤️", label: "Affectionate" },
            { icon: "🧶", label: "Playful" }
        ]
    },
    8: {
        name: "Milo",
        type: "Cat",
        breed: "British Shorthair",
        age: "3 years",
        gender: "Male",
        images: ["../imgs/cat-8.jpg"],
        description: "Milo is a calm and chubby British Shorthair who enjoys naps.",
        characteristics: [
            { icon: "😴", label: "Sleeper" },
            { icon: "🐱", label: "Calm" },
            { icon: "🍽️", label: "Foodie" }
        ]
    },
    9: {
        name: "Charlie",
        type: "Dog",
        breed: "Beagle",
        age: "1.5 years",
        gender: "Male",
        images: ["../imgs/dog-9.jpg"],
        description: "Charlie is a cheerful Beagle who loves outdoor adventures.",
        characteristics: [
            { icon: "🌳", label: "Adventurous" },
            { icon: "🎉", label: "Cheerful" },
            { icon: "👃", label: "Great Scent" }
        ]
    },
    10: {
        name: "Daisy",
        type: "Dog",
        breed: "Poodle",
        age: "3 years",
        gender: "Female",
        images: ["../imgs/dog-10.jpg"],
        description: "Daisy is a stylish and smart Poodle with a calm demeanor.",
        characteristics: [
            { icon: "💇‍♀️", label: "Well-Groomed" },
            { icon: "🧘‍♀️", label: "Calm" },
            { icon: "🎓", label: "Smart" }
        ]
    },
    11: {
        name: "Bruno",
        type: "Dog",
        breed: "Boxer",
        age: "4 years",
        gender: "Male",
        images: ["../imgs/dog-5.png"],
        description: "Bruno is a strong and affectionate Boxer who enjoys playtime.",
        characteristics: [
            { icon: "💪", label: "Strong" },
            { icon: "🐶", label: "Playful" },
            { icon: "❤️", label: "Loving" }
        ]
    },
    12: {
        name: "Kiwi",
        type: "Bird",
        breed: "Parakeet",
        age: "1 year",
        gender: "Female",
        images: ["../imgs/bird-1.jpg"],
        description: "Kiwi is a colorful parakeet who loves to chirp and sing.",
        characteristics: [
            { icon: "🎶", label: "Musical" },
            { icon: "🌈", label: "Colorful" },
            { icon: "🕊️", label: "Gentle" }
        ]
    },
    13: {
        name: "Sky",
        type: "Bird",
        breed: "Lovebird",
        age: "2 years",
        gender: "Male",
        images: ["../imgs/bird-2.jpg"],
        description: "Sky is a sweet lovebird who enjoys flying around freely.",
        characteristics: [
            { icon: "❤️", label: "Loving" },
            { icon: "🕊️", label: "Free-Spirited" },
            { icon: "🌟", label: "Charming" }
        ]
    },
    14: {
        name: "Chimtu",
        type: "Dog",
        breed: "Desi Dog",
        age: "1.5 years",
        gender: "Male",
        images: ["../imgs/dog-14.jpg"],
        description: "Chimtu is a friendly and charming Desi dog with a golden-brown coat and expressive eyes. He loves relaxing in cozy corners and watching the world go by. A loyal companion full of personality and warmth.",
        characteristics: [
            { icon: "🐾", label: "Loyal" },
            { icon: "🧠", label: "Smart" },
            { icon: "😌", label: "Calm & Composed" }
        ]
    }
    
};



const urlParams = new URLSearchParams(window.location.search);
const petId = urlParams.get('id');


function loadPetDetails() {
    const pet = petData[petId];

    document.title = pet.name;
    document.getElementById('petName').textContent = pet.name;
    document.getElementById('petType').textContent = pet.type;
    document.getElementById('petAge').textContent = pet.age;
    document.getElementById('petGender').textContent = pet.gender;
    document.getElementById('petDescription').textContent = pet.description;

    const mainImage = document.getElementById('mainImage');
    mainImage.src = pet.images[0];
    mainImage.alt = pet.name;

    const thumbnailGrid = document.getElementById('thumbnailGrid');
    thumbnailGrid.innerHTML = '';
    const thumb = document.createElement('div');
    thumb.className = 'thumbnail active';

    const thumbImg = document.createElement('img');
    thumbImg.src = pet.images[0];
    thumbImg.alt = pet.name;
    thumb.appendChild(thumbImg);
    thumbnailGrid.appendChild(thumb);

    const characteristicsGrid = document.getElementById('characteristics');
    characteristicsGrid.innerHTML = '';
    pet.characteristics.forEach(char => {
        const item = document.createElement('div');
        item.className = 'characteristic';

        const icon = document.createElement('div');
        icon.className = 'characteristic-icon';
        icon.textContent = char.icon;

        const label = document.createElement('div');
        label.className = 'characteristic-label';
        label.textContent = char.label;

        item.appendChild(icon);
        item.appendChild(label);
        characteristicsGrid.appendChild(item);
    });
}



document.addEventListener('DOMContentLoaded', () => {
    loadPetDetails()
})

document.getElementById("adoptButton").addEventListener("click", () =>{
    window.location.href = "adoptionform.php?id=" + petId;

})