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

store.getTopicsBySection = (id) => {
    return new Promise((resolve, reject) => {
      Vue.http({
        url: 'topic',
        method: 'GET',
        params: { 'section_id': id}
      }).then(response => {
        resolve(response.data.data)
      })
    })
}

store.getTopicById = (id) => {
  return new Promise((resolve, reject) => {
    Vue.http({
      url: 'topic/' + id,
      method: 'GET'
    }).then(response => {
      resolve(response.data.data)
    })
  })
}
