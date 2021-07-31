import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsVerticalScrollIndicator={false}>
      {/* Types y peso */}
      <View
        style={{
          ...styles.container,
          marginTop: 370,
        }}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        {/* Peso */}
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.regularText}>
          {(Number(pokemon.weight) / 10).toFixed(2)}kg
        </Text>

        {/* Altura */}
        <Text style={styles.title}>Height</Text>
        <Text style={styles.regularText}>
          {(Number(pokemon.height) / 10).toFixed(2)}m
        </Text>

        {/* Experiencia */}
        <Text style={styles.title}>Base Experience</Text>
        <Text style={styles.regularText}>{pokemon.base_experience}</Text>
      </View>
      {/* Sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprites}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprites}
        />
      </ScrollView>

      {/* Habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>Basic Abilities</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Habilidades */}
      <View style={styles.container}>
        <Text style={styles.title}>Movements</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      {/* Games */}
      <View style={styles.container}>
        <Text style={styles.title}>Game indices</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.game_indices.map(({version}) => (
            <Text
              style={{...styles.regularText, marginRight: 10}}
              key={version.name}>
              {version.name}
            </Text>
          ))}
        </View>
      </View>

      {/* stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View style={{flexDirection: 'row'}} key={stat.stat.name + i}>
              <Text
                style={{...styles.regularText, marginRight: 10, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text style={{...styles.regularText, fontWeight: 'bold'}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Sprite Final */}

        <View style={{marginBottom: 50, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprites}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprites: {
    width: 100,
    height: 100,
  },
});
