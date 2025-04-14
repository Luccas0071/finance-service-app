// Simula autenticação (você pode substituir por contexto ou hook real)
export const isAuthenticated = async ({ email, password}) => {

    // const response = await axios.post('https://seu-backend.com/login', {
    //     email,
    //     password
    // });

    // return !!localStorage.getItem('token'); // Ex: JWT no localStorage
    return false;
};