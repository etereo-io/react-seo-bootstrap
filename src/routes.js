import Home from './components/home/Home'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Changepassword from './components/auth/change-password/ChangePassword'
import ExampleList from './components/list/example-list/ExampleList'
import ItemDetail from './components/list/item-detail/ItemDetail'
import NotFound from './components/not-found/NotFound'
import Faqs from './components/faqs/Faqs'

// config
import config from './app.config'

// Services
import { loadList, loadItem } from './services/list/listService'

// Basic meta tags
const basicMeta = {
  title: `${config.name}`,
  description: 'This is an example'
}

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/list',
    component: ExampleList,
    loadData: loadList,
    exact: true,
    metadata: {
      title: `${config.name} - List`,
      description: 'Here you can find a list of items'
    }
  },
  {
    path: '/list/detail/:slug',
    component: ItemDetail,
    loadData: match => loadItem(match.params.slug),
    metadata: {
      title: `${config.name} - %item`,
      description: 'Here you can find a detail'
    }
  },
  {
    path: '/login',
    component: Login,
    metadata: {
      title: `${config.name} - Login`,
      description: 'Access to the private area'
    }
  },
  {
    path: '/register',
    component: Register,
    metadata: {
      title: `${config.name} - New Account`,
      description: 'Access to the private area'
    }
  },
  {
    path: '/reset-password',
    component: Changepassword,
    metadata: {
      title: `${config.name} - Change Password`,
      description: 'Access to the private area'
    }
  },
  {
    path: '/faqs',
    component: Faqs,
    metadata: {
      title: `${config.name} - Faqs`,
      description: 'Frequently asked questions'
    }
  },
  {
    component: NotFound
  }
].map(r => {
  // Merge metadatas
  return Object.assign(
    {},
    {
      metadata: basicMeta
    },
    r
  )
})

export default Routes
