import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeResponse } from './interfaces/poke-response-interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    // delete all records!
    await this.pokemonModel.deleteMany();

    const data: PokeResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    ).then((response) => response.json());

    const pokemonToInsert: { name: string; nmbr: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const nmbr = +segments[segments.length - 2];
      pokemonToInsert.push({ name, nmbr });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
