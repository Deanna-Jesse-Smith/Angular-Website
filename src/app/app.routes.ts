import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home.component').then(m => m.HomeComponent)
        }
    },
    {
        path: 'About',
        loadComponent: () => {
            return import('./about/about.component').then(m => m.AboutComponent)
        }
    },
    {
        path: 'Events',
        loadComponent: () => {
            return import('./events/events.component').then(m => m.EventsComponent)
        }
    },
    {
        path: 'Reviews',
        loadComponent: () => {
            return import('./reviews/reviews.component').then(m => m.ReviewsComponent)
        }
    },
    {
        path: 'Services',
        loadComponent: () => {
            return import('./services/services.component').then(m => m.ServicesComponent)
        }
    },
    {
        path: 'Benefits',
        loadComponent: () => {
            return import('./benefits/benefits.component').then(m => m.BenefitsComponent)
        }
    },
    {
        path: 'Contact',
        loadComponent: () => {
            return import('./contact/contact.component').then(m => m.ContactComponent)
        }
    }
];
