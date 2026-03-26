const inventory = [
  {
    name: 'Rustic fieldstone',
    details: 'Natural texture for retaining walls, borders, firepit surrounds, and cabin-style installs.',
    price: 'Starting at $185 / ton',
    size: 'Mixed sizes'
  },
  {
    name: 'Landscape boulders',
    details: 'Statement pieces for entrances, slope accents, drainage edges, and water features.',
    price: 'Starting at $275 each',
    size: '2–5 ft options'
  },
  {
    name: 'Decorative river rock',
    details: 'Low-maintenance coverage for planting beds, pathways, drainage runs, and edging.',
    price: 'Starting at $165 / ton',
    size: '1–3 in blend'
  },
  {
    name: 'Wall stone',
    details: 'Flat, stackable material for rustic walls, steps, and strong landscape transitions.',
    price: 'Starting at $210 / ton',
    size: 'Pallet-ready'
  }
];

const inventoryGrid = document.querySelector('#inventory-grid');
const quoteForm = document.querySelector('#quote-form');
const formNote = document.querySelector('#form-note');

inventoryGrid.innerHTML = inventory
  .map(
    (item, index) => `
      <article class="inventory-card">
        <div class="image" style="background-image: linear-gradient(160deg, rgba(${112 + index * 12}, ${84 + index * 10}, ${53 + index * 6}, 0.35), rgba(39, 30, 19, 0.8));"></div>
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

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#customer-name').value.trim();
  const contact = document.querySelector('#customer-contact').value.trim();
  const stoneType = document.querySelector('#stone-type').value;
  const jobType = document.querySelector('#job-type').value;
  const details = document.querySelector('#project-details').value.trim();

  const subject = encodeURIComponent(`Stone quote request from ${name}`);
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Stone type: ${stoneType}`,
      `Pickup or delivery: ${jobType}`,
      '',
      'Project details:',
      details
    ].join('\n')
  );

  const mailtoUrl = `mailto:sales@championstonesupply.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoUrl;

  formNote.textContent = 'Your email app should open with a draft quote request. Replace sales@championstonesupply.com with your real inbox when ready.';
});
