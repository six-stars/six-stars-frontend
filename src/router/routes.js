import LoginPage from 'pages/LoginPage.vue'
// import SignUpPage from 'pages/SignUpPage.vue'
// import ResetPassword from 'pages/ResetPassword.vue'
// import ProfilePage from 'pages/ProfilePage.vue'
// import EditProfilePage from 'pages/EditProfilePage.vue'
import IntakePages from 'src/pages/IntakePages.vue'
import CreateIntakesPage from 'src/pages/CreateIntakesPage.vue'
import ProcessPages from 'src/pages/ProcessPages.vue'
import PaymentPages from 'src/pages/PaymentPages.vue'
import CustomerPages from 'src/pages/CustomerPages.vue'
import PricePages from 'src/pages/PricePages.vue'
import AdminPages from 'src/pages/AdminPages.vue'

const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ProfilePage.vue'),
        meta: { requireLogin: true }
      },
      // {
      //   path: '/profile',
      //   component: ProfilePage,
      //   meta: { requireLogin: true }
      // },
      // {
      //   path: '/edit-Profile',
      //   component: EditProfilePage,
      //   meta: { requireLogin: true }
      // },
      {
        path: '/customer',
        component: CustomerPages,
        meta: { requireLogin: true }
      },
      {
        // path: '/createIntake',
        path: '/createIntake/:first/:last/:phone',
        // path: '/createIntake/:first',
        component: CreateIntakesPage,
        name: 'CreateIntakesPage',
        meta: { requireLogin: true },
        params: true
      },
      {
        path: '/intake',
        component: IntakePages,
        meta: { requireLogin: true }
      },
      {
        path: '/process',
        component: ProcessPages,
        meta: { requireLogin: true }
      },
      {
        path: '/payment',
        component: PaymentPages,
        meta: { requireLogin: true }
      },
      {
        path: '/price',
        component: PricePages,
        meta: { requireLogin: true }
      },
      {
        path: '/admin',
        component: AdminPages,
        meta: { requireLogin: true }
      },
    ]
  },
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  // {
  //   // path: '/reset',
  //   path: '/api/password/reset/confirm/:uid/:token/',
  //   name: 'ResetPassword',
  //   component: ResetPassword,
  // },
  // {
  //   path: '/signup',
  //   name: 'SignUp',
  //   component: SignUpPage,
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
