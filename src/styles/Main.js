import { Dimensions } from "react-native";
const windowScreen = Dimensions.get('window');

export default {
  container: {
    backgroundColor: '#455a64',
  }, flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  logoContainer: {
    width: windowScreen.width,
    marginBottom: 40,
  }, 
  logo: {
    height: 80,
    width: 80,
    borderRadius: 0,
    marginBottom: 15,
  }, 
  logoText: {
    fontSize: 16,
    fontWeight: '500',
    color: "#bcbcbc",
    textAlign: 'center',
  }, 
  formGroup: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  formControl: {
    height: 40,
    borderRadius: 40,
    borderWidth: 0,
    backgroundColor: "#a0a0a0",
    width: windowScreen.width - 40,
    color: "#FFF",
    paddingHorizontal: 15,
  },
}