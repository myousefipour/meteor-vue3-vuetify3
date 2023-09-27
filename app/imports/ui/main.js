import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'

import App from './App.vue'
import  router  from './plugins/router'
import vuetify from './plugins/vuetify'


Meteor.startup(() => {
  const app = createApp(App)
  app.use(router)
  app.use(VueMeteor)
  app.use(vuetify)
  app.mount('#app')
})
