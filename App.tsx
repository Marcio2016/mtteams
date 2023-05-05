import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ActivityIndicator } from 'react-native'
import theme from '@theme/index';

import { Groups } from '@screens/Groups';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });



  return (    
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}
