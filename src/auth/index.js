import Vue from 'vue'

export default {
    signup (context, email, username, password) {
        Vue.http.post('auth/signup', {email: email, username: username, password: password}).then(response => {
            context.success = true
        }, response => {
            context.response = response.data
            context.error = true
        })
    }
}
