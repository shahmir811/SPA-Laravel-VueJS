import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Topic from './components/Topic'
import Topics from './components/Topics'
import NewTopic from './components/NewTopic'

export const routes = [

  {path: '/', component: Home, name: 'home'},
  {path: '/signin', component: SignIn, name: 'auth.signin'},
  {path: '/signup', component: SignUp, name: 'auth.signup'},
  {path: '/section/:sectionId', component: Topics, name: 'section'},
  {path: '/topic/:topicId', component: Topic, name: 'topic'},
  {path: '/topic/new', component: NewTopic, name: 'topic.new'},

];
