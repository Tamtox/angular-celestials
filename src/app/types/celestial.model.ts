export class Celestial {
  name: string;
  type: string;
  diameter: number;
  mass: number;
  temperature: number;
  atmosphere: string;
  satellites: string[];
  description: string;
  location: string;
  image: string;
  id: string;
  constructor(
    name: string,
    type: string,
    diameter: number,
    mass: number,
    temperature: number,
    atmosphere: string,
    satellites: string[],
    description: string,
    location: string,
    image: string,
    id: string
  ) {
    this.name = name;
    this.type = type;
    this.diameter = diameter;
    this.mass = mass;
    this.temperature = temperature;
    this.atmosphere = atmosphere;
    this.satellites = satellites;
    this.description = description;
    this.location = location;
    this.image = image;
    this.id = id;
  }
}
