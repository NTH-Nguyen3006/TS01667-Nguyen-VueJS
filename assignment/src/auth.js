import { reactive } from 'vue'

const userList = reactive([
    {
        username: 'admin',
        fullname: 'Hoàng Nguyên',
        email: 'hoangnguyen@gmail.com',
        password: 'admin123'
    },
    {
        username: 'luongphu',
        fullname: 'Phạm Châu Lương Phú',
        email: 'lp@gmail.com',
        password: 'user123'
    },
    {
        username: 'quoctam',
        fullname: 'Mai Quốc Tam',
        email: 'quoctam@gmail.com',
        password: 'user123'
    }
]);

export const authState = reactive({
    isLoggedIn: false,
    user: null
})

export const login = (form) => {
    const user = userList.find(o => (o.username == form.emailOrUsername || o.email == form.emailOrUsername));
    console.log(user);

    if (user.password === form.password) {
        authState.user = user;
        return authState.isLoggedIn = true;
    }

    return false;
}

export const register = (form) => {
    userList.push(form)
}

export const logout = () => {
    authState.isLoggedIn = false
    authState.user = null
}