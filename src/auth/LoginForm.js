import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeStore from '../../stores/HomeStore'
import { observer } from 'mobx-react';

@observer
export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Password: "",
            ConfPassword: "",
            Email: "",
            Country: "",
            State: "",
            Phone: "",
            Gendar: "Male"
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', margin: 20 }}>
                <TextInput
                    value={HomeStore.Name}
                    placeholder="Name"
                    onChangeText={(res1) => {
                        HomeStore.Name = res1;
                    }}
                    style={{ fontSize: 20, marginBottom: 20, borderBottomColor: '#1f1f1f', width: '100%', borderWidth: 1 }} />


                <TextInput
                    value={HomeStore.ipAddress}
                    placeholder="IP:Port"
                    onChangeText={(res) => {
                        HomeStore.ipAddress = res;
                    }}
                    style={{ fontSize: 20, borderBottomColor: '#1f1f1f', width: '100%', borderWidth: 1 }} />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Interest");
                    }}
                >
                    <Text style={{marginTop:20, fontSize:20 , fontFamily:'CeraPro-Bold'}}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}