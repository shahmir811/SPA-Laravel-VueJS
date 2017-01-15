import Vue from 'vue'

const store = {}

export default store

store.state = {
  topic: null
}


store.getSections = () => {
    return new Promise((resolve, reject) => {
      Vue.http({ url: 'sections', 'method': 'GET' }).then(response => {
        resolve(response.data.data)
      })
    })
}