import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(29, 78, 216, 1)',
      justifyContent: 'center',
      alignItems: "center",
      padding: 20,
      textAlign: 'left'
    },
    Title:{
        textAlign:"center",
        fontWeight: '700',
        fontSize: 22,
        marginBottom: 60,
        marginTop: 60,
        color: '#fff'
    },
    label: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 12,
        width: '100%'
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingTop: 18,
        paddingBottom: 18,
        padding: 12,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#A5B4FC',
        width: 127,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 4,
        padding: 15,
        marginTop: 40,
    },
    buttonTitle: {
        fontSize: 24,
        lineHeight: 22,
        fontWeight: '900',
        color: '#fff',
        letterSpacing: 1.59,
    },
    link: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 22,
    },
    message: {
        fontSize: 14,
        color: 'green',
    }
  });