import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Accueil', href: '#', current: true },
  { name: 'Recettes', href: '#', current: false },
  { name: 'Catégories', href: '#', current: false },
  { name: 'Conseils De Cuisine', href: '#', current: false },
]

