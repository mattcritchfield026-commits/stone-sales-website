const inventory = [
  {
    name: 'Rustic fieldstone',
    details: 'Natural texture for retaining walls, borders, and cabin-style landscaping.',
    price: 'Starting at $185 / ton',
    size: 'Mixed sizes'
  },
  {
    name: 'Landscape boulders',
    details: 'Feature stones for entrances, gardens, and water accents.',
    price: 'Starting at $275 each',
    size: '2–5 ft options'
  },
  {
    name: 'Decorative river rock',
    details: 'Clean coverage for planting beds, drainage runs, and pathways.',
    price: 'Starting at $165 / ton',
    size: '1–3 in blend'
  }
];

const grid = document.querySelector('#inventory-grid');

grid.innerHTML = inventory
  .map(
    (item, index) => `
      <article class="inventory-card">
        <div class="image" style="background-image: linear-gradient(160deg, rgba(${110 + index * 15}, ${85 + index * 10}, ${55 + index * 5}, 0.35), rgba(40, 32, 20, 0.78));"></div>
        <div class="content">
          <p class="card-label">${item.size}</p>
          <h3>${item.name}</h3>
          <p>${item.details}</p>
          <div class="meta">
            <span class="price">${item.price}</span>
            <a class="button button-secondary" href="#quote">Ask about this</a>
          </div>
        </div>
      </article>
    `
  )
  .join('');
