import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="services-container">
      <h2 class="services-title">Our Magical Services</h2>
      <div class="services-grid">
        <div class="service-item">
          <div class="service-icon">🔮</div>
          <h3>Tarot Reading</h3>
          <p>Discover your destiny through the ancient art of tarot</p>
          <button class="magical-button primary">Book Now</button>
        </div>
        <div class="service-item">
          <div class="service-icon">✨</div>
          <h3>Crystal Healing</h3>
          <p>Balance your energy with powerful crystals</p>
          <button class="magical-button primary">Book Now</button>
        </div>
        <div class="service-item">
          <div class="service-icon">🌙</div>
          <h3>Astrology Reading</h3>
          <p>Navigate life's journey with celestial guidance</p>
          <button class="magical-button primary">Book Now</button>
        </div>
        <div class="service-item">
          <div class="service-icon">🎭</div>
          <h3>Palm Reading</h3>
          <p>Unlock the secrets written in your hands</p>
          <button class="magical-button primary">Book Now</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .services-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .services-title {
      text-align: center;
      color: var(--golden);
      font-size: 2.5rem;
      margin-bottom: 3rem;
      text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .service-item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .service-item:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      border-color: var(--golden);
    }

    .service-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .service-item h3 {
      color: var(--golden);
      margin: 1rem 0;
      font-size: 1.5rem;
    }

    .service-item p {
      color: var(--crystal-white);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .magical-button {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 25px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      background: var(--magical-purple);
      color: var(--crystal-white);
    }

    .magical-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesComponent {
  // Add component logic here
} 