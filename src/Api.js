import AsyncStorage from "@react-native-async-storage/async-storage";

/** Arquivo de configuracao do BECK-END */

const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token) => {
        /** Configuração EndPoint Autenticação */
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(token)
        });
        const json = await req.json();
        return json;
    },

    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(email, password)
        });
        const json = await req.json();
        return json;
    },
    /** Configuração EndPoint Cadastro */
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(name, email, password)
        });
        const json = await req.json();
        return json;
    },
        /** Configuração EndPoint Pegar Barbeiros Região */

    getBarbers: async () => {

        /** Peguei o token */
        const token = await AsyncStorage.getItem('token');
        /** Fiz a requisição */
        const req = await fetch(`${BASE_API}/barbers?token=${token}`);

        /** Transformei em Json */
        const json = await req.json();

        /** Returnei o Resultado Json */
        return json;
    }
}
