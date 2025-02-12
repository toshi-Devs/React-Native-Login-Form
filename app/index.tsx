import LoginView from "@/components/LoginView";
import SignUpView from "@/components/SignUpView";
import { Text, View } from "react-native";
import {useState} from "react";


export default function Index() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLogin ? (
        <LoginView onSignUpPress={() => setIsLogin(false)} />
      ) : (
        <SignUpView onSignInPress={() => setIsLogin(true)} />
      )}

    </View>
  );
}
