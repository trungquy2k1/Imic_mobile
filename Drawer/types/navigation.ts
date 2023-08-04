import { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
    Drawer: undefined;
    TabBottom: undefined;
    Home: undefined;
    About: undefined;
    Category: {title: string};
    Login: undefined;
    ListPopularMovie: undefined;
};
export type CategoryRouteProp = RouteProp<MainStackParamList, 'Category'>;

export type HomeTabParamList = {
    HomeSCR: undefined;
    About: undefined;
    
  };