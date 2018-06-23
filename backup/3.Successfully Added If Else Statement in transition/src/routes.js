import Skills from './components/Skills.vue'
import About from './components/About.vue'

export default [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ];