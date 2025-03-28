import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  categories: string[] = ['All', 'Crystals', 'Tarot', 'Herbs', 'Tools'];
  selectedCategory: string = 'All';

  products: Product[] = [
    {
      id: 1,
      name: 'Mystic Crystal Ball',
      description: 'A powerful crystal ball for scrying and divination',
      price: 49.99,
      image: '🔮',
      category: 'Crystals'
    },
    {
      id: 2,
      name: 'Ancient Tarot Deck',
      description: 'Handcrafted tarot deck with mystical artwork',
      price: 39.99,
      image: '🎴',
      category: 'Tarot'
    },
    {
      id: 3,
      name: 'Sage Bundle',
      description: 'Traditional sage bundle for cleansing and purification',
      price: 19.99,
      image: '🌿',
      category: 'Herbs'
    },
    {
      id: 4,
      name: 'Wand of Power',
      description: 'Handcrafted magical wand with crystal tip',
      price: 59.99,
      image: '⚡',
      category: 'Tools'
    }
  ];

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }
} 