import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

//const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9efbd8cf655d649cbf935c88e6bc2d4c&language=en-US&page=1';
interface Root {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

type Result = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
// const [movies, setMovies] = useState<Root | undefined>();

const ListMovie = () => {
  const [data, setData] = useState<Root | undefined>();
  const [isLoading, setisLoading] = useState(true)
  

  // const fetchMovies = async () => {
  //   try {
  //     const response = await fetch(API_URL);
  //     const data = await response.json();
  //     setMovies(data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const getListRate = () => {
    const Url = 'https://api.themoviedb.org/3/movie/popular?api_key=da7cd488ad26ec2c045e122bba134280&language=en-US&page=1';
    return fetch(Url)
    .then((res) => res.json())
    .then(json => {
      return json as Root;
    })
    .catch((error) =>{
      console.log('Error', error);
      return undefined;
    })
  }

  useEffect(() => {
    getListRate().then(res => setData(res));
  }, []);

  

  return (
    <SafeAreaView style={styles.container}>
      {data === undefined ? (
         <ActivityIndicator size="large" />
      ):(
        <MovieComponent root={data} />
      )}
      
    </SafeAreaView>
  );
};

export interface Props {
  root: Root;
}

const MovieComponent: React.FC<Props> = props =>{
  // const { post } = props;
  const renderMovie = ({ item }) => {
    const backdropUrl = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;

    return (
      <View style={styles.list}>
        
        <Image source={{ uri: backdropUrl }} style={styles.backdropImage} />
        <View style={styles.txtlist}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>Date: {item.release_date}</Text>
          <Text>Vote_average: {item.vote_average}</Text>
          <Text>Vote_count: {item.vote_count}</Text>
        </View>
        
      </View>
    );
  };
  // console.log(props);
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize:30, color:'#000', marginBottom:10}}>List Popular Movie</Text>
      <FlatList
      data={props.root.results}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  backdropImage:{
    width: 150,
    height: 150,
    marginHorizontal:10
  },
  list:{
    // borderWidth: 1,
    // borderColor: '#000',
    flexDirection: 'row',
    marginBottom: 10
  },
  txtlist:{
    padding: 10,
    justifyContent: 'space-between',
    
  },
  title:{
    fontSize: 20,
    color: '#000'
  },
});

export default ListMovie;




// export default ListMovie;